/**
* Kodlayan: Ebu Enes Yıldırım
* Gmail: ebuenesy2@gmail.com
* Tarih: xx
* Tel: xxx
*/

const fastify = require('fastify'); //! Fastify
const app = fastify({ logger: true, pluginTimeout: 10000 }); //! Fastify
const dotenv = require("dotenv").config(); //! Env
app.register(require('@fastify/cors'), { }) //! Localda çalıştırmak için
const configDB = require('./config/app.js'); //! Config App

//! Sayfa Yönlendirme İşlemi Yapıyor
const routes=require('./routes/index');  //! Tanım
routes.forEach((route, index)=>{ app.route(route) }) ; //! Kullanımı


//! Hata
app.setNotFoundHandler(function(req, res, next) { res.send({ title:"404" }); }); //! 404 - Sayfa Bulunamadı

//************************************* Server  **************************************************** */
//! Port Dinleniyor
const PORT = process.env.PORT || 3002;
app.listen(PORT, function (err, address) {
  if (err) { console.log('\u001b[' + 32 + 'm' + 'Bağlantı hatası: ' + err + '\u001b[0m') }
  else { 
    
    //! Bilgiler
    configDB.port = PORT; //! PORT
    configDB.url = address; //! Address

    console.log('\u001b[' + 32 + 'm' + 'Bağlantı sağlandı : ' + PORT + '\u001b[0m')
  }
})