var ticking = false;
var lastScrollY = 0;

function update(){
    console.log('update');
    var ani = document.querySelectorAll('.box-item');
    ani.forEach(function(element) {
        
        var eleTop = element.offsetTop;
        
        if(eleTop - lastScrollY < window.innerHeight){
           element.classList.add("active");
            
        }else{
            element.classList.remove("active");
        }
        
    });
    ticking = false;
    
}

function requestTick(){
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }else{
        console.log('tick');
    }
}

function onScroll(evt) {
    console.log('scroll');
    lastScrollY = window.scrollY;
    requestTick();
   
}

onScroll();
window.addEventListener('scroll', onScroll);

