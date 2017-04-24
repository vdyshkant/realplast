
// slider

// $( document ).ready(function() {
$(window).load(function() {

	if($('body').is('.page-index')){
		$("ul#checker-slider").bxSlider({
        // http://stackoverflow.com/a/20342392
        // BxSlider displayes last slide as first slide | dublicating ids

        minSlides: 2,
        maxSlides: 8,
        slideWidth: 40,
        slideMargin: 20,
        moveSlides: 1,

		    speed: 300,
		    pager: false,
		    nextText: '',
		    prevText: '',
				prevSelector: ('.checker-slider-controls__left'),
				nextSelector: ('.checker-slider-controls__right'),

        // looping
        auto: true,
        infiniteLoop: true,
        pause: 5000
		    //  onSlideBefore:function($slideElement, oldIndex, newIndex){
		    //    changeRealThumb(realThumbSlider,newIndex);
		    //
		    //  }

		});

    // // get the children behind
    // var $prependedChildren = getArraySample($children, 0, options.moveSlideQty, 'backward');
    //
    // // add each prepended child to the back of the original element
    // $.each($prependedChildren, function(index) {
    //     $parent.prepend($(this));
    // });
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
