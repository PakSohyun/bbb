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
    $("main .slide_wrap").append($slide_clone); 
    $("main .slide_wrap").prepend($slide_clone2);
    
    var $margin = Number($(".main_slide .slide").css("margin-bottom").slice(0,-2));
    var $height = -($(".main_slide .slide").height() + $margin);
    var $length = $(".main_slide .slide").length/3;
    $(".slide_wrap").css("transform","translateY("+($height*$length)+"px)");
      
    $("body").on("mousewheel", function (event) {
        if(moved){
            moved = false;
            var $mousewheel = event.originalEvent.wheelDelta;            
            var $ypos = $height * i;     
            
            if($mousewheel == -120){
                i++;                
            }if($mousewheel == 120){
                i--;
            }; 
            
            $ypos = $height * (i-1);     
            $(".slide_wrap .main_slide").css("transform","translateY("+$ypos+"px)"); 
            $(".slide_wrap .main_slide").css("transition","1s"); 
            $("main .sec").stop().removeClass("active");
            $("main .sec").stop().eq(i%$length-1).addClass("active");
            
            setTimeout(() => {
                if(i == $length+1){
                    i = 1;
                    $ypos = $height * (i-1);   
                    $(".slide_wrap .main_slide").css("transition","0s"); 
                    $(".slide_wrap .main_slide").css("transform","translateY("+$ypos+"px)"); 
                }

                if(i == 0){
                    i = $length;
                    $ypos = $height * (i-1);     
                    $(".slide_wrap .main_slide").css("transition","0s"); 
                    $(".slide_wrap .main_slide").css("transform","translateY("+$ypos+"px)"); 
                }
                moved = true;
            }, 1000);
        }
    });                 
}

          