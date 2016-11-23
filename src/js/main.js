
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

  /* === eof $ MAIN == */

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
				//  mousewheelScrolling: "allDirections",
				//  manualContinuousScrolling: true,
				//  autoScrollingMode: "onStart"
				mousewheelScrolling: true,
				manualContinuousScrolling: true,
				visibleHotSpotBackgrounds: "always",
				autoScrollingMode: "always"
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
				prevSelector: ('.slider-sales-controls__left'),
				nextSelector: ('.slider-sales-controls__right'),
		    //  onSlideBefore:function($slideElement, oldIndex, newIndex){
		    //    changeRealThumb(realThumbSlider,newIndex);
		    //
		    //  }

		});
	}


	$('.slider-sales .range').mouseenter(function() {
		$('.slider-sales-controls').fadeIn(300);

			// console.info('.nextend-arrow).fade IN;');

	}).mouseleave(function() {
			$('.slider-sales-controls').fadeOut(300);

			// console.info('.nextend-arrow).fade OUT;');

	});

}); // eof .ready

// slider end


// countdown

$( document ).ready(function() {

	if($('body').is('.page-index')){


		$("#DateCountdown").TimeCircles();
		$("#DateCountdown1").TimeCircles();
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
			$('.burger').removeClass('open');
			$('.js-nav').removeClass('opened');
			$('.js-right-side').removeClass('opened');
			$('.overlay__offcanvas').removeClass('visible');

			// $('.offcanvas-nav-side__menu__item').toggleClass('opened');

			for (var i = 0; i < 99; i++) {
				$('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + i + '"]').removeClass('opened');
			}


		});
	}




	openThisSubmenu(1);
	openThisSubmenu(6);
// !!
	function openThisSubmenu(identifier){


		$('.offcanvas-nav-side__menu__item[data-offcanvas-menu=' + identifier + '] .link').click(function(e) {
			e.preventDefault();

			if ($('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + identifier + '"]').is('.opened')) {

				$('.burger').removeClass('open');
				$('.js-nav').removeClass('opened');
				$('.js-right-side').removeClass('opened');
				$('.overlay__offcanvas').removeClass('visible');

				// disabling styles for the all pressed buttons
				for (var j = 0; j < 99; j++) {
					$('.offcanvas-nav-side__menu__item[data-offcanvas-menu="' + j + '"]').removeClass('opened');
				}
			} else {

				$('.burger').addClass('open');
				// making main offcanvas-nav block to sllide right for %180%px
				$('.js-nav').addClass('opened');
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
			}

		});
	}


	$('.overlay__offcanvas').click(function(e) {
		e.preventDefault();

		$('.burger').removeClass('open');
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

      // autoScrollingMode: "onStart",
        // autoScrollingMode: "always",
        // hotSpotScrolling: false,
        // touchScrolling: true,
        // manualContinuousScrolling: true,
      // hotSpotScrollingStep: 3,
      // hotSpotScrollingInterval: 2,
      // autoScrollingStep: 1, SPPED
        // mousewheelScrolling: false
			mousewheelScrolling: true,
			manualContinuousScrolling: true,
			visibleHotSpotBackgrounds: "always",
			autoScrollingMode: "always"
		});


	// This is just to make the scroller pause...
		// Mouse over
		$("#gallery-smooth").bind("mouseover", function(){
				$("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
		});

		// Mouse out
    if($('.fancybox-opened').length === 0) {
      $("#gallery-smooth").bind("mouseout", function(){
          $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      });
    }

    $('.page-index').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
          $("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
    });


		// fancy box for this gallery
		$("#gallery-smooth a.gallery__full").fancybox({
      // Prevent fancybox from causing page to to jump to the top
      helpers: {
        overlay: {
          locked: false
        }
      }
		});
		$("#gallery-smooth a.gallery__full").fancybox({
      // continue smoothDivScroll scrolling after closing opened fancybox popup
      afterClose: function() {
        $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      }

		});



		// fancy box for this gallery END
	}

  if($('body').is('.page-cottages')){
		$("#gallery-smooth").smoothDivScroll({
			mousewheelScrolling: true,
			manualContinuousScrolling: true,
			visibleHotSpotBackgrounds: "always",
			autoScrollingMode: "always"
		});


	// This is just to make the scroller pause...
		// Mouse over
		$("#gallery-smooth").bind("mouseover", function(){
				$("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
		});

		// Mouse out
    if($('.fancybox-opened').length === 0) {
      $("#gallery-smooth").bind("mouseout", function(){
          $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      });
    }

    $('.page-cottages').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
          $("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
    });


		// fancy box for this gallery
		$("#gallery-smooth a.gallery__full").fancybox({
      // Prevent fancybox from causing page to to jump to the top
      helpers: {
        overlay: {
          locked: false
        }
      }
		});
		$("#gallery-smooth a.gallery__full").fancybox({
      // continue smoothDivScroll scrolling after closing opened fancybox popup
      afterClose: function() {
        $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      }

		});



		// fancy box for this gallery END
	}

});

// smooth gallery END


// fitments smooth gallery

$(document).ready(function() {

  if($('body').is('.page-fitments')){
		$("#gallery-smooth").smoothDivScroll({
			mousewheelScrolling: true,
			manualContinuousScrolling: true,
			visibleHotSpotBackgrounds: "always",
			autoScrollingMode: "always"
		});


	// This is just to make the scroller pause...
		// Mouse over
		$("#gallery-smooth").bind("mouseover", function(){
				$("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
		});

		// Mouse out
    if($('.fancybox-opened').length === 0) {
      $("#gallery-smooth").bind("mouseout", function(){
          $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      });
    }

    $('.page-fitments').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
          $("#gallery-smooth").smoothDivScroll("stopAutoScrolling");
    });


		// fancy box for this gallery
		$("#gallery-smooth a.gallery__full").fancybox({
      // Prevent fancybox from causing page to to jump to the top
      helpers: {
        overlay: {
          locked: false
        }
      }
		});
		$("#gallery-smooth a.gallery__full").fancybox({
      // continue smoothDivScroll scrolling after closing opened fancybox popup
      afterClose: function() {
        $("#gallery-smooth").smoothDivScroll("startAutoScrolling");
      }

		});



		// fancy box for this gallery END
	}

});

// fitments smooth gallery END

// fitments smooth gallery

$(document).ready(function() {

	if($('body').is('.page-fitments')){
		$("#gallery-handle-smooth").smoothDivScroll({
			mousewheelScrolling: true,
			manualContinuousScrolling: true,
			visibleHotSpotBackgrounds: "always",
			autoScrollingMode: "always"
		});


	// This is just to make the scroller pause...
		// Mouse over
		$("#gallery-handle-smooth").bind("mouseover", function(){
				$("#gallery-handle-smooth").smoothDivScroll("stopAutoScrolling");
		});

		// Mouse out
    if($('.fancybox-opened').length === 0) {
      $("#gallery-handle-smooth").bind("mouseout", function(){
          $("#gallery-handle-smooth").smoothDivScroll("startAutoScrolling");
      });
    }

    $('.page-fitments').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
          $("#gallery-handle-smooth").smoothDivScroll("stopAutoScrolling");
    });


		// fancy box for this gallery
		$("#gallery-handle-smooth a.gallery__full").fancybox({
      // Prevent fancybox from causing page to to jump to the top
      helpers: {
        overlay: {
          locked: false
        }
      }
		});
		$("#gallery-handle-smooth a.gallery__full").fancybox({
      // continue smoothDivScroll scrolling after closing opened fancybox popup
      afterClose: function() {
        $("#gallery-handle-smooth").smoothDivScroll("startAutoScrolling");
      }

		});



		// fancy box for this gallery END
	}

});

// fitments smooth gallery END



// tabs for page-windsystem::choose module

$(document).ready(function() {
	if($('body').is('.page-window-systems')){
	  if ((window.matchMedia("(min-width: 1360px)").matches)) {



      /* ================================================
      li[data-pos].click
      ================================================ */
      $('li[data-pos]').click(function(e) {
        e.stopPropagation();

        // if ($(this).parents('.choose-menu__item').is('.active'))
        if ($(this).is('.active')) {
          // removing classes before assigning active for recently clicked
          $('.choose-menu__item').siblings().removeClass('active');
          $('.choose-menu__subitem').siblings().removeClass('active');
          // сворачиваем все модули, кроме текущего
          $('.desktop-menu .choose-menu__sublist').not($(this)).slideUp(200);


        } else {
          // removing classes before assigning active for recently clicked
          $('.choose-menu__item').siblings().removeClass('active');
          $('.choose-menu__subitem').siblings().removeClass('active');

          $(this).addClass('active');
          $(this).find('.choose-menu__subitem:first').addClass("active").trigger( "click" );
          $(this).parents('.choose-menu__item').addClass('active');

          $('.desktop-menu .choose-menu__sublist').not($(this)).slideUp(200);



          $('.choose-menu__sublist', this).slideDown(300, function() {
            // $('.choose-menu__sublist').not($('.choose-menu__sublist', this)).slideUp(300);
            // $('.choose-menu__sublist').not($(this)).slideUp(200);
          });


          // changing tabs' content
            // $('.jsFaqItem #' + $(this).attr('data-pos')).fadeIn(0).siblings().fadeOut(0);
          $('.js-item-content').fadeOut(0);
          $('.jsFaqItem').next('#' + $(this).attr('data-pos')).fadeIn(0);


          $(this).siblings().removeClass('active');

        }
      }); /* === eof li[data-pos].click == */




      /* ================================================
      .js-tabs li[data-id].click
      ================================================ */
      $('.js-tabs li[data-id]').click(function(e) {
        e.stopPropagation();

        // console.log($(this));
        if ($(this).hasClass('active')) {
            return;
        }

        // changing tabs' content
        // $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
         // $('.jsFaqItem').fadeOut(0);
         // .siblings().fadeOut(0);
        // $(this).siblings().removeClass('active');
        $('.choose-content__wrapper').fadeOut(0);

                                         console.log('hidden node: ' + $(this).attr('data-id'));
         $('#' + $(this).attr('data-id')).fadeIn(0);

        // removing classes before assigning active for recently clicked
        $('.choose-menu__item').siblings().removeClass('active');
        $('.choose-menu__subitem').siblings().removeClass('active');
        $('.choose-menu__subitem:first').removeClass('active');

        // assigning class 'active' for clicked item
        $(this).addClass('active');

        $(this).parents('.choose-menu__item').addClass('active');

      }); /* === eof li[data-pos].click == */




		} // eof matchMedia
	}		// eof ('body').is
}); // eof document READY


// FOR TABLET CODE IS HERE ! ! !
// ##### задача привязать открывающийся пункт к определенному контен
// windsystems choose block for tablet and above
$(document).ready(function() {
	if($('body').is('.page-window-systems')){
    if ((window.matchMedia("(max-width: 1359px)").matches)) {



      /* ================================================
      li[data-pos].click
      ================================================ */
      if ($(".tablet-related-content .choose-menu__sublist.transform").length) {
        $('.choose-menu__item.transform[data-pos]').click(function(e) {
          e.stopPropagation();


          if ($(this).is('.active')) {
            console.log('triggers "if"');
            // removing classes before assigning active for recently clicked
            $('.choose-menu__item.transform').siblings().removeClass('active');
            $(this).find('.jsFaqItem').removeClass('active');
            // сворачиваем все модули, кроме текущего
            $(this).find('.choose-menu__sublist').slideUp(200);

              // close sub items:
              // 1st . remove active calss from the LINK
              $('li[data-id].jsFaqItem .t-link').removeClass('active');
              // remove shown content of clicked item with the hekp of slideUp:
              $('li[data-id].jsFaqItem .t-link').siblings('.js-item-content').slideUp(200);
              // 2d .- remove active class from parent, if we clicked another parents child;
              $('li[data-id].jsFaqItem .t-link').closest('.jsFaqItem').removeClass('active');

              $('li[data-id].jsFaqItem .t-link').closest('.choose-menu__item.transform').removeClass('active');
              // eof ^

          } else {
            console.log('triggers "else"');
            // removing classes before assigning active for recently clicked

            // $('.choose-menu__item').siblings().removeClass('active');
            // $('.choose-menu__subitem').siblings().removeClass('active');

            $(this).addClass('active');
            $(this).find('.jsFaqItem:first .t-link').addClass('active');
            $(this).siblings().removeClass('active');
            $(this).siblings().find('.js-item-content').slideUp(200);
            $(this).siblings().find('.choose-menu__sublist').slideUp(200);
            $(this).siblings().find('.jsFaqItem').removeClass('active');



            $(this).find('.choose-menu__sublist').slideDown(200);
            // $(this).find('.choose-menu__sublist .jsFaqItem:first').addClass("active").trigger( "click" );
            $(this).find('.choose-menu__sublist .jsFaqItem:first').addClass("active");
            // $(this).parents('.choose-menu__item').addClass('active');

            $(this).find('.js-item-content:first').slideDown(200);
          }


        });
      }
      /* === eof li[data-pos].click == */


      /* ================================================
      li[data-pos].click
      ================================================ */
      $('li[data-id].jsFaqItem .t-link').click(function(e) {
        e.stopPropagation();

        // if THE LINK has active class, do the following:
        if ($(this).hasClass('active')) {


            // 1st . remove active calss from the LINK
            $(this).removeClass('active');
            // remove shown content of clicked item with the hekp of slideUp:
            $(this).closest('.jsFaqItem').siblings('.js-item-content').slideUp(200);
            // 2d .- remove active class from parent, if we clicked another parents child;
            $('.jsFaqItem').removeClass('active');
            $(this).closest('.jsFaqItem').removeClass('active');

            // $(this).closest('.choose-menu__item.transform').removeClass('active');

        } else {

          // at first, slide UP all the other items:

          // 4 sliding
            $('.jsFaqItem').next().each(function(){
                $(this).slideUp(200);
            });

          // 4 item link
          $('.t-link').removeClass('active');
          $('.jsFaqItem').removeClass('active');
          $('.choose-menu__item.transform').removeClass('active');

          // 4 for item essence

          // 4 for item parent, IF NEEDED

          $(this).closest('.jsFaqItem').next().slideDown(200);
          $(this).addClass('active');
          $(this).closest('.jsFaqItem').addClass('active');
          $(this).closest('.choose-menu__item.transform').addClass('active');


        }
      });
      /* === eof li[data-pos].click == */


      /* ================================================
      stop propagation for child elements
      ================================================ */
      $('.choose-menu__item .js-item-content').click(function(e) {
        e.stopPropagation();
      });
      /* === eof stop propagation for child elements == */



    } // eof matchMedia
  } // eof body.is
}); // eof ready

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



// page-window-systems COLORS slider

$( document ).ready(function() {

	if($('body').is('.page-window-systems')){
		$("ul#choose-colors").bxSlider({
		    speed: 300,
		    nextText: '',
		    prevText: '',
				slideWidth: 40,
				minSlides: 1,
				maxSlides: 4,
				moveSlides: 1,
				slideMargin: 20,
				pager: false,
				prevSelector: ('.choose__colors-controls__left'),
				nextSelector: ('.choose__colors-controls__right')
		    //  onSlideBefore:function($slideElement, oldIndex, newIndex){
		    //    changeRealThumb(realThumbSlider,newIndex);
		    //
		    //  }
		});
	}

}); // eof .ready

// page-window-systems COLORS slider END


//  page-window-systems fancybox for awards

if($('body').is('.page-window-systems')){

	$("a.gallery__full").fancybox({

		// Prevent fancybox from causing page to to jump to the top
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

}

//  page-window-systems fancybox for awards END




// main modal

if($('body').is('.page-index')){

	showMainModal();

	closeMainModal();

	hideMainOverlay();


	$('html body').on('keyup', function(e) {
		if (e.keyCode === 27) {
				$('.modal-content').fadeOut(300);
				$('.modal-index-overlay').fadeOut(300);
		}
  });

}

function showMainModal() {
    $('.request-callback').click(function() {
        $('.modal-content').fadeIn(300);
        $('.modal-index-overlay').fadeIn(300);
    });
}

function closeMainModal() {
    $('.modal-content-close').click(function() {
        $('.modal-content').fadeOut(300);
        $('.modal-index-overlay').fadeOut(300);
    });
}

function hideMainOverlay() {
    $('.modal-index-overlay').click(function() {
        $('.modal-content').fadeOut(300);
        $('.modal-index-overlay').fadeOut(300);
    });
}


// main modal eof



// external js: masonry.pkgd.js

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160
// });

// external js: masonry.pkgd.js EOF


if($('body').is('.page-fitments')){

	(function() {
	    // product-desc page
	    if ((window.matchMedia("(max-width: 1359px)").matches) && (window.matchMedia("(min-width: 768px)").matches)) {

	      var a = document.querySelector('#aside1'), b = null, P = 150;
	      window.addEventListener('scroll', Ascroll, false);
	      document.body.addEventListener('scroll', Ascroll, false);

	    }

      function Ascroll() {
        if (b === null) {
          var Sa = getComputedStyle(a, ''), s = '';
          for (var i = 0; i < Sa.length; i++) {
            if (Sa[i].indexOf('overflow') === 0 || Sa[i].indexOf('padding') === 0 || Sa[i].indexOf('border') === 0 || Sa[i].indexOf('outline') === 0 || Sa[i].indexOf('box-shadow') === 0 || Sa[i].indexOf('background') === 0) {
              s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; ';
            }
          }
          b = document.createElement('div');
          b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
          a.insertBefore(b, a.firstChild);
          var l = a.childNodes.length;
          for (var j = 1; j < l; j++) {
            b.appendChild(a.childNodes[1]);
          }
          a.style.height = b.getBoundingClientRect().height + 'px';
          a.style.padding = '0';
          a.style.border = '0';
        }
        var Ra = a.getBoundingClientRect(),
            R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article1').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
        if ((Ra.top - P) <= 0) {
          if ((Ra.top - P) <= R) {
            b.className = 'stop';
            b.style.top = - R +'px';
          } else {
            b.className = 'sticky';
            b.style.top = P + 'px';
          }
        } else {
          b.className = '';
          b.style.top = '';
        }
        window.addEventListener('resize', function() {
          a.children[0].style.width = getComputedStyle(a, '').width;
        }, false);
      }
	})();

}


if($('body').is('.page-cottages')){

	(function() {
	    // product-desc page
	    if ((window.matchMedia("(max-width: 1359px)").matches) && (window.matchMedia("(min-width: 768px)").matches)) {

	      var a = document.querySelector('#aside1'), b = null, P = 150;
	      window.addEventListener('scroll', Ascroll, false);
	      document.body.addEventListener('scroll', Ascroll, false);
	    }

      function Ascroll() {
        if (b === null) {
          var Sa = getComputedStyle(a, ''), s = '';
          for (var i = 0; i < Sa.length; i++) {
            if (Sa[i].indexOf('overflow') === 0 || Sa[i].indexOf('padding') === 0 || Sa[i].indexOf('border') === 0 || Sa[i].indexOf('outline') === 0 || Sa[i].indexOf('box-shadow') === 0 || Sa[i].indexOf('background') === 0) {
              s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; ';
            }
          }
          b = document.createElement('div');
          b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
          a.insertBefore(b, a.firstChild);
          var l = a.childNodes.length;
          for (var j = 1; j < l; j++) {
            b.appendChild(a.childNodes[1]);
          }
          a.style.height = b.getBoundingClientRect().height + 'px';
          a.style.padding = '0';
          a.style.border = '0';
        }
        var Ra = a.getBoundingClientRect(),
            R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article1').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
        if ((Ra.top - P) <= 0) {
          if ((Ra.top - P) <= R) {
            b.className = 'stop';
            b.style.top = - R +'px';
          } else {
            b.className = 'sticky';
            b.style.top = P + 'px';
          }
        } else {
          b.className = '';
          b.style.top = '';
        }
        window.addEventListener('resize', function() {
          a.children[0].style.width = getComputedStyle(a, '').width;
        }, false);
      }
	})();

}
