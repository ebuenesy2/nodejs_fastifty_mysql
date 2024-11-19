
const dbModel = require('../model/db'); //! Model
const table = "test"; //! Tablo Adı


//! Tüm Veriler
exports.DataAll = async(req,res) => {

    try {
        
       
        //! Bilgiler
        var info= { page:1, rowcount: 10, orderBy:table+"."+"id", order:"desc" }; //! Bilgiler
        //var info= { page:1, rowcount: 10, orderBy:"survey_options"+"."+"id", order:"desc" }; //! Bilgiler
        
        /**
         * [page] => Sayfa
         * [rowcount] => Sayfadaki Sayısı
         * [orderBy] => Sıralama Veri
         * [order] => [asc][desc]
        */


        //! Grup ve Sayı
        var countData  = {}; //! Sayı {title:value }
        //var countData  = {countItem:table+"."+"created_byId"}; //! Sayı {title:value }
       
        var groupData  = ""; //! Gruplandırma
        //var groupData  = table+"."+"created_byId"; //! Gruplandırma
    

        //! Select
        var selectData = [];
        selectData.push({ "table": table, "parametre":"*","name":null });
        //selectData.push({ "table": table,"parametre":"title","name":"tableName" });
        //selectData.push({ "table": table,"parametre":"title","name": null });
        //selectData.push({ "table":"users","parametre":"name","name":"userName" });       
        //selectData.push({ "table":"survey_options","parametre":"title","name":"survey_optionsTitle" });       

        /**
         *  [table] => Hangi Tablodan Alacak
         *  [parametre] => Hangi Parametreden Alıyor
         *  [name] => İsim Değiştirmek İçin Kullan
        */


        //! Select - Raw
        var selectDataRaw = [] //! Select Eklenecek
        //selectDataRaw.push("COUNT(survey.id) as countItem"); //! Select Değer Veri Ekleme

        
        
        //! Join
        var joinData = [];
        //joinData.push({ "type":"LEFT", "table" : "users", "value":"id", "refTable" : table , "refValue" : "created_byId" ,  }); //! Join Veri Ekleme
        //joinData.push({ "type":"LEFT", "table":"survey_options", "value":"survey_id", "refTable" : table , "refValue" : "id" ,  }); //! Join Veri Ekleme

        /**
         *  [type] => Join Türleri
         *  [table] => Join Yapılacak Tablodan Alacak
         *  [value] => Tablodan Tablo Sutunu
         *  [refTable] => Aranacak Tablo
         *  [refValue] => Aranacak Tablo Sutunu
        */

       

        //! Search - Params
        var searchData  = [];
        //searchData .push({ "params": "userId", "table": table, "where" : "created_byId", "data_item_object":"=","data_key_type" : "int"}); //! Eşit
        //searchData .push({ "params": "ValueBottom", "table": table, "where" : "value", "data_item_object":">=","data_key_type" : "int"}); //! Büyük ve Eşit
        //searchData .push({ "params": "ValueTop", "table": table, "where" : "value", "data_item_object":"<=","data_key_type" : "int"}); //! Küçük ve Eşit

        /**
         *  [params] => Paramsdan alınan veri 
         *  [table] => Hangi Tablodan Alacak
         *  [where] => Aranacak Yer
         *  [data_item_object] => Arama türü [=][<][>][>=][<=]
         *  [data_key_type] => Tür [int] [string]
        */


        //! Where - Arama
        var whereData  = [];
        //whereData.push({ "table": table, "where" : "isActive" , "data_item_object":"=", "value": 1})
        //whereData.push({ "table": table, "where" : "created_byId" , "data_item_object":"=", "value": 1})
        

        /**
         *  [table] => Hangi Tablodan Alacak
         *  [where] => Aranacak Yer
         *  [value] => Aranacak Değer
         *  [data_item_object] => Arama türü [=][<][>][>=][<=]
        */


        // res.send({
        //     info:info,
        //     countData:countData,
        //     groupData:groupData,
        //     selectData:selectData,
        //     selectDataRaw:selectDataRaw,
        //     joinData:joinData,
        //     searchData:searchData,
        //     whereData:whereData,
        // })


        //! Model
        const db = await dbModel.getAllDB(table,req.query,countData,groupData,info,selectData, selectDataRaw, joinData, searchData, whereData); 
        //! List Son

        //! Return
        res.status(200).send({
            title: "Tüm Veriler",
            table: table,
            status: db?.status == "success" ? 1 : 0,
            msg: db?.status == "success" ? 'Tüm Veriler Listelendi' : "Hata oluştu: "+db?.msg ,
            size:db?.size,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Tüm Veriler Listelendi' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Tüm Veriler",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            size:0,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Tüm Veriler Bulunamadı Hatası:'+ error + '\u001b[0m');
        
    }

} //! Tüm Veriler Son

//! Veri Arama
exports.DataFindById = async(req,res) => {

    try {
        
        //! Tanım
        const search = Number(req.params.id); //! Aranan Veri
        const db = await dbModel.findById(table,search); //! Model
      
        //! Return
        res.status(200).send({
            title: "Veri Arama",
            table: table,
            status: db.result?.status == "success" ? 1 : 0,
            msg: db.result?.status == "success" ? 'Veri Bulundu' : "Hata oluştu: "+db.result?.msg ,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Bulundu' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Tüm Veriler",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Bulunamadı Hatası:'+ error + '\u001b[0m');
        
    }

} //! Veri Arama Son

//! Veri Arama - Post
exports.DataPostFindById = async(req,res) => {

    try {
    
        //! Tanım
        const search = Number(req.body.id); //! Aranan Veri
        const db = await dbModel.findById(table,search); //! Model

        //! Return
        res.status(200).send({
            title: "Veri Arama",
            table: table,
            status: db.result?.status == "success" ? 1 : 0,
            msg: db.result?.status == "success" ? 'Veri Bulundu' : "Hata: "+db?.msg ,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Bulundu' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Tüm Veriler",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Bulunamadı Hatası:'+ error + '\u001b[0m');
        
    }

} //! Veri Arama - Post Son

//! Veri Arama - Kullanıcı
exports.DataPostFindByUser = async(req,res) => {

    try {

        //! Bilgiler
        var info= { page:1, rowcount: 10, order:"desc" }; 
        /**
         * [page] => Sayfa
         * [rowcount] => Sayfadaki Veriler
         * [order] => Sıralama [asc][desc]
        */
        
        //! Tanım
        const search = Number(req.body.created_byId); //! Aranan Veri
        const db = await dbModel.filterByUser(table,info,req.query,search); //! Model

        //! Return
        res.status(200).send({
            title: "Veri Arama - Kullanıcı",
            table: table,
            status: db.result?.status == "success" ? 1 : 0,
            msg: db.result?.status == "success" ? 'Veri Bulundu' : "Hata: "+db?.msg ,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Bulundu' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Veri Arama - Kullanıcı",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Bulunamadı Hatası:'+ error + '\u001b[0m');
        
    }

} //! Veri Arama - Kullanıcı Son


//! Veri Arama - Farklı 
exports.DataPostFindByOther = async(req,res) => {

    try {

        //! Bilgiler
        var info= { page:1, rowcount: 10, order:"desc" }; 
        /**
         * [page] => Sayfa
         * [rowcount] => Sayfadaki Veriler
         * [order] => Sıralama [asc][desc]
        */
        
        //! Tanım
        const db = await dbModel.findByOther(table,info,req.query,req.body); //! Model

        //! Return
        res.status(200).send({
            title: "Veri Arama - Farklı",
            table: table,
            status: db.result?.status == "success" ? 1 : 0,
            msg: db.result?.status == "success" ? 'Veri Bulundu' : "Hata: "+db?.msg ,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Bulundu' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Veri Arama - Kullanıcı",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Bulunamadı Hatası:'+ error + '\u001b[0m');
        
    }

} //! Veri Arama - Kullanıcı Son


//! Veri Ekleme
exports.DataAdd = async(req,res) => {

    try {
        
        //! Tanım
        const postAll = req.body; //! Gelen Veriler
        const result = await dbModel.createDB(table,postAll); //! Model

        //! Return
        res.status(200).send({
            title: "Veri Ekleme",
            table: table,
            status: result?.status == "success" ? 1 : 0,
            msg: result?.status == "success" ? 'Veri Ekleme Başarılı' : "Hata oluştu: "+result?.msg ,
            DB:result
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Ekleme Başarılı' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Veri Ekleme",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            size:0,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Ekleme Hatası:'+ error + '\u001b[0m');
        
    }

} //! Veri Ekleme Son

//! Veri Güncelleme
exports.DataEdit = async(req,res) => {

    try {
        
        //! Tanım
        const postAll = req.body; //! Gelen Veriler
        const result =  await dbModel.editDB(table,postAll); //! Model

        //! Return
        res.status(200).send({
            title: "Veri Güncelleme",
            table: table,
            status: result?.status == "success" ? 1 : 0,
            msg: result?.status == "success" ? 'Veri Güncelleme Başarılı' : "Hata Oluştu: "+result?.msg ,
            DB:result
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Güncelleme Başarılı' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Veri Güncelleme",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            size:0,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Güncelleme Hatası:'+ error + '\u001b[0m');
        
    }

} //! Veri Güncelleme Son

//! Çoklu Veri Güncelleme
exports.DataMultiEdit = async(req,res) => {

    try {
        
        //! Tanım
        const postAll = req.body; //! Gelen Veriler
        const db = await dbModel.multiEditDB(table,postAll); //! Model

        //! Return
        res.status(200).send({
            title: "Çoklu Veri Güncelleme",
            table: table,
            status: db?.result.status == "success" ? 1 : 0,
            msg: db?.result.status == "success" ? 'Veri Güncelleme Başarılı' : db?.msg,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Güncelleme Başarılı' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Çoklu Veri Güncelleme",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Güncelleme Hatası:'+ error + '\u001b[0m');
        
    }

} //! Çoklu Veri Güncelleme Son

//! Veri Silme
exports.DataDelete = async(req,res) => {

    try {
        
        //! Tanım
        const search = Number(req.params.id); //! Aranan Veri
        const postAll = req.body; //! Gelen Veriler
        const db = await dbModel.deleteDB(table,search,postAll); //! Model

        //! Return
        res.status(200).send({
            title: "Veri Silme",
            table: table,
            status: db?.result.status == "success" ? 1 : 0,
            msg: db?.result.status == "success" ? 'Veri Silme Başarılı' :  db?.result.msg,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Silme Başarılı' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Veri Silme",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Silme Hatası:'+ error + '\u001b[0m');
        
    }

} //! Veri Silme Son

//! Çoklu Veri Silme
exports.DataMultiDelete = async(req,res) => {

   try {
        
        //! Tanım
        const postAll = req.body; //! Gelen Veriler
        const db = await dbModel.multiDeleteDB(table,postAll); //! Model
      
        //! Return
        res.status(200).send({
            title: "Çoklu Veri Silme",
            table: table,
            status: db?.result.status == "success" ? 1 : 0,
            msg: db?.result.status == "success" ? 'Veri Silme Başarılı' :  db?.result.msg,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Silme Başarılı' + '\u001b[0m');

    } catch (error) {

        //! Return
        res.send({
            title: "Çoklu Veri Silme",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            size:0,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Silme Hatası:'+ error + '\u001b[0m');
        
    }

} //! Çoklu Veri Silme Son

//! Geçisi Veri Silme
exports.DataEditDelete = async(req,res) => {

    try {
        
        //! Tanım
        const postAll = req.body; //! Gelen Veriler
        const db = await dbModel.multiDeleteEditDB(table,postAll); //! Model

        //! Return
        res.status(200).send({
            title: "Çoklu Veri Geçisi Silme",
            table: table,
            status: db?.result.status == "success" ? 1 : 0,
            msg: db?.result.status == "success" ? 'Veri Güncelleme Başarılı' :  db?.result.msg,
            DB:db
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Veri Güncelleme Başarılı' + '\u001b[0m');
        
    } catch (error) {

        //! Return
        res.send({
            title: "Çoklu Veri Geçisi Silme",
            table: table,
            status: 0,
            msg: 'Hata:'+error,
            DB:[]
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Veri Güncelleme Hatası:'+ error + '\u001b[0m');
        
    }
} //! Geçisi Veri Silme Son