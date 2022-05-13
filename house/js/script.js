/*********************
  made. hwang hee sun
*********************/

//메인 메뉴
$(function(){
  $("header nav ul li > a").on("click", function(){
    var navId = $(this).attr("id");

    $("header nav ul li > a").removeClass("active");
    $(this).addClass("active");
    $("header nav ul li ul").slideUp();

    if($("header nav ul li ul." + navId).css("display") != "block"){
       $("header nav ul li ul." + navId).slideDown();
    }else{
      $(this).removeClass("active");
    }
  });
});

//모바일 스크롤 스크립트
$(function(){
  $(document).scroll(function(){
    var windowTop = $(window).scrollTop();
    if(windowTop > 0){
      $(".moblie_header .header_wapper").addClass('active');
    }else {
      $(".moblie_header .header_wapper").removeClass('active');
    }
  });

});

//모바일 아코디언
$(function(){
  $(".moblie_header .moblie_btn").on("click", function(){
    $(".moblie_header .accordion").css("transform","translateX(0)");
    $(".moblie_header .accordion").css("transition","0.5s");
  });

  $(".moblie_header .close_btn").on("click", function(){
    $ (".moblie_header .accordion").css("transform","translateX(-110%");
    $(".moblie_header .accordion").css("transition","0.5s");
  });
});

//메인 비주얼 슬라이드
$(function(){
    var swiper = new Swiper('.swiper-container01',{
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        loop: true,
        speed : 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_slide_next',
            prevEl: '.main_slide_prev',
        }
    });
});

//메인 프로젝트 슬라이드
$(function(){
    var swiper = new Swiper('.swiper-container02',{
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        loop: true,
        speed : 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});
