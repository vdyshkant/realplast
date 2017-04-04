// footer-nav text change

$(document).ready(function() {
	if($('body').is('.page-feedback')){

    (function() {
        // window.addEventListener("resize", function() {
            if (window.matchMedia("(max-width: 1159px)").matches) {
                var originText = 'Отзыв про одну из лучших наших работ';
                $('.articles__video .video__item-text').text(originText);
            } else {
                var stringText = 'Обзор одной из лучших наших работ';
                $('.articles__video .video__item-text').text(stringText);
            }
        // });
    })();


  } // eof body.is

}); // eof ready
