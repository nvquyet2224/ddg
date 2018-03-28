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
		html:'<h3>Him Lam - Hà Nội</h3><p>6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM<br>Phone: <a hrel="tel:(028)39876666">(028) 39876666</a> <br>Email: <a hrel="mailto:Email: info@trungtamhimlam.vn">Email: info@trungtamhimlam.vn</a></p>'
	},{
		id:'area_02',
		lat:16.054407, 
		lng:108.202167,
		html:'<h3>Him Lam - Đà Nẵng</h3><p>6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM<br>Phone: <a hrel="tel:(028)39876666">(028) 39876666</a> <br>Email: <a hrel="mailto:Email: info@trungtamhimlam.vn">Email: info@trungtamhimlam.vn</a></p>'
	},{
		id:'area_03',
		lat:10.829742, 
		lng:106.655327,
		html:'<h3>Him Lam - Hò Chí Minh</h3><p>6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM<br>Phone: <a hrel="tel:(028)39876666">(028) 39876666</a> <br>Email: <a hrel="mailto:Email: info@trungtamhimlam.vn">Email: info@trungtamhimlam.vn</a></p>'
	},{
		id:'area_04',
		lat:10.045162, 
		lng:105.746854,
		html:'<h3>Him Lam - Cần Thơ</h3><p>6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM<br>Phone: <a hrel="tel:(028)39876666">(028) 39876666</a> <br>Email: <a hrel="mailto:Email: info@trungtamhimlam.vn">Email: info@trungtamhimlam.vn</a></p>'
	}
	
];

var centerLocation = [
	{
		id:'center_01',
		lat:10.797739, 
		lng:106.672429,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_02',
		lat:10.797060, 
		lng:106.676193,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_03',
		lat:10.798272, 
		lng:106.678478,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_04',
		lat:10.794509, 
		lng:106.672770,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_05',
		lat:10.794009, 
		lng:106.676205,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'center_06',
		lat:10.796538, 
		lng:106.679553,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	}
	
];

var subLocation = [
	{
		id:'sub_01',
		lat:10.797739, 
		lng:106.672429,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_02',
		lat:10.797060, 
		lng:106.676193,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_03',
		lat:10.798272, 
		lng:106.678478,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_04',
		lat:10.794509, 
		lng:106.672770,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_05',
		lat:10.794009, 
		lng:106.676205,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'sub_06',
		lat:10.796538, 
		lng:106.679553,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	}
	
];

var clubLocation = [
	{
		id:'club_01',
		lat:10.797739, 
		lng:106.672429,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_02',
		lat:10.797060, 
		lng:106.676193,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_03',
		lat:10.798272, 
		lng:106.678478,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_04',
		lat:10.794509, 
		lng:106.672770,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_05',
		lat:10.794009, 
		lng:106.676205,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	},{
		id:'club_06',
		lat:10.796538, 
		lng:106.679553,
		html:'<h3>cơ sở quận gò vấp</h3><p>M6 Tân Sơn. Phường 12. Quận Gò Vấp. TP HCM <br>Phone: (028) 39876666 <br>Email: info@trungtamhimlam.vn</p>'
	}
	
];

function initMapHome() {
		var Center = new google.maps.LatLng(10.827719, 106.647259);	

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
        zoom: 13,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: 'cooperative',
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };
    
		google.maps.event.addDomListener(window, "resize", function () {
				google.maps.event.trigger(map, "resize")
				map.setCenter(Center);
				map.setZoom(13);
		});
		
		var logo = '../pictures/logo-map.png';
		
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		
		
		//Tạo Marker và danh sách infobox
		for (var i = 0; i < homeLocation.length; ++i) {
				
				homeMarker[i] = new google.maps.Marker({
						id: homeLocation[i].id,
						order: i,
						position: {
								lat: homeLocation[i].lat,
								lng: homeLocation[i].lng
						},
						icon: logo,
						map: map,
						animation: google.maps.Animation.DROP
				});
				
				showInfoHome(map, homeMarker[i], i, homeLocation[i].id, homeLocation[i].html);
				
		}
		
		ZoomControl(map);
	 
}

var geocoder = null;
var curLocation = 0;

function initMap(){
	centerMap();
	subMap();
	clubMap();
	
	//geocoder = new google.maps.Geocoder();
	
	//Lấy tọa độ người dùng
	function getCurPosition(){
		if (navigator.geolocation) {
					
					var Options = {
						enableHighAccuracy: true,
						timeout: 5000,
						maximumAge: 0
					};
					
					function passLocation(position) {
						curLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						
					}
					
					function error(){
							$.ajax({
										format: "jsonp",
										dataType: "jsonp",
										url: "http://ip-api.com/json",
										success: function (data) {
												curLocation = new google.maps.LatLng(data.lat, data.lon);
												console.log('Location from json');
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
	
	getCurPosition();
	
}


function changeMarker(marker){
		var icon = '../pictures/logo-map.png';
		if($(window).width() <= 840){
			icon = '../pictures/logo-map-small.png';
		}
		
		for(var i = 0; i < marker.length; i++){
				marker[i].setIcon(icon);
		}
}

		
		
function centerMap(){
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
        zoom: 15,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: 'cooperative',
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };
    
		google.maps.event.addDomListener(window, "resize", function () {
				google.maps.event.trigger(map, "resize")
				map.setCenter(Center);
				changeMarker(centerMarker);
				map.setZoom(15);
				
		});
		
		var logo = '../pictures/logo-map.png';
		
		if($(window).width() <= 840){
			logo = '../pictures/logo-map-small.png';
		}
		
		
		var map = new google.maps.Map(document.getElementById('center-map'), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		
		
		//Tạo Marker và danh sách infobox
		for (var i = 0; i < centerLocation.length; ++i) {
				
				centerMarker[i] = new google.maps.Marker({
						id: centerLocation[i].id,
						order: i,
						position: {
								lat: centerLocation[i].lat,
								lng: centerLocation[i].lng
						},
						icon: logo,
						map: map,
						animation: google.maps.Animation.DROP
				});
				
				showInfoCenter(map, centerMarker[i], i, centerLocation[i].id, centerLocation[i].html);
				
		}
		
		$('.center-map').on('click', 'button', function(){
				codeAddress(map,centerMarker,1);
		});
		
		
		ZoomControlAbout(map,'.center-map');
		
}

function subMap(){
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
        zoom: 15,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: 'cooperative',
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };
    
		google.maps.event.addDomListener(window, "resize", function () {
				google.maps.event.trigger(map, "resize")
				map.setCenter(Center);
				changeMarker(subMarker);
				map.setZoom(15);
		});
		
		var logo = '../pictures/logo-map.png';
		
		var map = new google.maps.Map(document.getElementById('sub-map'), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		
		
		//Tạo Marker và danh sách infobox
		for (var i = 0; i < subLocation.length; ++i) {
				
				subMarker[i] = new google.maps.Marker({
						id: subLocation[i].id,
						order: i,
						position: {
								lat: subLocation[i].lat,
								lng: subLocation[i].lng
						},
						icon: logo,
						map: map,
						animation: google.maps.Animation.DROP
				});
				
				showInfoSub(map, subMarker[i], i, subLocation[i].id, subLocation[i].html);
				
		}
		
		$('.sub-map').on('click', 'button', function(){
				codeAddress(map,subMarker,2);
		});
		
		ZoomControlAbout(map,'.sub-map');
}

function clubMap(){
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
        zoom: 15,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: 'cooperative',
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };
    
		google.maps.event.addDomListener(window, "resize", function () {
				google.maps.event.trigger(map, "resize")
				map.setCenter(Center);
				changeMarker(clubMarker);
				map.setZoom(15);
		});
		
		var logo = '../pictures/logo-map.png';
		
		var map = new google.maps.Map(document.getElementById('club-map'), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		
		
		//Tạo Marker và danh sách infobox
		for (var i = 0; i < clubLocation.length; ++i) {
				
				clubMarker[i] = new google.maps.Marker({
						id: clubLocation[i].id,
						order: i,
						position: {
								lat: clubLocation[i].lat,
								lng: clubLocation[i].lng
						},
						icon: logo,
						map: map,
						animation: google.maps.Animation.DROP
				});
				
				showInfoClub(map, clubMarker[i], i, clubLocation[i].id, clubLocation[i].html);
				
		}
		
		$('.club-map').on('click', 'button', function(){
				codeAddress(map,clubMarker,3);
		});
		
		
		ZoomControlAbout(map,'.club-map');
		
}


function showInfoHome(map,marker,index,id,html){
		var boxText = document.createElement("div");
		boxText.innerHTML = '<div class="infobox">'+ html +'</div>';
		
		var optionBox = {
			content: boxText,
			disableAutoPan: true,
			maxWidth: 220,
			pixelOffset: new google.maps.Size(-110, -140),
			boxStyle: {width: "220px"},
			closeBoxMargin: "0",
			closeBoxzIndex: "99999",
			closeBoxPosition: "absolute",
			closeBoxURL: "../images/close.png",
			infoBoxClearance: new google.maps.Size(1, 1),
			isHidden: false,
			pane: "floatPane",
			enableEventPropagation: true
			
		};
		
		google.maps.event.addListener(marker, 'click', function(){
			
					var order = marker.order;
					var markerId= marker.id;
					
					//close orther info
					for(var i = 0; i < homeMarker.length; i++){
							if(homeMarker[i].id != markerId){
								 homeMarker[i].isOpen = false;
							}
							if(homeInfo[i]){
								 homeInfo[i].close();
							}
					}
					
					//$(".agency .list-result li").removeClass('active');
							
					if(!marker.isOpen){
							//homeInfo[order] = new InfoBox(optionBox);
							//homeInfo[order].id = id;
							//homeInfo[order].open(map, marker);
							//marker.isOpen = true;
							//$(".agency .list-result li[agen-id='" + id + "']").addClass('active');
							//var Top =  $(".agency .list-result li.active").offset().top;
							//var Height = $(".agency .list-result").offset().top;
							//$(".agency .list-result").stop().animate({ scrollTop: Top - Height}, 600, 'easeInOutExpo');
							
							if(byClick){
									map.setCenter(marker.position);
							}
						
					}else{
							homeInfo[order].close();
							marker.isOpen = false;
					}
					
					byClick =false;
					
		});
		
}      


function showInfoCenter(map,marker,index,id,html){
		var boxText = document.createElement("div");
		boxText.innerHTML = '<div class="infobox type-network">'+ html +'</div>';
		
		var optionBox = {
			content: boxText,
			disableAutoPan: true,
			maxWidth: 220,
			pixelOffset: new google.maps.Size(-110, -140),
			boxStyle: {width: "220px"},
			closeBoxMargin: "0",
			closeBoxzIndex: "99999",
			closeBoxPosition: "absolute",
			closeBoxURL: "../images/close.png",
			infoBoxClearance: new google.maps.Size(1, 1),
			isHidden: false,
			pane: "floatPane",
			enableEventPropagation: true
			
		};
		
		google.maps.event.addListener(marker, 'click', function(){
			
					var order = marker.order;
					var markerId= marker.id;
					
					//close orther info
					for(var i = 0; i < centerMarker.length; i++){
							if(centerMarker[i].id != markerId){
								 centerMarker[i].isOpen = false;
							}
							if(centerInfo[i]){
								 centerInfo[i].close();
							}
					}
					
					$(".center-map .list-result li").removeClass('active');
							
					if(!marker.isOpen){
							centerInfo[order] = new InfoBox(optionBox);
							centerInfo[order].id = id;
							centerInfo[order].open(map, marker);
							marker.isOpen = true;
							$(".center-map .list-result li[data-id='" + id + "']").addClass('active');
							var Top =  $(".center-map .list-result li.active").offset().top;
							var Height = $(".center-map .list-result").offset().top;
							$(".center-map .list-result").stop().animate({ scrollTop: Top - Height}, 600, 'easeInOutExpo');
							
							if(byClick){
									map.setCenter(marker.position);
							}
						
					}else{
							centerInfo[order].close();
							marker.isOpen = false;
					}
					
					byClick =false;
					
		});
		
}      

function showInfoSub(map,marker,index,id,html){
		var boxText = document.createElement("div");
		boxText.innerHTML = '<div class="infobox type-network">'+ html +'</div>';
		
		var optionBox = {
			content: boxText,
			disableAutoPan: true,
			maxWidth: 220,
			pixelOffset: new google.maps.Size(-110, -140),
			boxStyle: {width: "220px"},
			closeBoxMargin: "0",
			closeBoxzIndex: "99999",
			closeBoxPosition: "absolute",
			closeBoxURL: "../images/close.png",
			infoBoxClearance: new google.maps.Size(1, 1),
			isHidden: false,
			pane: "floatPane",
			enableEventPropagation: true
			
		};
		
		google.maps.event.addListener(marker, 'click', function(){
			
					var order = marker.order;
					var markerId= marker.id;
					
					//close orther info
					for(var i = 0; i < subMarker.length; i++){
							if(subMarker[i].id != markerId){
								 subMarker[i].isOpen = false;
							}
							if(subInfo[i]){
								 subInfo[i].close();
							}
					}
					
					$(".sub-map .list-result li").removeClass('active');
							
					if(!marker.isOpen){
							subInfo[order] = new InfoBox(optionBox);
							subInfo[order].id = id;
							subInfo[order].open(map, marker);
							marker.isOpen = true;
							$(".sub-map .list-result li[data-id='" + id + "']").addClass('active');
							var Top =  $(".sub-map .list-result li.active").offset().top;
							var Height = $(".sub-map .list-result").offset().top;
							$(".sub-map .list-result").stop().animate({ scrollTop: Top - Height}, 600, 'easeInOutExpo');
							
							if(byClick){
									map.setCenter(marker.position);
							}
						
					}else{
							subInfo[order].close();
							marker.isOpen = false;
					}
					
					byClick =false;
					
		});
		
}      

function showInfoClub(map,marker,index,id,html){
		var boxText = document.createElement("div");
		boxText.innerHTML = '<div class="infobox type-network">'+ html +'</div>';
		
		var optionBox = {
			content: boxText,
			disableAutoPan: true,
			maxWidth: 220,
			pixelOffset: new google.maps.Size(-110, -140),
			boxStyle: {width: "220px"},
			closeBoxMargin: "0",
			closeBoxzIndex: "99999",
			closeBoxPosition: "absolute",
			closeBoxURL: "../images/close.png",
			infoBoxClearance: new google.maps.Size(1, 1),
			isHidden: false,
			pane: "floatPane",
			enableEventPropagation: true
			
		};
		
		google.maps.event.addListener(marker, 'click', function(){
			
					var order = marker.order;
					var markerId= marker.id;
					
					//close orther info
					for(var i = 0; i < clubMarker.length; i++){
							if(clubMarker[i].id != markerId){
								 clubMarker[i].isOpen = false;
							}
							if(clubInfo[i]){
								 clubInfo[i].close();
							}
					}
					
					$(".club-map .list-result li").removeClass('active');
							
					if(!marker.isOpen){
							clubInfo[order] = new InfoBox(optionBox);
							clubInfo[order].id = id;
							clubInfo[order].open(map, marker);
							marker.isOpen = true;
							$(".club-map .list-result li[data-id='" + id + "']").addClass('active');
							var Top =  $(".club-map .list-result li.active").offset().top;
							var Height = $(".club-map .list-result").offset().top;
							$(".club-map .list-result").stop().animate({ scrollTop: Top - Height}, 600, 'easeInOutExpo');
							
							if(byClick){
									map.setCenter(marker.position);
							}
						
					}else{
							clubInfo[order].close();
							marker.isOpen = false;
					}
					
					byClick =false;
					
		});
		
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
		
		//Remove later
		var curLocation = new google.maps.LatLng(10.796780, 106.675689);	
		
		map.setCenter(curLocation);
		closest = findClosestN(curLocation,tempMarker);
		//get driving distance
		calculateDistances(curLocation, closest,type);
		
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
					
					if(type == 1){
						$('.center-map .list-result li').addClass('hide');
						$('.center-map .sort_distance').remove();
					
					}else if(type == 2){
						$('.sub-map .list-result li').addClass('hide');
						$('.sub-map .sort_distance').remove();
					}else{
						$('.club-map .list-result li').addClass('hide');
						$('.club-map .sort_distance').remove();
					}
					
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
								
								if(type == 1){
										centerMarker[i].setVisible(true);
										$(".center-map .list-result li[data-id='" + id + "']").removeClass('hide');
										$(".center-map .list-result li[data-id='" + id + "']").append(html);
										$(".center-map .list-result li[data-id='" + id + "']").attr('data-km',numKM);
										
								}else if(type == 2){
										subMarker[i].setVisible(true);
										$(".sub-map .list-result li[data-id='" + id + "']").removeClass('hide');
										$(".sub-map .list-result li[data-id='" + id + "']").append(html);
										$(".sub-map .list-result li[data-id='" + id + "']").attr('data-km',numKM);
								}else{
										clubMarker[i].setVisible(true);
										$(".club-map .list-result li[data-id='" + id + "']").removeClass('hide');
										$(".club-map .list-result li[data-id='" + id + "']").append(html);
										$(".club-map .list-result li[data-id='" + id + "']").attr('data-km',numKM);
								}
								
							}else{
									if(type == 1){
										centerMarker[i].setVisible(false);
										centerMarker[i].isOpen = false;
										if(centerInfo[i]){
												 centerInfo[i].close();
										}
										
									}else if(type == 2){
										subMarker[i].setVisible(false);
										subMarker[i].isOpen = false;
										if(subInfo[i]){
												subInfo[i].close();
										}
									}else{
										clubMarker[i].setVisible(false);
										clubMarker[i].isOpen = false;
										if(clubInfo[i]){
												clubInfo[i].close();
										}
									}
							}
					}
					
					//Lọc và xắp tăng dần danh sách theo KM
					var ulBox = null;
					var liBox = null;
					var liContents = [];
					if(type == 1){
								liBox = $(".center-map .list-result ul li");
								ulBox = $(".center-map .list-result ul");
					}else if(type == 2){
							liBox = $(".sub-map .list-result ul li");
							ulBox = $(".sub-map .list-result ul");
					}else{
							liBox = $(".club-map .list-result ul li");
							ulBox = $(".club-map .list-result ul");
					}
					
					$(liBox).each(function() {
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
						
					$(ulBox).html(liContents);
			
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
