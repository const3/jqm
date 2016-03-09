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
        $('#myPopupDialog').hide();
          var interval = setInterval(function(){
                $('#dialog').popup('open', {history: false});
                var intervalClose = setInterval(function(){    
                    $('#dialog').popup('close');
                    clearInterval(intervalClose);
                },1000);
                clearInterval(interval);
                  },1);
      });
      ajaxRequest.fail(function (){
        $("#result").html('There is error while submit');
  	  });
    });
});