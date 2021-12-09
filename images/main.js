$(document).ready(function(){
    slide();
    control_mouse();
});

function control_mouse(){
    $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
    $(document).bind('selectstart', function() {return false;}); // 드래그 클릭 금지
}

var i = 1;
var moved = true;

function slide(){

    $("main .sec").eq(0).addClass("active");
    var $slide_clone = $(".main_slide").clone();
    var $slide_clone2 = $(".main_slide").clone();
    $(".slide_wrap").append($slide_clone);
    $(".slide_wrap").prepend($slide_clone2);
      
    $("body").on("mousewheel", function (event) {
        if(moved){
            moved = false;
            var $mousewheel = event.originalEvent.wheelDelta; 
            var $width = -($(".main_slide .slide").height() + $margin);
            var $ypos = $width * (i+5);     
            var $margin = Number($(".main_slide .slide").css("margin-bottom").slice(0,-2));
            $(".slide_wrap .main_slide").css("transform","translateY("+$ypos+"px)"); 
            var $length = $(".main_slide .slide").length/2;
            
            if($mousewheel == -120){
                i++;                
            }if($mousewheel == 120){
                i--;
            }; 
            
            $ypos = $width * (i+5);     
            $(".slide_wrap .main_slide").css("transform","translateY("+$ypos+"px)"); 
            $(".slide_wrap .main_slide").css("transition","1s"); 
            $("main .sec").stop().removeClass("active");
            $("main .sec").stop().eq(i%$length-1).addClass("active");
            setTimeout(() => {
                if(i == $length+1){
                    i = 1;
                    $ypos = $width * (i-1);   
                    $(".slide_wrap .main_slide").css("transition","0s"); 
                    $(".slide_wrap .main_slide").css("transform","translateY("+$ypos+"px)"); 
                }

                if(i == 0){
                    i = $length;
                    $ypos = $width * (i-1);     
                    $(".slide_wrap .main_slide").css("transition","0s"); 
                    $(".slide_wrap .main_slide").css("transform","translateY("+$ypos+"px)"); 
                }
                moved = true;
            }, 1000);
        }
    });                 
}

          