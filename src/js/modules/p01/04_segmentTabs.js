/* отрабатывать только для определенной страницы
	================================================ */
(function($) {
 if($('body').is('.page-index')){

   if($('.step.second .radial-progress').hasClass('.inactive')) {


    //  //  animate 1st MUSTACHE
    //   $( ".step.second, .step.third, .num-arr" ).mouseover(function() {
    //    $(this).find( ".lines-item:eq(0), .lines-item:eq(2)" ).animate({
    //      width: '25px'
    //    }, 500, function() {
    //      // Animation complete.
    //    });
    //    $(this).find( ".lines-item:eq(1)" ).stop(true).animate({
    //      width: '50px'
    //    }, 500, function() {
    //      // Animation complete.
    //    });
    //  });
    //   $( ".step.second, .step.third, .num-arr" ).mouseout(function() {
    //    $(this).find( ".lines-item:eq(0), .lines-item:eq(2)" ).animate({
    //      width: '10px'
    //    }, 500, function() {
    //      // Animation complete.
    //    });
    //    $(this).find( ".lines-item:eq(1)" ).stop(true).animate({
    //      width: '20px'
    //    }, 500, function() {
    //      // Animation complete.
    //    });
    //  });


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
    var lineNext = 	$(this).parent('.step').next().find('.lines-item.regular');
    var lineMidNext = 	$(this).parent('.step').next().find('.lines-item.mid');
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
    el.siblings('.num').fadeOut(300);

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

		mainTl.to(line, 0.15, {width: "90px"})
		mainTl.to(lineMid, 0.15, {width: "90px"});


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
  // $(".copy-holder *").each(function(){
  setTimeout(function(){
    $(".kazldur .copy-holder .step-tab").each(function(){
     if ($(this).height() > biggestHeight ) {
       biggestHeight = $(this).height()
      //  console.log(biggestHeight);
     }
    });

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

      };
      Rozenrot.prototype.numberTabs = 1;

      Rozenrot.prototype.initiateTabs = function(tabCont){
        var self = this;

        self.numberTabs = 1;
        setTimeout(function(){

          self.container.find('#tabs .menu .tab').tab({});
          self.appendTab('tabs', 'Окно 1', tabCont);
          // appendTab('tabs', 'Окно 2', 'Custom content <u>Cool</u>');

        }, 5);
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

            t.find('.js_tAdd').remove();
            t.append('<a class="item tab" data-tab="' + tn + '" id="tab-' + tn + '">' + kl + ' <i class="close icon btnx" id="btnx-' + tn + '"></i></a>')
              .append('<a class="item tabx js_tAdd" id="tAdd"><i class="add square icon"></i></a>');

            tt.append('<div class="ui tab tabc segment" data-tab="' + tn + '" id="tab-c-' + tn + '">' + contenido + ' </div>')
            this.container.find('.js_tabs .menu .tab').tab({});
          }
          this.container.find("#tab-" + tn).click();
      }




      console.log($('#tabsApp1').length + "_asd");
      var rozenrot1 = new Rozenrot('#tabsApp1');
      var rozenrot2 = new Rozenrot('#tabsApp2');
      console.log(rozenrot1);
      rozenrot1.initiateTabs('<div class="constructor__info-img"><img src="img/001_tab1_cont-img.png"/></div> <div class="constructor__info-title">Профиль</div> <div class="constructor__info-text"> <p>Основной элемент в конструкции металлопластикового окна – детали из профиля ПВХ (поливинилхлорида), из которых собирается окно. От качества пластикового профиля зависят надежность и срок службы окна</p> <p>его изолирующие характеристики и внешний вид. Нужно выбирать окна, изготовленные только из качественного сертифицированного профиля, который отвечает всем необходимым стандартам и ГОСТам. В то же время, нет смысла «гоняться» за каким-то конкретным «самым лучшим» профилем. Принципиальной разницы между продукцией ведущих мировых производителей нет.</p> </div> <div class="constructor__info-colors"> <div class="info-colors__title">Доступные цвета</div> <div class="info-colors__checker"> <div class="info-colors__checker-container"> <ul id="checker-slider" class="checker-slider"> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> <li class="checker-slider__item"> <div class="checker-slider__item-essence"></div> </li> </ul> <div class="checker-slider-controls"> <div class="checker-slider-controls__left"></div> <div class="checker-slider-controls__right"></div> </div> </div> </div> <div class="info-colors__description"> <div class="info-colors__description__stable">Выбрано:&nbsp;</div> <div class="info-colors__description__name">Темный дуб</div> </div> </div>');
      console.log(rozenrot1);
      rozenrot2.initiateTabs();



      //- ================================




      function closeLoad(e) {
        $("#" + 'loader-' + e).removeClass('active');
      }

      $(document).on('click', '#tAdd', function() {
        rozenrot1.appendTab('tabs');
        tabEssence.handleClasses();
      });

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
      var person = {
        name: "Василий"
      };

      var tabEssence = {
        commonItems: function(){
          var result = document.querySelectorAll('.item.tab');
          return result;
        },
        itemsLength: function(){
          var result = this.commonItems();
          return result.length;
        },
        activeItemWidth: function(){
          var result = document.querySelector('.active.item').offsetWidth;
          return result
        },
        widthForNonActiveTabs: function(){
          var calc = 550 - this.activeItemWidth() - 40;
          var result = calc / this.itemsLength();
          return result;
        },
        setNonActiveTabsWidth: function(){
          var elem = document.querySelectorAll('.item.tab:not(.active)');
          var width = 0;
          if (elem.length >= 4){
            for (i = 0; i < elem.length; ++i) {
              elem[i].style.width = this.widthForNonActiveTabs() + 'px';
              if (elem.length >= 10){
                elem[i].style.padding = 0;
              }
            }
          }
        },
        handleClasses: function(){
            console.log('eta');
            var elements = document.querySelectorAll('.item.tab');
            for (var i = 0; i < elements.length; ++i) {
              elements[i].classList.remove('overtabed');
            }
            var nonActiveElements = document.querySelectorAll('.item.tab:not(.active)');
            for (var i = 0; i < nonActiveElements.length; ++i) {
              nonActiveElements[i].classList.add('overtabed');
            }
            this.setNonActiveTabsWidth();
        }
      };




    }












 }
})(jQuery); // eof autoFunction
/* eof ^^^ */
