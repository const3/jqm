$(document).ready(function(e){

  getLibros();

  function getLibros(){
  var items="";
  $.getJSON("../prueba.php",function(data){
    $.each(data,function(index,item) 
    {
      items+="<li><a href=\"#\">"+item.nombre+"</a></li>";
    });
    $("#good").append(items).listview('refresh');
    });
  }

  $( "#formLibro" ).submit(function( event ) {
    	var ajaxRequest;
      event.preventDefault();
      //$("#result").html('');
      var values = $(this).serialize();
      ajaxRequest= $.ajax({
              url: "../insert.php",
              type: "post",
              data: values
          });
      ajaxRequest.done(function (response, textStatus, jqXHR){
        $("#good").html('');
        getLibros();
        $('#formLibro').trigger("reset");
        $('#myPopupDialog').popup('close');  
        setTimeout(function(){
              $("#dialog").popup();
              $("#dialog").popup("open");
            }, 100);
            setTimeout(function(){
              $("#dialog").popup("close");
            }, 5000);

      });
      ajaxRequest.fail(function (){
        $("#result").html('There is error while submit');
  	  });
    });

     $( '#pageone' ).bind( 'pageinit',function(event){
            setTimeout(function(){
              $("#dialog").popup();
              $("#dialog").popup("open");
            }, 100);
            setTimeout(function(){
              $("#dialog").popup("close");
            }, 5000);
          });

});
