$(document).ready(function(e){
  var items="";
  $.getJSON("../prueba.php",function(data){
    $.each(data,function(index,item) 
    {
      items+="<li><a href=\"#\">"+item.nombre+"</a></li>";
    });
    $("#good").append(items).listview('refresh');; 
  });
});