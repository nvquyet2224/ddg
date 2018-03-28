(function ($) {
	var methods = { on: $.fn.on, bind: $.fn.bind };
	$.each(methods, function(k){
	  $.fn[k] = function () {
	  var args = [].slice.call(arguments),
	  delay = args.pop(),
	  fn = args.pop(),
	  timer;
	  args.push(function () {
	  var self = this,
	  arg = arguments;
	  clearTimeout(timer);
	  timer = setTimeout(function(){
	  fn.apply(self, [].slice.call(arg));
	  }, delay);
	});
	  return methods[k].apply(this, isNaN(delay) ? arguments : args);
	 };
	});
}(jQuery));



$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};


var timex;
var timerf;
var isScroll  = false;
var doWheel   = true;
var doTouch   = true;
var isFirst   = true;
var loading   = true;
var isRun     = false;
var login 		= false;

var oldIndex  = 0;
var pageCount = 0;

var Itemx = '.header:not(".fixed") .nav li, .header.fixed .nav li, .sub-nav li, .best-item, .onus-txt li, .idea-form .require-col > div, .document-01 .box-info, .document-02 .box-info';
var windscroll = $(document).scrollTop();
var zoomPC = false;


function execSearch() {
    var qsearch = $('#qsearch').val();
    var href_search = $('#href_search').val();
    var defaultvalue = $('#defaultvalue').val();

    if (qsearch == defaultvalue)
        return false;
    if (qsearch != '') {
        var url = href_search + '?qsearch=' + encodeURIComponent(qsearch)

        window.location = url;
        return false;
    }
}


function Search() {
		
		$(document).on('click', '.search-but', function(e){
				
					if($(this).hasClass('active')){
							$('.search-form, .search-but').removeClass('active');
							execSearch();
					}else{
							$('.search-form, .search-but').addClass('active');
							var txt_search_default = $('.form-row-search input[type="text"]').attr('data-holder');
							$('.form-row-search input[type="text"]').val(txt_search_default);
					}
					
		});
		
		$('.form-row-search input[type="text"]').keydown(function(e) {
				if (e.keyCode == 13) {
						execSearch();
				}
		});
		
}

function NavClick() {
		$('.nav-but').on('click', function(e) {
						
            if ($(this).hasClass('active')) {

									if($('.slide-bg').length){
													var Full = $('.slide-bg')[0].swiper;
													Full.startAutoplay();
									}
									$('.nav-overlay, .navigation, .nav-but').removeClass('active');
									$('html, body, .container').removeClass('no-scroll');

            } else {
	
									if($('.slide-bg').length){
													var Full = $('.slide-bg')[0].swiper;
													Full.stopAutoplay();
									}
	
									$('.nav-overlay, .navigation, .nav-but').addClass('active');
									$('html, body, .container').addClass('no-scroll');


            }


            return false;
		
    });
			
		
}
 

function StopTime() {
	if(timex > 0){
		clearTimeout(timex);
		timex = 0;
	}
	if(timerf > 0){
		clearTimeout(timerf);
		timerf = 0;
	}

}

function addMove() {
	
	$('.left-box').removeClass('play');
	$('.left-box span.move').removeClass('move');
	
	StopTime();
	
	if($('.move .left-box').hasClass('type-01')){
		timerf = setTimeout(function(){ $('.type-01').addClass('play'); },0);
		
	}else if($('.move .left-box').hasClass('type-02')){
		timerf = setTimeout(function(){ $('.type-02').addClass('play'); },900);
	}
	
	$('.move .left-box span').each(function(i){
			var box = $(this);
			timex = setTimeout(function(){$(box).addClass('move')}, (i+1) * 40);
	});
	
} 

function AniText() {
	$('.title-page').addClass('show');
	$('.title-page h1').children().children().each(function(i){
	var box = $(this);
		setTimeout(function(){$(box).addClass('move')}, (i+1) * 100);
	});
	
}

function SlidePicture() {
	
	 // HOME 
		if($('.slider-home').length){
				var Time =  $('.slider-home').attr('data-time');
				if($('.bg-home').length <= 1) {
					 $('.pagination').css({'display': 'none'});
					 Time = false;
				}
				var Full = new Swiper('.slide-bg', {
				autoplay: Time,
				speed: 800,
				loop:false,
				slidesPerView: 1,
				pagination: '.pagination',
				paginationClickable: true,
				autoplayDisableOnInteraction: false,
				effect: "fade",
				onInit: function (swiper) {
			   },
			   onTransitionStart: function (swiper) {		
			   },
			   onTransitionEnd: function (swiper) {
				   	$('.item-container').removeClass('move');
						$('.item-container').eq(swiper.activeIndex).addClass('move');
						addMove();
			   }, 
			});
			
		}
		
		//INNER
		if($('.slider-inner').length) {
			var Time =  $('.slider-inner').attr('data-time');
			if($('.bg-inner').length <= 1) {
				 $('.slider-inner .pagination').css({'display': 'none'});
				 Time = false;
			}
			
			var Full = new Swiper('.slide-bg', {
				autoplay: Time,
				speed: 1000,
				loop:true,
				paginationClickable: true,
				pagination: '.pagination',
				effect: "fade",
				onInit: function (swiper) {
					
				},
				onTransitionStart: function (swiper) {
				},
				onTransitionEnd: function (swiper) {
				},
			});
			
	
		}
		
		//HOME latest slider
		if( $('.latest-slider').length){
			
				$('.latest-slider').BTQSlider({
						itemsCustom : [
							[0, 1],
							[560, 2],
							[900, 3]
							],
							slideSpeed: 800,
							paginationSpeed: 800,
							navigation: false
				});
				
		}
		
		//HOME document slider
		if($('.document-slider').length){
				$('.document-slider').BTQSlider({
					singleItem : true,
					slideSpeed: 800,
					paginationSpeed: 800,
					autoHeight: true,
					navigation:true
				});
				
		}
		
		//HOME video slider
		if($('.video-thumb-slider').length){
			
				if($('.video-thumb-item').length <= 1){
						$('.video-thumb').addClass('hide');
				}
				
				$('.video-thumb-slider').BTQSlider({
						itemsCustom : [
						[0, 3],
						[600, 3]
						],
						slideSpeed: 800,
						paginationSpeed: 800,
						autoPlay : false,
						navigation : true,
						stopOnHover : true,
						autoHeight : true
				});
			
				$('.video-slider').BTQSlider({
						singleItem : true,
						slideSpeed: 800,
						paginationSpeed: 800,
						navigation : false,
						pagination:false,
						mouseDrag:false,
						touchDrag:false,
						afterAction:function(el){
								this.$BTQItems.removeClass('selected');
								this.$BTQItems.eq(this.currentItem).addClass('selected');
						}
				});
						
						
				//About video slider
				$('.video-thumb-item').on('click', function(e){
						e.preventDefault();
						
						$('.video-thumb-item').removeClass('current');
						$(this).addClass('current');
						var curVideo = $('.video-slider .selected').index();
						//Pause    
						player[curVideo].pauseVideo();
				
						var num = $(this).parent().data("slide-item");
						$('.video-slider').trigger("BTQ.goTo",num);
						
						
						return false;
					
				});
			
		}
		
     //MANAGER ABOUT
		 if( $('.manager-slide').length){
					var PR = $('.manager-slide').parent().find('.tab');
					$('.manager-slide').BTQSlider({
							singleItem : true,
							navigation : false,
							pagination : false,
							autoHeight : true,
							slideSpeed: 800,
							mouseDrag : false,
							touchDrag : false,
							afterInit : function(el){
							$(PR).find('li:first').addClass('current');
							},
							afterAction: function(el){
								this.$BTQItems.removeClass('select-manager');
								this.$BTQItems.eq(this.currentItem).addClass('select-manager');
								var IDx = $('.select-manager').find('.conten-manager').attr('data-manager');
								$(PR).find('li').removeClass('current');
								$(PR).find('li a[data-goto="' + IDx + '"]').parent().addClass('current');
								$('.content-info').removeClass('showup');
								$('.conten-manager').removeClass('hide');
								detectBut()
							}
					});
					
					$('.manager-box .sub-inner.tab li').on('click', function(){
							$(PR).find('li').removeClass('current');
							var Index = $(this).index();
							$('.manager-slide').trigger('BTQ.goTo', Index);
					});
					
	 }
        
    //MAP ABOUT
    if( $('.network-box').length){
					var PRN = $('.network .tab');
					$('.network-slider').BTQSlider({
							singleItem : true,
							navigation : false,
							pagination : false,
							autoHeight : true,
							slideSpeed: 800,
							mouseDrag : false,
							touchDrag : false,
							afterInit : function(el){
									$(PRN).find('li:first').addClass('current');
							},
							afterAction: function(el){
								this.$BTQItems.removeClass('select-network');
								this.$BTQItems.eq(this.currentItem).addClass('select-network');
								var IDx = $('.select-network').find('.network-item').attr('data-network');
								$(PRN).find('li').removeClass('current');
								$(PRN).find('li a[data-goto="' + IDx + '"]').parent().addClass('current');
								detectBut()
							}
					});
					
					$('.network .sub-inner.tab li').on('click', function(){
							$(PRN).find('li').removeClass('current');
							var Index = $(this).index();
							$('.network-slider').trigger('BTQ.goTo', Index);
					});
		  
	   }
		 
		 
		 //FACILITY
		 if($('.screen').length){
			 
					$('.screen-slider').each(function(index, element) {
            	
							$(element).BTQSlider({
									itemsCustom : [
									[0, 1],
									[521, 2]
									],
									slideSpeed: 800,
									paginationSpeed: 800,
									autoPlay : false,
									navigation : false,
									stopOnHover : true,
									autoHeight : false
							});
							
          });
					
		 }
		 
		//IDEAS project group
		if( $('.project-slider').length){
			
				$('.project-slider').BTQSlider({
						itemsCustom : [
							[0, 1],
							[560, 2],
							[900, 3]
							],
							slideSpeed: 800,
							paginationSpeed: 800,
							navigation: false
				});
				
		}

		
		//NEWS link slider
		if ($('.news-link').length) {
				 
				 if($(window).width() > 1100){
							$('.news-link').BTQSlider({
									itemsCustom : [
									[300, 3]
									],
									slideSpeed: 600,
									paginationSpeed: 600,
									navigation : true
							});
				 }
				 
		}
		
	 setTimeout(Check,0);
		
}


function Check() {
		
	//HOME latest slider
	if($('.latest-slider').length) {
			var Length = $('.latest-item').length;
			if($(window).width() >= 900){	 
					if(Length >= 3){
							$('.latest-box').removeClass('TA-center');
					
					}else{
							$('.latest-box').addClass('TA-center');
					}
			
			}else if($(window).width() >= 560 && $(window).width() < 900){
					if(Length >= 2){
							$('.latest-box').removeClass('TA-center');
					
					}else{
							$('.latest-box').addClass('TA-center');
					}
					
			}else {
					$('.latest-box').removeClass('TA-center');
			}
	
	}
		
	//HOME video slider
	if($('.video-thumb-box').length){

			var Length = $('.video-thumb-item').length;
			if(Length == 1){
				$('.video-thumb').css({'display': 'none'});
			}else if(Length == 2){
				$('.video-thumb-box').addClass('TA-center');
			}
		
	}
	
	
	/*
	//ABOUT: COMPANY SLIDER
	if($('.company-slider').length) {
			var Length = $('.item-box').length;
			if($(window).width() >= 741){	 
					if(Length >= 2){
							$('.company-pics').removeClass('TA-center');
					
					}else{
							$('.company-pics').addClass('TA-center');
					}
			
			}else {
					$('.company-pics').removeClass('TA-center');
			}
	
	}			
	
	//SOLUTION: SOLUTION SLIDER
	if($('.solution-content').length) {
		
		$('.solution-slider').each(function(index, element) {
      	var Length = $(element).find('.item-box').length;
				
				if($(window).width() >= 900){	 
					if(Length >= 3){
							$(element).parent().removeClass('TA-center');
					
					}else{
							$(element).parent().addClass('TA-center');
					}
			
				}else if($(window).width() >= 500 && $(window).width() < 900){
						if(Length >= 2){
								$(element).parent().removeClass('TA-center');						
						}else{
								$(element).parent().addClass('TA-center');
						}
						
				}else {
						$(element).parent().removeClass('TA-center');
				}
				
    });
		
	}
	
	//ABOUT: COMPANY SLIDER
	if($('.company-slider').length) {
			var Length = $('.item-box').length;
			if($(window).width() >= 741){	 
					if(Length >= 2){
							$('.company-pics').removeClass('TA-center');
					
					}else{
							$('.company-pics').addClass('TA-center');
					}
			
			}else {
					$('.company-pics').removeClass('TA-center');
			}
	
	}			
				
	//PRODUCT: OTHER SLIDER
	if($('.other-slider').length) {
			var Length = $('.other-item').length;
			if($(window).width() >= 900){	 
					if(Length >= 3){
							$('.other-box').removeClass('TA-center');
					
					}else{
							$('.other-box').addClass('TA-center');
					}
			
			}else if($(window).width() >= 500 && $(window).width() < 900){
					if(Length >= 2){
							$('.other-box').removeClass('TA-center');
					
					}else{
							$('.other-box').addClass('TA-center');
					}
					
			}else {
					$('.other-box').removeClass('TA-center');
			}
	
	}
			
	//PROJECT: PRODUCT GROUP
	if($('.thumb-slider').length) {
			var Length = $('.thumb-pic').length;
			if($(window).width() >= 700){	 
					if(Length >= 6){
							$('.thumb-box').removeClass('TA-center');
					
					}else{
							$('.thumb-box').addClass('TA-center');
					}
			
			}else if($(window).width() >= 400 && $(window).width() < 700){
					if(Length >= 4){
							$('.thumb-box').removeClass('TA-center');
					
					}else{
							$('.thumb-box').addClass('TA-center');
					}
					
			}else {
					if(Length >= 3){
							$('.thumb-box').removeClass('TA-center');
					
					}else{
							$('.thumb-box').addClass('TA-center');
					}
					
			}
	
	}
		
	//NEWS
	if($('.news-link').length){
		$('.news-link').each(function(index, element) {
		  var Length = $(this).find('.link-page').length;
			
			if($(window).width() >= 700){
					$('.gallery-box').removeClass('TA-center');
					if(Length >= 3){
							$(this).parent().removeClass('TA-center');
					}else{
							$(this).parent().addClass('TA-center');
					}
					
			}else if( 370 <= $(window).width() && $(window).width() < 700){
					if(Length >= 2){
						$(this).parent().removeClass('TA-center');
					}else{
						$(this).parent().addClass('TA-center');
					}
					
			}else{
					$(this).parent().addClass('TA-center');
			}
			
		});
	}
	*/
	
}


function VideoLoad(idx) {
     $.ajax({url: idx, cache: false, success: function(data) {
            $('.allvideo').append(data);
			if($('#view-video').length){
			var ThisVideo = document.getElementById("view-video");
            function playVid() {
                ThisVideo.play();
            }
            function pauseVid() {
                ThisVideo.pause();
            }
			}
			
			$('.loadicon').fadeOut(300, 'linear', function() {
				if($('#view-video').length){
				playVid();
				}
				 $('.loadicon').removeClass('loader');
				 
             });
          
            var length = $('#view-video').length;
            $('.close-video').on( 'click',function() {
				
                if (length != 0) {
                    pauseVid();
                }
              
                $('.allvideo').fadeOut(500, 'linear', function() {
                    $('.overlay-dark').removeClass('show');
										
										
                    $('.allvideo .video-list').remove();  
					$('html, body').removeClass('no-scroll');
					
					if($('.to-scrollV').length) {
						var top = $('.to-scrollV').offset().top;
						$('.to-scrollV').removeClass('to-scrollV');
						
						if($(window).width() < 1100) {
							$('html, body').scrollTop(top - 60);
						}
					}
					
					
                });
		 
		    });
       }
		
		
   });

		
}

function AlbumLoad(url,num) {
     $.ajax({url: url, cache: false, success: function(data) {
				$('.all-album').append(data);
				
				if($('.all-album .album-load').length >1){
						$('.all-album .album-load').last().remove();
				}
				
				$(".pic-name > h3").lettering('words').children("span").lettering().children("span").lettering();
				$(".pic-name > small").lettering('words').children("span").lettering().children("span").lettering();
			 
				if ($(window).width() > 1100) {
						var ZOOM = 1;
				}else if ($(window).width() > 740 && $(window).width() <= 1100) {	
						var ZOOM = 2;
				}else{
						var ZOOM = 3;
				}
				
				var slideAlbum = new Swiper('.album-center', {
						zoom: true, 
						zoomMax: ZOOM,
						lazyLoading: true,
						watchSlidesVisibility: true,
						preloadImages: false,
						slidesPerView: 1,
						speed: 600,
						grabCursor: true,
						nextButton: '.next-pic',
						prevButton: '.prev-pic',
						spaceBetween: 0,
						centeredSlides: true, 
						keyboardControl: true,
						mousewheelControl: true,
						onInit: function (swiper) {
						swiper.slideTo(num, 0, true);
						addText();
						if(ZOOM > 1){
							$('.container-zoom img').addClass('zoomscale');
						}
						
						},	
						onTransitionStart: function (swiper) {
						
						},
						onTransitionEnd: function (swiper) {
						
							$('.container-zoom img').removeClass('zoomin');
							$('.close-album, .slide-pic-nav').removeClass('level-index-out');
							addText();
						
						}, 
				
				});
				 
				function addText() {
						clearTimeout(timex);
						$('.pic-name').removeClass('move');	
						$('.pic-name h3').children().children().removeClass('move');
						$('.pic-name small').children().children().removeClass('move');
						$('.item-active').find('.pic-name').addClass('move');
						
						$('.move h3, .move  small').children().children().each(function(i){
								var box = $(this);
								//var timex = setTimeout(function(){$(box).addClass('move')}, (i+1) * 100);
								var timex = setTimeout(function(){$(box).addClass('move')}, (i+1) * 20);
						});
				
				}
				
				
				$('.album-load').animate({'opacity':1}, 100, 'linear', function() {
						if ($('.album-pic-center').length > 1) {
								$('.slide-pic-nav').css({'display': 'block'});
						}
						
						$('.loadicon').fadeOut(300, 'linear', function() {
								$('.loadicon').removeClass('loader');
						});
				});

				$('.close-album').on("click" ,function() {
						$('.all-album').fadeOut(500, 'linear', function() {
								$('.overlay-dark').removeClass('show');
								$('.album-load').remove();
								
						});
						
						$('html, body').removeClass('no-scroll');
						
						return false;
						
				});
			
           	
				var overlay = document.querySelector('.all-album');
						overlay.addEventListener("touchmove", function(event) {
						event.preventDefault();
				});

   }});
}


function newsListLoad(url) {
	
  $.ajax({url: url, cache: false, success: function(data) {
        
        pageCount++;
        $('.news-list').append(data);
				
        if(pageCount > 1){
            $('.more-box').addClass('hide');
        }
        
				$('.page-load-status').removeClass('show');
        loading = true;
      	onScroll();					
				
  }});
  
}


function ideasListLoad(url) {
	
  $.ajax({url: url, cache: false, success: function(data) {
        
        pageCount++;
				
        $('.project-list').append(data);
        if(pageCount > 1){
            $('.more-box').addClass('hide');
        }
        
        $('.page-load-status').removeClass('show');
        onScroll();
        loading = true;
      						
  }});
  
}
function NewsLoad(url, OpenTab) {
		
		 //$('.load-details').remove();
		
		 $.ajax({url: url, cache: false, success: function(data) {
				
                $('.load-data').html(data);
                detectBut();

                $('.load-text a, .load-text p a').click(function(e){
                        e.preventDefault();
                        var  url = $(this).attr('href');
                        window.open(url, '_blank');
                        return false;
                });  

                $('.load-text img').addClass('zoom-pic');
                ZoomPic();

                $('.load-bg').animate({'opacity': 1}, 300, 'linear', function() {
                    $('.load-details').addClass('fadeinup');

                     $('.loadicon').fadeOut(300, 'linear', function() {
                                $('.news-link').removeClass('no-link');
                                $('.loadicon').removeClass('loader');
                                $('.load-data').css({'min-height':$(window).height()/2});
                                isFirst = false;
                    });

                });

		}});
  
}


//Function reload facebook
function reloadSocialButtons() {
		try {
				// Facebook
				var f = $('<div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>');
				$(f).attr('data-href', location.href);
				$('#fbholder').empty();
				$(f).appendTo($('#fbholder'));
				FB.XFBML.parse(document);
		} catch(ex){}
}

function getComment(url,name){
			
			$('#comments-container').comments({
					profilePictureURL: url,
					roundProfilePictures: true,
					youText: name,
					textareaRows:3,
					//fileURL: 'file_url',
					//fileMimeType: 'image/png',
					textareaRowsOnFocus:3,
					maxRepliesVisible:1,
					enableAttachments: false,
					enableHashtags: true,
					getComments: function(success, error) {
						setTimeout(function() {
							success(commentsArray);
						}, 150);
					},
					postComment: function(data, success, error) {
							
							if(!login){
									$('.news-comment a, .comment-overlay').addClass('show');
							}else{
									setTimeout(function() {
											console.log('postComment');
											success(data);
									}, 150);
							}
							
					},
					putComment: function(data, success, error) {
						setTimeout(function() {
							//console.log('putComment');
							success(data);
						}, 150);
					},
					deleteComment: function(data, success, error) {
						setTimeout(function() {
							//console.log('deleteComment');
							success();
						}, 150);
					},
					upvoteComment: function(data, success, error) {
						setTimeout(function() {
							//console.log('upvoteComment');
							success(data);
						}, 150);
					},
					uploadAttachments: function(dataArray, success, error) {
						setTimeout(function() {
							//console.log('uploadAttachments');
							success(dataArray);
						}, 150);
					},
					refresh: function(data, success, error){
						setTimeout(function() {
							//console.log('refresh');
						}, 150);
					}
			});
			
}					
						
//FUNC LOAD PROJECT
function ProjectLoad(url, OpenTab) {
		
		 $.ajax({url: url, cache: false, success: function(data) {
				
            $('.project-load').html(data);
							
						//IDEAS  project album
						if( $('.project-album').length){
							
								$('.project-album').BTQSlider({
										itemsCustom : [
											[0, 1],
											[560, 2],
											[900, 3],
											[1101, 4]
											],
											slideSpeed: 800,
											paginationSpeed: 800,
											navigation: true
								});
									
						}
						
						if($('#comments-container').length){
								getComment('../images/icon-user.png', 'you');	
						}
						$('.project-load').animate({'opacity': 1}, 300, 'linear', function() {
								
								 $('.loadicon').fadeOut(300, 'linear', function() {
												reloadSocialButtons();
												$('.project-slider').removeClass('no-link');
												$('.loadicon').removeClass('loader');
												$('.project-load').css({'min-height':$(window).height()/2});
												onScroll();
												isFirst = false;
								});

						});
						
		}});
  
}


//FUNC load Popup
function popupLoad(url) {
		$.ajax({url: url, cache: false, success: function(data) {
				$('.details-content').remove();
				
				$('body').prepend(data);
				
				$('.details-content').stop().animate({'opacity': 1}, 600, 'linear', function() {
						$('.details-center').addClass('fadeinup');
						
						$('.loadicon').fadeOut(300, 'linear', function() {
								$('.loadicon').removeClass('loader');
						});
						
				});
				
				//close pop
				$('.close-popup, .details-content span').on('click',function() {
						
						$('.details-content').stop().animate({'opacity': 0}, 600, 'linear', function() {
								$('.details-content').remove();
								$('.overlay-dark').removeClass('show');
								$('html, body').removeClass('no-scroll');
						});
						
						return false;
				
				});
				
				
		}});
}

function FocusText(){
	
	$('.title-cap').on('click', function(){
			$('.input-area').addClass('is-focus');
			document.getElementById("ct-comment").focus();
			
	});

	$('input, textarea').focus(function (e) {
		if($(this).attr('data-holder') == $(this).val()) { $(this).val(""); }
		
	}).focusout(function (e) {
		$('.input-area').removeClass('is-focus');
		if ($(this).val() == "") { $(this).val($(this).attr('data-holder')); }
		
	});
				
}


function AnimationDelay(){

	var arrAni = Itemx.split(',');
	$(arrAni).each(function(index,element) {
		
       $(element).each(function(i, elm) {
            var minDelay = 50;
            var maxDelay = 350;
            var time = Math.floor(i + 1) * (( maxDelay - minDelay )/2 - minDelay);
            $(this).css({'-webkit-animation-delay': time + 'ms', 'animation-delay': time + 'ms'});
      });
    
  });
	
	
}


function LinkPage(){
	
	function ChangPage(linkLocation){
			$('.header').css({'opacity':0});
			$('.nav li').removeClass('current');
			$('.overlay-menu').trigger('click');
			var OutCenter = $('.slider-home, .slider-inner, .overlay-menu, .container, .go-top');
			$(OutCenter).addClass('fadeout');
	}
	
	$('.nav li a').on("click", function(e) {
				e.preventDefault();
				var linkLocation = $(this).attr("href");
				window.location = linkLocation;
				ChangPage(linkLocation);
				return false;
	});
	
	
}


function onScroll(){

	var aniArr = $('.title, .ani-item, .bottom, .footer, .title-box, .screen, .screen-detail, .screen-slider, .screen-mask, .details-pic, .details-txt, .project-album, #comments-container, .idea-group-box, .news-item, .library-item, .cooperation-item, .document-list .box-info');
	$(aniArr).each(function() {
		if($(this).isInViewport()){
			$(this).addClass("on-show");
			
		}else{
			$(this).removeClass("on-show");
            
		}
		
	});
	
	
}


function ContentLoad(){
		ResizeWindows();
		LinkPage();
		FocusText();
		Search();
		NavClick();
		Option();
		
		SlidePicture();
		
		var IDPage = $('body').attr('id');
		
		if(IDPage == 'ideas-group-page' || IDPage=='ideas-details-page'){
				IDPage ='ideas-page';
		}else if(IDPage == 'project-details-page'){
				IDPage ='projects-page';
		}else if(IDPage == 'news-details-page'){
				IDPage ='news-page';
		}
		
		$('.nav li[data-page= "' + IDPage + '"]').addClass('current');
		
		$('.slider-home, .slider-inner').addClass('show');
		
		setTimeout(function(){
          	$('.header:not(.fixed)').css({'opacity':1});
						if($('#home-page').length){
							$('.item-active').addClass('move');
							addMove();
						}
						$('section').addClass('show-sp');
						AniText();
					  onScroll();
            
		},610);
			
		if($('#home-page').length){
				setTimeout(function(){ $('.scroll-down').addClass('play').addClass('show'); },400);
				$('.scroll-down').on('click',function(){
						if($(window).width() > 1100){
							var top = $('.slider-home').height();
							$('html, body').stop().animate({ scrollTop: top}, 1000, 'easeInOutExpo');
						}
				});
				
		}else{
				$('.logo').css({'cursor':'pointer'});
				$('.logo').on("click", function() { $('.nav ul:nth-child(1) li:nth-child(1) a').trigger('click'); });
		}
		
		//ABOUT PAGE
		if ($('#about-page').length) {
						
						$('.zoom-hover').on('click', function () {
								
								var IDx = $(this).attr('data-detail');
								var Lx = $(this).offset().left;
								var Tx = $(this).offset().top;
								var Width = $(".content-info").width();
								var Height = $(".content-info[data-info='" + IDx + "']").innerHeight();
								$('.content-info[data-info= "' + IDx + '"]').css({'left': $(window).width()/2 - Width/2, 'top':$(window).height()/2 - (Height/2)});
								$('.content-info[data-info= "' + IDx + '"]').addClass('showup');
								$('.conten-manager').addClass('hide');
						});
						
						$('.close-box, .conten-manager span').on('click',function () {
								
								$('.content-info').removeClass('showup');
								$('.conten-manager').removeClass('hide');
								
						});
						
						$('.center-map').on('click', '.list-result li', function(e){
								e.preventDefault();
								e.stopPropagation();
								
								if($(window).width() > 900){
										var id = $(this).attr('data-id');
										var marker = null;
										
										//Tìm marker tương ứng
										for(var i = 0; i < centerMarker.length; i++){
											if(centerMarker[i].id == id){
													marker = centerMarker[i];
													byClick = true;
													break;
											}
										}
										
										google.maps.event.trigger(marker, 'click');
								}
								
								return false;
								
						});
						
						
						$('.sub-map').on('click', '.list-result li', function(e){
								e.preventDefault();
								e.stopPropagation();
								
								if($(window).width() > 900){
										var id = $(this).attr('data-id');
										var marker = null;
										
										//Tìm marker tương ứng
										for(var i = 0; i < subMarker.length; i++){
											if(subMarker[i].id == id){
													marker = subMarker[i];
													byClick = true;
													break;
											}
										}
										
										google.maps.event.trigger(marker, 'click');
								}
								
								return false;
								
						});
						
						$('.club-map').on('click', '.list-result li', function(e){
								e.preventDefault();
								e.stopPropagation();
								
								if($(window).width() > 900){
										var id = $(this).attr('data-id');
										var marker = null;
										
										//Tìm marker tương ứng
										for(var i = 0; i < clubMarker.length; i++){
											if(clubMarker[i].id == id){
													marker = clubMarker[i];
													byClick = true;
													break;
											}
										}
										
										google.maps.event.trigger(marker, 'click');
								}
								
								return false;
								
						});
					
		}

		//IDEAS
		if($('#facility-page').length){
				setTimeout(ScrollSlide,100);
			 
		}
		
		//IDEAS PAGE
		if($('#ideas-group-page').length){
				
				$('.more-but').on('click', function(e){
						e.preventDefault();
						
						if(loading){
							loading = false;
							
							if(pageCount  <= 1){
								
								$('.page-load-status').removeClass('no-more').addClass('show');
								var url = $(this).attr('href');
								setTimeout(function(){
									ideasListLoad(url);
								},150);
							}
							
						}
						
						return false;
				});
				
		}
		
		//IDEAS DETAILS PAGE
		if($('#ideas-details-page').length){
					$('.ajax-project').on('click', function (e) {
						
							e.preventDefault();
							
							$('.project-slider').addClass('no-link');
							
							if(!$('.loadicon').hasClass('loader')){
									$('.loadicon').show();
									$('.loadicon').addClass('loader');
									DrawLoad();
							}
							
							$('.project-item').removeClass('current');
							$(this).parent().addClass('current');
							
							var Goto = $('.slide-item').index($('.slide-item .project-item.current').parent());

							$('.project-slider').trigger('BTQ.goTo', Goto);
							
							var url = $(this).attr('href');
							var Detail = $(this).attr('data-details');
							window.location.hash = Detail;
							
							if(isFirst == false){
									var delTop = 0;
									
									if($(window).width() > 1100){
										delTop = 70;	
									}else{
										delTop = 60;
									}
									var top = $('.project-details').offset().top - delTop;
									
									$('html, body').stop().animate({ scrollTop: top}, 1000, 'easeInOutExpo', function() {
											$('.project-load').css({'min-height': $('.project-load').innerHeight()});
											$('.project-load').animate({'opacity': 0}, 300, 'linear', function() {
													ProjectLoad(url);
											});
									});
									
							}else{
								$('.project-load').animate({'opacity': 0}, 300, 'linear', function() {
										ProjectLoad(url);
								});
								
							}
							
							return false;
							
				});
								
				$('.project-load').on('click', '.zoom-album', function(e){
							e.preventDefault();
							var url = $(this).attr('href');
							
							var index = $(this).attr('data-go') || -1;
							
							if(!$('.loadicon').hasClass('loader')){
									$('.loadicon').show();  
									$('.loadicon').addClass('loader');
									DrawLoad();					
							}
							
							$('html, body').addClass('no-scroll');
							$('.overlay-dark').addClass('show');
							
							$('.all-album').fadeIn(700, 'linear', function() {
									AlbumLoad(url,index);
							});
							
							return false;
							
			});
				
			if(window.location.hash){
					LocationHash();

			}else{
					$('.project-slider').find('.ajax-project').first().trigger('click');
			}

		}
		
		//NEWS PAGE
		if ($('#news-page, #cooperation-page').length) {
				
				$('.more-but').on('click', function(e){
						e.preventDefault();
						
						if(loading){
							loading = false;
							
							if(pageCount  <= 1){
								
								$('.page-load-status').removeClass('no-more').addClass('show');
								var url = $(this).attr('href');
								setTimeout(function(){
									newsListLoad(url);
								},150);
							}
							
						}
						
						return false;
				});
				
				$('.news-list').on('click', '.album-view', function(e){
							e.preventDefault();
							var url = $(this).attr('href');

							var index = $(this).attr('data-go') || -1;
							
							if(!$('.loadicon').hasClass('loader')){
									$('.loadicon').show();  
									$('.loadicon').addClass('loader');
									DrawLoad();					
							}
							
							$('html, body').addClass('no-scroll');
							$('.overlay-dark').addClass('show');
							
							$('.all-album').fadeIn(700, 'linear', function() {
									AlbumLoad(url,index);
									
							});
							
							return false;
							
				});
				
				$('.news-list').on('click', '.play-video', function(e){
							e.preventDefault();
							$(this).parent().addClass('to-scrollV');
							
							if($('.popup-video img').length){
								$('.popup-pics, .popup-video').removeClass('fadeinup').addClass('fadeout');
								$('.close-popup').removeClass('fadeinup').addClass('fadeout');
							}
							
							var idx = $(this).attr('href');
							
							if(!$('.loadicon').hasClass('loader')){
								$('.loadicon').show();  
								$('.loadicon').addClass('loader');
								DrawLoad();
								
							}
							
							$('html, body').addClass('no-scroll');
							$('.overlay-dark').addClass('show');
									
							$('.allvideo').fadeIn(700, 'linear', function() {
									VideoLoad(idx);
							});
							
							return false;
				
							
				});
				
						
				//Event: 
				$('.news-list').on('click', '.cooperation-link', function(e) {
						e.preventDefault();

						var url = $(this).attr('href');
			
						$('html, body').addClass('no-scroll');

						if(!$('.loadicon').hasClass('loader')){
									$('.loadicon').show();
									$('.loadicon').addClass('loader');
									DrawLoad();
									$('.overlay-dark').addClass('show');
									popupLoad(url);	
						}
					 
						return false;
				});
				
				
				setTimeout(detectBut,100);
		}
			
	
		//NEWS DETAILS PAGE//
		if ($('#news-details-page').length) {

					$('.link-page').on('click', function (e) {
						
							e.preventDefault();
							
							$('.news-link').addClass('no-link');
							
							if(!$('.loadicon').hasClass('loader')){
									$('.loadicon').show();
									$('.loadicon').addClass('loader');
									DrawLoad();
							}
							
							$('.link-page').removeClass('current');
							$(this).addClass('current');
							
							var  Goto = $('.slide-item').index($('.slide-item .link-page.current').parent());
							$('.news-link').trigger('BTQ.goTo', Goto);
							
							if(!$('#recruitment-page').length){
								 var Detail = $(this).find('a').attr("data-details");
								 window.location.hash = Detail;
							}
							
							var url = $(this).find('a').attr('href'); 
							
							if($('.news-content').length && isFirst == false){
									var delTop = 70;
									var top = $('.load-content').offset().top - delTop;
									
									$('html, body').stop().animate({ scrollTop: top}, 1000, 'easeInOutExpo', function() {
											$('.load-data').css({'min-height': $('.load-data').innerHeight()});
											$('.load-bg').animate({'opacity': 0}, 300, 'linear', function() {
													NewsLoad(url);
											});
									});
									
							}else{
								$('.load-bg').animate({'opacity': 0}, 300, 'linear', function() {
										NewsLoad(url);
								});
								
							}
							
							return false;
							
					});

					if(window.location.hash){
							LocationHash();

					}else{
							$('.news-link').find('.link-page').first().trigger('click');
					}

		}
		

		 $('.map-info').on('click', '.area-icon', function(e){
					e.preventDefault();
					e.stopPropagation();
					
					if($(window).width() > 900){
						var areaId = $(this).attr('area-id');
						var marker;
						
						//Tìm marker tương ứng
						for(var i = 0; i < homeMarker.length; i++){
							if(homeMarker[i].id == areaId){
								marker = homeMarker[i];
								byClick = true;
								break;
							}
						}
						google.maps.event.trigger(marker, 'click');
					}
					return false;
		});
			
			
		//$('html, body').scrollTop(0);
		isScroll = true;
		
}


function Zoom(elm){
		
			$('html, body').addClass('no-scroll');
			zoomPC = true;
			$(this).parent().addClass('to-scrollZ');
			
			if(!$('.loadicon').hasClass('loader')){
					$('.loadicon').show();
					$('.loadicon').addClass('loader');
					DrawLoad();					
			}
			
			$('.all-pics').addClass('show');
			$('.all-pics').append('<div class="full size-large"  style="display:block"></div>');
			
			$('.overlay-dark').addClass('show');
			
			var activePicLarge = $(elm).attr("src"); 
			$('.all-pics').find('.full').append('<img src ="'+(activePicLarge)+'" alt="pic" />');
			
			$('.all-pics').find('.full').append('<span></span>');
			$('body').append('<div class="close-pics"></div>');
			$('.all-pics').append('<div class="close-pics-small"></div>'); 
			
			$('.all-pics img').on( "load", function() {
					$('.all-pics').addClass('show');
					
					if(TouchLenght == false  || !isTouchDevice){ 
							$('.full').addClass('dragscroll');
							$('.dragscroll').draptouch();
							
					}else{
							$('.full').addClass('pinch-zoom');
							$('.pinch-zoom').each(function () {
									new Pic.PinchZoom($(this), {});
							});
					}
					
					if($('.full img').length>1){
							$('.full img').last().remove()
					}
					
					$('.loadicon').fadeOut(400, 'linear', function() {
							
							if(TouchLenght == false  || !isTouchDevice){ 
									detectMargin();
							}
							
							$('.full img').addClass('fadein');
							$('.loadicon').removeClass('loader');
							
					});
			
			});
			
			if($(window).width() > 1100) {
					$('.full span').on('click', function () {
							$('.close-pics').trigger('click');
					});
			}	
			
			$('.close-pics-small, .close-pics').on("click" ,function() {
					zoomPC = false;
					$('.loadicon').removeClass('loader');
					$('.full').fadeOut(300, 'linear', function() {
							$('.overlay-dark').removeClass('show');
							$('.all-pics .full,  .all-pics .pinch-zoom-container').remove();
							$('.close-pics-small, .close-pics').remove();
							$('.all-pics').removeClass('show');
							
							if(!$('.house').length){
									$('html, body').removeClass('no-scroll');
									
									if($('.to-scrollZ').length) {
											var top = $('.to-scrollZ').offset().top;
											$('.to-scrollZ').removeClass('to-scrollZ');
													if($(window).width() < 1100) {
															$('html, body').scrollTop(top - 60);
													}
									}
							}
							
					});	
					
		});
			
}

 
function ZoomPic() {

   $('img').on("click" ,function() {
					
					if($(this).hasClass('zoom-pic')){
							if($(window).width() > 740){
								return false;
							}
							$('html, body').addClass('no-scroll');
							
							$(this).parent().addClass('to-scrollZ');
							
							
								if(!$('.loadicon').hasClass('loader')){
										$('.loadicon').show(); 
										$('.loadicon').addClass('loader');
										DrawLoad();					
								}
							
							$('.all-pics').addClass('show');
							$('.all-pics').append('<div class="full"  style="display:block"></div>');
							
							$('.overlay-dark').addClass('show');
							var activePicLarge = $(this).attr("src");
							
							$('.all-pics').find('.full').append('<img src ="'+(activePicLarge)+'" alt="pic" />');
							$('.all-pics').find('.full').append('<span></span>');
							$('body').append('<div class="close-pics"></div>');
							$('.all-pics').append('<div class="close-pics-small"></div>'); 
							
							$('.all-pics img').on( "load", function() {
									$('.all-pics').addClass('show');
									
									if(TouchLenght == false  || !isTouchDevice){ 
											$('.full').addClass('dragscroll');
											$('.dragscroll').draptouch();
											
									}else{
											$('.full').addClass('pinch-zoom');
											$('.pinch-zoom').each(function () {
													new Pic.PinchZoom($(this), {});
											});
									}
									
									if($('.full img').length>1){
											$('.full img').last().remove()
									}
									
									$('.loadicon').fadeOut(400, 'linear', function() {
											
											if(TouchLenght == false  || !isTouchDevice){ 
													detectMargin();
											}
											
											$('.full img').addClass('fadein');
											$('.loadicon').removeClass('loader');
											
									});
							
							});
							
							if($(window).width() > 1100) {
									$('.full span').on('click', function () {
											$('.close-pics').trigger('click');
									});
							}	
							
							$('.close-pics-small, .close-pics').on("click" ,function() {
									
									$('.loadicon').removeClass('loader');
									$('.full').fadeOut(300, 'linear', function() {
											$('.overlay-dark').removeClass('show');
											$('.all-pics .full,  .all-pics .pinch-zoom-container').remove();
											$('.close-pics-small, .close-pics').remove();
											$('.all-pics').removeClass('show');
											
											if(!$('.house').length){
													$('html, body').removeClass('no-scroll');
													
													if($('.to-scrollZ').length) {
															var top = $('.to-scrollZ').offset().top;
															$('.to-scrollZ').removeClass('to-scrollZ');
																	if($(window).width() < 1100) {
																			$('html, body').scrollTop(top - 60);
																	}
													}
											}
											
									});	
									
							});
							
					}
					return false;
					
					
    });
		
}




function Option() {
		
		$('.brochure-but').on("click", function(e) {
				e.preventDefault();
				var  url = $(this).attr('href');
				window.open(url, '_blank');
				return false;
				
		});
    
		$('a.player, .view-video').on("click", function(e) {
					e.preventDefault();
					$(this).parent().addClass('to-scrollV');
					
					if($('.popup-video img').length){
						$('.popup-pics, .popup-video').removeClass('fadeinup').addClass('fadeout');
						$('.close-popup').removeClass('fadeinup').addClass('fadeout');
					}
					
					var idx = $(this).attr('href');
					
					if(!$('.loadicon').hasClass('loader')){
						$('.loadicon').show();  
						$('.loadicon').addClass('loader');
						DrawLoad();
						
					}
					
					$('html, body').addClass('no-scroll');
					$('.overlay-dark').addClass('show');
            	
					$('.allvideo').fadeIn(700, 'linear', function() {
							VideoLoad(idx);
					});
					
					return false;
		
		});
	
		$('.view-album').on("click", function(e){
		  	
				e.preventDefault();
				var url = $(this).attr('href');
				
				var index = $(this).attr('data-go') || -1;
				
				if(!$('.loadicon').hasClass('loader')){
						$('.loadicon').show();  
						$('.loadicon').addClass('loader');
						DrawLoad();					
				}
				
				$('html, body').addClass('no-scroll');
				$('.overlay-dark').addClass('show');
				
				$('.all-album').fadeIn(700, 'linear', function() {
						AlbumLoad(url,index);
						
				});
				
				return false;
				
		
		});

		$('.zoom:not(.album), .zoom-mobile').on("click" ,function() {
					
					
					if($(this).hasClass('zoom-pc')){
							zoomPC = true;
					}
					
					$('html, body').addClass('no-scroll');
					
					if(!$('.loadicon').hasClass('loader')){
							$('.loadicon').show();  
							$('.loadicon').addClass('loader');
							DrawLoad();					
					}
					 
					$('.all-pics').addClass('show');
					$('.all-pics').append('<div class="full"  style="display:block"></div>');
					$('.overlay-dark').addClass('show');
					
					var activePicLarge = $(this).parent().find('img').attr("src") || $(this).parent().find('img').attr("data-src");
					var newActive = activePicLarge.replace("_s", "_l");
					
					$('.all-pics').find('.full').append('<img src ="'+(newActive)+'" alt="pic" />');
					$('.all-pics').find('.full').append('<span></span>');
					$('body').append('<div class="close-pics"></div>');
					$('.all-pics').append('<div class="close-pics-small"></div>');
					
					
					$('.all-pics img').on("load",function() {
					$('.all-pics').addClass('show');
					
					if(TouchLenght == false  || !isTouchDevice){ 
							$('.full').addClass('dragscroll');
							$('.dragscroll').draptouch();
					}else{
							$('.full').addClass('pinch-zoom');
							$('.pinch-zoom').each(function () {
									new Pic.PinchZoom($(this), {});
							});
					}
					
					if($('.full img').length>1){
							$('.full img').last().remove()
					}
					
					$('.loadicon').fadeOut(400, 'linear', function() {
							
							if(TouchLenght == false  || !isTouchDevice){ 
									detectMargin();
							}
							
							$('.full img').addClass('fadein');
									$('.loadicon').removeClass('loader');
							});
							
					});
					
					if($(window).width() > 1100) {
							$('.full span').on('click', function () {
									$('.close-pics').trigger('click');
							});
					}	
					
					
					$('.close-pics, .close-pics-small').on("click" ,function() {
							zoomPC = false;
							$('.full').fadeOut(300, 'linear', function() {
									$('.loadicon').removeClass('loader');
									$('.overlay-dark').removeClass('show');
									$('.all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container').remove();
									$('.close-pics, .close-pics-small').remove();
									$('.all-pics').removeClass('show');  
									$('html, body').removeClass('no-scroll');
									
							});
							
					});
					
					return false;
		});
	
		$('.go-top').on("click" ,function() {
				$('html, body').stop().animate({scrollTop: 0}, 'slow');
				if($(window).width() > 1100){
						$('head').removeClass('hide');
				}
		});

}



function turnWheelTouch(){
	doWheel = true;
	doTouch = true;
}  

function StopBanner(){
  if($('.slide-bg.slide-container-horizontal').length){
	   var Full = $('.slide-bg')[0].swiper;
		if(windscroll >= 100) {
		 if($('.slide-bg .item-container').length >= 2){
		    Full.stopAutoplay();
		  }
	   }else {
		   if($('.slide-bg .item-container').length >= 2){
		    Full.startAutoplay();
				Full.slideNext();
		   }
	   }
	}
}


function detectBut() {
	
		if($(window).width() <= 1100 && $('.sub-nav li.current').length){
			  var Left  = $('.sub-nav ul').offset().left;
			  var XLeft = $('.sub-nav li.current').offset().left;
			  var Percent = $(window).width()/100 * 10;
			  var Middle = $(window).width()/2 - $('.sub-nav li.current').width()/2;
			  $('.sub-nav').stop().animate({scrollLeft:  (XLeft-Middle) - Left}, 'slow');
		}
		
		if($(window).width() <= 1100 && $('.link-page').hasClass('current')){
				var Current = $('.link-page.current').parent().parent();
				var Left  = $('.news-link').offset().left;
				var XLeft = $('.link-page.current').offset().left;
				var Center = $('.scroll-slide').width()/2 - $('.link-page.current').width()/2;
				$(Current).stop().animate({scrollLeft:  (XLeft-Center) - Left}, 'slow');
		}
		
		if($(window).width() <= 1100 && $('.sub-inner li.current').length){
			  
				$('.sub-inner li.current').each(function(index, element) {
          		var Left  =  $(element).parent().offset().left;
							var XLeft =  $(element).offset().left;
							var Percent = $(window).width()/100 * 10;
			  			var Middle = $(window).width()/2 - $(element).width()/2;
							$(element).parent().parent().stop().animate({scrollLeft:  (XLeft-Middle) - Left}, 'slow');
				
        });
				
		}
		
}


function detectZoom() {
		
		var ImgW = $('.full img').width();
		var ImgH = $('.full img').height();
		var Yheight = $(window).height();
		var Xwidth = $(window).width();
		
		if(ImgW > Xwidth){
				$('.show-zoom').addClass('show');
				$('.full img').addClass('fullsize');
			
		}else{
				$('.full img').removeClass('fullsize');
		}
		
}


function detectMargin() {
			
			var ImgW = $('.full img').width();
			var ImgH = $('.full  img').height();
			var Yheight = $(window).height();
			var Xwidth = $(window).width();
			
			if (Xwidth > ImgW) {
					$('.full img').css({'margin-left': Xwidth / 2 - ImgW / 2});
					
			} else {
					$('.full img').css({'margin-left': 0});
			}
			
			if (Yheight > ImgH) {
					$('.full img').css({'margin-top': Yheight / 2 - ImgH / 2});
					
			} else {
					$('.full img').css({'margin-top':  0});
			}
			
}

function ScrollSlide() {
    if($(window).width() <= 1100){
        $('.scroll-slide').getNiceScroll().remove();
    }else{
        $('.scroll-slide').css({'overflow-x':'hidden','overflow-y':'hidden'});
        $('.scroll-slide').getNiceScroll().show();
        $('.scroll-slide').niceScroll({touchbehavior:false, horizrailenabled: false, cursordragontouch:false,grabcursorenabled: false});
        $('.scroll-slide').animate({scrollTop: "0px"});
    }
}

function ScrollNiceHide() {
    $('.ScrollSlide').getNiceScroll().remove();
}

$(document).ready(function () {
			
			$('body').prepend($('.header').clone().addClass('fixed'));
			AnimationDelay();
			
			setTimeout(function(){if( Loadx == 0){Loadx = 1;  Done(); }}, 2500);
			
			$('.comment-overlay').on('click', '.btn-comment-pop', function(e){
					 e.preventDefault();
					 login = true;
					 $('.comment-overlay').removeClass('show');
					 return false;
			});
			
			$('.container').on("click" ,function() {
				
					if($('.search-but').hasClass('active')){
							$('.search-form, .search-but').removeClass('active');
					}
					
			});
			
			var nav = document.querySelector('.header:not(.fixed) .nav');
					nav.addEventListener("touchmove", function(event) {
					if($('.header:not(.fixed) .nav ul').innerHeight() > $(window).height()){
							event.stopPropagation();
					}
			});
			
			var overlay = document.querySelector('.header:not(.fixed) .navigation');
					overlay.addEventListener("touchmove", function(event) {
					event.preventDefault();
			});
				
			$('.nav-overlay').on("click" ,function() {
					if ($(window).width() <= 1100) {
							$('.nav-but.active').trigger('click');
					}
			});
			
		
		//SCROLL ANIMATION
		$(document).bind('scroll', function() {
	    		var target = $('.slide-bg');
					var scrollY = $(window).scrollTop();
					
					var currenttop = $(document).scrollTop();
					var Bottom =  $('.bottom').offset().top;
					var Banner =  $('.slider-home, .slider-inner').height();
					
					if(isScroll){
						window.requestAnimationFrame(function () {
									
								if(currenttop >= 200){
									$('.header.fixed, .scroll-down').addClass('hide');
									
								}else if(currenttop <= 100){
									$('.header.fixed, .scroll-down').removeClass('hide');
								}
								
								if(windscroll >= $(window).height()/2) {
										$('.go-top').addClass('show');
										
								}else {
										$('.go-top').removeClass('show');
								}
								
								onScroll();
                            
								/*if ($('.outer-nav').length) {
									
										var del = $(window).width() > 1100 ? 80 : 0;
										var Sub =  $('.slider-home, .slider-inner').innerHeight() - del;
										
										if(windscroll >= Sub) {
												$('.outer-nav').addClass('fixed');
										}else{
												$('.outer-nav').removeClass('fixed');
										}
										
								}*/
                            

								if($('.video-content').length){
											var curPost = currenttop - $('.video-content').offset().top;
			
											if(curPost < 0) { curPost = -curPost;	}
			
											if(curPost > $(window).height() && isYouTube){ 
													var curVideo = $('.video-slider .selected').index();
													if(player[curVideo]){
														 player[curVideo].pauseVideo();
															
													}
											}
														
								}
							
								if($(window).width() > 1100){
										$(target).css({'-webkit-transform': 'translate3d(0,' + scrollY * 0.3 + 'px, 0)','transform': 'translate3d(0,' + scrollY * 0.3 + 'px, 0)'});
								}
									
								StopBanner();
								
						});
							
						windscroll = currenttop;
				}
							
		});
		
		
});



window.onorientationchange = ResizeWindows;
$(window).on("orientationchange",function(){
	
  if ($(window).width() <= 1100) {
				ScrollHoz();
				
				if($('.full.dragscroll').length && $(window).width() > 740){
						$('html, body').removeClass('no-scroll'); 
						$('.close-pics-small').trigger('click');
				}
				
				setTimeout(detectBut,100);
				
  }
  
});
$(window).resize(function () {
   if($('.screen-mask').length){
       ScrollNiceHide();
   }
   ResizeWindows();
    
});		

$(window).on('resize', function() {
   ResizeWindows();
    
//-----------------------------			
//  DESKTOP 	
       if ($(window).width() > 1100) {
				 
            if($('.nav-click').hasClass('active')){
                    $('.container').trigger('click');
            }

            if($('.dragscroll').length){ 
                    detectMargin();
                    $('.dragscroll').draptouch();
            }

            if($('.full.dragscroll').length && !zoomPC){
                    $('html, body').removeClass('no-scroll');
                    $('.close-pics-small').trigger('click');
            }

            if($('.scroll-slide, .sub-nav, .support-box, .best-scroll, .sub-inner').hasClass('dragscroll')){
                    $('.scroll-slide, .sub-nav, .support-box, .best-scroll, .sub-inner').removeClass('dragscroll draptouch-active draptouch-moving-left draptouch-moving-down');
                    $('.scroll-slide, .sub-nav, .support-box, .best-scroll, .sub-inner').css({'overflow':'visible'});
            }

            if($('.news-link').length ){ 
                if(!$('.news-link').hasClass('slide-slidebox')){
                    SlidePicture();

                    setTimeout(function(){
                        var  Goto = $('.news-link .slide-item').index($('.link-page.current').parent());
                        $('.news-link').trigger('BTQ.goTo', Goto);
                    },300);
                }
            }
            if($('.screen-mask').length){
                ScrollSlide();
            }
						
			 
//  DESKTOP 

//-----------------------------		
 
//  MOBILE 		
    } else {
					
					if(TouchLenght == false  || !isTouchDevice){
							 
							ScrollHoz();
							
							if($('.zoom-pic').length && $(window).width() > 740){
									$('html, body').removeClass('no-scroll'); 
									$('.close-pics-small').trigger('click');
							}
							
							if($('.news-link').length ){ 
									if($('.news-link').hasClass('slide-slidebox')){
											$('.news-link').each(function(index, element) {
													$(element).data('BTQSlider').destroy();
											});
									}
							}
								 
					}
					
					if($('.dragscroll').length){ 
							detectMargin();
							$('.dragscroll').draptouch();
					}
				
  }
  
	
//  MOBILE 	 
//-----------------------------	
				if(TouchLenght == false  || !isTouchDevice){
							detectBut();
				}
				
				Check();  

}, 250);


window.onbeforeunload = function() {$('.header').css({'opacity':0});window.scrollTo(0,0);}

function LocationHash() {
		var PageActive = window.location.hash;
		PageActive = PageActive.slice(1);
		
		if($('#news-details-page').length){
        $(".link-page a[data-details='" + PageActive + "']").trigger('click');
    }else if($('#ideas-details-page').length){
				$(".ajax-project[data-details='" + PageActive + "']").trigger('click');
		}
		
}


$(window).bind("popstate", function(e) {
	e.preventDefault();
});


if(iOS || isFirefox) {
	$(window).bind("pageshow", function(event) {
		if (event.originalEvent.persisted) {
			window.location.reload();
		}
	});
}

