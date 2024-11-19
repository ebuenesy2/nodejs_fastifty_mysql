exports.port = "port config";
exports.url = "url config";


//! Servis Get
exports.serviceGet = async(serviceUrl,method) => {  
  
    //! Veri
    var apiGet = await fetch(this.url+"/"+serviceUrl).then(res => res.text());  
    var returnApi = "return";

    if(method == "JSON") {  var returnApi = JSON.parse(apiGet); } //! Json Döndürüyor

    return returnApi;
  
} //! Servis Get Son


//! Servis Post
exports.servicePost = async(serviceUrl,method,postAll={}) => {  
  
    //! Veri
    var apiPost = await fetch(this.url+"/"+serviceUrl,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(postAll)

    }).then(res => res.text());  

    //! Return
    var returnApi = "return";
    if(method == "JSON") {  var returnApi = JSON.parse(apiPost); } //! Json Döndürüyor

    return returnApi;
  
} //! Servis Post Son