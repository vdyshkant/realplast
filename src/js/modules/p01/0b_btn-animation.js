$(function() {
  $( "#button2" ).click(function() {
    $( "#button2" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button2" ).removeClass( "onclic" );
      $( "#button2" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
  function callback() {
    setTimeout(function() {
      $( "#button2" ).removeClass( "validate" );
    }, 1250 );
  }



  $( "#animatedSubmitButton" ).click(function() {
    $( "#animatedSubmitButton" ).addClass( "animatedSubmitButton--onclick", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#animatedSubmitButton" ).removeClass( "animatedSubmitButton--onclick" );
      $( "#animatedSubmitButton" ).addClass( "animatedSubmitButton--validate", 450, callback );
    }, 2250 );
  }
  function callback() {
    setTimeout(function() {
      $( "#animatedSubmitButton" ).removeClass( "animatedSubmitButton--validate" );
    }, 1250 );
  }




  });
