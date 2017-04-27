
// CAROUSEL


/* miniFAQ:

проверить главный класс, установленный для родительского блока section
if на странице несколько одинаковых каруселей,
  меняем id слайдера: #carousel -- как в pug, так и в js,
  плюс !! чекаем стили в scss по этому id (его нужно поменять, если на стр. 2 карусели)


*/





// wide ver
$(document).ready(function() {
	if($('body').is('.page-licenses')){
	  if ((window.matchMedia("(min-width: 1360px)").matches)) {
			if($('section').is('.certification')){
				var carousel = $("#certification-carousel").waterwheelCarousel({
					// flankingItems: 0,
          movingFromCenter: function($newCenterItem){
            // когда центральный слайд прячется, мы принудительно выставляем ему такую ширину картинки, как и у остальных блоков.
            // $newCenterItem.innerWidth( 110 );
            // var position = $newCenterItem.position();
            // console.log(position);
          },
          movedFromCenter: function($newCenterItem){
            // когда центральный слайд прячется, мы принудительно выставляем ему такую ширину картинки, как и у остальных блоков.
            // $newCenterItem.innerWidth( 110 );
          },
					movingToCenter: function($newCenterItem) {
            // $newCenterItem is a jQuery wrapped object describing the image that was clicked.

            // $newCenterItem.innerWidth( 354 );


            // формируем вычисление высоты, которую будем форсить для slider-controls unit-ов
						var height = $newCenterItem.innerHeight();
						var position = $newCenterItem.position();
								height = parseInt(height, 10);
								position = parseInt(position.top, 10);
						var num = height + position;
								num = position + (height / 2 - 180);

						// console.log($movingFromCenter + ' item height: ' + height);
						// console.log($movingFromCenter + ' item position.top: ' + position);
						// console.log('sum: ' + num);
						// setTimeout(function(){
						$( ".certification .slider-controls__arrow" ).css( "top", num);
						$( ".certification .slider-controls-divider" ).css( "top", num);
						// });

						// Now that we have the ID of the image, we can use jQuery to show the content corresponding to the tigerpicture.
					},
					// movedFromCenter: function($newCenterItem) {
          //
          //   // var carouselFromCenter = $newCenterItem.innerWidth( 110 );
          //
          //   var height = $newCenterItem.innerHeight();
          //   var position = $newCenterItem.position();
          //       height = parseInt(height, 10);
          //       position = parseInt(position.top, 10);
          //   var num = height + position;
          //       num = position + (height / 2);
          //   $newCenterItem.css( "top", "50%");
          //
					// },


          // ONE MORE ISSUE:
          // для того, что сделать отображение слайдиков 2го и 3-го порядка, я добавил в сам скрипт условие:
          // if (newDistanceFromCenter === 2 || newDistanceFromCenter === -2) {
          //   distanceFactor = 0.31;
          // }
          // т.е. когда по функции performCalculations() проходит итерация 2 и -2 элемента, для каждого из них мы выставляем
          // distanceFactor по-новому, а именно - такой, как нам нужно.


					sizeMultiplier: 0.31,
          forcedImageWidth: 355,
          forcedImageHeight: 490,
          // forcedImageWidth: 354,
					autoPlay: 160000,
          separationMultiplier: .54,
					separation: 260
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

				$('#certification-carousel-prev').bind('click', function () {
					carousel.prev();
					return false;
				});

				$('#certification-carousel-next').bind('click', function () {
					carousel.next();
					return false;
				});
				// $('#reload').bind('click', function () {
				//   newOptions = eval("(" + $('#newoptions').val() + ")");
				//   carousel.reload(newOptions);
				//   return false;
				// });
			}



    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY

// tablet ver
$(document).ready(function() {
	if($('body').is('.page-licenses')){
	  if ((window.matchMedia("(min-width: 768px)").matches) && (window.matchMedia("(max-width: 1359px)").matches)) {

			if($('section').is('.certification')){
				var carousel = $("#certification-carousel").waterwheelCarousel({
					flankingItems: 0,
					movingToCenter: function($movingFromCenter) {


						// $newCenterItem is a jQuery wrapped object describing the image that was clicked.
						var height = $movingFromCenter.innerHeight();
						var position = $movingFromCenter.position();
								height = parseInt(height, 10);
								position = parseInt(position.top, 10);
						var num = height + position;
								num = position + (height / 2 - 180);

						// console.log($movingFromCenter + ' item height: ' + height);
						// console.log($movingFromCenter + ' item position.top: ' + position);
						// console.log('sum: ' + num);
						// setTimeout(function(){
						$( ".certification .slider-controls__arrow" ).css( "top", num);
						$( ".certification .slider-controls-divider" ).css( "top", num);
						// });

						// Now that we have the ID of the image, we can use jQuery to show the content corresponding to the tigerpicture.
					},
					sizeMultiplier: 0.2,
					autoPlay: 160000
					// horizon: 10,
					// horizonOffset: -50,
					// horizonOffsetMultiplier: .7
					// smallFeatureWidth: 1,
					// smallFeatureOffset: 150,
					// startingFeature: 3

				});

				$('#certification-carousel-prev').bind('click', function () {
					carousel.prev();
					return false;
				});

				$('#certification-carousel-next').bind('click', function () {
					carousel.next();
					return false;
				});
			}


    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY

// mobile ver:
$(document).ready(function() {
	if($('body').is('.page-licenses')){
	  if ((window.matchMedia("(max-width: 767px)").matches)) {

			if($('section').is('.certification')){

				$('.certification .slider-item').css('max-width', '250px');

				// setPositinForControls();
				// function setPositinForControls() {
				//   var centerItem = $('.carousel-center');
				//   if (centerItem) {
				//     var height = centerItem.innerHeight();
				//         height = parseInt(height, 10);
				//
				//     var position = centerItem.offset();
				//     var top = parseInt(position.top, 10);
				//     var newtop = height + top;
				//         newtop = newtop - 71 + 'px';
				//
				//     $('.slider-controls').css( {
				//         'top': newtop
				//     });
				//   }
				// }



				var carousel = $("#certification-carousel").waterwheelCarousel({
					flankingItems: 0,
					autoPlay: 160000,
					sizeMultiplier: 1,
					movingToCenter: function($movingFromCenter) {


						// $newCenterItem is a jQuery wrapped object describing the image that was clicked.
						var height = $movingFromCenter.innerHeight();
						var position = $movingFromCenter.position();
								height = parseInt(height, 10);
								position = parseInt(position.top, 10);
						var num = height + position;

						// console.log($movingFromCenter + ' item height: ' + height);
						// console.log($movingFromCenter + ' item position.top: ' + position);
						// console.log('sum: ' + num);
						// setTimeout(function(){
						$( ".certification .slider-controls__arrow" ).css( "top", num - 172);//was71
						// });

						// Now that we have the ID of the image, we can use jQuery to show the content corresponding to the tigerpicture.
					},

					// smallFeatureWidth: 1,
					// smallFeatureOffset: 150,
					// startingFeature: 3

				});

				$('#certification-carousel-prev').bind('click', function () {
					carousel.prev();
					// if we want to stop carousel from carouselling, use return below:
					// return false;
				});

				$('#certification-carousel-next').bind('click', function () {
					carousel.next();
					// return false;
				});


			}


    } // eof matchMedia
  }		// eof ('body').is
}); // eof document READY


// CAROUSEL end


(function($) {
 if($('body').is('.page-licenses')){
	 $("[data-fancybox]").fancybox({
	 	// Options will go here

    // Prevent fancybox from causing page to to jump to the top
    helpers: {
      overlay: {
        locked: false
      }
    }
	 });
 }
})(jQuery); // eof autoFunction
/* eof ^^^ */
