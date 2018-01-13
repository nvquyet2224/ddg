function loadData1(url, obj) {

    $.ajax({url: url, cache: false, success: function(data) {
        $(obj).html(data);
        
    }});
  
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
    loadData1('data-01.html',$('#box1'));

    setTimeout(function(){
        loadData2('data-02.html',$('#box2'));
    },100);
    
    setTimeout(function(){
        loadData3('data-03.html',$('#box3'));
    },200);

    setTimeout(function(){
        loadData4('data-04.html',$('#box4'));
    },300);
    
});

