// features-expand

$( document ).ready(function() {

	if($('body').is('.page-about')){

		if ($(".page-about .features .js-more").length) {
				// $(".js-more[data-moreNum='2']").click(function() {
				// 	$(this).parent('.js-feature-item').toggleClass('active');
				// });

				expandFeaturesItem(1);
				expandFeaturesItem(2);
				expandFeaturesItem(3);
				expandFeaturesItem(4);
				expandFeaturesItem(5);
				expandFeaturesItem(6);
				expandFeaturesItem(7);
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
