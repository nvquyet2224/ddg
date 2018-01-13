function loadData(url, obj) {

    $.ajax({url: url, cache: false, success: function(data) {
        $(obj).html(data);
    }});
  
}


$(document).ready(function () {
    loadData('data-01.html',$('#box1'));

    setTimeout(function(){
        loadData('data-02.html',$('#box2'));
    },300);
    
    setTimeout(function(){
        loadData('data-03.html',$('#box3'));
    },600);

    setTimeout(function(){
        loadData('data-04.html',$('#box4'));
    },900);
    
});

