$(document).ready(function(){
  control_mouse();
  slide();
  click();
});

function control_mouse(){
  $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
  $(document).bind('selectstart', function() {return false;}); // 드래그 클릭 금지
}

function slide(){  
    var $width = ($(".model_swiper-wrapper").width()*2);
    var $slide_clone = $(".model_swiper-wrapper").clone();
    $(".model_swiper-wrapper").after($slide_clone);
    $(".model_swiper-wrapper").parent().css("width",$width);
}

function click(){  
  $(".visual_wrap nav ul li").click(function(){
    $(".visual_wrap nav ul li").removeClass("active");      
    $(this).addClass("active");
    var $clickId = $(this).attr("id"); 
    var $offset = $("." + $clickId).offset().top; 
    $("html").stop().animate({scrollTop:$offset},500);
  });     

  $(".hover_more").click(function(){
    var $clickId = $(this).parent().parent().attr("id");
    $(".history .more > div").removeClass("active");
    $("." + $clickId).addClass("active");
    $(".history .more").css({position: "fixed" , top : "0" , left: "0" , zIndex : "9999" , width: "100%" , height: "100%" , backgroundColor: "rgba(0, 0, 0, 0.8)"});
    $("body").css("overflow-y","hidden");        
    var $witdh = $("." + $clickId).children().children("div").innerWidth();
    var $height = $("." + $clickId).children().children("div").innerHeight();
    $("." + $clickId).children().css({width:$witdh, height:$height});
  });
  $(".history .more").click(function(){
    $(".history .more > div").removeClass("active");
    $(".history .more").css({position: "" , top : "0" , left: "0" , zIndex : "" , width: "" , height: "" , backgroundColor: ""});
    $("body").css("overflow-y","scroll");  
  });
  $(".more .text").click(function(e){
    e.stopPropagation();
  });

  $(".media .media_slide .swiper-slide").click(function(){
    var $src = $(this).children("span").text();
    $(".media iframe").attr("src", $src);
  });
}

