
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
// CAROUSEL
// COUNTER
// SLIDER
// COUNTDOWN


/* ================================================
   templates
   ================================================ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  // (function($) {
  //  if($('body').is('.page-home')){
  //    var a = "initial_template";
  //  }
  // })(jQuery);
  /* eof ^^^ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  // (function() {
  //   var a = "initial_template";
  // })();
  /* eof ^^^ */




  /* Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
    https://learn.jquery.com/using-jquery-core/document-ready/
    https://www.sitepoint.com/types-document-ready/
    ================================================ */
  // $( document ).ready(function() {
  //   var a = "initial_template";
  // });
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



// CAROUSEL


$(document).ready(function () {
  var carousel = $("#carousel").waterwheelCarousel({
    // flankingItems: 3,
    // smallFeatureWidth: 1,
    // smallFeatureOffset: 150,
    // startingFeature: 3
    // movingToCenter: function ($item) {
    //   $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
    // },
    // movedToCenter: function ($item) {
    //   $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
    // },
    // movingFromCenter: function ($item) {
    //   $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
    // },
    // movedFromCenter: function ($item) {
    //   $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
    // },
    // clickedCenter: function ($item) {
    //   $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
    // }
  });

  $('#prev').bind('click', function () {
    carousel.prev();
    return false;
  });

  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });

  // $('#reload').bind('click', function () {
  //   newOptions = eval("(" + $('#newoptions').val() + ")");
  //   carousel.reload(newOptions);
  //   return false;
  // });

});

// CAROUSEL end



// rising COUNTER (3 blocks)
(function($) {
    $(window).scroll(function() {
        $('#counter').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                animateCounter();
                animateCounterMiddle();
            }
        });
    });

    function animateCounter() {
        if ($('#counter').length > 0) {
            var numbers = [1427, 107427],
                duration = [1.5, 3.5],
                numberp = $('#counter .counter-item'),
                comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

            numberp.each(function(i) {
                $(this).animateNumber({
                    number: numbers[i],
                    numberStep: comma_separator_number_step
                }, duration[i] * 1000);
            });
        }
    }
    function animateCounterMiddle() {
        if ($('#counter').length > 0) {
            var numbers = [83],
                duration = [4.5],
                numberp = $('#counter .counter-middle-item'),
                comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
            var percent_number_step = $.animateNumber.numberStepFactories.append(' %');

            numberp.each(function(i) {
                $(this).animateNumber({
                    number: numbers[i],
                    numberStep: percent_number_step
                }, duration[i] * 1000);
            });
        }
    }
})(jQuery);
// rising COUNTER (3 blocks) end


// slider

$("ul#slider1").bxSlider({
    speed: 300,
    pager: true,
    nextText: '',
    prevText: '',
    infiniteLoop: false,
    hideControlOnEnd: true,
    controls: false
    //  onSlideBefore:function($slideElement, oldIndex, newIndex){
    //    changeRealThumb(realThumbSlider,newIndex);
    //
    //  }

});

// slider end


// countdown

$("#DateCountdown").TimeCircles();
 $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
 $("#PageOpenTimer").TimeCircles();

 var updateTime = function(){
		 var date = $("#date").val();
		 var time = $("#time").val();
		 var datetime = date + ' ' + time + ':00';
		 $("#DateCountdown").data('date', datetime).TimeCircles().start();
 }
 $("#date").change(updateTime).keyup(updateTime);
 $("#time").change(updateTime).keyup(updateTime);

 // Start and stop are methods applied on the public TimeCircles instance
 $(".startTimer").click(function() {
		 $("#CountDownTimer").TimeCircles().start();
 });
 $(".stopTimer").click(function() {
		 $("#CountDownTimer").TimeCircles().stop();
 });

 // Fade in and fade out are examples of how chaining can be done with TimeCircles
 $(".fadeIn").click(function() {
		 $("#PageOpenTimer").fadeIn();
 });
 $(".fadeOut").click(function() {
		 $("#PageOpenTimer").fadeOut();
 });

// countdown end
