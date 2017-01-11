$(document).ready(function() {
	if($('body').is('.page-faq')){





    // accordion-page content slide
    if ($(".accordion-item-title").length) {
        $(".accordion-item-title").click(function() {
            $(this).siblings('.accordion-item-content-wrapper').slideToggle(200);
            $(this).parent('.jsFaqItem').toggleClass('active');
        });

        // $('.products-nav-menu').click(function() {
        //     $('.jsProdMenuContent').slideToggle(200);
        //     $('.jsColumnTitle').toggleClass('active');
        // });
    }
    // EOF accordion-page content slide





  }		// eof ('body').is
}); // eof document READY
