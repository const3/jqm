<?php
include('connect.php'); 
   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
      //echo "Error : Unable to open database\n";
   } else {
      //echo "Opened database successfully\n";
   }

   $bookname = pg_escape_string($_POST['bname']); 
   $authorname = pg_escape_string($_POST['aname']); 
   $anio = pg_escape_string($_POST['anio']); 

   $query = "INSERT INTO libros(nombre, autor, anio) VALUES('" . $bookname . "', '" . $authorname . "', '" . $anio . "')";
   $result = pg_query($query); 
   if (!$result) { 
      $errormessage = pg_last_error(); 
      echo "Error with query: " . $errormessage; 
      exit(); 
   } 
   printf ("These values were inserted into the database - %s %s %s", $bookname, $authorname, $anio); 
   pg_close($db);
?>