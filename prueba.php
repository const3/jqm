<?php
include('connect.php'); 
   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
      //echo "Error : Unable to open database\n";
   } else {
      //echo "Opened database successfully\n";
   }

   $sql =<<<EOF
      SELECT * from libros order by nombre asc;
EOF;

   $ret = pg_query($db, $sql);
   if(!$ret){
      echo pg_last_error($db);
      exit;
   } 
 
   $data = array();
   while($row = pg_fetch_assoc($ret)){
   $data[] = $row; 
   };
   header('Content-Type: application/json');
   $ar = json_encode($data);
   echo $ar;
   pg_close($db);
?>