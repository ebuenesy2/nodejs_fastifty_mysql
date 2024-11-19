$(function () {

   //! **** Ajax Post ***********

   $.ajax({
       url: "http://localhost:8081/api/test/find_post",
       //url: "http://localhost:8081/api/test/find_user",
       //url: "http://localhost:8081/api/test/add",
       //url: "http://localhost:8081/api/test/delete_edit/127",
       method: "post",
       headers: {
          //'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
          Authorization: "Bearer yildirimdev01",
       },
       data: {
         id: 7
         //deleted_byId: 1
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
   //! **** Ajax Post Son *********


});