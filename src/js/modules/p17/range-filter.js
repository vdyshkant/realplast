
$(document).ready(function() {
	if($('body').is('.page-loan')){





    // range filter
      $.extend( $.ui.slider.prototype.options, {
          animate: 300
      });

      $("#flat-slider-vertical-1")
          .slider({
              max: 250000,
              min: 0,
              range: "min",
              value: 120000,
              step: 5000,
              orientation: "vertical"
          });

      $("#flat-slider-vertical-2")
          .slider({
              max: 12,
              min: 0,
              range: "min",
              value: 10,
              step: 1,
              orientation: "vertical"
          });

      $("#flat-slider-vertical-3")
          .slider({
              max: 250000,
              min: 0,
              range: "min",
              value: 120000,
              step: 5000,
              orientation: "vertical"
          });

      $("#flat-slider-vertical-4")
          .slider({
              max: 12,
              min: 0,
              range: "min",
              value: 10,
              step: 1,
              orientation: "vertical"
          });

      $("#flat-slider-vertical-2, #flat-slider-vertical-4")
          .slider("pips", {
              first: "pip",
              last: "pip",
              rest: "label",
              suffix: "&nbsp;мес"

          })
          .slider("float", {
              /* options go here as an object */
              // handle: true,
              // pips: false
          })

      $("#flat-slider-vertical-1, #flat-slider-vertical-3")
          .slider("pips", {
              first: "pip",
              last: "pip",
              rest: "label",
              suffix: "&nbsp;тг"

          })
          .slider("float", {
              /* options go here as an object */
              // handle: true,
              // pips: false
          })
    // EOF range filter





  }		// eof ('body').is
}); // eof document READY
