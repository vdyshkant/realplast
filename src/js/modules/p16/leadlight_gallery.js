$(document).ready(function() {
	if($('body').is('.page-leadlight')){




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

      $('.page-leadlight').on('mouseover', '.fancybox-opened, .fancybox-overlay', function(){
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





  }		// eof ('body').is
}); // eof document READY
