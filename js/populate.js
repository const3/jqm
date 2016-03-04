$(document).ready(function(e){
  var items="";
  $.getJSON("../prueba.php",function(data){
    $.each(data,function(index,item) 
    {
      items+="<li><a href="#">"+item[0]+"</a></li>";
    });
    $("#listaLibros").html(items); 
  });
});