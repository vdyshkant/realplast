// $( document ).ready(function() {
$(window).load(function() {

	if($('body').is('.page-affair')){






    /* slider-general
       ================================================ */

       $("ul#slider1").bxSlider({
           // http://stackoverflow.com/a/20342392
           // BxSlider displayes last slide as first slide | dublicating ids

   		    speed: 300,
   		    pager: true,
   		    nextText: '',
   		    prevText: '',
   				prevSelector: ('.slider-aka-general-controls__left'),
   				nextSelector: ('.slider-aka-general-controls__right'),

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



   	$('.slider-aka-general .range').mouseenter(function() {
   		$('.slider-aka-general-controls').fadeIn(300);

   			// console.info('.nextend-arrow).fade IN;');

   	}).mouseleave(function() {
   			$('.slider-aka-general-controls').fadeOut(300);

   			// console.info('.nextend-arrow).fade OUT;');

   	});



    /* === eof slider-general == */



  } // eof if ($('body').is('.page-affair'))
}); // eof .ready
