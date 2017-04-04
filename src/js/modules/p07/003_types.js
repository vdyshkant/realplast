// tabs for page-services::type module

$(document).ready(function() {

	if($('body').is('.page-services')){


		$('.js-tabs li[data-id]').click(function() {
				// console.log($(this));
				if ($(this).hasClass('active')) {
						return;
				}

				$('.wide-related-content #' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
		});

	}

});

// tabs for page-services::type module END
