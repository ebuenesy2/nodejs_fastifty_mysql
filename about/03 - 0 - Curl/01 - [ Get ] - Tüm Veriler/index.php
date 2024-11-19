<?php

//url
//$url="http://localhost:8081/api/test/all";
//$url="http://localhost:8081/api/test/all/select";
$url="http://localhost:8081/api/test/all/params?page=1&rowcount=5&order=desc"; //! Params

//! Bearer
$token ="yildirimdev01"; //! Token
$authorization = "Authorization: Bearer ".$token; // Header BearerToken
$headers = array("Content-Type" => "multipart/form-data" , $authorization );


//! ----- Curl  ----------
$curl = curl_init(); //! Curl Başlatıyor
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 30); //! Timeout
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE); // SSL important
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_POST, 0);

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
   $table=$decoded["table"];
   $status=$decoded["status"];
   //$size=$decoded["size"];

   //iç içe json
   $DB_sayisi=count($decoded["DB"]);
   //$DB_id_cok=$decoded["DB"][0]["id"];
   //$DB_id=$decoded["DB"]["id"];

   //Ekran Çıktısı
   echo "Veri Çekiyor";
   echo "<br>";
   echo "title: ".$title;
   echo "<br>";
   echo "table: ".$table;
   echo "<br>";
   
   echo "DB - Sayısı : ".$DB_sayisi;
   echo "<br>";
   //echo "DB - ID [0] : ".$DB_id_cok;
   echo "<br>";

}

//kapat
curl_close($curl);


//! Return
$response = array( 'status' => $status == 1 ? 'success' : 'error' );
   
print_r($response); 
//return response()->json($response);
