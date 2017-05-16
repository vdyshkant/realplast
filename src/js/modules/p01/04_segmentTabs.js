/* отрабатывать только для определенной страницы
	================================================ */
// (function($) {
//  if($('body').is('.page-index')){

   if($('.step.second .radial-progress').hasClass('.inactive')) {

   } // eof if

		$('.step.first').click(function() {
			$('.tabs-region .item.tab:last').trigger( "click" );

		});


  // $( "body" ).click(function( event ) {
  //   var myClasses = this.classList;
  //   console.log( "clicked: " + event.target.nodeName );
  //   // alert(myClasses.length + " " + myClasses[0]);
  // });




  var fill_rotation = 180;
	var fix_rotation = fill_rotation*2;

	var mainTl = new TimelineMax({paused: true});

	$(".step:not(.first) .radial-progress").each(function(i){
		var circle = $(this);
		var line = 	circle.prev('.line-mustache').find('.lines-item.regular');
		var lineMid = 	circle.prev('.line-mustache').find('.lines-item.mid');
		var circleFill = circle.find('.fill:not(.fix)');
		var circleMask = circle.find('.mask.full');
		var circleFillMix = circle.find('.fill.fix');

		mainTl.to(line, 0.15, {width: "90px"})
		      .to(lineMid, 0.15, {width: "120px"});
			// .to(circle, 0, {rotation: "-="+fill_rotation}, "fillCircle-"+i+"")
			// .to([circleFill, circleMask], 0, {rotation: fill_rotation}, "fillCircle-"+i+"")
			// .to(circleFillMix, 0.3, {rotation: fix_rotation}, "fillCircle-"+i+"")
			// .set(circleFillMix, {rotation: fix_rotation}, "stopPoint-"+i+"");
	});

	$('.step .radial-progress').click(function(){
		if($(this).hasClass('active')){
			return false;
		}

    // lines:
    var parentNode = $(this);
    var paragraphPrev = 	$(this).parent('.step').prev().find('p').css('background-color', '#0072bb');
    var paragraphNext = 	$(this).parent('.step').next().find('p').css('background-color', 'transparent');

    var line = 	parentNode.prev('.line-mustache').find('.lines-item.regular');
    var lineMid = 	parentNode.prev('.line-mustache').find('.lines-item.mid');
    // var num = $(".step:not(.first)").find('.num');
    var lineNext = 	$(this).parent('.step').next().find('.lines-item.regular');
    var lineMidNext = 	$(this).parent('.step').next().find('.lines-item.mid');
    		// TweenLite.to(num, 0.25, {opacity: 1})
    		TweenLite.to(line, 0.65, {width: "130px"})
    		TweenLite.to(lineMid, 0.65, {width: "160px"})
    		TweenLite.to(lineNext, 0.65, {width: "10px"})
    		TweenLite.to(lineMidNext, 0.65, {width: "20px"})
    // eof lines ^^^

		animateToDefault();

		$('.active').removeClass('active');
		$('.opened').removeClass('opened');

		var index = parseInt($(this).attr('data-index'));
		mainTl.tweenTo("stopPoint-"+(index-1)+"", {onComplete: animateToActive, onCompleteParams:[$(this)]});
	});

// ::::::::::::::::::::: animateToActive ::::::::::::::::::::::::::::::::::::::::::::::::::::::

	function animateToActive(el) {
		var index = parseInt(el.attr('data-index')) + 1;
		$('.copy-holder').find(".step-"+index+"").addClass('active');
		el.addClass('active');
		// $('.radial-progress[data-intex=' + index + ']').parents( '.step' ).addClass('opened');
    el.addClass('opened');
    el.removeClass('inactive');
    var them = el.siblings( ".line-mustache" );
    // them.find('.lines-item').each(function(){
    //  $(this).animate({
    //    width: '130px'
    //  }, 500, function() {
    //    // Animation complete.
    //  });
    // });
    el.find('p').css("background", '#0072bb');
    // el.siblings('.num').fadeOut(300);

		var innerCircle = el.find('.inner-circle');
		var inset = el.find('.inset');
		var circle = el.find('.circle');
		var mask = el.find('.mask');
		var fill = el.find('.fill');
		var number = el.next('p');
		var stepsCopy = $('.copy-holder div.active');

    // lines:
    var line = 	$(".step:not(.first) .radial-progress").prev('.line-mustache').find('.lines-item.regular');
    var lineMid = 	$(".step:not(.first) .radial-progress").prev('.line-mustache').find('.lines-item.mid');
    // var num = el.prev('.num');
    // var numNext = $('.step.third .num');

		mainTl.to(line, 0.15, {width: "90px"})
		mainTl.to(lineMid, 0.15, {width: "90px"});

		// TweenLite.to(num, 0.15, {opacity: 0});
		// TweenLite.to(numNext, 0.15, {opacity: 0});


		TweenLite.set(number, {color: "rgb(250,250,250)"})
		TweenLite.to(innerCircle, 0.15, {scale: 0});
		TweenLite.to(el, 0.3, {scale: 1, zIndex: 10, ease: Back.easeOut});
		TweenLite.fromTo(stepsCopy, 0.7, {autoAlpha: 0}, {autoAlpha: 1});
	}

// ::::::::::::::::::: animateToDefault ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	function animateToDefault(){
		var mainCircle = $('.radial-progress.active');
		  var innerCircle = $('.radial-progress.active').find('.inner-circle');
		    var inset = $('.radial-progress.active').find('.inset');
		var number = $('.radial-progress.active').next('p');
		var stepsCopy = $('.copy-holder div');

		$('.opened').removeClass('opened');

		TweenLite.to(innerCircle, 0.15, {scale: 1})
		TweenLite.set(number, {color: "rgb(68, 67, 65)"});
		TweenLite.to(mainCircle, 0.3, {scale: 1, zIndex: 1, ease: Bounce.easeOut});
		TweenLite.to(stepsCopy, 0.7, {autoAlpha: 0});
	}





// EOF ^^^







// polyfill fix for height for every absolute positioned tab:
var biggestHeight = "0";
var itemHeight = $('.kazldur .copy-holder .step-1').height();
// $(".copy-holder *").each(function(){
setTimeout(function(){
  if ( itemHeight > biggestHeight ) {
   biggestHeight = itemHeight;
   console.log(biggestHeight);
  }

  $(".kazldur .copy-holder").height(biggestHeight);
}, 5);








// tab1 inner slider selections

	$('.checker-slider__item').click(function(){
    $( this ).toggleClass('user-selected');
  });
// eof slider selections






    // inner tabs:
    if($('body').is('.page-index')){

      function Rozenrot(selector){
        this.container = $(selector);
        // this.addNewTabClick = function(){
        //   this.container.on('click', '#tAdd', function() {
        //     this.appendTab('tabs');
        //     tabEssence.handleClasses(); // rebuild width for tabs
        //     this.globalCounter++;
        //   });
        // },
        // this.globalCounter = 0;
        this.init = false;
      };

      Rozenrot.prototype.attachEvents = function(){
        var self = this;
        // check on change For .select-form
        this.container.find('.js_tAdd').on('click', function(){ self.startByClick() });

            console.log('smth happened --startByClick');
        // this.container.find('.select-to').on('change', function(){ self.checkDeliveryType() });
        // this.container.find('.service-type').on('change', function(){  });
        // this.container.find('.lift_to_floor').on('change', function(e){ self.switchFloorsInput(e.target) });
        // this.container.find('.calculate').on('click', function(e){  e.preventDefault(); self.calculatePrice(); });
      };

      Rozenrot.prototype.startByClick = function(){
          console.log('smth happened');
          this.appendTab('tabs');
          this.handleClasses();
      };

      // $(document).on('click', '.js_tAdd', function() {
      //   rozenrot1.appendTab('tabs');
      //   rozenrot2.appendTab('tabs');
      //   tabEssence.handleClasses();
      // });

      Rozenrot.prototype.numberTabs = 1;

      Rozenrot.prototype.initiateTabs = function(tabCont){
        var self = this;

        self.numberTabs = 1;
        // setTimeout(function(){

          self.container.find('#tabs .menu .tab').tab({});
          self.appendTab('tabs', 'Окно 1', tabCont);
          // self.appendTab('tabs', 'Окно 2', 'Custom content <u>smth</u>');

        // }, 5);
      };

      Rozenrot.prototype.appendTab = function( tab, nombre, contenido, url ){
          var t = this.container.find("#" + tab + " .tabsName");
          var tt = this.container.find("#" + tab);
          //var tl = t.find('.item').length;
          var n = (!!nombre ? nombre : ("tab " + (this.numberTabs).toString()));
          var kl = (!!nombre ? nombre : ("Окно " + (this.numberTabs).toString()));
          var tn = (!!nombre ? nombre.replace(/\s/g, '') : ("tab" + (this.numberTabs).toString()));
          contenido = !!contenido ? contenido : 'Content ' + tn;
          this.numberTabs++;
          if (!this.container.find("#tab-" + tn).length) {
            contenido = (!!url ? ('<iframe src="' + url + '" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;border:none;" onload="closeLoad(\'' + tn + '\')"></iframe><div class="ui active dimmer" id="loader-' + tn + '"><div class="ui large text loader">Cargando ...</div></div>') : contenido);

            // t.find('.js_tAdd').remove();
            t.find('.js_tAdd').before('<a class="item tab" data-tab="' + tn + '" id="tab-' + tn + '">' + kl + ' <i class="close icon btnx" id="btnx-' + tn + '"></i></a>');
              // .append('<a class="item tabx js_tAdd" id="tAdd"><i class="add square icon"></i></a>');

            tt.append('<div class="ui tab tabc segment" data-tab="' + tn + '" id="tab-c-' + tn + '">' + contenido + ' </div>')
            this.container.find('.js_tabs .menu .tab').tab({});
          }
          this.container.find("#tab-" + tn).click();
      };

      Rozenrot.prototype.commonItems = function(){
        var contLoc = this.container;
        var result = contLoc.find('.item.tab');
        // console.log('.item.tab');
        return result;
      };
      Rozenrot.prototype.itemsLength = function(){
        var result = this.commonItems();
        return result.length;
      };
      Rozenrot.prototype.activeItemWidth = function(){
        var contLoc = this.container;
        var result = contLoc.find('.active.item').offsetWidth;
        return result
      };
      Rozenrot.prototype.widthForNonActiveTabs = function(){
        // var calc = 550 - this.activeItemWidth() - 40;
        var calc = 550 - 110 - 40;
        var result = calc / this.itemsLength();
        return result;
      };
      Rozenrot.prototype.setNonActiveTabsWidth = function(){
        var elem = this.container.find('.item.tab:not(.active)');
        // console.log('CURR:' + elem);
        // console.log(elem.length);
        var width = 0;
        if (elem.length >= 4){
          for (i = 0; i < elem.length; i++) {
            elem[i].style.width = this.widthForNonActiveTabs() + 'px';
            if (elem.length >= 10){
              elem[i].style.padding = 0;
            }
          }
        }
      };
      Rozenrot.prototype.handleClasses = function(){
          console.log('eta');
          var elements = this.container.find('.item.tab');
              // console.log(elements);
          for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('overtabed');
          }
          var nonActiveElements = this.container.find('.item.tab:not(.active)');
          for (var i = 0; i < nonActiveElements.length; i++) {
            nonActiveElements[i].classList.add('overtabed');
          }
          this.setNonActiveTabsWidth();
      };






      // rozenrot 01
      console.log($('#tabsApp1').length + "--tabsApp1_asd"); // check if this essence exists
      var rozenrot1 = new Rozenrot('#tabsApp1');
      // console.log(rozenrot1);
      rozenrot1.initiateTabs('<div class="constructor__info-img"><img src="img/001_tab1_cont-img.png"/></div> <div class="constructor__info-title">Профиль</div> <div class="constructor__info-text"> <p>Основной элемент в конструкции металлопластикового окна – детали из профиля ПВХ (поливинилхлорида), из которых собирается окно. От качества пластикового профиля зависят надежность и срок службы окна</p> <p>его изолирующие характеристики и внешний вид. Нужно выбирать окна, изготовленные только из качественного сертифицированного профиля, который отвечает всем необходимым стандартам и ГОСТам. В то же время, нет смысла «гоняться» за каким-то конкретным «самым лучшим» профилем. Принципиальной разницы между продукцией ведущих мировых производителей нет.</p> </div> <div class="constructor__info-colors"> <div class="info-colors__title">Доступные цвета</div> <div class="info-colors__checker"> <div class="info-colors__checker-container"> <ul id="checker-slider" class="checker-slider"> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> </ul> <div class="checker-slider-controls"> <div class="checker-slider-controls__left"></div> <div class="checker-slider-controls__right"></div> </div> </div> </div> <div class="info-colors__description"> <div class="info-colors__description__stable">Выбрано:&nbsp;</div> <div class="info-colors__description__name">Темный дуб</div> </div> </div>');
      rozenrot1.attachEvents();

      // rozenrot 02
      console.log($('#tabsApp2').length + "--tabsApp2_asd"); // check if this essence exists
      var rozenrot2 = new Rozenrot('#tabsApp2');
      // console.log(rozenrot2);
      rozenrot2.initiateTabs('<div class="info-right-window"> <div class="info-right-title">Ваш тип окна, и его размеры</div> <div class="info-right-content"> <div class="items-container"> <div class="item-essence"> <form action="#" method="get" class="info-right-form"> <div class="item-image"><img src="img/022_item-image-essence.png" class="item-image-essence"/> <label for="addwin"></label><span class="input-wrapper"><a href="#" class="info-right-form-minus">Less</a> <input id="addwin" type="text" pattern="[0-9]*" value="1" min="0" class="people-number"/><a href="#" class="info-right-form-plus">More</a></span> </div> <div class="item-height"> <div class="item-height-text">Высота окна</div> </div> <div class="item-width"> <div class="item-width-text">Ширина окна</div> </div> </form> </div> </div> </div> </div>');
      rozenrot2.attachEvents();

      $(document).on('click', '#multiTab', function() {
        $('#tabsApp2').find('.item.tab:first').trigger( "click" );
        // console.log('done1');
        // if(!this.init){
        //   this.init = true;
        //   rozenrot2.initiateTabs('<div> to many carrots </div>');
        // }

        var biggestHeight = "0";
        var itemHeight = $('.kazldur .copy-holder .step-2').height();

        setTimeout(function(){
          if ( itemHeight > biggestHeight ) {
           biggestHeight = itemHeight;
           console.log(biggestHeight);
          }

          $(".kazldur .copy-holder").height(biggestHeight);
        }, 5);
      });

      $(document).on('click', '#singleTab', function() {

        $('#tabsApp1').find('.item.tab:first').trigger( "click" );

        var biggestHeight = "0";
        var itemHeight = $('.kazldur .copy-holder .step-1').height();

        setTimeout(function(){
          if ( itemHeight > biggestHeight ) {
           biggestHeight = itemHeight;
           console.log(biggestHeight);
          }

          $(".kazldur .copy-holder").height(biggestHeight);
        }, 5);
      });

      $(document).on('click', '#thirdTab', function() {

        var biggestHeight = "0";
        var itemHeight = $('.kazldur .copy-holder .step-3').height();

        setTimeout(function(){
          if ( itemHeight > biggestHeight ) {
           biggestHeight = itemHeight;
           console.log(biggestHeight);
          }

          $(".kazldur .copy-holder").height(biggestHeight);
        }, 5);
      });

      // $(function(){

      //- ================================




      function closeLoad(e) {
        $("#" + 'loader-' + e).removeClass('active');
      }

      // $(document).on('click', '.js_tAdd', function() {
      //   rozenrot1.appendTab('tabs');
      //   rozenrot2.appendTab('tabs');
      //   tabEssence.handleClasses();
      // });
      //
      // $(document).on('click', '.js_tAdd', function() {
      //   rozenrot1.appendTab('tabs');
      //   rozenrot2.appendTab('tabs');
      //   tabEssence.handleClasses();
      // });



      // rozenrot2.initByClick = function(){
      //   $(document).on('click', '#multiTab', function() {
      //     console.log('done1');
      //     if(!this.init){
      //       this.init = true;
      //       rozenrot2.initiateTabs('<div> to many carrots </div>');
      //     }
      //   });
      //
      //   if($(this).hasClass('active')){
      //     return false;
      //   }
      // };

      $(document).on('click', '.btnx', function(e) {
        deleteTab('tabs', e.target.id.replace('btnx-', ''));
      });



      function deleteTab(tab, nombre) {
          var n = nombre;
          var tt = $("#" + tab + " .tabsName");
          var tl = tt.find('.item').length;
          var t = $("#tab-" + n);
          var tc = $("#tab-c-" + n);
          if (!!n) {
            $('.small.modal').modal({
              closable: false,
              onDeny: function() {
                //alert('No!');
                //return false;
              },
              onApprove: function() {
                t.remove();
                tc.remove();
                if (tl > 0) {
                  var tb = $("#" + tab + " div a.tab")[tl - 4];
                  console.log(tb)
                  $(tb.click());
                  var u ="#"+tb.id;
                  console.log(u);
                  location.href=u;
                }
                $('#tabs .menu .tab').tab({});
              }
            }).modal('show');
          }
        }
        //--------------------------------------


    }












//  }
// })(jQuery); // eof autoFunction
/* eof ^^^ */
