	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
	function checkInputForModal(block){
		$(block).find('input').each(function(){
			if($(this).prop('disabled') == false){
				if($(this).attr('type') == 'email' || $(this).attr('type') == 'EMAIL'){
					if($(this).val() == '' || isEmail($(this).val()) == false){
						if($(this).parents('.input-label').hasClass('error') == false){
							$(this).parents('.input-label').addClass('error');
							if($(this).parents(block).length > 0){
								$(this).parents(block).addClass('show-error');
							}
						}
					} else {
						if($(this).parents('.input-label').hasClass('error') == true){
							$(this).parents('.input-label').removeClass('error');
							if($(this).parents(block).length > 0){
								$(this).parents(block).removeClass('show-error');
							}
						}
					}
				} else {
					if($(this).val() == ''){
						if($(this).parents('.input-label').hasClass('error') == false){
							$(this).parents('.input-label').addClass('error');
							if($(this).parents(block).length > 0){
								$(this).parents(block).addClass('show-error');
							}
						}
					} else {
						if($(this).parents('.input-label').hasClass('error') == true){
							$(this).parents('.input-label').removeClass('error');
							if($(this).parents(block).length > 0){
								$(this).parents(block).removeClass('show-error');
							}
						}
					}
				}
			} else {
				if($(this).parents('.input-label').hasClass('error') == true){
					$(this).parents('.input-label').removeClass('error');
					if($(this).parents(block).length > 0){
						$(this).parents(block).removeClass('show-error');
					}
				}
			}
		});
		$(block).find('textarea').each(function(){
			if($(this).prop('disabled') == false){
				if($(this).val() == ''){
					if($(this).parents('.input-label').hasClass('error') == false){
						$(this).parents('.input-label').addClass('error');
						if($(this).parents(block).length > 0){
							$(this).parents(block).addClass('show-error');
						}
					}
				} else {
					if($(this).parents('.input-label').hasClass('error') == true){
						$(this).parents('.input-label').removeClass('error');
						if($(this).parents(block).length > 0){
							$(this).parents(block).removeClass('show-error');
						}
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
	

	function renderObject(e,t,a){window.addEventListener("resize",function(){camera.aspect=e.clientWidth/e.clientHeight,camera.updateProjectionMatrix(),
	r.setSize(e.clientWidth,e.clientHeight),
	o()},!1);var i=e.clientWidth,n=e.clientHeight;e.setAttribute("width",i),e.setAttribute("height",n);var r=new THREE.WebGLRenderer({canvas:e});r.setClearColor(3355443),r.setPixelRatio(window.devicePixelRatio),r.setSize(i,n),r.shadowMap.enabled=!0,r.shadowMap.type=THREE.PCFSoftShadowMap,scene=new THREE.Scene,scene.background=new THREE.Color('rgb(255,255,255)'),camera=new THREE.PerspectiveCamera(35,e.clientWidth/e.clientHeight,1,5e3),camera.up.set(0,.5,1),camera.position.set(0,0,0),scene.add(camera);var d=new THREE.OrbitControls(camera,r.domElement);d.addEventListener("change",o),d.minDistance=1500,d.maxDistance=4e3,d.enablePan=!0,d.target.set(0,0,0),d.update(),dirLight=new THREE.DirectionalLight(16774337,1),dirLight.color.setHSL(.1,1,.95),dirLight.position.set(50,50,150),dirLight.position.multiplyScalar(1),scene.add(dirLight),scene.add(new THREE.AmbientLight(16777215,.5)),dirLight.castShadow=!0,dirLight.shadow.mapSize.width=2048,dirLight.shadow.mapSize.height=2048;dirLight.shadow.camera.left=-50,dirLight.shadow.camera.right=50,dirLight.shadow.camera.top=50,dirLight.shadow.camera.bottom=-50,dirLight.shadow.camera.far=4500,dirLight.shadow.bias=-1e-4;new THREE.LoadingManager;function o(){r.render(scene,camera)}(new THREE.MTLLoader).setPath(t).load(a+".mtl",function(e){e.preload(),(new THREE.OBJLoader).setMaterials(e).setPath(t).load(a+".obj",function(e){e.position.y=-200,e.castShadow=!1,e.receiveShadow=!1,scene.add(e)})}),function e(){r.render(scene,camera),requestAnimationFrame(function(){e()})}()}

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
		fixedMobileHeader();
		fixedComparisonSlider();
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
			if($(this).hasClass('showMenu') == true){
				custom_selectEvents(true,true,$(this),'header-navigation_list');
			}
		}
	});
	if($('.header-navigation_main').find('.MainPage').length == 0){
		$('.header-navigation_main').find('.header-navigation').addClass('subPages');
	}
	/*
	для груп инпутов с чекбоксом
	*/
	if($('.patronymic-group').length > 0){
		$('.patronymic-group').find('.checkbox-label').click(function(){
			if($(this).find('input[type="checkbox"]').prop('checked') == true){
				$(this).parents('.patronymic-group').find('.input-label input').prop('disabled',true);
			} else {
				$(this).parents('.patronymic-group').find('.input-label input').prop('disabled',false);
			}
		});
	}
	/*
	мобильная навигация
	*/
	
	function fixedMobileHeader(){
		if($(window).width() < 992){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			if(scrollTop > $('.header-mobile').height()){
				if($('.header-mobile').hasClass('scrolled') == false){
					$('body').addClass('mobile_header_scolled');
					$('.header-mobile').addClass('scrolled');
				}
			} else {
				if($('.header-mobile').hasClass('scrolled') == true){
					$('body').removeClass('mobile_header_scolled');
					$('.header-mobile').removeClass('scrolled');
				}
			}
		}
	}
	fixedMobileHeader();
	function fixedComparisonSlider(){
		if($('.comparison-rightside').length > 0){
			if($(window).width() < 573){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				var position_carousel = $('.comparison-rightside').offset().top-47;
				if(scrollTop > position_carousel){
					if($('.slider.slider-proline.slider-proline_smallCard').hasClass('scrolled') == false){
						$('.comparison-rightside').css({
							'height':($('.slider.slider-proline.slider-proline_smallCard .slick-slide').outerHeight(true))+'px'
						});
						$('.slider.slider-proline.slider-proline_smallCard').addClass('scrolled');
					}
				} else {
					if($('.slider.slider-proline.slider-proline_smallCard').hasClass('scrolled') == true){
						$('.comparison-rightside').css({
							'height':'auto'
						});
						$('.slider.slider-proline.slider-proline_smallCard').removeClass('scrolled');
					}
				}
			}
		}
	}
	fixedComparisonSlider();
	
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
		if($('#'+targetBlock).find('canvas').length > 0){
			renderObject(document.getElementById('proline_product_virtual_view_scene'),$(this).attr('data-path3D'),$(this).attr('data-name3D'));
		}
		
		$('.HasPopUp').removeClass('OpenPopUp');
		returnToDefModalInput();
	});
	$('.close-modal').click(function(){
		if($('.mobile-menu_btn').hasClass('open-menu') == false){
			$('body').removeClass('openModal');
		}
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
			if($('.mobile-menu_btn').hasClass('open-menu') == false){
				$('body').removeClass('openModal');
			}
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
			//
			if(typeof $(this).attr('data-autoPlay') !== typeof undefined && $(this).attr('data-autoPlay') !== false && $(this).attr('data-autoPlay') != '0'){
				var autoPlay = false;
			} else {
				var autoPlay = true;
			}
			if(typeof $(this).attr('data-infinite') !== typeof undefined && $(this).attr('data-infinite') !== false && $(this).attr('data-infinite') != '0'){
				var infinite = false;
			} else {
				var infinite = true;
			}
			
			/*адаптив*/
			var count_def = parseInt($(this).attr('data-count_def'),10);
			var xl_count = parseInt($(this).attr('data-xl_count'),10);
			var lg_count = parseInt($(this).attr('data-lg_count'),10);
			var md_count = parseInt($(this).attr('data-md_count'),10);
			var sm_count = parseInt($(this).attr('data-sm_count'),10);
			/**/
			$(this).slick({
				infinite: infinite,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: setDots,
				arrows: setArrows,
				slidesToShow: count_def,
				autoplay: autoPlay,
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
	
	if($('i.info').length > 0){
		$('i.info').mouseenter(function(){
			
			var container_position_left = $(this).parents('.container').offset().left + parseInt($(this).parents('.container').css('padding-left'),10);
			var position_info_popup_left = $(this).find('.info__popup').offset().left;

			console.log('cotainer : '+container_position_left+"\ninfo-block : "+position_info_popup_left);

			if(container_position_left > position_info_popup_left){
				$(this).find('.info__popup').css('right','-'+(container_position_left-position_info_popup_left)+'px');
			}
		});
	}
	
	$(window).click(function(event){
		if(window.custom_select == true){
			if($(event.target).parents().hasClass(window.custom_select_parent_class) == false && $(event.target).hasClass(window.custom_select_parent_class) == false){
				if(window.custom_select_block == false){
					if(window.custom_select_parent_class == 'liked-popup'){
						window.custom_select_parent.removeClass('active');
					}
					if(window.custom_select_parent_class == 'HasPopUp'){
						window.custom_select_parent.removeClass('OpenPopUp');
					}
					if(window.custom_select_parent_class == 'header-navigation_list'){
						window.custom_select_parent.removeClass('showMenu');
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
	$('.proline_product-link').click(function(){
		changeTabContent("proline_product-tabs_info","tab-characteristics");
		$('.proline_tabs').find('.proline_tab-nav li').removeClass('active');
		$('.proline_tabs').find('.proline_tab-nav li[data-tabid="tab-characteristics"]').addClass('active');
		$('html, body').stop().animate({scrollTop: $('#tab-characteristics').offset().top - 50 }, 800);
	});
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
		//для построения галереи
		$('.product-image-slider .product-slide').each(function(){
			var src = $(this).find('.product-slide-image').attr('data-src');
			$('.proline_product-image-container').append('<div class="productGallery-photo" style="display:none!important" data-src="'+src+'"></div>');
		});
		//
		$('.product-image-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			centerMode: true,
			vertical: true,
			verticalSwiping: true,
			responsive: [
				{
					breakpoint: 993,
					settings: {
						verticalSwiping: false,
						vertical: false,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 4,
						verticalSwiping: false,
						vertical: false,
						centerMode: true,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						verticalSwiping: false,
						vertical: false,
						centerMode: true,
					}
				}
			]
		});
		
		var backGround = $('.product-image-slider .product-slide[data-slick-index="0"]').find('.product-slide-image').css('background-image');
		var srcBackground = $('.product-image-slider .product-slide[data-slick-index="0"]').find('.product-slide-image').attr('data-src');
		$('.proline_product-image').css('background-image',backGround);
		$('.proline_product-image').attr('data-src',srcBackground);
		
		$('.product-image-slider .product-slide').click(function(){
			var backGround = $(this).find('.product-slide-image').css('background-image');
			var srcBackground = $(this).find('.product-slide-image').attr('data-src');
			
			var position_slide = parseInt($(this).attr('data-slick-index'),10);
			$('.proline_product-image').css('background-image',backGround);
			$('.product-image-slider').slick('slickGoTo',position_slide);
			$('.proline_product-image').attr('data-src',srcBackground);
		});
		$('.product-image-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var backGround = $('.product-image-slider .product-slide[data-slick-index="'+nextSlide+'"]').find('.product-slide-image').css('background-image');
			var srcBackground = $('.product-image-slider .product-slide[data-slick-index="'+nextSlide+'"]').find('.product-slide-image').attr('data-src');
			$('.proline_product-image').css('background-image',backGround);
			$('.proline_product-image').attr('data-src',srcBackground);
		});
		$('.productGallery').lightGallery({
			download: false,
			counter: true,
			thumbnail: false,
			selector: '.productGallery-photo',
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
	/*сравнение*/
	if($('.comparison-bottom').length > 0){
		$('.comparison-bottom').find('.proline_product-characteristics_title').click(function(){
			$(this).toggleClass('open');
		});
		//
		function setInfoComparison(){
			var comparison_tabindex_for_while = parseInt($('.comparison-rightside .slider-proline_smallCard').find('.slick-current').attr('data-slick-index'),10);
			var comparison_tabindex = parseInt($('.comparison-rightside .slider-proline_smallCard').find('.slick-current').attr('data-slick-index'),10);
			var product_line_comparison = 1;
			while(comparison_tabindex < (comparison_tabindex_for_while+3)){
				$('.comparison-rightside .slider-proline_smallCard').find('.slick-slide[data-slick-index="'+comparison_tabindex+'"]').not('.slick-cloned').find('.comparison-hidden-constructor p').each(function(){
					var this_text = $(this).text();
					$('.proline_product-characteristics_before-row[data-data-product_info="'+$(this).attr('data-data-product_info')+'"]').find('.comparison-proline_product-info_'+product_line_comparison).text('');
					$('.proline_product-characteristics_before-row[data-data-product_info="'+$(this).attr('data-data-product_info')+'"]').find('.comparison-proline_product-info_'+product_line_comparison).text(this_text);
				});
				comparison_tabindex++;
				product_line_comparison++;
			}
		}
		setInfoComparison();
		$('.comparison-rightside .slider-proline_smallCard').on('afterChange', function(event, slick, currentSlide, nextSlide){
			setInfoComparison();
			
		});
	}
});