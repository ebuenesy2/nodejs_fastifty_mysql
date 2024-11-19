$(function () {

    //! **** Ajax Get ***********
   $.ajax({
       //url: "http://localhost:8081/api/test/all",
       //url: "http://localhost:8081/api/test/all/select",
       //url: "http://localhost:8081/api/test/all/params?page=1&rowcount=5&order=desc",
       //url: "http://localhost:8081/api/test/30",
       url: "http://localhost:3002/",
       type: "GET",
       headers: {
          Authorization: "Bearer yildirimdev01",
       },
       xhr: function () {
         var xhr = new window.XMLHttpRequest();
         
         alert("xhr");
         console.log("xhr:",xhr);
        
         // xhr.upload.addEventListener("progress", function (evt) {
         //   if (evt.lengthComputable) {
         //     var percentComplete = ((evt.loaded / evt.total) * 100);
             
         //       console.log("progress:",percentComplete + '%');

         //   }
         // }, false);

         return xhr;
       },
       beforeSend: function() {
         
         alert("Başlangıc");
         console.log("Başlangıc");

       },
       success: function (response) {

            alert('Başarılı');
            console.log("response: ",response);
            //console.log("response: ",response.status);
            // console.log(response.app);
            // console.log(response.app.app_name);

            //! Veriler
            const DB = response.DB; //! Veriler
            console.table(DB); //! Tablo Oluşturuyor
            console.log("DB:",DB); //! Verileri Gösteriyor
            
            //! Resim
            console.log("Resim:",response.DB[0].img_url);

       },
       error: function (jqXHR, textStatus, errorThrown) {

            alert("Hata");
            console.log("jqXHR:",jqXHR);
            console.log("status:",textStatus);
            console.log("error:",errorThrown);

       },
       complete: function() {

            alert("Bitti");
            console.log("Bitti");

       }
   })
   //! **** Ajax Get Son *********


});