$(document).ready(function(e){
  var items="";
  $.getJSON("../prueba.php",function(data){
  	console.log(data);
    $.each(data,function(index,item) 
    {
      items+="<li>"+item.nombre+"</li>";
    });
    $("#listaLibros").html(items); 
  });
});