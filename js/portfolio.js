
// smooth scroll

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0

(function($) {
    
    jQuery.scrollSpeed = function(step, speed) {
        
        var $document = $(document),
        
            $window = $(window),
            
            $body = $('html, body'),
            
            viewport = $window.height(),
            
            top = 0,
            
            scroll = false;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
        
            scroll = true;
            
            if (e.originalEvent.wheelDeltaY < 0 || e.originalEvent.detail > 0)
            
                top = (top + viewport) >= $document.height() ? top : top += step;
                
            if (e.originalEvent.wheelDeltaY > 0 || e.originalEvent.detail < 0)
            
                top = top <= 0 ? 0 : top -= step;
                
            $body.stop().animate({
            
                scrollTop: top
                
            }, speed, 'default', function() {
            
                scroll = false;
                
            });
            
            return false;
            
        }).on('scroll', function() {
        
            if (!scroll) top = $window.scrollTop();
            
        }).on('resize', function() {
            
            viewport = $window.height();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);

$(function() {  

    jQuery.scrollSpeed(100, 800);

});




// parallax

$(function(){
    
    var $skill=$('.skill'),
    
        $portfolio = $('.portfolio'),
        
        $pa_title = $('.portfolio h2:after'),
        
        $pb_title = $('.portfolio h2:before');
        
        
        
    $(document).ready(function(){
        
          
        
    });    
    

    $(window).scroll(function (){

        var scroll = $(window).scrollTop();

        var windowHeight = $(window).height();
      
        $skill.each(function(){  

            var $item_wrapp=$('.skill .item_wrapp'),
                
                $constellation=$('.constellation'),
          
                imgPos =  $skill.offset().top;  
              
            if (scroll > imgPos - windowHeight + 50){

                $item_wrapp.addClass('iwrapp_ani');
                
                $constellation.addClass('constellation_ani')
            };       
    
        });
    });
});














