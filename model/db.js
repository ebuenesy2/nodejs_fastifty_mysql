const dayjs = require('dayjs'); //! Zaman

//! Mysql
const knex = require('knex')({
    client: process.env.DB_CONNECTION,
    connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
    }
});
//! Mysql SON

//! Tüm Veriler
exports.getAllDB = async(table,query,countData,groupData,info,selectData,selectDataAdd,joinData,searchData,whereData) => { 

    //! Tanım
    var page = Number(query.page) || info?.page || 1; //! Sayfa Numarası
    var rowcount  = Number(query.rowcount) || info?.rowcount || null; //! Sayfada Gösterecek Veri Sayısı
    var orderByResult  = query.order || info?.orderBy || table+".id"; //! Sıralama [asc = Küçükten -> Büyüğe] [ desc = Büyükten -> Küçüğe ]
    var orderResult  = query.order || info?.order || "desc"; //! Sıralama [asc = Küçükten -> Büyüğe] [ desc = Büyükten -> Küçüğe ]

    //! Sayfada veri gösterme sayısı hesaplama
    var page = page - 1; //! Sayfa Numarası
    if(page <= 0) { page = 0; }

    //! Select
    var selectList = [];
    selectData.map((e)=>{ e.name ? selectList.push(e.table+"."+e.parametre+" as "+e.name) : selectList.push(e.table+"."+e.parametre); }); //! SelectList
    selectDataAdd.map((e)=>{ selectList.push(e) });

    //! Join
    var joinList = [];  
    joinData.map((e)=>{  e.table && joinList.push(e.type+' JOIN '+e.table+' on '+e.refTable+'.'+e.refValue+' = '+e.table+'.'+e.value)  }); 

    //! Where - Search
    var whereList = [];  
    whereData.map((e)=>{  e.table && whereList.push(e.table+"."+e.where+" "+e.data_item_object+" "+e.value) }); //! Where

    //! Search
    var queryKeys = Object.keys(query); //! Params Veriler
    for (let index = 0; index < queryKeys.length; index++) {
        const element = queryKeys[index]; //! Params
         
        //! Aranacak Veriler
        if(element != 'page' && element != 'rowcount' && element != 'order') {
            var searchFindIndex = searchData.findIndex(u => u.params == element); //! Arama index
            var searchFind = searchData[searchFindIndex];
            if(searchFind) { whereList.push(searchFind?.table+"."+searchFind?.where+" "+searchFind?.data_item_object+" "+query[element]); }
        } //! Aranacak Veriler Son

    }

    //! Result
    try {

        const model = () => knex.select(knex.raw(selectList.join(','))).from(table).joinRaw(joinList.join(' ')).whereRaw(whereList.join(' and '));
        var totalCount = await model().clone().count('* as count').then( function(count) { return count[0]['count']; } ); //! Tüm Veri Sayısı
        var data = () => model().clone().limit(rowcount).offset(page*rowcount).orderBy(orderByResult,orderResult); //! Limit ve Sıralama
        var dataQueryCount = () => data().count(countData); //! sayısı
        var dataQuery = () => groupData =="" ? dataQueryCount() : dataQueryCount().groupBy(groupData);
        var data = await dataQuery().clone()
                                .then( function(rows) { return { status :rows.length >= 1 ? "success" : "error" , rows: rows, msg: rows.length >= 1 ? null : "Veri Bulunamadı" , }; } )
                                .catch(function (err) { return { status :"error", rows: [], msg: err,} }); //! Veriler

        // Sayfalandırma
        var dataLength = data?.rows.length; //! Veri Sayısı
        var pageTop = Math.ceil(totalCount/rowcount); //! Toplam Sayfa

        return { table:table, status :data?.status, size:dataLength, sizeTop: totalCount, pageNow:page+1, pageTop:pageTop, data: data, msg: null, }

    } catch (error) {
        return  { table:table, status :"error", size: 0, sizeTop: 0, pageNow:0, pageTop:0, data: [], msg: error, }
    }
    
} //! Tüm Veriler Son

//! Arama - Id
exports.findById = async(table,search) => {

  try {
            
        //! Veri Arama
        const result = await knex(table).where({ id: search})
        .then( function(rows) { return { status : rows.length >= 1 ? "success" : "error" , size: rows.length, rows: rows, msg: rows.length >= 1 ? null : "Veri Bulunamadı" , }; } )
        .catch(function (err) { return { status :"error", size:0, rows: null, msg: err,} });

        return { table:table, result : result, msg: result?.msg,  }
        
   } catch (error) { return  { table:table, status :"error", msg: error, } }

  
} //! Arama - Id Son

//! Arama - Kullanıcı
exports.filterByUser = async(table,info,query,search) => {

    //return { table:table, info:info, query:query, search:search  }

    try {

        //! Tanım
        var page = Number(query.page) || info?.page || 1; //! Sayfa Numarası
        var rowcount  = Number(query.rowcount) || info?.rowcount || null; //! Sayfada Gösterecek Veri Sayısı
        var order  = query.order || info?.order || "desc"; //! Sıralama [asc = Küçükten -> Büyüğe] [ desc = Büyükten -> Küçüğe ]

        //! Sayfada veri gösterme sayısı hesaplama
        var page = page - 1; //! Sayfa Numarası
        if(page <= 0) { page = 0; }

                        
        //! Veri Arama
        const result = await knex(table).where({ created_byId: search}).limit(rowcount).offset(page*rowcount).orderBy(table+'.'+'id', order)
        .then( function(rows) { return { status : rows.length >= 1 ? "success" : "error" , size: rows.length, rows: rows, msg: rows.length >= 1 ? null : "Veri Bulunamadı" , }; } )
        .catch(function (err) { return { status :"error", size:0, rows: [], msg: err,} });

        return { table:table, result : result, msg: result?.msg,  }
        
   } catch (error) { return  { table:table, status :"error", msg: error, } }

} //! Arama - Kullanıcı Son

//! Arama - Farklı
exports.findByOther = async(table,info,query,search) => {

    //return { table:table, info:info, query:query, search:search  }

    try {

        //! Tanım
        var page = Number(query.page) || info?.page || 1; //! Sayfa Numarası
        var rowcount  = Number(query.rowcount) || info?.rowcount || null; //! Sayfada Gösterecek Veri Sayısı
        var order  = query.order || info?.order || "desc"; //! Sıralama [asc = Küçükten -> Büyüğe] [ desc = Büyükten -> Küçüğe ]

        //! Sayfada veri gösterme sayısı hesaplama
        var page = page - 1; //! Sayfa Numarası
        if(page <= 0) { page = 0; }

        //! Veri Arama
        const result = await knex(table).where(search).limit(rowcount).offset(page*rowcount).orderBy(table+'.'+'id', order)
        .then( function(rows) { return { status : rows.length >= 1 ? "success" : "error" , size: rows.length, rows: rows, msg: rows.length >= 1 ? null : "Veri Bulunamadı" , }; } )
        .catch(function (err) { return { status :"error", size:0, rows: [], msg: err,} });

        return { table:table, result : result, msg: result?.msg,  }
        
   } catch (error) { return  { table:table, status :"error", msg: error, } }

} //! Arama - Farklı Son

//! Veri Ekleme
exports.createDB = async(table,data) => {

    try {
        
        ///! Diğer Eklenecekler
        //data["test"] = "tea";

        //! Veri Ekleme
        const result = await knex(table).insert(data)
        .then( function(rows) { return { status :"success", rows: rows[0], msg: null, }; } )
        .catch(function (err) { return { status :"error", rows: null, msg: err,} });

        return { table:table, status : result?.status, id:result?.rows,  msg: result?.msg,  }
        
    } catch (error) {
        return  { table:table, status :"error", id:null, msg: error, }
    }

} //! Veri Ekleme Son

//! Veri Güncelleme
exports.editDB = async(table,data) => {
    try {
        
        //! Güncellenecek Veriler
        var updatedArray = {};

        // Referans Veriler Güncelleme Yapıyor
        Object.keys(data).forEach(key => {					
            if(key!="id"  ) { updatedArray[key] = data[key]; }  //! Ekleme Yapılacaklar
        });

        //! Diğer Güncellenecekler
        updatedArray["isUpdated"] = 1;
        updatedArray["updated_at"] = new Date();

        //! Veri Güncelleme
        const model = () => knex(table).where({ id: data?.id });
        const result_find = await model().clone()
                                .then( function(rows) { return { status :rows ==  0 ? "error" : "success" , rows: rows, msg: rows ==  0 ? "Veri Bulunamadı" : null , }; } )
                                .catch(function (err) { return { status :"error", rows: null, msg: err,} });

        const result_edit = await model().clone().update(updatedArray)
                                .then( function(rows) { return { status :rows ==  0 ? "error" : "success" , rows: rows, msg: null, }; } )
                                .catch(function (err) { return { status :"error", rows: null, msg: err,} });

        const result = result_find?.status== "success" ? result_edit :  result_find ;

        return { table:table, status : result?.status, msg: result?.msg,  }
        
    } catch (error) {
        return  { table:table, status :"error", msg: error, }
    }
   
} //! Veri Güncelleme Son


//! Veri Çoklu Güncelleme
exports.multiEditDB = async(table,data) => {

    try {

        //! Güncellenecek Veriler
        var updatedArray = {};

        // Referans Veriler Güncelleme Yapıyor
        Object.keys(data).forEach(key => {					
            if(key!="ids" ) { updatedArray[key] = data[key]; }  //! Ekleme Yapılacaklar
        });

        //! Diğer Güncellenecekler
        updatedArray["isUpdated"] = 1;
        updatedArray["updated_at"] = dayjs().add(3,'hour').format();

        //! Veri Güncelle
        const result = await knex(table).whereIn('id',data.ids.split(',')).update(updatedArray)
        .then( function(rows) { return { status : rows ==  0 ? "error" : "success" , rows: rows, msg: rows ==  0 ? "Veri Bulunamadı" : null, }; } )
        .catch(function (err) { return { status :"error", rows: null, msg: err,} });

        return { table:table, result : result, msg: result?.msg,  }
        
    } catch (error) {
        return  { table:table, status :"error", msg: error, }
    }

   
} //! Veri Güncelleme Son


//! Veri Silme
exports.deleteDB = async(table,search,data) => {

    //return { table:table, search:search, data:data }

    try {
        
        //! Veri Silme
        const result = await knex(table).where({ id: search}).delete()
        .then( function(rows) { return { status : rows == 0 ? "error" : "success" , rows: rows, msg: rows == 0 ? "Veri Bulunamadı" : null, }; } )
        .catch(function (err) { return { status :"error", rows: null, msg: err,} });

        return { table:table, result : result, msg: result?.msg,  }
        
    } catch (error) {
        return  { table:table, status :"error", msg: error, }
    }

   
} //! Veri Silme Son

//! Veri Çoklu Silme
exports.multiDeleteDB = async(table,data) => {

    //return { table:table, data:data.ids.split(',') }

    try {
        
        //! Veri Silme
        const result = await knex(table).whereIn('id',data.ids.split(',')).del()
        .then( function(rows) { return { status : rows ==  0 ? "error" : "success" , rows: rows, msg: rows == 0 ? "Veri Bulunamadı" : null, }; } )
        .catch(function (err) { return { status :"error", rows: null, msg: err,} });

        return { table:table, result : result, msg: result?.msg,  }
        
    } catch (error) {
        return  { table:table, status :"error", msg: error, }
    }

   
} //! Veri Silme Son


//! Veri Çoklu Geçisi Silme
exports.multiDeleteEditDB = async(table,data) => {

    try {

       
        //! Güncellenecek Veriler
        var updatedArray = {};

        // Referans Veriler Güncelleme Yapıyor
        Object.keys(data).forEach(key => {					
            if(key!="ids" ) { updatedArray[key] = data[key]; }  //! Ekleme Yapılacaklar
        });

        //! Diğer Güncellenecekler
        updatedArray["isUpdated"] = 1;
        updatedArray["updated_at"] = dayjs().add(3,'hour').format();
        updatedArray["updated_byId"] = data?.deleted_byId;
        updatedArray["isActive"] = 0;
        updatedArray["isDeleted"] = 1;
        updatedArray["deleted_at"] = dayjs().add(3,'hour').format();

        //return { table:table, time : dayjs().format(),  updatedArray : updatedArray,  }

        //! Veri Güncelle
        const result = await knex(table).whereIn('id',data.ids.split(',')).update(updatedArray)
        .then( function(rows) { return { status : rows ==  0 ? "error" : "success" , rows: rows, msg: rows == 0 ? "Veri Bulunamadı" : null, }; } )
        .catch(function (err) { return { status :"error", rows: null, msg: err,} });

        return { table:table, result : result, msg: result?.msg,  }
        
    } catch (error) {
        return  { table:table, status :"error", msg: error, }
    }

   
} //! Veri Çoklu Geçisi Silme Son
  