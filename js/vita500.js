$(document).ready(function(){
    scroll(".concept .inner");
    scroll(".vision .img_box");
    scroll(".recommend .img_box");
    scroll(".model_slide_wrap");    
  });

  function scroll($target){
    $(".visual_tit").addClass("active");
    $(window).scroll(function(){
      var $scrollTop = $(window).scrollTop();
      var $img_offset = ($($target).offset().top)*0.8;
      if($scrollTop > $img_offset){
        $($target).addClass("active");
      }
    });
}
