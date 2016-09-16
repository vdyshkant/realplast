
/*------------------------------------*\\
  CONTENTS
\\*------------------------------------*/

/*
GENERAL   HTML, BODY, etc.
SHARED    Share anything we can across blocks.
HEADER
MAIN
  sub_block
  sub_block
FOOTER
NOTES
RESET
*/

// SMOOTH DIV SCROLL




/* ================================================
   templates
   ================================================ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  (function($) {
   if($('body').is('.page-home')){
     var a = "initial_template";
   }
  })(jQuery);
  /* eof ^^^ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  (function() {
    var a = "initial_template";
  })();
  /* eof ^^^ */




  /* Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
    https://learn.jquery.com/using-jquery-core/document-ready/
    https://www.sitepoint.com/types-document-ready/
    ================================================ */
  $( document ).ready(function() {
    var a = "initial_template";
  });
  /* eof ^^^ */





  /* ================================================
     Блок_комментариев_для_раздела $ MAIN
     ================================================ */

  /* == eof $ MAIN == */

  /* Блок_комментариев_для_подраздела
     ================================================ */

  /*
   * Блок_комментариев_для_группы_правил.
   * Хорошо_подходит_для_подробных_пояснений_и_документации.
   */

  /* Обычный_комментарий */






/* == eof $ MAIN == */



// smooth div scroll

$(document).ready(function() {
	$("#makeMeScrollable").smoothDivScroll({
			mousewheelScrolling: "allDirections",
			manualContinuousScrolling: true,
			autoScrollingMode: "onStart"
	});
});

// smooth div scroll end
