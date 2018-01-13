function loadData1(url, obj) {

}
function loadData2(url, obj) {

    $.ajax({url: url, cache: false, success: function(data) {
        $(obj).html(data);
        
    }});
  
}
function loadData3(url, obj) {

    $.ajax({url: url, cache: false, success: function(data) {
        $(obj).html(data);
        
    }});
  
}
function loadData4(url, obj) {

    $.ajax({url: url, cache: false, success: function(data) {
        $(obj).html(data);
        
    }});
  
}

$(document).ready(function () {
   
});

