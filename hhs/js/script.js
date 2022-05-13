
$(function(){
$(window).scroll(function() {
    var _scrTop = $(window).scrollTop();

    if (_scrTop >= 1) {
        $("body").addClass("scroll");
    } else {
        $("body").removeClass("scroll");
    }
    });
});


function fnMove(hs){
    var offset = $("."+ hs).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}


var typing = document.getElementById('typing');
var typewriter =  new Typewriter(typing, {
	loop: true
});

typewriter
	.typeString("코딩을 사랑하는 웹퍼블리셔 래빗 포트폴리오 입니다.").pauseFor(1500).deleteAll()
	.start();

document.addEventListener("DOMContentLoaded", () => {
        const scrollTrigger = new ScrollTrigger.default();

        scrollTrigger.add('[data-scroll]', {
            toggle: {
                class: {
                    in: 'scroll_in',
                    out: 'scroll_out'
                }
            },
            //once: true
        });
    });
