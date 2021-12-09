$(document).ready(function(){
  control_mouse();  
  click("footer .sns > div > span");
  click(".product_detail h5");
  click(".search_wrap .select button");
  button(".search_wrap .select button");
  scrolltop();
});

function control_mouse(){
  $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
}

function scrolltop(){
  $(".top").click(function(){
    $("html").animate({scrollTop:0});
  });
}

function click($target){
  $($target).click(function(){
    $(this).parent().toggleClass("active");            
  });    
}

function button($target){
  $($target).closest("div").children("ul").children("li").click(function(){
    var $effect_select = $(this).text();
    $(this).parent().siblings("button").text($effect_select);
    $($target).parent().removeClass("active");  
  });
}
