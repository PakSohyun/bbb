$(document).ready(function(){
    control_mouse();
    scroll_page();
    slide();
});

function control_mouse(){
    $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
    $(document).bind('selectstart', function() {return false;}); // 드래그 클릭 금지
}

function scroll_page(){
    setTimeout(function(){
        $(".scroll_page").addClass("active");
    },2500);
}

var l = 0;
var i = 1;
var moved = true;

function slide(){
    if($(window).outerWidth() >= 1025) {
        setTimeout(function(){
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
                    var $ypos; 
                    
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
                    
                    setTimeout(function(){
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
        },2500);
    }

    if($(window).outerWidth() < 1024){
        var $length = $(".sec").length;    

        for(j = 0; j < $length; j++){
            $("main .pagination ul").append("<li>page"+(j+1)+"</li>");
        }   

        $("main .sec.sec_05 .img_box img").attr("src","images/main_product_05_m.png");
        $("main .sec.sec_03 .img_box img").attr("src","images/main_product_03_m.png");
        $("footer .inner p").text("COPYRIGHT(C) KWANG DONG PHARMACEUTICAL CO., LTD. ALL RIGHTS RESERVED");
        $(".sec").eq(l).stop().addClass("active");
        $(".pagination li").eq(l).stop().addClass("active");

        start();
        function start(){            
            timer = setInterval(function(){
                if(l == $length - 1){
                    l = 0;
                }else{
                    l++;
                }
                active();
                
            },6500);
        }

        function active(){
            $(".sec").stop().removeClass("active");
            $(".sec").eq(l).stop().addClass("active");
            $(".pagination li").removeClass("active");
            $(".pagination li").eq(l).addClass("active");
        }


        $(".pagination li").click(function(){
            clearInterval(timer);
            var $index = $(this).index();
            l = $index;
            active();
            start();
        });
    }
}

          