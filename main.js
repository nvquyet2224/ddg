
/*var span = document.getElementsByTagName('span')[0];
span.textContent = 'interactive'; // change DOM text content
span.style.display = 'inline';  // change CSSOM property
// create a new element, style it, and append it to the DOM
var loadTime = document.createElement('div');
loadTime.textContent = 'You loaded this page on: ' + new Date();
loadTime.style.color = 'blue';
document.body.appendChild(loadTime);
*/

var docTop = document.getElementsByClassName('top')[0];

var searchHTML = '<div class="search"><a href="javascript:void(0);">search</a></div><div class="search-form"><input id="input_search" type="text" value="Tìm kiếm..."></div>'
var logoHTML ='<div class="logo"><a href="javascript:void(0);">logo</a></div>';
var menuHTML = '<nav class="nav"><ul>';
menuHTML += '<li><a href="javascript:void(0);">Nhà đất</a></li>';
menuHTML += '<li><a href="javascript:void(0);">Đồ gia dụng</a></li>';
menuHTML += '<li><a href="javascript:void(0);">Đồ điện tử</a></li>';
menuHTML += '<li><a href="javascript:void(0);">Xe</a></li>';
menuHTML += '<li><a href="javascript:void(0);">Thời trang</a></li>';
menuHTML += '<li><a href="javascript:void(0);">Mẹ và bé</a></li>';
menuHTML += '<li><a href="javascript:void(0);">Thú cưng</a></li>';
menuHTML += '<li><a href="javascript:void(0);">Giải trí</a></li>';
menuHTML += '</ul></nav>';

var topHTML = searchHTML + logoHTML + menuHTML;
docTop.innerHTML = topHTML;

var navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
var navBut = document.createElement('div');
navBut.className = 'nav-but';
navBut.innerHTML = '<span></span>';

docTop.appendChild(navOverlay);
docTop.appendChild(navBut);

