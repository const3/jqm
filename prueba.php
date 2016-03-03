<?php
include('connect.php'); 
   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
      //echo "Error : Unable to open database\n";
   } else {
      //echo "Opened database successfully\n";
   }

   $sql =<<<EOF
      SELECT * from libros;
EOF;

   $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
      exit;
   } 
 
   $data = array();
   while($row = pg_fetch_row($ret)){
   $data[] = $row; 
   };
   header('Content-Type: application/json');
   echo json_encode($data);
   pg_close($db);
?>