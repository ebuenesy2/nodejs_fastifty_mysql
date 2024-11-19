const table = "Anasayfa"; //! Tablo Adı
const configDB = require('../config/app.js'); //! Config App
const dotenv = require("dotenv").config(); //! Env
var jwt = require('jsonwebtoken'); //! Token

//! Get
exports.home = async(req,res) => {

    // Return
    res.status(200).send({
        title: 'Home index',
        table: table,
        status: 1,
        msg: null
    });

    //! Console
    console.log('\u001b[' + 32 + 'm' +"[" + table +'] Get' + '\u001b[0m');
    
} //! Get Son

//! Get Url
exports.homeGetUrl = async(req,res) => {

    // Return
    res.status(200).send({
        title: 'Url Veri Alma',
        table: table,
        status: 1,
        msg: null,
        id: req.params.id,
        page: req.params.page
    });

    //! Console
    console.log('\u001b[' + 32 + 'm' +"[" + table +'] Get Url' + '\u001b[0m');

} //! Get Url Son

//! Get - Params [ ?page=1&rowcount=2&order=DESC ]
exports.homeParams = async(req,res) => {

    // Return
    res.status(200).send({
        title: 'Params',
        table: table,
        status: 1,
        msg: null,
        params: req.query,
        data: Number(req.query.id)
    });

    //! Console
    console.log('\u001b[' + 32 + 'm' +"[" + table +'] Get Params' + '\u001b[0m');

} //! Get - Params Son

//! Get Env
exports.homeEnv = async(req,res) => {

   try {

        // Return
        res.status(200).send({
            title: 'Env Bilgileri',
            table: table,
            status: 1,
            msg: null,
            port: process.env.PORT,
            api: {
                APi_URL: process.env.APi_URL,
                APi_URL_Dev: process.env.APi_URL_Dev,
                APi_URL_Local: process.env.APi_URL_Local,
                APi_Title: process.env.APi_Title,
                APi_Name: process.env.APi_Name
            }
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Get Env' + '\u001b[0m');
    
   } catch (error) {

        // Return
        res.send({
            title: 'Env Bilgileri',
            table: table,
            status: 0,
            msg: 'error:'+ error ,
            port: null,
            api: {
                APi_URL: null,
                APi_URL_Dev: null,
                APi_URL_Local: null,
                APi_Title: null,
                APi_Name: null
            }
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Get Env Error:'+ error + '\u001b[0m');
    
   }

} //! Get Env Son

//! Get Version
exports.homeVersion = async(req,res) => {

    try {

        // Return
        res.status(200).send({
            title: 'Version Bilgileri',
            table: table,
            status: 1,
            msg: null,
            version: process.env.Version,
            release_Date: process.env.Release_Date,
            version_Title: process.env.Version_Title,
            author: process.env.Author
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Get Version' + '\u001b[0m');
        
    } catch (error) {

        // Return
        res.send({
            title: 'Version Bilgileri',
            table: table,
            status: 0,
            msg: 'error:'+ error ,
            version: null,
            release_Date: null,
            version_Title: null,
            author: null
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Get Version Error:'+ error + '\u001b[0m');
    }

} //! Get Version Son

//! Get Info
exports.homeInfo = async(req,res) => {

    try {
        
        // Return
        res.status(200).send({
            title: 'Proje Bilgileri',
            table: table,
            status: 1,
            msg: null,
            port: process.env.PORT,
            api:
            {
                APi_URL: process.env.APi_URL,
                APi_URL_Dev: process.env.APi_URL_Dev,
                APi_URL_Local: process.env.APi_URL_Local,
                APi_Title: process.env.APi_Title,
                APi_Name: process.env.APi_Name
            },
            version:
            {
                Version: process.env.Version,
                Release_Date: process.env.Release_Date,
                Version_Title: process.env.Version_Title,
                Author: process.env.Author
            }
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Get Info' + '\u001b[0m');
    
    } catch (error) {

        // Return
        res.send({
            title: 'Proje Bilgileri',
            table: table,
            status: 0,
            msg: 'error:'+ error ,
            port: process.env.PORT,
            api:
            {
                APi_URL: process.env.APi_URL,
                APi_URL_Dev: process.env.APi_URL_Dev,
                APi_URL_Local: process.env.APi_URL_Local,
                APi_Title: process.env.APi_Title,
                APi_Name: process.env.APi_Name
            },
            version:
            {
                Version: process.env.Version,
                Release_Date: process.env.Release_Date,
                Version_Title: process.env.Version_Title,
                Author: process.env.Author
            }
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Get Info Error:'+ error + '\u001b[0m');
        
    }

} //! Get Info Son

//! Get Html
exports.homeHtml = async(req,res) => {

    //! Html
    var html = '<html>';
    var html = html +  '<body>';
    var html = html +  '<h1>Hello API ebu enes!</h1>';
    var html = html +  '<p>Açıklama</p>';
    var html = html +  '</body>';
    var html = html +  '</html>';

    // Return
    res.send(html);

    //! Console
    console.log('\u001b[' + 32 + 'm' + 'Html [ /html ] ' + '\u001b[0m');

} //! Get Html Son

//! Post
exports.homePost = async(req,res) => {
    try {

        const { name,surname} = req.body
        console.log("post name:",name);

        // Return
        res.status(200).send({
            title: 'Post',
            table: table,
            status: 1,
            msg: null,
            data:req.body,
            name:req.body.name
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Post' + '\u001b[0m');

    } 
    catch (error) { 

        // Return
        res.send({
            title: 'Post',
            table: table,
            status: 0,
            msg: 'error:'+ error,
            data:null,
            name:null
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Post Error:'+ error + '\u001b[0m');

    }

} //! Post Son

//************************************* Token  **************************************************** */

//! Token Oluşturma
exports.homeTokenCreate = async(req,res) => {
    try {

        //! Veriler
        const secret = process.env.TokenSecret; 
        const data = req.body; //! Veriler
        const token = jwt.sign(data, secret); //! Token Oluşturma

        // Return
        res.status(200).send({
            title: 'Token Oluşturma',
            table: table,
            status: 1,
            msg: null,
            token: token,
            data:data
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Post - Token Oluşturma' + '\u001b[0m');

    } 
    catch (error) { 

        // Return
        res.send({
            title: 'Token Oluşturma',
            table: table,
            status: 0,
            msg: 'error:'+ error ,
            token: null,
            data:null
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Post Token Oluşturma Error:'+ error + '\u001b[0m');

    }

} //! Token Oluşturma Son

//! Token Çözme
exports.homeTokenDecode = async(req,res) => {
    try {

        //! Veriler
        const token = req.body.token; //! Token
        const decoded = jwt.verify(token, process.env.TokenSecret); //! Token Çözme
       
        // Return
        res.status(200).send({
            title: 'Token Çözme',
            table: table,
            status: 1,
            msg: null,
            token: token,
            data_id:decoded?.id,
            decoded:decoded
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Post - Token Çözme' + '\u001b[0m');

    } 
    catch (error) { 

        res.send({
            title: 'Token Çözme',
            table: table,
            status: 0,
            msg: 'error:'+ error ,
            token: req.body.token,
            data_id: null,
            decoded: null
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Post Token Çözme Error:'+ error + '\u001b[0m');

    }

} //! Token Çözme Son

//! BearerToken Çözme
exports.homeBearerToken = async(req,res) => {
    try {

        //! Return
        const bearerHeader = req.headers['authorization']; //! BearerToken Verisi Alıyor [ Bearer abcToken ]
        const bearerSplit = bearerHeader.split(' '); //! Veriler Ayrılıyor
        const bearerToken = bearerSplit[1]; //! Token [ abcToken ]

        // Return
        res.status(200).send({
            title: 'BearerToken Çözme',
            table: table,
            status: 1,
            msg: null,
            name:req.body.name,
            data:req.body,
            bearerHeader: bearerHeader,
            bearerToken: bearerToken
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Post - BearerToken Çözme' + '\u001b[0m');

    } 
    catch (error) { 

        res.send({
            title: 'BearerToken Çözme',
            table: table,
            status: 0,
            msg: 'error:'+ error ,
            name:null,
            data:null,
            bearerHeader: null,
            bearerToken: null,
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Post BearerToken Çözme Error:'+ error + '\u001b[0m');
    
    }

} //! BearerToken Çözme Son



//************************************* Api  **************************************************** */

//! Api Get
exports.serviceGet = async(req,res) => {
    
    try {

        //Get
        //const serviceGet = await configDB.serviceGet("html",null);
        //const serviceGet = await configDB.serviceGet("env","JSON"); //! Json Çevirmek
        const serviceGet = await configDB.serviceGet("api/test/all","JSON"); //! Json Çevirmek
        //console.log("serviceGet:",serviceGet);
        
        // Return
        res.status(200).send({
            title: 'Servis Get',
            table: table,
            status: 1,
            msg:null,
            data: serviceGet,
            
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Get - Service Get' + '\u001b[0m');

    } 
    catch (error) { 

        // Return
        res.send({
            title: 'Servis Get',
            table: table,
            status: 0,
            msg: 'error:'+ error ,
            data:null
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Post Token Oluşturma Error:'+ error + '\u001b[0m');

    }

} //! Api Get Son


//! Api Post
exports.servicePost = async(req,res) => {
    
    try {

        // Post
        const postAll = {a: 1, b: 2}; 
        const servicePost = await configDB.servicePost("","JSON",postAll); //! Json Çevirmek
        //console.log("servicePost:",servicePost);

        
        // Return
        res.status(200).send({
            title: 'Servis Post',
            table: table,
            status: 1,
            msg:null,
            data:servicePost,
        });

        //! Console
        console.log('\u001b[' + 32 + 'm' +"[" + table +'] Post - Service Get' + '\u001b[0m');

    } 
    catch (error) { 

        // Return
        res.send({
            title: 'Servis Post',
            table: table,
            status: 0,
            msg: 'error:'+ error ,
            data:null
        });

        //! Console
        console.log('\u001b[' + 31 + 'm' +"[" + table +'] Post Token Oluşturma Error:'+ error + '\u001b[0m');

    }

} //! Api Post Son