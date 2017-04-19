// tabs for page-windsystem::choose module

$(document).ready(function() {
	if($('body').is('.page-additional-options')){
	  if ((window.matchMedia("(min-width: 1360px)").matches)) {



      /* ================================================
      li[data-pos].click
      ================================================ */
      $('li[data-pos]').click(function(e) {
        e.stopPropagation();

        // if ($(this).parents('.choose-menu__item').is('.active'))
        if ($(this).is('.active')) {
          // removing classes before assigning active for recently clicked
          $('.choose-menu__item').siblings().removeClass('active');
          $('.choose-menu__subitem').siblings().removeClass('active');
          // сворачиваем все модули, кроме текущего
          $('.desktop-menu .choose-menu__sublist').not($(this)).slideUp(200);


        } else {
          // removing classes before assigning active for recently clicked
          $('.choose-menu__item').siblings().removeClass('active');
          $('.choose-menu__subitem').siblings().removeClass('active');

          $(this).addClass('active');
          $(this).find('.choose-menu__subitem:first').addClass("active").trigger( "click" );
          $(this).parents('.choose-menu__item').addClass('active');

          $('.desktop-menu .choose-menu__sublist').not($(this)).slideUp(200);



          $('.choose-menu__sublist', this).slideDown(300, function() {
            // $('.choose-menu__sublist').not($('.choose-menu__sublist', this)).slideUp(300);
            // $('.choose-menu__sublist').not($(this)).slideUp(200);
          });


          // changing tabs' content
            // $('.jsFaqItem #' + $(this).attr('data-pos')).fadeIn(0).siblings().fadeOut(0);
          $('.js-item-content').fadeOut(0);
          $('.jsFaqItem').next('#' + $(this).attr('data-pos')).fadeIn(0);


          $(this).siblings().removeClass('active');

        }
      }); /* === eof li[data-pos].click == */




      /* ================================================
      .js-tabs li[data-id].click
      ================================================ */
      $('.js-tabs li[data-id]').click(function(e) {
        e.stopPropagation();

        // console.log($(this));
        if ($(this).hasClass('active')) {
            return;
        }

        // changing tabs' content
        // $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
         // $('.jsFaqItem').fadeOut(0);
         // .siblings().fadeOut(0);
        // $(this).siblings().removeClass('active');
        $('.choose-content__wrapper').fadeOut(0);

                                        //  console.log('hidden node: ' + $(this).attr('data-id'));
         $('#' + $(this).attr('data-id')).fadeIn(0);

        // removing classes before assigning active for recently clicked
        $('.choose-menu__item').siblings().removeClass('active');
        $('.choose-menu__subitem').siblings().removeClass('active');
        $('.choose-menu__subitem:first').removeClass('active');

        // assigning class 'active' for clicked item
        $(this).addClass('active');

        $(this).parents('.choose-menu__item').addClass('active');

      }); /* === eof li[data-pos].click == */




		} // eof matchMedia
	}		// eof ('body').is
}); // eof document READY


// FOR TABLET CODE IS HERE ! ! !
// ##### задача привязать открывающийся пункт к определенному контен
// windsystems choose block for tablet and above
$(document).ready(function() {
	if($('body').is('.page-additional-options')){
    if ((window.matchMedia("(max-width: 1359px)").matches)) {



      /* ================================================
      li[data-pos].click
      ================================================ */
      if ($(".tablet-related-content .choose-menu__sublist.transform").length) {
        $('.choose-menu__item.transform[data-pos]').click(function(e) {
          e.stopPropagation();


          if ($(this).is('.active')) {
            // console.log('triggers "if"');
            // removing classes before assigning active for recently clicked
            $('.choose-menu__item.transform').siblings().removeClass('active');
            $(this).find('.jsFaqItem').removeClass('active');
            // сворачиваем все модули, кроме текущего
            $(this).find('.choose-menu__sublist').slideUp(200);

              // close sub items:
              // 1st . remove active calss from the LINK
              $('li[data-id].jsFaqItem .t-link').removeClass('active');
              // remove shown content of clicked item with the hekp of slideUp:
              $('li[data-id].jsFaqItem .t-link').siblings('.js-item-content').slideUp(200);
              // 2d .- remove active class from parent, if we clicked another parents child;
              $('li[data-id].jsFaqItem .t-link').closest('.jsFaqItem').removeClass('active');

              $('li[data-id].jsFaqItem .t-link').closest('.choose-menu__item.transform').removeClass('active');
              // eof ^

          } else {
            // console.log('triggers "else"');
            // removing classes before assigning active for recently clicked

            // $('.choose-menu__item').siblings().removeClass('active');
            // $('.choose-menu__subitem').siblings().removeClass('active');

            $(this).addClass('active');
            $(this).find('.jsFaqItem:first .t-link').addClass('active');
            $(this).siblings().removeClass('active');
            $(this).siblings().find('.js-item-content').slideUp(200);
            $(this).siblings().find('.choose-menu__sublist').slideUp(200);
            $(this).siblings().find('.jsFaqItem').removeClass('active');



            $(this).find('.choose-menu__sublist').slideDown(200);
            // $(this).find('.choose-menu__sublist .jsFaqItem:first').addClass("active").trigger( "click" );
            $(this).find('.choose-menu__sublist .jsFaqItem:first').addClass("active");
            // $(this).parents('.choose-menu__item').addClass('active');

            $(this).find('.js-item-content:first').slideDown(200);
          }


        });
      }
      /* === eof li[data-pos].click == */


      /* ================================================
      li[data-pos].click
      ================================================ */
      $('li[data-id].jsFaqItem .t-link').click(function(e) {
        e.stopPropagation();

        // if THE LINK has active class, do the following:
        if ($(this).hasClass('active')) {


            // 1st . remove active calss from the LINK
            $(this).removeClass('active');
            // remove shown content of clicked item with the hekp of slideUp:
            $(this).closest('.jsFaqItem').siblings('.js-item-content').slideUp(200);
            // 2d .- remove active class from parent, if we clicked another parents child;
            $('.jsFaqItem').removeClass('active');
            $(this).closest('.jsFaqItem').removeClass('active');

            // $(this).closest('.choose-menu__item.transform').removeClass('active');

        } else {

          // at first, slide UP all the other items:

          // 4 sliding
            $('.jsFaqItem').next().each(function(){
                $(this).slideUp(200);
            });

          // 4 item link
          $('.t-link').removeClass('active');
          $('.jsFaqItem').removeClass('active');
          $('.choose-menu__item.transform').removeClass('active');

          // 4 for item essence

          // 4 for item parent, IF NEEDED

          $(this).closest('.jsFaqItem').next().slideDown(200);
          $(this).addClass('active');
          $(this).closest('.jsFaqItem').addClass('active');
          $(this).closest('.choose-menu__item.transform').addClass('active');


        }
      });
      /* === eof li[data-pos].click == */


      /* ================================================
      stop propagation for child elements
      ================================================ */
      $('.choose-menu__item .js-item-content').click(function(e) {
        e.stopPropagation();
      });
      /* === eof stop propagation for child elements == */



    } // eof matchMedia
  } // eof body.is
}); // eof ready

// tabs for page-windsystem::choose module END
