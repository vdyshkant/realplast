
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
// FEATURES-EXPAND
// PARALLAX for tree

/* ================================================
   templates
   ================================================ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  // (function($) {
  //  if($('body').is('.page-home')){
  //    var a = "initial_template";
  //  }
  // })(jQuery); // eof autoFunction
  /* eof ^^^ */





  /* отрабатывать только для определенной страницы
    ================================================ */
  // (function() {
  //   var a = "initial_template";
  // })(); // eof autoFunction
  /* eof ^^^ */




  /* Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
    https://learn.jquery.com/using-jquery-core/document-ready/
    https://www.sitepoint.com/types-document-ready/
    ================================================ */
  // $( document ).ready(function() {
  //   var a = "initial_template";
  // }); // eof .ready
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

	 if($('body').is('.page-index')){
		 $("#makeMeScrollable").smoothDivScroll({
				 mousewheelScrolling: "allDirections",
				 manualContinuousScrolling: true,
				 autoScrollingMode: "onStart"
		 });
	 }

});

// smooth div scroll end



// CAROUSEL


$(document).ready(function () {

	if($('body').is('.page-index')){
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
	}

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

$( document ).ready(function() {

	if($('body').is('.page-index')){
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
	}

}); // eof .ready

// slider end


// countdown

$( document ).ready(function() {

	if($('body').is('.page-index')){


		$("#DateCountdown").TimeCircles();
		 $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
		 $("#PageOpenTimer").TimeCircles();

		 var updateTime = function(){
				 var date = $("#date").val();
				 var time = $("#time").val();
				 var datetime = date + ' ' + time + ':00';
				 $("#DateCountdown").data('date', datetime).TimeCircles().start();
		 };
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


	}

}); // eof .ready



// countdown end


// features-expand

$( document ).ready(function() {

	if($('body').is('.page-index')){

		if ($(".page-index .features .js-more").length) {
				// $(".js-more[data-moreNum='2']").click(function() {
				// 	$(this).parent('.js-feature-item').toggleClass('active');
				// });

				expandFeaturesItem(1);
				expandFeaturesItem(2);
				expandFeaturesItem(3);
				expandFeaturesItem(4);
				expandFeaturesItem(5);
				expandFeaturesItem(6);
		}

	}

	function expandFeaturesItem(identifier){
		$('.js-more[data-more-num=' + identifier + ']').click(function(e) {
			e.preventDefault();
			// $(this).css( "color", "red" );
			if ($(this).parents('.features__item-container').is('.active')) {
				$('.js-feature-item[data-more-container="' + identifier + '"]').removeClass('active');
				$('.js-extra[data-more-option="' + identifier + '"]').slideUp(300);

				$('.features-smoothy[data-more-smoothy="' + identifier + '"] img:nth-child(1)').fadeOut(300);
				$('.features-smoothy[data-more-smoothy="' + identifier + '"] img:nth-child(2)').fadeIn(300);
			} else {
				$('.js-feature-item').removeClass('active');
				$('.js-extra').slideUp(300);
								$('.features-smoothy img:nth-child(1)').fadeOut(300);
								$('.features-smoothy img:nth-child(2)').fadeIn(300);


				$('.js-feature-item[data-more-container="' + identifier + '"]').toggleClass('active');
				$('.js-extra[data-more-option="' + identifier + '"]').slideToggle(300);


				$('.features-smoothy[data-more-smoothy="' + identifier + '"] img:nth-child(1)').fadeToggle(300);
				$('.features-smoothy[data-more-smoothy="' + identifier + '"] img:nth-child(2)').fadeToggle(300);
			}

		});
	}

}); // eof .ready

// features-expand end

//
//
//
// data-id:"+$(identifier).data('id')+"
//
//
// function expandFeaturesItem(identifier){
// 	$(".js-more[data-moreNum='+" identifier "+']").click(function() {
// 		$(this).parent('.js-feature-item[data-moreContainer="' + identifier + '"]').toggleClass('active');
// 	});
// }
//
// // Псевдокод:
//
// парсим кнопку, которую жмет пользователь, вместе с дата-идентификатором
//
// исходя и з того, с каким дата-идентификатором нажата кнопка,
// по значению переменной этого id обращаемся к необходимому нам блоку и добавляем ему класс .active
// выключение по тому же принципу либо через toggle
// описать при каких услових закрывать менюшку



// parallax



$(document).ready(function() {

	(function() {
		 var isIE = navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0 || navigator.userAgent.indexOf("Edge") > 0,
				 wScroll = $(window).scrollTop();

		 // parallax effect function
		 function parallax(prlxBg, prlxContainer, factor) {
				 if (isIE) {
						 $(prlxBg).css({
								 'transform': 'translateY(0px)'
						 });
						 return;
				 }
				 if ((wScroll + $(window).height()) >= $(prlxBg).offset().top) {
						//  console.log("true!");
						 $(prlxBg).css({
								 'transform': 'translateY(' + (($(prlxContainer).offset().top - wScroll) / $(window).height() * 100) * factor + '%)'
						 });
				 }
		 }

		 $(window).scroll(function() {
				 wScroll = $(this).scrollTop();

				 if ($('.parallax-index').length > 0) {
						 parallax('.window__tree__essence', '.parallax-index', 0.2);
				 }
		 });
	})();


}); // eof .ready


// parallax END



// rainy

// var ctx = document.getElementById('title').getContext("2d");
//
// // Draw black rectangle
// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, 846, 480);
// ctx.font = 'italic 900 270px "Exo 2"';
//
// // Punch out the text!
// ctx.globalCompositeOperation = 'destination-out';
// ctx.fillText("Rainy", 40, 380);

// rainy END


// offcanvas-nav

$( document ).ready(function() {

	hideMainOverlay();

	function hideMainOverlay() {
		$('#okna').click(function() {
				$('.js-nav').toggleClass('opened');
				// $('.modal-overlay').fadeOut(300);


				// 01: смена стилей для конкретно кнопки #okna
				$('.offcanvas-nav-side__sub-menus').fadeOut(10);
				$('.offcanvas-nav-side__sub-menus[data-offcanvas-subm="1"]').fadeIn(10);
				$('.offcanvas-nav-side__menu__item[data-offcanvas-menu="1"]').toggleClass('opened');

				// 02: в левом блоке сайдбара отобразить окно, которое конкретно соответствует нажатому пункту меню, а все остальные суб-меню обязательно скрываем

				// 03: панель выезжает
				// +

				// 04: при нажатии вне панели панель закрывается.
				// при нажатии на крестик - панель закрывается

		});
	}

	closeByCross();

	function closeByCross() {
		$('.js-nav-close').click(function(e) {
			e.preventDefault();
			$('.js-nav').toggleClass('opened');

			// $('.offcanvas-nav-side__menu__item').toggleClass('opened');

			for (var i = 0; i < 99; i++) {
				$('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + i + '"]').removeClass('opened');
			}


		});
	}




	openThisSubmenu(1);
	openThisSubmenu(5);
// !!
	function openThisSubmenu(identifier){


		$('.offcanvas-nav-side__menu__item[data-offcanvas-menu=' + identifier + '] .link').click(function(e) {
			e.preventDefault();

			// making main offcanvas-nav block to sllide right for %180%px
			$('.js-nav').toggleClass('opened');
			$('.overlay__offcanvas').addClass('visible');

			// hiding all submenus at the left
			$('.offcanvas-nav-side__sub-menus').fadeOut(10);

			// making visible the necessary subMenu
			$('.offcanvas-nav-side__sub-menus[data-offcanvas-subm="' + identifier + '"]').fadeIn(10);

			// disabling styles for the all pressed buttons
			for (var i = 0; i < 99; i++) {
				$('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + i + '"]').removeClass('opened');
			}

			// changing styles for the pressed button
			$('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + identifier + '"]').toggleClass('opened');



		});
	}


	$('.overlay__offcanvas').click(function(e) {
		e.preventDefault();
		$('.js-nav').removeClass('opened');
		$('.js-right-side').removeClass('opened');
		$('.overlay__offcanvas').removeClass('visible');

		var origin = 'Поиск';
		$('.offcanvas-right-side__search.title').fadeOut(300).text(origin).fadeIn(300);


		$('#callback').css('display', 'block');
		$('#search').css('display', 'block');


		for (var i = 0; i < 99; i++) {
			$('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + i + '"]').removeClass('opened');
		}
	});


	invokeCallback();

	function invokeCallback() {
		$('#callback').click(function(){
			$('#search').fadeOut(100);
			$('#search').css('display', 'none');
			$('.js-right-side').addClass('opened');
			$('.overlay__offcanvas').addClass('visible');


		});
	}


	invokeSearch();

	function invokeSearch() {
		$('#search').click(function(){
			$('#callback').css('display', 'none');

			var string = 'Введите интересующий Вас запрос';
			if (!$('.js-right-side').is('.opened')) {
				$('.offcanvas-right-side__search.title').fadeOut(300).text(string).fadeIn(300);
			} else {
				return false;
			}

			$('.js-right-side').addClass('opened');
			$('.overlay__offcanvas').addClass('visible');

			$('[name="sfield"]').focus();





		});
	}





}); // eof .ready

// offcanvas-nav END


// smooth gallery

$(document).ready(function() {

	if($('body').is('.page-index')){
		$("#gallery-smooth").smoothDivScroll({
				// mousewheelScrolling: "allDirections",
				// manualContinuousScrolling: false,
				autoScrollingMode: "onStart",
				hotSpotScrolling: false,
				touchScrolling: true,
				manualContinuousScrolling: true,
				// hotSpotScrollingStep: 3,
				// hotSpotScrollingInterval: 2,
				// autoScrollingStep: 1, SPPED
				mousewheelScrolling: false
		});
	}

	if($('body').is('.page-cottages')){
		$("#gallery-smooth").smoothDivScroll({
				// mousewheelScrolling: "allDirections",
				// manualContinuousScrolling: false,
				autoScrollingMode: "onStart",
				hotSpotScrolling: false,
				touchScrolling: true,
				manualContinuousScrolling: true,
				// hotSpotScrollingStep: 3,
				// hotSpotScrollingInterval: 2,
				// autoScrollingStep: 1, SPPED
				mousewheelScrolling: false
		});
	}

});

// smooth gallery END


// fitments smooth gallery

$(document).ready(function() {

	if($('body').is('.page-fitments')){
		$("#gallery-smooth").smoothDivScroll({
				// mousewheelScrolling: "allDirections",
				// manualContinuousScrolling: false,
				autoScrollingMode: "onStart",
				hotSpotScrolling: false,
				touchScrolling: true,
				manualContinuousScrolling: true,
				// hotSpotScrollingStep: 3,
				// hotSpotScrollingInterval: 2,
				// autoScrollingStep: 1, SPPED
				mousewheelScrolling: false
		});
	}

});

// fitments smooth gallery END

// fitments smooth gallery

$(document).ready(function() {

	if($('body').is('.page-fitments')){
		$("#gallery-handle-smooth").smoothDivScroll({
				// mousewheelScrolling: "allDirections",
				// manualContinuousScrolling: false,
				autoScrollingMode: "onStart",
				hotSpotScrolling: false,
				touchScrolling: true,
				manualContinuousScrolling: true,
				// hotSpotScrollingStep: 3,
				// hotSpotScrollingInterval: 2,
				// autoScrollingStep: 1, SPPED
				mousewheelScrolling: false
		});
	}

});

// fitments smooth gallery END



// tabs for page-windsystem::choose module

$(document).ready(function() {

	if($('body').is('.page-window-systems')){


		$('.js-tabs li[data-id]').click(function() {
				console.log($(this));
				if ($(this).hasClass('active')) {
						return;
				}

				$('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
				$(this).siblings().removeClass('active');

				$('.choose-menu__item').siblings().removeClass('active');
				$('.choose-menu__subitem').siblings().removeClass('active');

				$(this).addClass('active');

				$(this).parents('.choose-menu__item').addClass('active');


		});

		// var subItemActive = $('.choose-menu__subitem').is('.active');
		//
		// if ($('.choose-menu__subitem').is('.active')) {
		// 	$('.choose-menu__subitem').parents('.choose-menu__item').addClass('active');
		// }

		// $('.choose-menu__subitem').each(function(){
    // var that = $(this);
    // var data_bg = that.attr('data-background');
    // that.closest('.myClass').addClass('column-bg').addClass(data_bg);
		// });

	}

});


// tabs for page-windsystem::choose module END



// tabs for page-glass-unit::type module





$(document).ready(function() {

	if($('body').is('.page-glass-unit')){


		$('.js-tabs li[data-id]').click(function() {
				console.log($(this));
				if ($(this).hasClass('active')) {
						return;
				}

				$('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
		});

	}

});


// tabs for page-glass-unit::type module END
