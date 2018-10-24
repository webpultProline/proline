	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
	function checkInputForModal(block){
		$(block).find('input').each(function(){
			if($(this).attr('type') == 'email' || $(this).attr('type') == 'EMAIL'){
				if($(this).val() == '' || isEmail($(this).val()) == false){
					if($(this).parents('.input-label').hasClass('error') == false){
						$(this).parents('.input-label').addClass('error');
						if($(this).parents('.modal').length > 0){
							$(this).parents('.modal').addClass('show-error');
						}
					}
				} else {
					if($(this).parents('.input-label').hasClass('error') == true){
						$(this).parents('.input-label').removeClass('error');
						if($(this).parents('.modal').length > 0){
							$(this).parents('.modal').removeClass('show-error');
						}
					}
				}
			} else {
				if($(this).val() == ''){
					if($(this).parents('.input-label').hasClass('error') == false){
						$(this).parents('.input-label').addClass('error');
						if($(this).parents('.modal').length > 0){
							$(this).parents('.modal').addClass('show-error');
						}
					}
				} else {
					if($(this).parents('.input-label').hasClass('error') == true){
						$(this).parents('.input-label').removeClass('error');
						if($(this).parents('.modal').length > 0){
							$(this).parents('.modal').removeClass('show-error');
						}
					}
				}
			}
		});
		$(block).find('textarea').each(function(){
			if($(this).val() == ''){
				if($(this).parents('.input-label').hasClass('error') == false){
					$(this).parents('.input-label').addClass('error');
					if($(this).parents('.modal').length > 0){
						$(this).parents('.modal').addClass('show-error');
					}
				}
			} else {
				if($(this).parents('.input-label').hasClass('error') == true){
					$(this).parents('.input-label').removeClass('error');
					if($(this).parents('.modal').length > 0){
						$(this).parents('.modal').removeClass('show-error');
					}
				}
			}
		});
	}
	function returnToDefModalInput(){
		$('.modal').find('input').each(function(){
			if($(this).parents('.input-label').hasClass('error') == true){
				$(this).parents('.input-label').removeClass('error');
				$(this).parents('.modal').removeClass('show-error');
			}
		});
	}
	/*табы*/
	function changeTabContent(idBlockParent,idBlock){
		$('#'+idBlockParent).find('.proline_tab').each(function(){
			if($(this).attr('id') == idBlock){
				$(this).addClass('open');
				
				if($(this).find('.slider').length > 0){
					$(this).find('.slider').slick('slickGoTo',0);
				}
			} else {
				$(this).removeClass('open');
			}
		});
	}

$(function(){
	/*тест авторизации*/
	/*$('.auth-user-btn').click(function(event){
		event.preventDefault();
		$('.autorization-block-no').attr('data-demo','1');
		$('.autorization-block-yes').attr('data-demo','1');
		
		$('.autorization-block-no[data-demo="1"]').attr('data-demo','2').addClass('autorization-block-yes').removeClass('autorization-block-no');
		$('.autorization-block-yes[data-demo="1"]').attr('data-demo','2').addClass('autorization-block-no').removeClass('autorization-block-yes');
	});*/
	/*конец*/
	function setSubMenu(){
		if($('.header-navigation_list li').find('ul').first().length > 0){
			$('.header-navigation_list li').each(function(){
				var position_top = $(this).position().top;
				if($(this).find('ul').length > 0){
					$(this).find('ul').css({
						'top':(position_top*-1)+'px',
						'height':$('.header-navigation_list').outerHeight(true)+'px'
					});
					$(this).find('a').first().addClass('hasSubMenu');
				}
			});
			$('.header-navigation_list li').find('ul').addClass('successCount');
			$('.header-navigation_list').addClass('successCount');
		}
	}
	setSubMenu();
	/*
	фиксированная шапка
	*/
	document.onscroll = function (event) {
		fixedHeader();
	};
	function fixedHeader(){
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if($('.header-fixed').length > 0){
			var startPosition = $('.header').offset().top+$('.header').outerHeight(true);
			if(scrollTop >= startPosition){
				if($('.header-fixed').hasClass('show') == false){
					$('.header-fixed').addClass('show');
				}
			} else {
				if($('.header-fixed').hasClass('show') == true){
					$('.header-fixed').removeClass('show');
				}
			}
		}
	}
	fixedHeader();
	/**/
	$('.header-navigation').click(function(){
		if($(this).parent().find('.MainPage').length == 0){
			$(this).toggleClass('showMenu');
		}
	});
	if($('.header-navigation_main').find('.MainPage').length == 0){
		$('.header-navigation_main').find('.header-navigation').addClass('subPages');
	}
	/*
	мобильная навигация
	*/
	$('.search-mobile-btn').click(function(){
		$(this).toggleClass('show');
	});
	$('.mobile-menu_btn').click(function(){
		if($(this).hasClass('goback') == false){
			$(this).toggleClass('open-menu');
			if($(this).hasClass('open-menu') == true){
				if($('.cookies_top').hasClass('hide') == false){
					$('.cookies_top').hide();
				}
				$('body').addClass('openModal');
			} else {
				if($('.cookies_top').hasClass('hide') == false){
					$('.cookies_top').show();
				}
				$('body').removeClass('openModal');
			}
		} else {
			if(typeof $(this).attr('data-actionClass') !== typeof undefined && $(this).attr('data-actionClass') !== false && $(this).attr('data-actionClass') != ''){
				$('.'+$(this).attr('data-actionClass')).removeClass('open');
				hideSelectRegionOnMobile();
				$('.mobile-menu_btn').removeClass('goback');
				$('.mobile-full_menu').removeClass('show-sub-menu');
			}
		}
	});
	$('.mobile-full_menu-category > button').click(function(){
		$(this).toggleClass('open');
	});
	$('.mobile-full_menu-category .mobile-sub-menu').click(function(){
		$(this).toggleClass('open');
	});
	$('.mobile-select-region-btn').click(function(){
		$(this).toggleClass('open');
		$('.mobile-menu_btn').addClass('goback');
		$('.mobile-menu_btn').attr('data-actionClass','mobile-select-region-btn');
		$('.mobile-full_menu').addClass('show-sub-menu');
	});
	
	
	function hideSelectRegionOnMobile(){
		if($('.mobile-select-region-btn').hasClass('open') == true){
			if($(window).width() < 992){
				$('.mobile-select-region-btn').removeClass('open');
				$('.mobile-menu_btn').removeClass('goback');
				$('.mobile-full_menu').removeClass('show-sub-menu');
				
				window.touchForSelectRegion = 0;
				window.touchStartForSelectRegion = 0;
				window.touchCheckForSelectRegion = false;
				$('.mobile-select-region').attr('style','');
				$('.mobile-select-region').removeClass('moved');
				window.stopActionForSelectRegion = false;
			}
		}
	}
	function touchAction(){
		window.touchForSelectRegion = 0;
		window.touchStartForSelectRegion = 0;
		window.touchCheckForSelectRegion = false;
		window.touchForSelectRegionDeltaY = 0;
		window.stopActionForSelectRegion = false;
		
		$('.mobile-select-region').on('touchstart', function(event){
			if($('.mobile-select-region-btn').hasClass('open') == true){
				if($(window).width() < 992){
					window.touchStartForSelectRegion = event['originalEvent']['touches'][0]['clientX'];
					window.touchForSelectRegionDeltaY = event['originalEvent']['touches'][0]['clientY'];
					console.log();
				}
			}
		});
		$('.mobile-select-region').on('touchmove', function(event){
			if($('.mobile-select-region-btn').hasClass('open') == true){
				if($(window).width() < 992){
					var nowDeltaX = event['originalEvent']['touches'][0]['clientX'] - window.touchStartForSelectRegion;
					var nowDeltaY = event['originalEvent']['touches'][0]['clientY'] - window.touchForSelectRegionDeltaY;

					
					if(nowDeltaX > 5 && nowDeltaY < 30 && nowDeltaY > -30 && window.stopActionForSelectRegion == false){
						window.touchCheckForSelectRegion = true;
						if($('.mobile-select-region').hasClass('moved') == false){
							$('.mobile-select-region').addClass('moved')
						}
						$('.mobile-select-region').css({
							'transform':'translateX('+nowDeltaX+'px)'
						});
						window.touchForSelectRegion = nowDeltaX;
					} else {
						window.touchForSelectRegion = 0;
						window.touchStartForSelectRegion = 0;
						window.touchCheckForSelectRegion = false;
						$('.mobile-select-region').attr('style','');
						$('.mobile-select-region').removeClass('moved');
						if(window.stopActionForSelectRegion == false){
							window.stopActionForSelectRegion = true;
						}
					}
				}
			}
		});
		$('.mobile-select-region').on('touchend', function(event){
			if($('.mobile-select-region-btn').hasClass('open') == true){
				if($(window).width() < 992){
					if(window.touchForSelectRegion > ($(window).width()/2)){
						if(window.touchCheckForSelectRegion == true){
							$('.mobile-select-region-btn').removeClass('open');
							$('.mobile-menu_btn').removeClass('goback');
							$('.mobile-full_menu').removeClass('show-sub-menu');
						}
					}
					window.touchForSelectRegion = 0;
					window.touchStartForSelectRegion = 0;
					window.touchCheckForSelectRegion = false;
					$('.mobile-select-region').attr('style','');
					$('.mobile-select-region').removeClass('moved');
					window.stopActionForSelectRegion = false;
				}
			}
		});
	}
	touchAction();
	function changeTextRegionOnMobile(){
		$('.mobile-select-region-btn').find('b').text('');
		$('.mobile-select-region-btn').find('b').text($('.mobile-select-region').find('button.active').text());
	}
	changeTextRegionOnMobile();
	$('.mobile-select-region').find('button').click(function(){
		$('.mobile-select-region').find('button').removeClass('active');
		$(this).addClass('active');
		changeTextRegionOnMobile();
		hideSelectRegionOnMobile();
	});
	/*
	куки файлы
	*/
	$('.close-cookies_block').click(function(){
		$('.cookies_top').addClass('hide');
	});
	/*
	поисковик
	*/
	$('.header-search').find('form').find('input').keyup(function(){
		if($(this).val().length > 2){
			$(this).parents('form').addClass('active');
		} else {
			$(this).parents('form').removeClass('active');
		}
	});
	$('.header-search').find('form').find('input').focusin(function(){
		if($(this).val().length > 2){
			$(this).parents('form').addClass('active');
		} else {
			$(this).parents('form').removeClass('active');
		}
	});
	$('.header-search').find('form').find('input').focusout(function(){
		$(this).parents('form').removeClass('active');
	});
	/*
	модальные окна
	*/
	$('.openModalBTN').click(function(event){
		event.preventDefault();
		$('body').addClass('openModal');
		var targetBlock = $(this).attr('data-targetModal');
		$('.modal').removeClass('openModal');
		$('#'+targetBlock).addClass('openModal');
		if($('#'+targetBlock).find('.modal-slider').length > 0){
			$('#'+targetBlock).find('.modal-slider').slick('slickGoTo',0);
		}
		
		$('.HasPopUp').removeClass('OpenPopUp');
		returnToDefModalInput();
	});
	$('.close-modal').click(function(){
		$('body').removeClass('openModal');
		$(this).parents('.modal').removeClass('openModal');
	});
	if($('.phone_input').length > 0){
		$('.phone_input').inputmask({"mask": "+7 (999)999-99-99"});
	}
	$('.input-label.password').find('button').click(function(){
		$(this).parent().toggleClass('show');
		if($(this).parent().hasClass('show') == true){
			$(this).parent().find('input').first().attr('type','text');
		} else {
			$(this).parent().find('input').first().attr('type','password');
		}
	});
	$(window).click(function(event){
		if($(event.target).hasClass('modal') == true){
			$('body').removeClass('openModal');
			$(event.target).removeClass('openModal');
		}
	});
	

	$('.btn-send-request-modal').click(function(){
		checkInputForModal('.modal.openModal');
	});
	/*
	карусели
	*/
	if($('.slider-proline').length > 0){
		$('.slider-proline').each(function(){
			if(typeof $(this).attr('data-dotsSet') !== typeof undefined && $(this).attr('data-dotsSet') !== false && $(this).attr('data-dotsSet') != '0'){
				var setDots = true;
			} else {
				var setDots = false;
			}
			if(typeof $(this).attr('data-arrowNav') !== typeof undefined && $(this).attr('data-arrowNav') !== false && $(this).attr('data-arrowNav') != '0'){
				var setArrows = true;
			} else {
				var setArrows = false;
			}
			//
			if(typeof $(this).attr('data-variableWidth') !== typeof undefined && $(this).attr('data-variableWidth') !== false && $(this).attr('data-variableWidth') != '0'){
				var variableWidth = true;
			} else {
				var variableWidth = false;
			}
			if(typeof $(this).attr('data-centerMode') !== typeof undefined && $(this).attr('data-centerMode') !== false && $(this).attr('data-centerMode') != '0'){
				var centerMode = true;
			} else {
				var centerMode = false;
			}
			//
			if(typeof $(this).attr('data-dotsOnMobile') !== typeof undefined && $(this).attr('data-dotsOnMobile') !== false && $(this).attr('data-dotsOnMobile') != '0'){
				var dotsOnMobile = true;
			} else {
				var dotsOnMobile = false;
			}
			if(typeof $(this).attr('data-arrowOnMobile') !== typeof undefined && $(this).attr('data-arrowOnMobile') !== false && $(this).attr('data-arrowOnMobile') != '0'){
				var arrowOnMobile = true;
			} else {
				var arrowOnMobile = false;
			}
			
			/*адаптив*/
			var count_def = parseInt($(this).attr('data-count_def'),10);
			var xl_count = parseInt($(this).attr('data-xl_count'),10);
			var lg_count = parseInt($(this).attr('data-lg_count'),10);
			var md_count = parseInt($(this).attr('data-md_count'),10);
			var sm_count = parseInt($(this).attr('data-sm_count'),10);
			/**/
			$(this).slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: setDots,
				arrows: setArrows,
				slidesToShow: count_def,
				autoplay: true,
				variableWidth: variableWidth,
				centerMode: centerMode,
				autoplaySpeed: 5000,
				responsive: [
					{
						breakpoint: 1199,
						settings: {
							slidesToShow: xl_count
						}
					},
					{
						breakpoint: 993,
						settings: {
							slidesToShow: lg_count
						}
					},
					{
						breakpoint: 769,
						settings: {
							slidesToShow: md_count
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: sm_count,
							dots: dotsOnMobile,
							arrows: arrowOnMobile,
						}
					}
				]
			});
		});
	}
	/*
	попапы
	*/
	$('.HasPopUp').click(function(event){
		event.preventDefault();
		$('.HasPopUp').removeClass('OpenPopUp');
		if($(this).hasClass('OpenPopUp') == false){
			custom_selectEvents(true,true,$(this),'HasPopUp');
			$(this).addClass('OpenPopUp');
		}
	});
	function custom_selectEvents(status_,onactive_,parent_,parent_class_){
		window.custom_select = status_;
		window.custom_select_block = onactive_;
		window.custom_select_parent = parent_;
		window.custom_select_parent_class = parent_class_;
	}
	
	$(window).click(function(event){
		if(window.custom_select == true){
			if($(event.target).parents().hasClass(window.custom_select_parent_class) == false && $(event.target).hasClass(window.custom_select_parent_class) == false){
				if(window.custom_select_block == false){
					if(window.custom_select_parent_class == 'liked-popup'){
						window.custom_select_parent.removeClass('active');
					} else {
						window.custom_select_parent.removeClass('OpenPopUp');
					}
				}
			}
			if($(event.target).hasClass('PopUpClose') == true){
				$('.HasPopUp').removeClass('OpenPopUp');
				$('.regionHTMLInner').addClass('hideSelectRegion');
				$('.regionHTMLInner').removeClass('activeSelectRegion');
				$('.regionHTMLInner[data-show_this="true"]').addClass('activeSelectRegion');
			}
			window.custom_select_block = false;
		}
	});
	if($('.regionHTMLInner').length > 0){
		$('.regionHTMLInner').each(function(){
			$(this).addClass('hideSelectRegion');
			if(typeof $(this).attr('data-show_this') !== typeof undefined && $(this).attr('data-show_this') !== false && $(this).attr('data-show_this') == 'true'){
				$(this).addClass('activeSelectRegion');
			}
		});
		$('.changeRegion').click(function(){
			if(typeof $(this).attr('data-selector') !== typeof undefined && $(this).attr('data-selector') !== false && $(this).attr('data-selector') != ''){
				var selector = $('#'+$(this).attr('data-selector'));
				$('.regionHTMLInner').addClass('hideSelectRegion');
				$('.regionHTMLInner').removeClass('activeSelectRegion');
				selector.addClass('activeSelectRegion');
				selector.removeClass('hideSelectRegion');
			}
		});
	}
	
	$('.proline_liked-popup').find('button').first().click(function(){
		$(this).toggleClass('active');
	});
	$('.proline_comparison-popup').find('button').first().click(function(){
		$(this).toggleClass('active');
	});
	
	$('.js-liked-popup').click(function(event){
		event.preventDefault();
		if($(this).find('.liked-popup').hasClass('active') == false){
			custom_selectEvents(true,true,$(this).find('.liked-popup'),'liked-popup');
			$(this).find('.liked-popup').first().toggleClass('active');
		}
	});
	/*
	табы в карточке
	*/
	$('.proline_tabs').find('.proline_tab-nav li').click(function(){
		$('.proline_tabs').find('.proline_tab-nav li').removeClass('active');
		$(this).addClass('active');
		
		changeTabContent($(this).attr('data-parentBlock'),$(this).attr('data-tabId'));
	});
	if($('.proline_tab').length > 0){
		changeTabContent($('.proline_tabs').find('.proline_tab-nav li.active').attr('data-parentBlock'),$('.proline_tabs').find('.proline_tab-nav li.active').attr('data-tabId'));
	}
	/*
	отзывы
	*/
	$('.review-like , .review-dislike').click(function(){
		$(this).toggleClass('active');
	});
	/*
	карусель фото в карточке
	*/
	if($('.product-image-slider').length > 0){
		$('.product-image-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			centerMode: true,
			vertical: true,
			verticalSwiping: true
		});
		
		$('.product-image-slider .product-slide').click(function(){
			var backGround = $(this).find('.product-slide-image').css('background-image');
			var position_slide = parseInt($(this).attr('data-slick-index'),10);
			//console.log(position_slide);
		});
		$('.product-image-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			//console.log(nextSlide);
			//console.log(nextSlide);
			var backGround = $('.product-image-slider .product-slide[data-slick-index="'+nextSlide+'"]').find('.product-slide-image').css('background-image');
			console.log(backGround);
		});
	}
	/*
	списки в подвале
	*/
	$('.footer_top .list-links p , .footer_top .list-payment p').click(function(){
		$(this).parent().toggleClass('open');
	});
	/*
	ошибки
	*/
	var alert_info = {
		'subMenuFixedHeader':'была нарушена структура сайта, проверьте код для фиксированного меню.'
	}
	/**/
	if($('.style_new_jquery').length > 0){
		$('.style_new_jquery').styler();
	}
	if($(".select_region ul").length > 0){
		$(".select_region ul").mCustomScrollbar({
			theme:"dark",
			axis: 'y'
		});
	}
	if($('.header-navigation_row').length > 0){
		$(".header-navigation_row").mCustomScrollbar({
			theme:"dark",
			axis: 'y'
		});
		//
		$('.header-navigation_row').find('a').mouseenter(function(){
			if($(this).find('span').hasClass('hasSubMenu-fixed_header') == true){
				var check_attr = $.trim($(this).text());
				var attr = $(this).attr('data-inside_menu');
				if(typeof attr !== typeof undefined && attr !== false){
					if($('.header-navigation_row-second').length > 0){
						if(typeof $('.header-navigation_row-second').attr('data-action_now') == typeof undefined && $('.header-navigation_row-second').attr('data-action_now') == false){
							$('.header-navigation_row-second').attr('data-action_now','');
						}
						if($('.header-navigation_row-second').attr('data-action_now') != check_attr){
							$('.header-navigation_row-second').attr('data-action_now',check_attr);
							$('.header-navigation_row-second .mCSB_container').html('');
							$('.header-navigation_row-second .mCSB_container').html(attr);
							if($('.header-navigation_row-second').hasClass('show') == false){
								$('.header-navigation_row-second').addClass('show');
							}
							//  // returns a random integer from 1 to 10
							var selector_for_mouse = Math.floor(Math.random() * 1000) + 100;
							if(typeof $('.header-navigation_row-second').attr('data-action_now') == typeof undefined && $('.header-navigation_row-second').attr('data-action_now') == false){
								$('.header-navigation_row-second').attr('data-action_now','');
							}
							while(parseInt($('.header-navigation_row-second').attr('data-action_now'),10) == selector_for_mouse){
								console.log('совпадение - '+selector_for_mouse);
								selector_for_mouse = Math.floor(Math.random() * 2) + 1;
							}
							$('.header-navigation_row-second').attr('data-action_now',selector_for_mouse);
							//
							$('.header-navigation_row-second[data-action_now="'+selector_for_mouse+'"]').find('a').mouseenter(function(){
								if($(this).find('span').hasClass('hasSubMenu-fixed_header') == true){
									if($('.header-navigation_row-third').length > 0){
										var check_attr2 = $.trim($(this).text());
										var attr_2 = $(this).attr('data-inside_menu');
										if(typeof attr_2 !== typeof undefined && attr_2 !== false){
											if(typeof $('.header-navigation_row-third').attr('data-action_now') == typeof undefined && $('.header-navigation_row-third').attr('data-action_now') == false){
												$('.header-navigation_row-third').attr('data-action_now','');
											}

												$('.header-navigation_row-third').attr('data-action_now',check_attr2);
												$('.header-navigation_row-third .mCSB_container').html('');
												$('.header-navigation_row-third .mCSB_container').html(attr_2);
												if($('.header-navigation_row-third').hasClass('show') == false){
													$('.header-navigation_row-third').addClass('show');
												}

										} else {
											alert(alert_info['subMenuFixedHeader']);
										}
									} else {
										alert(alert_info['subMenuFixedHeader']);
									}
								}
							});
						}
					} else {
						alert(alert_info['subMenuFixedHeader']);
					}
				} else {
					alert(alert_info['subMenuFixedHeader']);
				}
			}
		});
		
		$('.header-navigation_dark_background').mouseenter(function(){
			$('.header-navigation_row-second').removeClass('show');
			$('.header-navigation_row-third').removeClass('show');
		});
		$('.header-navigation_dark_background').click(function(){
			$('.header-fixed').find('.header-navigation').removeClass('showMenu');
			$('.header-navigation_row-second').removeClass('show');
			$('.header-navigation_row-third').removeClass('show');
		});
	}
	if($('.header-navigation_row-second').length > 0){
		$(".header-navigation_row-second").mCustomScrollbar({
			theme:"dark",
			axis: 'y'
		});
	}
	if($('.header-navigation_row-third').length > 0){
		$(".header-navigation_row-third").mCustomScrollbar({
			theme:"dark",
			axis: 'y'
		});
	}
	//mCSB_container
	/*
	выбор языка
	*/
	if($('.lang-select').length > 0){
		$('.lang').find('.jq-selectbox__dropdown li').each(function(){
			var lang = $(this).text();
			var add_class = '';
			switch(lang){
				case 'Английский' : {
					add_class = 'en';
				} break;
				case 'Русский' : {
					add_class = 'ru';
				} break;
				case 'Китайский' : {
					add_class = 'ch';
				} break;
			}
			//
			$(this).addClass(add_class);
		});
		//
		$('.lang-select').change(function(){
			if($(this).val() != ''){
				var lang = $(this).val();
				var add_class = '';
				switch(lang){
					case 'Английский' : {
						add_class = 'en';
					} break;
					case 'Русский' : {
						add_class = 'ru';
					} break;
					case 'Китайский' : {
						add_class = 'ch';
					} break;
				}
				if($('.lang').find('.jq-selectbox__select-text').hasClass('en') == true){$('.lang').find('.jq-selectbox__select-text').removeClass('en');}
				if($('.lang').find('.jq-selectbox__select-text').hasClass('ru') == true){$('.lang').find('.jq-selectbox__select-text').removeClass('ru');}
				if($('.lang').find('.jq-selectbox__select-text').hasClass('ch') == true){$('.lang').find('.jq-selectbox__select-text').removeClass('ch');}
				
				$('.lang').find('.jq-selectbox__select-text').addClass(add_class);
			}
		});
		
		if($('.lang').find('.jq-selectbox__select-text').text() != ''){
			var lang = $('.lang').find('.jq-selectbox__select-text').text();
			var add_class = '';
			switch(lang){
				case 'Английский' : {
					add_class = 'en';
				} break;
				case 'Русский' : {
					add_class = 'ru';
				} break;
				case 'Китайский' : {
					add_class = 'ch';
				} break;
			}
			if($('.lang').find('.jq-selectbox__select-text').hasClass('en') == true){$('.lang').find('.jq-selectbox__select-text').removeClass('en');}
			if($('.lang').find('.jq-selectbox__select-text').hasClass('ru') == true){$('.lang').find('.jq-selectbox__select-text').removeClass('ru');}
			if($('.lang').find('.jq-selectbox__select-text').hasClass('ch') == true){$('.lang').find('.jq-selectbox__select-text').removeClass('ch');}
			
			$('.lang').find('.jq-selectbox__select-text').addClass(add_class);
		}
	}
	/*
	dropdown's
	*/
	$('.dropmenu').click(function(){
		$('.HasPopUp').removeClass('OpenPopUp');
		if($(this).hasClass('OpenPopUp') == false){
			custom_selectEvents(true,true,$(this),'dropmenu');
			$(this).addClass('OpenPopUp');
		}
	});
});