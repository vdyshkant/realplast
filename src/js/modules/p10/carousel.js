// CAROUSEL


// wide ver
$(document).ready(function() {
	if($('body').is('.page-licenses')){
	  if ((window.matchMedia("(min-width: 1360px)").matches)) {

      var carousel = $("#carousel-licenses").waterwheelCarousel({});

  	  $('.feedbacks #prev').bind('click', function () {
  	    carousel.prev();
  	    return false;
  	  });

  	  $('.feedbacks #next').bind('click', function () {
  	    carousel.next();
  	    return false;
  	  });

    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY

// tablet ver
$(document).ready(function() {
	if($('body').is('.page-licenses')){
	  if ((window.matchMedia("(min-width: 768px)").matches) && (window.matchMedia("(max-width: 1359px)").matches)) {
      var carousel = $("#carousel-licenses").waterwheelCarousel({
  	    flankingItems: 0,
        movingToCenter: function($movingFromCenter) {


          // $newCenterItem is a jQuery wrapped object describing the image that was clicked.
          var height = $movingFromCenter.innerHeight();
          var position = $movingFromCenter.position();
              height = parseInt(height, 10);
              position = parseInt(position.top, 10);
          var num = height + position;
              num = position + (height / 2 - 140);

          $( ".feedbacks .slider-controls" ).css( "top", num);

          // Now that we have the ID of the image, we can use jQuery to show the content corresponding to the tigerpicture.
        },

  	  });

  	  $('.feedbacks #prev').bind('click', function () {
  	    carousel.prev();
  	    return false;
  	  });

  	  $('.feedbacks #next').bind('click', function () {
  	    carousel.next();
  	    return false;
  	  });

    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY

// mobile ver:
$(document).ready(function() {
	if($('body').is('.page-licenses')){
	  if ((window.matchMedia("(max-width: 767px)").matches)) {

      $('.feedbacks .slider-item').css('max-width', '300px');

      var carousel = $("#carousel-licenses").waterwheelCarousel({
  	    flankingItems: 0,
        sizeMultiplier: 1,
        movingToCenter: function($movingFromCenter) {


          // $newCenterItem is a jQuery wrapped object describing the image that was clicked.
          var height = $movingFromCenter.innerHeight();
          var position = $movingFromCenter.position();
              height = parseInt(height, 10);
              position = parseInt(position.top, 10);
      	  var num = height + position;

          $( ".feedbacks .slider-controls" ).css( "top", num - 71);
        },

  	  });

  	  $('.feedbacks #prev').bind('click', function () {
  	    carousel.prev();
  	  });

  	  $('.feedbacks #next').bind('click', function () {
  	    carousel.next();
  	    // return false;
  	  });

    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY


// CAROUSEL end
