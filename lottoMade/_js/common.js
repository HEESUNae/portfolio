//HEAD MENU SCRIPT
$(function(){
    $("header .gnb,header .lnb").hover(function(){
        if($("header .lnb").css('display') == "none"){
            $("header .lnb").css('display','block');
        }else{
            $("header .lnb").css('display','none');
        }
    });
});

//MAIN SWIPER
new Swiper('.main-benner .swiper-container', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay : {
        delay : 5000,
        disableOnInteraction : false,
    }
});

//FREE BOARD SWIPER
new Swiper('.free-board .swiper-container', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay : {
        delay : 5000,
        disableOnInteraction : false,
    }
});

//SUB TAB
function subTab(hs){
    $(".sub-benner .tab ul li").removeClass('active');    
    $(".sub-benner .tab ul li.sub-tab" + hs).addClass('active');

    systemTab(hs);
}

function systemTab(hs){
    $(".system-cont").css("display","none");
    $("#system-cont" + hs ).css("display","block");
}
