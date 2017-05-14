/* отрабатывать только для определенной страницы
	================================================ */
(function($) {
 if($('body').is('.page-index')){

   if($('.step.second .radial-progress').hasClass('.inactive')) {


    //  //  animate 1st MUSTACHE
    //   $( ".step.second, .step.third, .num-arr" ).mouseover(function() {
    //    $(this).find( ".lines-item:eq(0), .lines-item:eq(2)" ).animate({
    //      width: '25px'
    //    }, 500, function() {
    //      // Animation complete.
    //    });
    //    $(this).find( ".lines-item:eq(1)" ).stop(true).animate({
    //      width: '50px'
    //    }, 500, function() {
    //      // Animation complete.
    //    });
    //  });
    //   $( ".step.second, .step.third, .num-arr" ).mouseout(function() {
    //    $(this).find( ".lines-item:eq(0), .lines-item:eq(2)" ).animate({
    //      width: '10px'
    //    }, 500, function() {
    //      // Animation complete.
    //    });
    //    $(this).find( ".lines-item:eq(1)" ).stop(true).animate({
    //      width: '20px'
    //    }, 500, function() {
    //      // Animation complete.
    //    });
    //  });


   } // eof if

		$('.step.first').click(function() {
			$('.tabs-region .item.tab:last').trigger( "click" );

		});


  $( "body" ).click(function( event ) {
    var myClasses = this.classList;
    console.log( "clicked: " + event.target.nodeName );
    // alert(myClasses.length + " " + myClasses[0]);
  });




  var fill_rotation = 180;
	var fix_rotation = fill_rotation*2;

	var mainTl = new TimelineMax({paused: true});

	$(".step:not(.first) .radial-progress").each(function(i){
		var circle = $(this);
		var line = 	circle.prev('.line-mustache').find('.lines-item.regular');
		var lineMid = 	circle.prev('.line-mustache').find('.lines-item.mid');
		var circleFill = circle.find('.fill:not(.fix)');
		var circleMask = circle.find('.mask.full');
		var circleFillMix = circle.find('.fill.fix');

		mainTl.to(line, 0.15, {width: "90px"})
		      .to(lineMid, 0.15, {width: "120px"});
			// .to(circle, 0, {rotation: "-="+fill_rotation}, "fillCircle-"+i+"")
			// .to([circleFill, circleMask], 0, {rotation: fill_rotation}, "fillCircle-"+i+"")
			// .to(circleFillMix, 0.3, {rotation: fix_rotation}, "fillCircle-"+i+"")
			// .set(circleFillMix, {rotation: fix_rotation}, "stopPoint-"+i+"");
	});

	$('.step .radial-progress').click(function(){
		if($(this).hasClass('active')){
			return false;
		}

    // lines:
    var parentNode = $(this);
    var paragraphPrev = 	$(this).parent('.step').prev().find('p').css('background-color', '#0072bb');
    var paragraphNext = 	$(this).parent('.step').next().find('p').css('background-color', 'transparent');

    var line = 	parentNode.prev('.line-mustache').find('.lines-item.regular');
    var lineMid = 	parentNode.prev('.line-mustache').find('.lines-item.mid');
    var lineNext = 	$(this).parent('.step').next().find('.lines-item.regular');
    var lineMidNext = 	$(this).parent('.step').next().find('.lines-item.mid');
    		TweenLite.to(line, 0.65, {width: "130px"})
    		TweenLite.to(lineMid, 0.65, {width: "160px"})
    		TweenLite.to(lineNext, 0.65, {width: "10px"})
    		TweenLite.to(lineMidNext, 0.65, {width: "20px"})
    // eof lines ^^^

		animateToDefault();

		$('.active').removeClass('active');
		$('.opened').removeClass('opened');

		var index = parseInt($(this).attr('data-index'));
		mainTl.tweenTo("stopPoint-"+(index-1)+"", {onComplete: animateToActive, onCompleteParams:[$(this)]});
	});

// ::::::::::::::::::::: animateToActive ::::::::::::::::::::::::::::::::::::::::::::::::::::::

	function animateToActive(el) {
		var index = parseInt(el.attr('data-index')) + 1;
		$('.copy-holder').find(".step-"+index+"").addClass('active');
		el.addClass('active');
		// $('.radial-progress[data-intex=' + index + ']').parents( '.step' ).addClass('opened');
    el.addClass('opened');
    el.removeClass('inactive');
    var them = el.siblings( ".line-mustache" );
    // them.find('.lines-item').each(function(){
    //  $(this).animate({
    //    width: '130px'
    //  }, 500, function() {
    //    // Animation complete.
    //  });
    // });
    el.find('p').css("background", '#0072bb');
    el.siblings('.num').fadeOut(300);

		var innerCircle = el.find('.inner-circle');
		var inset = el.find('.inset');
		var circle = el.find('.circle');
		var mask = el.find('.mask');
		var fill = el.find('.fill');
		var number = el.next('p');
		var stepsCopy = $('.copy-holder div.active');

    // lines:
    var line = 	$(".step:not(.first) .radial-progress").prev('.line-mustache').find('.lines-item.regular');
    var lineMid = 	$(".step:not(.first) .radial-progress").prev('.line-mustache').find('.lines-item.mid');

		mainTl.to(line, 0.15, {width: "90px"})
		mainTl.to(lineMid, 0.15, {width: "90px"});


		TweenLite.set(number, {color: "rgb(250,250,250)"})
		TweenLite.to(innerCircle, 0.15, {scale: 0});
		TweenLite.to(el, 0.3, {scale: 1, zIndex: 10, ease: Back.easeOut});
		TweenLite.fromTo(stepsCopy, 0.7, {autoAlpha: 0}, {autoAlpha: 1});
	}

// ::::::::::::::::::: animateToDefault ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	function animateToDefault(){
		var mainCircle = $('.radial-progress.active');
		  var innerCircle = $('.radial-progress.active').find('.inner-circle');
		    var inset = $('.radial-progress.active').find('.inset');
		var number = $('.radial-progress.active').next('p');
		var stepsCopy = $('.copy-holder div');

		$('.opened').removeClass('opened');

		TweenLite.to(innerCircle, 0.15, {scale: 1})
		TweenLite.set(number, {color: "rgb(68, 67, 65)"});
		TweenLite.to(mainCircle, 0.3, {scale: 1, zIndex: 1, ease: Bounce.easeOut});
		TweenLite.to(stepsCopy, 0.7, {autoAlpha: 0});
	}





// EOF ^^^












  // polyfill fix for height for every absolute positioned tab:
  var biggestHeight = "0";
  // $(".copy-holder *").each(function(){
  setTimeout(function(){
    $(".kazldur .copy-holder .step-tab").each(function(){
     if ($(this).height() > biggestHeight ) {
       biggestHeight = $(this).height()
       console.log(biggestHeight);
     }
    });

    $(".kazldur .copy-holder").height(biggestHeight);
  }, 5);




// tab1 inner slider selections

	$('.checker-slider__item').click(function(){
    $( this ).toggleClass('user-selected');
  });
// eof slider selections



 }
})(jQuery); // eof autoFunction
/* eof ^^^ */
