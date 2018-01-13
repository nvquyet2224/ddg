function loadData(url, obj) {

    $.ajax({url: url, cache: false, success: function(data) {
        $(obj).html(data);
        
        if(url =='data-01.html'){
           loadData('data-02.html',$('#box2'));
        }else if(url =='data-02.html'){
            loadData('data-03.html',$('#box3'));
        }else if(url =='data-03.html'){
            loadData('data-04.html',$('#box4'));
        }
        
    }});
  
}

$(document).ready(function () {
    loadData('data-01.html',$('#box1'));

    /*setTimeout(function(){
        loadData('data-02.html',$('#box2'));
    },300);
    
    setTimeout(function(){
        loadData('data-03.html',$('#box3'));
    },600);

    setTimeout(function(){
        loadData('data-04.html',$('#box4'));
    },900);
    */
});

