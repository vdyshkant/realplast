// text change

$(document).ready(function() {
	if($('body').is('.page-licenses')){

    (function() {
        // window.addEventListener("resize", function() {
            if (window.matchMedia("(max-width: 1159px)").matches) {
                var originText = 'Что о нас говорят';
                $('.feedbacks-title .feedbacks-title-text').text(originText);
            } else {
                var stringText = 'Отзывы благодарных покупателей';
                $('.feedbacks-title .feedbacks-title-text').text(stringText);
            }
        // });
    })();


  } // eof body.is

}); // eof ready
