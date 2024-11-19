<?php

//url
$url="http://localhost:8081/api/test/find_post";

//!------- Eklenecek Veriler ----------- 
$data_array=array
(
    'id' => 7
);

$data=http_build_query($data_array);

//! Bearer
$token ="yildirimdev01"; //! Token
$authorization = "Authorization: Bearer ".$token; // Header BearerToken
$headers = array("Content-Type" => "multipart/form-data" , $authorization );
//!------- Eklenecek Veriler Son ------- 

//! ----- Curl  ----------
$curl = curl_init();  //! Curl Başlatıyor
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 30); //! Timeout
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
curl_setopt($curl, CURLOPT_TIMEOUT, 900); //! Timeout
//! ----- Curl Son  -----


//veri okunuyor
$output = curl_exec($curl);
$status = 0;
 
//sorun varsa
if($e=curl_error($curl)) { echo $e; die(); }
else
{  
  // Json verisine dönüştür
  //array oluştur
   $decoded=json_decode($output,true);
   echo "<pre>"; print_r($decoded); die();

   //okuma * dönüştürme işlemleri
   $title=$decoded["title"];
   $status=$decoded["status"];
   $token=$decoded["token"];
  
   //Ekran Çıktısı
   echo "Veri Çekiyor";
   echo "<br>";
   echo "title: ".$title;
   echo "<br>";
   echo "status: ".$status; 
   echo "<br>";
   echo "token: ".$token; 
   echo "<br>";

}

//kapat
curl_close($curl);

//! Return
$response = array( 'status' => $status == 1 ? 'success' : 'error' );
   
print_r($response); 
//return response()->json($response);
