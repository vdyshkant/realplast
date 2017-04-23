
$(document).ready(function() {
	if($('body').is('.page-loan')){





    // range filter
      $.extend( $.ui.slider.prototype.options, {
          animate: 300
      });

      var bank01 = {
        money: 120000,
        term: 10,
        calc: function() {
          var output = Math.round(this.money / this.term);
          return output;
        }

      };

      var bank02 = {
        money: 120000,
        term: 10,
        calc: function() {
          var output = Math.round(this.money / this.term);
          return output;
        }

      };

      $("#flat-slider-vertical-1")
          .slider({
              max: 250000,
              min: 0,
              range: "min",
              value: 120000,
              step: 5000,
              orientation: "vertical",
              slide: function( event, ui ) {
                bank01.money = ui.value;
                var result = bank01.calc();
                $( '#firstBankResult span' ).html(result);
                $( '#firstBankMoneyIsNeeded' ).html(ui.value);

                // запустить просчет с двумя значениями: months, money - надо получить (синхронно)

              }
          });

      $("#flat-slider-vertical-2")
          .slider({
              max: 12,
              min: 0,
              range: "min",
              value: 10,
              step: 1,
              orientation: "vertical",
              slide: function( event, ui ) {
                bank01.term = ui.value;
                var result = bank01.calc();
                $( '#firstBankResult span' ).html(result);
                $( '#firstBankTermIsNeeded' ).html(ui.value);
              }
          });

      $("#flat-slider-vertical-3")
          .slider({
              max: 250000,
              min: 0,
              range: "min",
              value: 120000,
              step: 5000,
              orientation: "vertical",
              slide: function( event, ui ) {
                bank02.money = ui.value;
                var result = bank02.calc();
                $( '#secondBankResult span' ).html(result);
                $( '#secondBankMoneyIsNeeded' ).html(ui.value);
              }
          });

      $("#flat-slider-vertical-4")
          .slider({
              max: 12,
              min: 0,
              range: "min",
              value: 10,
              step: 1,
              orientation: "vertical",
              slide: function( event, ui ) {
                bank02.term = ui.value;
                var result = bank02.calc();
                $( '#secondBankResult span' ).html(result);
                $( '#secondBankTermIsNeeded' ).html(ui.value);
              }
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


        //
    		// var bankFilter01 = {
    		// 		price: $('#flat-slider-vertical-1 .ui-slider-pip-selected .ui-slider-label').attr("data-value"),
    		// 		term: $('#flat-slider-vertical-2 .ui-slider-pip-selected .ui-slider-label').attr("data-value"),
        //     result: $('#firstBankResult span').html(),
        //     pimp: $('#flat-slider-vertical-1 .ui-slider-tip'),
    		// 		firstBankResult: function() {
        //
        //       this.pimp.click(function(){
        //         var output = toFixed(this.price / this.term);
        //         $('#firstBankResult span').html(output);
        //       });
        //
    		// 		},
    		// 		print: function() {
    		// 			console.log("price is: " + this.price + ". term is: " + this.term + " months");
    		// 		}
    		// };
        //
        //
        //
    		// bankFilter01.firstBankResult();


  }		// eof ('body').is
}); // eof document READY
