/********************
made. hwang hee sun
since. 2022.01.06
*******************/

$(function(){
  //메인 슬라이드01 - main_sec01
  var swiper = new Swiper('.swiper-container01',{
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //메인 슬라이드02 - main_sec02
    var swiper = new Swiper('.swiper-container02',{
        slidesPerView: 2,
        spaceBetween: 7,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
        navigation: {
            nextEl: '.main_slide02_next',
            prevEl: '.main_slide02_prev',
        }
    });

    //모바일 햄버거버튼 on/off
    $(".hamberger img").on("click",function(){
      $(".moblie_navi_wrap").addClass('active');
      $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    });
    $(".moblie_navi_wrap .close_btn, .moblie_navi_wrap .moblie_mask").on("click",function(){
      $(".moblie_navi_wrap").removeClass('active');
      $('html, body').css({'overflow': 'auto', 'height': 'auto'});
    });

    //모바일 서브메뉴 슬라이드
    $(".navi_list ul li > a").on("click", function(){
      var navId = $(this).attr("id");
      $(".navi_list ul li ul").slideUp();

      if($(".navi_list ul li ul." + navId).css("display") != "block"){
        $(".navi_list ul li ul." + navId).slideDown();
      }else{
        $(".navi_list ul li ul").slideUp();
      }
    });
});
