var ua = navigator.userAgent;
var match = ua.match('MSIE (.)');
var versions = match && match.length > 1 ? match[1] : 'unknown';
var isTouchDevice =  "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch  || (navigator.msMaxTouchPoints>0) || (navigator.maxTouchPoints > 0);
var isDesktop = $(window).width() != 0 && !isTouchDevice ? true : false;
var IEMobile = ua.match(/IEMobile/i);
var isIE9 = /MSIE 9/i.test(ua); 
var isIE10 = /MSIE 10/i.test(ua);
var isIE11 = /rv:11.0/i.test(ua) && !IEMobile  ? true : false;
var isEge = /Edge\/12./i.test(navigator.userAgent)
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || ua.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isIE = false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia && !isIE11;
var isChrome = !!window.chrome && !!window.chrome.webstore ;
var isBlink = (isChrome || isOpera) && !!window.CSS;
var isSafari = /constructor/i.test(window.HTMLElement) && !ua.match(' Version/5.');
var isSafari5 = ua.match('Safari/') && !ua.match('Chrome') && ua.match(' Version/5.');
// Check Android version 
var AndroidVersion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
var Version = ua.match(/Android\s([0-9\.]*)/i);
// Check iOS8 version 
var isIOS8 = function() {
  var deviceAgent = navigator.userAgent.toLowerCase();
  return /iphone os 8_/.test(deviceAgent);
}
// Check iOS version 
function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
}
var iOS = iOSversion();

var ios, android, blackBerry, UCBrowser, Operamini, firefox, windows, smartphone, tablet,touchscreen, all;
var isMobile = {
  ios: (function(){
    return ua.match(/iPhone|iPad|iPod/i);
  }()),
  android: (function(){
    return ua.match(/Android/i);
  }()),
  blackBerry: (function(){
    return ua.match(/BB10|Tablet|Mobile/i);
  }()),
  UCBrowser: (function(){
    return ua.match(/UCBrowser/i);
  }()),
  Operamini: (function(){
    return ua.match(/Opera Mini/i);
  }()),
  
  windows: (function(){
    return ua.match(/IEMobile/i);
  }()),
  smartphone: (function(){
	return (ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 440 && window.innerHeight <= 740);
  }()),
  tablet: (function(){
    return (ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 1366 && window.innerHeight <= 800);
  }()),

  all: (function(){
    return ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
  }())
};



if(isTouchDevice  && isMobile.all !== null){
	var TouchLenght = true;
}else if(isMobile.tablet && isFirefox || isMobile.smartphone && isFirefox ){
	var TouchLenght = true;
}else{
	var TouchLenght = false;
}
if(isMobile.Operamini){
	alert('Please disable Data Savings Mode');
}

/*if(TouchLenght == true){
alert('Me')
}
*/


var Loadx = 0;
var Portrait = $(window).height() >= $(window).width();
var Landscape = $(window).height() < $(window).width();

function ResizeWindows() {
var img = $('.bg-home img, .mobile-bg img, .bg-picture img');
var img2 = $('.bg-inner img');

var Xwidth = $(window).width();
var Yheight = $(window).height();
var RatioScreeen = Yheight / Xwidth; 
var RatioIMG = 1125 / 2000;
var RatioInner = 524 / 1440;
var RatioM = 550 / 1440;
var RatioV = 1080 / 1920;
var newXwidth;
var newYheight;
if(RatioScreeen > RatioIMG){
	  newYheight = Yheight;
	  newXwidth	= Yheight / RatioIMG;
 }else{
	  newYheight = Xwidth * RatioIMG;
	  newXwidth	= Xwidth;
	  
}

$('.news-load').css({'min-height':Yheight/2});
$('.scroll-down').css({'top':Yheight-100});

			
				if(Xwidth <= 1100){
							
							if(Xwidth <= 440){
								 $('.slider-home, .bg-home').css({'height':(Xwidth + 100) * RatioIMG});
								 
							}else if(Xwidth > 440 && Xwidth <= 840){
								 $('.slider-home, .bg-home').css({'height':(Xwidth + 140) * RatioIMG});
								 
							}else{
								 $('.slider-home, .bg-home').css({'height':(Xwidth + 50) * RatioIMG});
							}
							
							if(Portrait){
								 $('.slider-inner, .bg-inner').css({'height':(Xwidth+350) * RatioM}); 
							}else{
								 $('.slider-inner, .bg-inner').css({'height':(Xwidth+350) * RatioInner}) 
							}
							
							$('.slide-bg').css({'transform':'translate3d(0px, 0px, 0px)'});
							if($('.screen-mask').length){
											$('.scroll-slide').getNiceScroll().remove();	
											$('.scroll-slide').css({'overflow-y': 'auto'});
							}
					
				 }else if( Xwidth > 1100){
							$('.slider-home, .bg-home').css({'height':Yheight});
							$('.slider-inner, .bg-inner').css({'height':Xwidth * RatioInner}) 
		     }
				 
}



function DrawLoad() {
		
		$('.loadicon').removeClass('fade-fill');
		if(isIE9 || isIE10 || isIE11 || isEdge){
			
				$('.loadicon').addClass('fade-fill');
				
				var Stroke = $('.load-present');
				var Paths = $(Stroke).find('path');
				
				$(Paths).each(function(index, element) {
							var totalLength = this.getTotalLength();
							$(this).css({'stroke-dasharray': totalLength + ' ' + totalLength});
							$(this).css({ 'stroke-dashoffset': totalLength, 'stroke-dasharray': totalLength + ' ' + totalLength});
							
							$(this).stop().animate({'stroke-dashoffset': 0}, 4000, 'linear', function() {});
				});
		}
}


function ScrollHoz() {
	var Scroll = $('.scroll-slide, .sub-nav, .support-box, .best-scroll, .sub-inner');
	if($(window).width() <= 1100){
		
     $(Scroll).css({'overflow-x':'auto','overflow-y':'hidden','-ms-touch-action': 'auto','-ms-overflow-style' :'none', 'overflow':' -moz-scrollbars-none','-webkit-overflow-scrolling':'touch'});
	   $(Scroll).animate({scrollLeft: "0px"});
	   if(TouchLenght == false  || !isTouchDevice){ 
		   if($(window).width() <= 1100){
			  $(Scroll).mousewheel(function(e, delta) {
				  e.preventDefault();
				 if ($(window).width() <= 1100) {
				   this.scrollLeft -= (delta * 40);
				 }
			   });
			  
			   $(Scroll).addClass('dragscroll');
				$('.dragscroll').draptouch();
		   }
	   }
	    
	}
	 
}

var byClick =false;

var homeMarker = [];
var homeInfo = [];

var centerMarker = [];
var centerInfo = [];

var subMarker = [];
var subInfo = [];

var clubMarker = [];
var clubInfo = [];


var homeLocation = [
	{
		id:'area_01',
		lat:21.027764, 
		lng:105.834160,
		html:'<img src="../pictures/1.jpg" alt="pic"><h3>Him Lam - Hà Nội</h3><p>6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM<br>Phone: <a hrel="tel:(028)39876666">(028) 39876666</a> <br>Email: <a hrel="mailto:Email: info@trungtamhimlam.vn">Email: info@trungtamhimlam.vn</a></p>'
	},{
		id:'area_02',
		lat:16.054407, 
		lng:108.202167,
		html:'<img src="../pictures/1.jpg" alt="pic"><h3>Him Lam - Đà Nẵng</h3><p>6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM<br>Phone: <a hrel="tel:(028)39876666">(028) 39876666</a> <br>Email: <a hrel="mailto:Email: info@trungtamhimlam.vn">Email: info@trungtamhimlam.vn</a></p>'
	},{
		id:'area_03',
		lat:10.829742, 
		lng:106.655327,
		html:'<img src="../pictures/1.jpg" alt="pic"><h3>Him Lam - Hò Chí Minh</h3><p>6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM<br>Phone: <a hrel="tel:(028)39876666">(028) 39876666</a> <br>Email: <a hrel="mailto:Email: info@trungtamhimlam.vn">Email: info@trungtamhimlam.vn</a></p>'
	},{
		id:'area_04',
		lat:10.045162, 
		lng:105.746854,
		html:'<img src="../pictures/1.jpg" alt="pic"><h3>Him Lam - Cần Thơ</h3><p>6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM<br>Phone: <a hrel="tel:(028)39876666">(028) 39876666</a> <br>Email: <a hrel="mailto:Email: info@trungtamhimlam.vn">Email: info@trungtamhimlam.vn</a></p>'
	}
	
];

var centerLocation = [
	{
		id:'center_01',
		idProvince:199,
		idDistrict:32,
		lat:10.797739, 
		lng:106.672429,
		html:'<h3>cơ sở quận gò vấp 01</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_02',
		idProvince:199,
		idDistrict:32,
		lat:10.797060, 
		lng:106.676193,
		html:'<h3>cơ sở quận gò vấp 02</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_03',
		idProvince:199,
		idDistrict:32,
		lat:10.798272, 
		lng:106.678478,
		html:'<h3>cơ sở quận gò vấp 03</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_04',
		idProvince:199,
		idDistrict:32,
		lat:10.794509, 
		lng:106.672770,
		html:'<h3>cơ sở quận gò vấp 04</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_05',
		idProvince:199,
		idDistrict:32,
		lat:10.794009, 
		lng:106.676205,
		html:'<h3>cơ sở quận gò vấp 05</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_06',
		idProvince:199,
		idDistrict:32,
		lat:10.796538, 
		lng:106.679553,
		html:'<h3>cơ sở quận gò vấp 06</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_07',
		idProvince:199,
		idDistrict:4,
		lat:10.775564, 
		lng:106.699760,
		html:'<h3>cơ sở quận nhất 01</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_08',
		idProvince:199,
		idDistrict:4,
		lat:10.775699, 
		lng:106.700296,
		html:'<h3>cơ sở quận nhất 02</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_09',
		idProvince:199,
		idDistrict:4,
		lat:10.775317, 
		lng:106.700371,
		html:'<h3>cơ sở quận nhất 03</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_10',
		idProvince:199,
		idDistrict:4,
		lat:10.775870, 
		lng:106.700755,
		html:'<h3>cơ sở quận nhất 04</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_11',
		idProvince:199,
		idDistrict:4,
		lat:10.775952, 
		lng:106.700114,
		html:'<h3>cơ sở quận nhất 05</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_12',
		idProvince:198,
		idDistrict:689,
		lat:21.045954, 
		lng:105.746420,
		html:'<h3>cơ sở từ liêm hà nội 01</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_13',
		idProvince:198,
		idDistrict:689,
		lat:21.045603, 
		lng:105.747728,
		html:'<h3>cơ sở từ liêm hà nội 02</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_14',
		idProvince:198,
		idDistrict:689,
		lat:21.047035, 
		lng:105.748801,
		html:'<h3>cơ sở từ liêm hà nội 03</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_15',
		idProvince:198,
		idDistrict:689,
		lat:21.047185, 
		lng:105.750604,
		html:'<h3>cơ sở từ liêm hà nội 04</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_16',
		idProvince:198,
		idDistrict:689,
		lat:21.047916, 
		lng:105.748093,
		html:'<h3>cơ sở từ liêm hà nội 05</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	}
	
];

var subLocation = [
	{
		id:'sub_01',
		idProvince:199,
		idDistrict:32,
		lat:10.797739, 
		lng:106.672429,
		html:'<h3>cơ sở quận gò vấp 01</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_02',
		idProvince:199,
		idDistrict:32,
		lat:10.797060, 
		lng:106.676193,
		html:'<h3>cơ sở quận gò vấp 02</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_03',
		idProvince:199,
		idDistrict:32,
		lat:10.798272, 
		lng:106.678478,
		html:'<h3>cơ sở quận gò vấp 03</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_04',
		idProvince:199,
		idDistrict:32,
		lat:10.794509, 
		lng:106.672770,
		html:'<h3>cơ sở quận gò vấp 04</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_05',
		idProvince:199,
		idDistrict:32,
		lat:10.794009, 
		lng:106.676205,
		html:'<h3>cơ sở quận gò vấp 05</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_06',
		idProvince:199,
		idDistrict:32,
		lat:10.796538, 
		lng:106.679553,
		html:'<h3>cơ sở quận gò vấp 06</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_07',
		idProvince:199,
		idDistrict:4,
		lat:10.775564, 
		lng:106.699760,
		html:'<h3>cơ sở quận nhất 01</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_08',
		idProvince:199,
		idDistrict:4,
		lat:10.775699, 
		lng:106.700296,
		html:'<h3>cơ sở quận nhất 02</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_09',
		idProvince:199,
		idDistrict:4,
		lat:10.775317, 
		lng:106.700371,
		html:'<h3>cơ sở quận nhất 03</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_10',
		idProvince:199,
		idDistrict:4,
		lat:10.775870, 
		lng:106.700755,
		html:'<h3>cơ sở quận nhất 04</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_11',
		idProvince:199,
		idDistrict:4,
		lat:10.775952, 
		lng:106.700114,
		html:'<h3>cơ sở quận nhất 05</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_12',
		idProvince:198,
		idDistrict:689,
		lat:21.045954, 
		lng:105.746420,
		html:'<h3>cơ sở từ liêm hà nội 01</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_13',
		idProvince:198,
		idDistrict:689,
		lat:21.045603, 
		lng:105.747728,
		html:'<h3>cơ sở từ liêm hà nội 02</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_14',
		idProvince:198,
		idDistrict:689,
		lat:21.047035, 
		lng:105.748801,
		html:'<h3>cơ sở từ liêm hà nội 03</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_15',
		idProvince:198,
		idDistrict:689,
		lat:21.047185, 
		lng:105.750604,
		html:'<h3>cơ sở từ liêm hà nội 04</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_16',
		idProvince:198,
		idDistrict:689,
		lat:21.047916, 
		lng:105.748093,
		html:'<h3>cơ sở từ liêm hà nội 05</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	}
	
];

var clubLocation = [
		{
		id:'club_01',
		idProvince:199,
		idDistrict:32,
		lat:10.797739, 
		lng:106.672429,
		html:'<h3>cơ sở quận gò vấp 01</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_02',
		idProvince:199,
		idDistrict:32,
		lat:10.797060, 
		lng:106.676193,
		html:'<h3>cơ sở quận gò vấp 02</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_03',
		idProvince:199,
		idDistrict:32,
		lat:10.798272, 
		lng:106.678478,
		html:'<h3>cơ sở quận gò vấp 03</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_04',
		idProvince:199,
		idDistrict:32,
		lat:10.794509, 
		lng:106.672770,
		html:'<h3>cơ sở quận gò vấp 04</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_05',
		idProvince:199,
		idDistrict:32,
		lat:10.794009, 
		lng:106.676205,
		html:'<h3>cơ sở quận gò vấp 05</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_06',
		idProvince:199,
		idDistrict:32,
		lat:10.796538, 
		lng:106.679553,
		html:'<h3>cơ sở quận gò vấp 06</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_07',
		idProvince:199,
		idDistrict:4,
		lat:10.775564, 
		lng:106.699760,
		html:'<h3>cơ sở quận nhất 01</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_08',
		idProvince:199,
		idDistrict:4,
		lat:10.775699, 
		lng:106.700296,
		html:'<h3>cơ sở quận nhất 02</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_09',
		idProvince:199,
		idDistrict:4,
		lat:10.775317, 
		lng:106.700371,
		html:'<h3>cơ sở quận nhất 03</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_10',
		idProvince:199,
		idDistrict:4,
		lat:10.775870, 
		lng:106.700755,
		html:'<h3>cơ sở quận nhất 04</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_11',
		idProvince:199,
		idDistrict:4,
		lat:10.775952, 
		lng:106.700114,
		html:'<h3>cơ sở quận nhất 05</h3><p>M6 Tân Sơn. Phường 12. Quận 1. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_12',
		idProvince:198,
		idDistrict:689,
		lat:21.045954, 
		lng:105.746420,
		html:'<h3>cơ sở từ liêm hà nội 01</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_13',
		idProvince:198,
		idDistrict:689,
		lat:21.045603, 
		lng:105.747728,
		html:'<h3>cơ sở từ liêm hà nội 02</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_14',
		idProvince:198,
		idDistrict:689,
		lat:21.047035, 
		lng:105.748801,
		html:'<h3>cơ sở từ liêm hà nội 03</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_15',
		idProvince:198,
		idDistrict:689,
		lat:21.047185, 
		lng:105.750604,
		html:'<h3>cơ sở từ liêm hà nội 04</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_16',
		idProvince:198,
		idDistrict:689,
		lat:21.047916, 
		lng:105.748093,
		html:'<h3>cơ sở từ liêm hà nội 05</h3><p>M6 Tân Sơn. Phường 12. Từ Liêm. Hà Nội <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	}
];

function initMapHome() {
		var Center = new google.maps.LatLng(15.7480907, 106.4135155);

		var styles = [
		  {
			stylers: [
			 	{ hue: "#929292"},
				{ saturation: -100 }
			]
		  },{
			featureType: "road",
			elementType: "geometry",
			stylers: [
			   { lightness:-5},
			   { visibility: "simplified" }
			]
		  },{
			featureType: "road",
			elementType: "labels",
			stylers: [
			  { visibility: "on" }
			]
		  }
		];

	  var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
    var mapOptions = {
        center: Center,
        zoom:6,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: 'cooperative',
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };
   
		google.maps.event.addDomListener(window, "resize", function () {
				//google.maps.event.trigger(map, "resize")
				//map.setCenter(Center);
				//map.setZoom(6);
		});
		
		var logo = 'logo-map.png';
		
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		
			
		var infowindow = new google.maps.InfoWindow();
		
		for (var i = 0; i < homeLocation.length; i++) {
		
				var infobox = "<div class='infobox'><div class='infobox-inr'>"+ homeLocation[i].html +"</div></div>";
				
				//Tạo mảng marker
				var marker = new google.maps.Marker({
						id: homeLocation[i].id,
						position: {
								lat: homeLocation[i].lat,
								lng: homeLocation[i].lng
						},
						icon: logo,
						map: map,
						animation: google.maps.Animation.DROP,
						info: infobox
				});
				
				marker.addListener('click', function() {
					infowindow.setContent(this.info);
					infowindow.open(map, this);
					
				});
				
				homeMarker.push(marker);
			
	}
	
	ZoomControl(map);
		
}

var geocoder = null;
var curLocation = 0;

var curLocation ={
    lat:0,
    lng:0
};

function initMap(){
	centerMap(1);
	centerMap(2);
	centerMap(3);
	
	geocoder = new google.maps.Geocoder();
	
}


function changeMarker(marker){
		var icon = 'logo-map.png';
		if($(window).width() <= 840){
			icon = '../pictures/logo-map-small.png';
		}
		
		for(var i = 0; i < marker.length; i++){
				marker[i].setIcon(icon);
		}
}

		
		
function centerMap(type){
		var Center = new google.maps.LatLng(10.796780, 106.675689);	

		var styles = [
		  {
			stylers: [
			 	{ hue: "#929292"},
				{ saturation: -100 }
			]
		  },{
			featureType: "road",
			elementType: "geometry",
			stylers: [
			   { lightness:-5},
			   { visibility: "simplified" }
			]
		  },{
			featureType: "road",
			elementType: "labels",
			stylers: [
			  { visibility: "on" }
			]
		  }
		];

	  var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
    var mapOptions = {
        center: Center,
        zoom:12,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: 'cooperative',
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };
    
		google.maps.event.addDomListener(window, "resize", function () {
				//google.maps.event.trigger(map, "resize")
				//map.setCenter(Center);
				//changeMarker(centerMarker);
						
				if(type == 1){//Center map
					changeMarker(centerMarker);
					
				}else if(type == 2){//Sub map
					changeMarker(subMarker);
					
				}else if(type == 3){ //Club map
					changeMarker(clubMarker);
				}
				
				//map.setZoom(12);
				
		});
		
		var logo = 'logo-map.png';
		
		if($(window).width() <= 840){
			logo = '../pictures/logo-map-small.png';
		}


		var mapId = null;
		var locations = null;
		
		if(type == 1){//Center map
			mapId = 'center-map';
			locations = centerLocation;
			
		}else if(type == 2){//Sub map
			mapId = 'sub-map';
			locations = subLocation;
			
		}else if(type == 3){ //Club map
			mapId = 'club-map';
			locations = clubLocation;
		}
		
		var map = new google.maps.Map(document.getElementById(mapId), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		
		var infowindow = new google.maps.InfoWindow();
		
		//Tạo mảng marker
		for (var i = 0; i < locations.length; i++) {
				
				var infobox = "<div class='infobox'><div class='infobox-inr'>"+ locations[i].html +"</div></div>";
				
				var marker = new google.maps.Marker({
						id: locations[i].id,
						provinceId: locations[i].idProvince,
						districtId: locations[i].idDistrict,
						position: {
								lat: locations[i].lat,
								lng: locations[i].lng
						},
						icon: logo,
						map: map,
						animation: google.maps.Animation.DROP,
						info: infobox
				});
				
				marker.addListener('click', function() {
						var id = this.id;
						var $listView = null;
						var $listItem = null;
						var $curItem = null;
						
						if(type == 1){
								$listView = $(".center-map .list-result");
								$listItem = $(".center-map .list-result li");	
								$curItem  = $(".center-map .list-result li[data-id='" + id + "']");
								
						}else if(type == 2){
								$listView = $(".sub-map .list-result");
								$listItem = $(".sub-map .list-result li");	
								$curItem  = $(".sub-map .list-result li[data-id='" + id + "']");
							
						}else if(type == 3){
								$listView = $(".club-map .list-result");
								$listItem = $(".club-map .list-result li");	
								$curItem  = $(".club-map .list-result li[data-id='" + id + "']");
						}
						
						if($curItem.hasClass('active')){
								$listItem.removeClass('active');
								infowindow.close();
							
						}else{
								$listItem.removeClass('active');
								$curItem.addClass('active');
								
								infowindow.setContent(this.info);
								infowindow.open(map, this);
								
								var Top =  $curItem.offset().top;
								var Height = $listView.offset().top;
								$listView.stop().animate({ scrollTop: Top - Height}, 600, 'easeInOutExpo');
								
						}
						
				});
				
				if(type == 1){//Center map
					centerMarker.push(marker);
					
				}else if(type == 2){//Sub map
					subMarker.push(marker);
					
				}else if(type == 3){ //Club map
					clubMarker.push(marker);
					
				}
				
		}
		
		//Xét zoom map
		if(type == 1){//Center map
				ZoomControlAbout(map,'.center-map');
				
				$('.center-map').on('click', 'button', function(){
						codeAddress(map,centerMarker,1);
				});
			
		}else if(type == 2){//Sub map
				ZoomControlAbout(map,'.sub-map');
				
				$('.sub-map').on('click', 'button', function(){
						codeAddress(map,subMarker,2);
				});
				
		}else if(type == 3){ //Club map
				ZoomControlAbout(map,'.club-map');
				
				$('.club-map').on('click', 'button', function(){
						codeAddress(map,clubMarker,3);
				});
		}
		
		
		//Lọc danh sách theo quận huyện
		
		var cityId =  'center-province';
		if(type == 1){
				cityId =  'center-province';
		}else if(type == 2){
			cityId =  'sub-province';
			
		}else if(type == 2){
			cityId =  'club-province';
			
		}
		
   document.getElementById(cityId).addEventListener('change', function () {
        
				var address = $(this).find('option:selected').attr("data-name");
				var addressId = $(this).find('option:selected').attr('value');
				
				geocoder.geocode( { 'address': address}, function(results, status) {
					 
          if (status == google.maps.GeocoderStatus.OK) {
								map.setCenter(results[0].geometry.location);
                map.setZoom(6);
          } else {
						console.log('Geocode was not successful for the following reason: ' + status);
          }
        });
				
				//var id = this.id;
				var $listView = null;
				var $listItem = null;
				var $parent = null;
				var arrMarker = null;
				
				if(type == 1){
						$parent  = $(".center-map");
						$listView = $(".center-map .list-result");
						$listItem = $(".center-map .list-result li");	
						arrMarker =  centerMarker;
						
				}else if(type == 2){
						$parent  = $(".sub-map");
						$listView = $(".sub-map .list-result");
						$listItem = $(".sub-map .list-result li");	
						arrMarker =  subMarker;
					
				}else if(type == 3){
						$parent  = $(".club-map");
						$listView = $(".club-map .list-result");
						$listItem = $(".club-map .list-result li");	
						arrMarker =  clubMarker;
				}
				
				//loadDistrictByATM(addressId);
       
        
        //Tìm danh sách ATM theo Thành phố
        $parent.find('.sort_distance').remove();
				$listItem.addClass('hide');
				$listItem.removeClass('active');
				
				for(var i = 0; i < arrMarker.length; i++){
            var provinceId = arrMarker[i].provinceId;
            
            arrMarker[i].setVisible(false); //Ẩn marker
        
				    if(addressId == 0){
								arrMarker[i].setVisible(true);
                $listItem.removeClass('hide');
                map.setZoom(6);
                //map.setCenter(Center);
                
            }else if(provinceId == addressId){
                arrMarker[i].setVisible(true);
								$listView.find("li[data-id='" + arrMarker[i].id + "']").removeClass('hide');
            }
        }
        
						
    });
		
	/*
   document.getElementById('atm-district').addEventListener('change', function () {
        address = $("#atm-province").find('option:selected').attr("data-name") + " , " + $("#atm-district").find('option:selected').attr("data-name");
        
        var idProvince = $('#atm-province option:selected').attr('value');
        var idDistrict = $('#atm-district option:selected').attr('value');
        
		geocoder.geocode( { 'address': address}, function(results, status) {
					 
          if (status == google.maps.GeocoderStatus.OK) {
						map.setCenter(results[0].geometry.location);
              map.setZoom(10);
          } else {
           	console.log('Geocode was not successful for the following reason: ' + status);
          }
        });
            
         
        
        //Tìm danh sách ATM theo Thành phố + Quận Huyện
        $(".atm .list-result li").addClass('hide');
        $(".atm .list-result li").removeClass('active');
				$('.atm .sort_distance').remove();
        
        for(var i = 0; i < atmlocations.length; i++){
            var lcalProvince = atmlocations[i].idprovince;
            var lcalDistrict = atmlocations[i].iddistrict;
            
            atmMarker[i].setVisible(false); //Ẩn marker
            atmMarker[i].isOpen = false;
           
            
            if(atmShowInfo[i]){
               atmShowInfo[i].close();
            }
            
            if(idProvince == 0 && idDistrict == 0){
                atmMarker[i].setVisible(true);
                $(".atm .list-result li").removeClass('hide');
                
            }else if(idProvince != 0 && idDistrict == 0){
                if(lcalProvince == idProvince){

                    if(atmMarker[i].id == atmlocations[i].id){
                       atmMarker[i].setVisible(true); //Hiện marker tương ứng với vùng chọn
                    }

                    $(".atm .list-result li[atm-id='" + atmlocations[i].id + "']").removeClass('hide');

                }
                
            }else if(lcalProvince == idProvince && idDistrict == lcalDistrict){
                
                if(atmMarker[i].id == atmlocations[i].id){
                   atmMarker[i].setVisible(true); //Hiện marker tương ứng với vùng chọn
                }
                
                $(".atm .list-result li[atm-id='" + atmlocations[i].id + "']").removeClass('hide');
                
            }
        }
        
				
    });*/
}

function ZoomControl(map) {
  $('.zoom-control a').click(function ()  {
   var zoom = map.getZoom();
	switch ($(this).attr("id")) {
	case "zoom-in":
		map.setZoom(++zoom);
		break;
	case "zoom-out":
		map.setZoom(--zoom);
		break;
	default:
		break
	}
	return false
  
 });
 
}

function ZoomControlAbout(map,box) {
  
	$(box).find('.zoom-control a').on('click', function () {
	 			
				var zoom = map.getZoom();
				
				switch ($(this).attr("data-id")) {
						case "zoom-full":
						if($(box).find('.map-view').hasClass('full-screen')){
								$('html,body').removeClass('no-scroll');
								$('.header, .network, .bottom, .footer').removeClass('no-index');
								$(box).find('.map-view').removeClass('full-screen');
								$(box).find('.zoom-full').removeClass('active');
								
						}else{
								$('html,body').addClass('no-scroll');
								$('.header, .network, .bottom, .footer').addClass('no-index');
								
								$(box).find('.map-view').addClass('full-screen');	
								$(box).find('.zoom-full').addClass('active');
						}
						break;
						case "zoom-in":
						map.setZoom(++zoom);
						break;
						case "zoom-out":
						map.setZoom(--zoom);
						break;
						default:
						break
				}
				
				return false;
				
	});
 
}


//Tìm ATM gần nhất
function codeAddress(map,tempMarker,type) {
		

        //Lấy tọa độ người dùng
        /*function getCurPosition(){
            if (navigator.geolocation) {

                    var Options = {
                        //enableHighAccuracy: true,
                        //timeout: 500,
                        //maximumAge: 0
                    };

                    function passLocation(position) {
                        curLocation.lat = position.coords.latitude;
                        curLocation.lng = position.coords.longitude;
                        console.log(curLocation.lat);
                        console.log(curLocation.lng);
                        
                        map.setCenter(curLocation);
                        //closest = findClosestN(curLocation,tempMarker);
                        //get driving distance
                        //calculateDistances(curLocation, closest,type);

                    }

                    function error(){
                            $.ajax({
                                    format: "jsonp",
                                    dataType: "jsonp",
                                    url: "http://ip-api.com/json",
                                    success: function (data) {
                                            //curLocation = new google.maps.LatLng(data.lat, data.lon);
                                            curLocation.lat = data.lat;
                                            curLocation.lng = data.lon;
                                        
                                            map.setCenter(curLocation);
                                            closest = findClosestN(curLocation,tempMarker);
                                            //get driving distance
                                            calculateDistances(curLocation, closest,type);
                                        
                                    },
                                    error: function () {
                                            console.log('Can not  get location');
                                    },
                                    method: "GET"
                            });
                    }
                    navigator.geolocation.getCurrentPosition(passLocation, error, Options);

            }
        }
        */
        
        function getLocation() {
            if (navigator.geolocation) {
               //navigator.geolocation.watchPosition(showPosition);
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
           // x.innerHTML="Latitude: " + position.coords.latitude + 
            //"<br>Longitude: " + position.coords.longitude;
            var myLocation = {
                lat:position.coords.latitude,
                lng:position.coords.longitude
            }
            console.log(position.coords.latitude);
             console.log(position.coords.longitude);
            
            map.setCenter(myLocation);
        }
    
        getLocation();
    
		//map.setCenter(curLocation);
		//closest = findClosestN(curLocation,tempMarker);
		//get driving distance
		//calculateDistances(curLocation, closest,type);
		
}

function findClosestN(pt,tempMarker) {
		var closest = [];
		for (var i=0; i<tempMarker.length;i++) {
				tempMarker[i].distance = google.maps.geometry.spherical.computeDistanceBetween(pt,tempMarker[i].getPosition());
				closest.push(tempMarker[i]);
		}
		//closest.sort(sortByDist);
		return closest;
}

function sortByDist(a,b) {
   return (a.distance- b.distance)
}
     
function calculateDistances(pt,closest,type) {
  var service = new google.maps.DistanceMatrixService();
  var request =    {
      origins: [pt],
      destinations: [],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
  };
  for (var i=0; i<closest.length; i++) {
    request.destinations.push(closest[i].getPosition());
  }
  service.getDistanceMatrix(request, function (response, status) {
					if (status != google.maps.DistanceMatrixStatus.OK) {
						alert('Error was: ' + status);
					} else {
					var origins = response.originAddresses;
					var destinations = response.destinationAddresses;
					
					var results = response.rows[0].elements;
					
					
					
					//Khởi tạo đối tượng để sort
					var $parent = null;
					var $listView = null;
					var $parenItem = null;
					var $listItem = null;
					var arrMarker = null;
					
					if(type == 1){
							$parent  = $(".center-map");
							$listView = $(".center-map .list-result");
							$parenItem = $(".center-map .list-result ul");
							$listItem = $(".center-map .list-result li");	
							arrMarker = centerMarker;
							
					}else if(type == 2){
							$parent  = $(".sub-map");
							$listView = $(".sub-map .list-result");
							$parenItem = $(".sub-map .list-result ul");
							$listItem = $(".sub-map .list-result li");	
							arrMarker = subMarker;
						
					}else if(type == 3){
							$parent  = $(".club-map");
							$listView = $(".club-map .list-result");
							$parenItem = $(".club-map .list-result ul");
							$listItem = $(".club-map .list-result li");	
							arrMarker = clubMarker;
							
					}
					
					$parent.find('.sort_distance').remove();
					$listItem.addClass('hide');
					
					for (var i = 0; i < closest.length; i++) {
						
							//Giới hạn tìm kiếm trong vòng 10km
							var numKM = results[i].distance.text.replace(',', '');
							numKM = parseFloat(numKM);
							
							if(numKM < 0.7){
								var id = 	closest[i].id;
								var distance = results[i].distance.text;
								var duration = results[i].duration.text;
								
								//driving
								var html = '';
								if($('html').attr('lang') == 'vi'){
									 html = '<p class="sort_distance">Khoảng cách: '+ distance +', Thời gian chạy xe: '+ duration +'</p>';
								}else{
									html = '<p class="sort_distance">Kilometers: '+ distance +', Driving: '+ duration +'</p>';
								}
								
								arrMarker[i].setVisible(true);
								$listView.find("li[data-id='" + id + "']").removeClass('hide');
								$listView.find("li[data-id='" + id + "']").append(html);
								$listView.find("li[data-id='" + id + "']").attr('data-km',numKM);
								
								
							}else{
									arrMarker[i].setVisible(false);
							}
							
					}
					
					//Lọc và xắp tăng dần danh sách theo KM
					var ulBox = null;
					var liBox = null;
					var liContents = [];
					
					$listItem.each(function() {
								liContents.push($(this));
					});
					
					for(var i = 0; i < liContents.length; i++){
							for(var j = i + 1; j < liContents.length; j++){
								
								if(liContents[i].attr('data-km') == undefined){
									break;
									
								}else{
										if(liContents[j].attr('data-km') != undefined){
												var a = parseFloat(liContents[i].attr('data-km'));
												var b = parseFloat(liContents[j].attr('data-km'));
												if(b < a){
													var temp = liContents[i];
													liContents[i] = liContents[j]
													liContents[j] = temp;
												}
										}
								}
						}
					}
						
					$parenItem.html(liContents);
			
    }
  });
}


function Done() {
		//$('html, body').scrollTop(0);
		ResizeWindows();
		ScrollHoz();
	  
		if($(window).width() <= 1100){
			$('.header, .footer').css({'opacity':1});
		}
		
		$('.container').stop().animate({'opacity':1}, 500 ,'linear', function () { 
					
					ContentLoad();
					
					if(!$('#news-details-page').length && !$('#ideas-details-page').length){
							$('.loadicon').fadeOut(300, function () {  
									$('.loadicon').removeClass('loader');				
							});
					}
					
		});

}


$(document).ready(function () {
		//$('html, body').scrollTop(0);
		
		ResizeWindows();
		$(".left-box  > h2, .left-box  > h3").lettering('lines').lettering();
		$(".title-page > h1").lettering('words').children('span').lettering().children('span').lettering();
		
		if(!isSafari){$('body').impulse({effect: 'easeOutQuad'});}
		
		if(!isFirefox){ $('head').append('<link href="../css/-webkit.css" rel="stylesheet" type="text/css">'); }	
		if(isIE9 || isIE10 || isIE11 || isEdge){ $('body').addClass('no-loading'); }
		//if(isIE9 || isIE10 || isIE11){ $('body').addClass('is-IE');}
		
		if(!$('.loadicon').hasClass('loader')){
				$('.loadicon').show();  
				$('.loadicon').addClass('loader');
				DrawLoad();
		}
		
});

//SMOOTH WHEEL
// http://ataredo.com/external/code/lucid.js - to view the code
// http://ataredo.com/morphology/lucidscroll/ - documentation
(function($) {$.fn.impulse = function(options) {

	var gate = $(window),
	set = $.extend(true, {
	target: $(),
	delay: false
	}, $.fn.impulse.default, options),

	selector = this, object = set.target, gist, area = {}, edge = [],
	annul, entity, brink = [], outset = [], halt = [], flow, turned = 0,
	interrupt, kinetic, morph = [], hit, way, speed, destination = [],
	momentum, initial, bound;

	if (window.requestAnimationFrame) var neoteric = true;
	elementAnalysis();
	detectOverflow();

	selector.each(function(index) {
	
		//var Scroll = $('.container');
		
		$(this).mousewheel(function(ambit, delta) {

			if (annul) return false;
			else if (set.delay == true) annul = true;

			hit = index;

			if (gist && selector.length > 1) {
			entity = $(this);
			brink[0] = edge[hit];
			}
			else {
			entity = object;
			brink = edge;
			}

			entity.each(function(cue) {
			var genesis = outset[cue] = $(this).scrollTop();
			if (delta == 1 && genesis == 0 || delta == -1 && genesis == brink[cue]) halt[cue] = true;
			else halt[cue] = false;
			});

			if (ceaseOperation()) {
			annul = false;
			if (set.propagate == true) return;
			else return false;
			}

			if (flow != delta) turned = 1;
			else turned = Math.min(set.constrain, turned+1);

			if (set.fluid && turned == 1) morph[hit] = 'curve';
			else if (turned) morph[hit] = set.effect;

			interrupt = false;
			kinetic = delta;
			way = -delta*set.range*Math.pow(set.leap, turned-1);
			speed = set.tempo*Math.pow(set.sloth, turned-1);

			entity.each(function(order) {
			destination[order] = outset[order]+way;
			});

			if (neoteric) {
			if (momentum) cancelAnimationFrame(momentum);
			initial = Date.now();
			momentum = requestAnimationFrame(streamCore);
			}
			else inciteSource();

			return false;
		});
	});

	gate.resize(function() {
	clearTimeout(bound);
	bound = setTimeout(detectOverflow, 100);
	});

	return this;

	function streamCore() {
	flow = kinetic;
	var present = Date.now(),
	elapsed = Math.min(present-initial, speed),
	advance = elapsed/speed,
	increase = $.easing[morph[hit]](advance, elapsed, 0, 1, speed);
	entity.each(function(key) {
	if (!halt[key]) {
	var goal = outset[key]+increase*way;
	$(this).scrollTop(goal);
	checkLimits($(this), key, advance);
	}
	});
	if (advance < 1 && !interrupt) momentum = requestAnimationFrame(streamCore);
	else annul = false;
	}

	function inciteSource() {
	flow = kinetic;
	entity.each(function(beat) {
	if (!halt[beat]) {
	$(this).stop().animate({scrollTop: destination[beat]}, {
	duration: speed,
	easing: morph[hit],
	progress: function(current, sequence) {checkLimits($(this), beat, sequence)},
	complete: function() {annul = false}
	});
	}
	});
	}

	function checkLimits(essence, rank, factor) {
	if (100*factor >= set.reset) turned = 0;
	if (onFringe(essence, rank)) {
	halt[rank] = true;
	if (!neoteric) essence.stop(true, true);
	if (ceaseOperation()) {
	interrupt = true;
	turned = 0;
	}
	}
	}

	function onFringe(matter, cipher) {
	var put = matter.scrollTop(),
	above = put == 0 && destination[cipher] < 0,
	below = put == brink[cipher] && destination[cipher] > brink[cipher];
	return above || below;
	}

	function ceaseOperation() {
	return halt.every(function(flag) {return flag});
	}

	function elementAnalysis() {
	var item = $(), main;
	if (!object.length) {
	gist = true;
	object = selector;
	}
	object.each(function() {
	if (topLevel(this)) {
	if (!main) {
	if (neoteric) item = item.add(gate);
	else item = item.add(baseTag());
	main = true;
	}
	}
	else item = item.add($(this));
	});
	set.target = object = item;
	object.each(function(zest) {
	if (topLevel(this)) area[zest] = 'hub';
	else area[zest] = 'sub';
	});
	if (gist && selector.length != object.length) selector = object;
	}

	function topLevel(sample) {
	var peak = [window,document,'HTML','BODY'];
	return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1
	}

	function baseTag() {
	var origin = gate.scrollTop();
	gate.scrollTop(1);
	if ($('html').scrollTop()) var root = $('html');
	else if ($('body').scrollTop()) root = $('body');
	else root = $('html, body');
	if (origin) gate.scrollTop(origin);
	else gate.scrollTop(0);
	return root;
	}

	function detectOverflow() {
	object.each(function(unit) {
	if (area[unit] == 'hub') edge[unit] = $(document).height()-gate.height();
	else edge[unit] = this.scrollHeight-$(this).height();
	});
	}
};

$.fn.impulse.default = {
	range: 160,
	leap: 1.6,
	tempo: 500,
	sloth: 1.1,
	constrain: 5,
	reset: 85,
	effect: 'easeOutSine',
	fluid: false,
	propagate: true
};
}(jQuery));
