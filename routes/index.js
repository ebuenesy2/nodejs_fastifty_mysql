const indexController = require("../controllers/indexController.js");  //! Controller - Anasayfa
const testController = require("../controllers/testController.js"); //! Controller - Test

const routes=[
    { method: 'GET',  url: '/', handler:indexController.home },  //! Get
    { method: 'GET',  url: '/getId/:id/getPage/:page', handler:indexController.homeGetUrl }, //! Get Url
    { method: 'GET',  url: '/params', handler:indexController.homeParams }, //! Get Params  [?]
    { method: 'GET',  url: '/env', handler:indexController.homeEnv },  //! Get Env
    { method: 'GET',  url: '/version', handler:indexController.homeVersion },  //! Get Version
    { method: 'GET',  url: '/info', handler:indexController.homeInfo },  //! Get Info
    { method: 'GET',  url: '/html', handler:indexController.homeHtml },  //! Get Html

    { method: 'POST', url: '/', handler:indexController.homePost}, //! Post
    { method: 'POST', url: '/token_create', handler:indexController.homeTokenCreate}, //! Token Oluşturma
    { method: 'POST', url: '/token_decode', handler:indexController.homeTokenDecode}, //! Token Çözme
    { method: 'POST', url: '/bearer_token', handler:indexController.homeBearerToken}, //! BearerToken Çözme

    //! Servisler Arası
    { method: 'GET', url: '/service/get', handler:indexController.serviceGet}, //! Servisler Arası Get
    { method: 'POST', url: '/service/post', handler:indexController.servicePost}, //! Servisler Arası POST

    //! Test
    { method: 'GET', url: '/api/test/all', handler:testController.DataAll}, //! Tüm Veriler
    { method: 'GET', url: '/api/test/find/:id', handler:testController.DataFindById}, //! Veri Arama 
    { method: 'POST', url: '/api/test/find_post', handler:testController.DataPostFindById}, //! Veri Arama - Post
    { method: 'POST', url: '/api/test/find_user', handler:testController.DataPostFindByUser}, //! Veri Arama - Kullanıcı
    { method: 'POST', url: '/api/test/find_other', handler:testController.DataPostFindByOther}, //! Veri Arama - Farklı
    { method: 'POST', url: '/api/test/add', handler:testController.DataAdd}, //! Veri Ekleme 
    { method: 'POST', url: '/api/test/edit', handler:testController.DataEdit}, //! Veri Güncelleme 
    { method: 'POST', url: '/api/test/edit/multi', handler:testController.DataMultiEdit}, //! Çoklu Veri Güncelleme
    { method: 'POST', url: '/api/test/delete/:id', handler:testController.DataDelete}, //! Veri Silme 
    { method: 'POST', url: '/api/test/delete/multi', handler:testController.DataMultiDelete}, //! Çoklu Veri Silme 
    { method: 'POST', url: '/api/test/delete/edit', handler:testController.DataEditDelete}, //! Geçisi Veri Silme


]

module.exports=routes;