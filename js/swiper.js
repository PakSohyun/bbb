$(document).ready(function(){
  banner_slide();
  history_slide(".history_slide",".swiper-button-next1",".swiper-button-prev1");
  history_slide(".media_slide",".swiper-button-next2",".swiper-button-prev2");
  });

function banner_slide(){
    var swiper = new Swiper(".banner", {
        spaceBetween: 0,
        centeredSlides: true,
        observer:true,
        observeParent:true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  }

function history_slide($target,$target2,$target3){
  var swiper = new Swiper($target, {
    slidesPerView: 4,
    spaceBetween: 24,
    observer:true,
    observeParent:true,
    navigation: {
      nextEl: $target2,
      prevEl: $target3 ,
    },
  });
}