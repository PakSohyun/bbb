$(document).ready(function(){
    scroll(".itro .img_box");
    scroll(".brand .img_box");
    scroll(".sales .img_box");
  });

function scroll($target){
  $(".visual_tit").addClass("active");
  $(window).scroll(function(){
    var $scrollTop = $(window).scrollTop();
    var $img_offset = ($($target).offset().top)-500;
    if($scrollTop > $img_offset){
      $($target).addClass("active");
    }
  });
}  