$(document).ready(function(e){

  getLibros();

  function getLibros(){
  var items="";
  $.getJSON("../prueba.php",function(data){
    $.each(data,function(index,item) 
    {
      items+="<li><a href=\"#\">"+item.nombre+"</a></li>";
    });
    $("#good").append(items).listview('refresh');; 
  });
}

  $( "#formLibro" ).submit(function( event ) {
  	 //var ajaxRequest;
    event.preventDefault();
    //$("#result").html('');
    var values = $(this).serialize();
    console.log(values);
 //       ajaxRequest= $.ajax({
 //            url: "test.php",
 //            type: "post",
 //            data: values
 //        });
 //     ajaxRequest.done(function (response, textStatus, jqXHR){
 //          $("#result").html('Submitted successfully');
 //     });
 //     ajaxRequest.fail(function (){
 //       $("#result").html('There is error while submit');
	 });
});