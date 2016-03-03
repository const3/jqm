$(document).ready(function(e){
  var items="";
  $.getJSON("../prueba.php",function(data){
    $.each(data,function(index,item) 
    {
      items+="<li>"+item[0]+"</li>";
    });
    $("#listaLibros").html(items); 
  });
});