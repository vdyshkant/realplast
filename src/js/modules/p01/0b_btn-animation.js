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



  $( "#button3" ).click(function() {
    $( "#button3" ).addClass( "eba", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button3" ).removeClass( "eba" );
      $( "#button3" ).addClass( "validate-it", 450, callback );
    }, 2250 );
  }
  function callback() {
    setTimeout(function() {
      $( "#button3" ).removeClass( "validate-it" );
    }, 1250 );
  }




  });
