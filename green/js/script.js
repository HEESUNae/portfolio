/****************************************************
 * 공통
****************************************************/
//pc 헤더
$(function(){
  $(".menu ul,.sub_menu").mouseenter(function(){
    if($(".sub_menu").css("display") != "block"){
       $(".sub_menu").slideDown();
    }
  });

  $("header").mouseleave(function(){
    if($(".sub_menu").css("display") != "none"){
       $(".sub_menu").slideUp();
    }
  });
});

//햄버거 버튼
$(function(){
	$(".site_btn").on("click",function(){
		$(".site_map").css("display","flex");
	});
	$(".site_map .close_btn").on("click",function(){
		$(".site_map").css("display","none");
	});
});

//지도 숫자 카운팅 콜백함수
function strCount () {
	$({ val : 0 }).animate({ val : 1 }, {
		duration: 800,
		step: function() {
			var num = numberWithCommas(Math.floor(this.val));
			$(".count01").text(num);
		},
		complete: function() {
			var num = numberWithCommas(Math.floor(this.val));
			$(".count01").text(num);
		}
	});
	$({ val : 0 }).animate({ val : 300 }, {
		duration: 1500,
		step: function() {
			var num = numberWithCommas(Math.floor(this.val));
			$(".count02").text(num);
		},
		complete: function() {
			var num = numberWithCommas(Math.floor(this.val));
			$(".count02").text(num);
		}
	});
	$({ val : 0 }).animate({ val : 1100 }, {
		duration: 1500,
		step: function() {
			var num = numberWithCommas(Math.floor(this.val));
			$(".count03").text(num);
		},
		complete: function() {
			var num = numberWithCommas(Math.floor(this.val));
			$(".count03").text(num);
		}
	});
}

//서브(사업소개) - 지도 숫자 카운팅
$(function(){
  $(window).scroll(function(){
    if($(".cm_sec_map").hasClass("show") == true){
      strCount();
		  $(".cm_sec_map").removeClass("show");
    }
  });
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/****************************************************
 * 메인
****************************************************/
//메인 - 풀페이지
$(document).ready(function() {
	if (window.innerWidth < 1300) {
		$('#fullpage').fullpage({
			verticalCentered: true,
			responsiveWidth: 1300, //반응형 어디서부터 풀페이지 스크립트 없앨지
			slidesNavPosition: 'bottom',
			//scrollBar: true
			afterLoad: function(anchorLink, index){
				if (index==2) {
					strCount();
				}
			}
		});
	}else{
		$('#fullpage').fullpage({
			verticalCentered: true,
			responsiveWidth: 1300, //반응형 어디서부터 풀페이지 스크립트 없앨지
			slidesNavPosition: 'bottom',
			anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4'], //슬라이드 갯수만큼쓰기
			//scrollBar: true
			afterLoad: function(anchorLink, index){
				if (index==2) {
					strCount();
				}
			}
		});
	}
});

//메인 - 사이드메뉴
$(function(){
  $(".side_menu ul li a").on('click', function () {
      var thisId = $(this).attr('id');
      if($("." + thisId).css("display") == "flex"){
          $("." + thisId ).removeClass("active");
      }else{
          $(".side_popup").removeClass("active");
          $("." + thisId).addClass("active");
      }
  });
});

//메인 - 사이드메뉴 - CBM
$(function(){
  $("#conctact_popup").on('click',function(){
    $(".conctact_popup").css("display","block");
  });
  $(".conctact_popup .close_btn").on('click',function(){
    $(".conctact_popup").css("display","none");
  });
});

/****************************************************
 * 서브 - 스케줄
****************************************************/

//서브 - 화면에 나타날때 애니메이션 실행
$(function () {
	const spyEls = document.querySelectorAll('.scroll-spy')
	spyEls.forEach(function (spyEl) {
		new ScrollMagic
			.Scene({
				triggerElement: spyEl,
				triggerHook: .8
			})
			.setClassToggle(spyEl, 'show')
			.addTo(new ScrollMagic.Controller())
	})
});


/****************************************************
 * 서브 - 스케줄
****************************************************/
//서브 - 스케줄 - 나라 상세보기
$(function(){
	$(".scd_export .cm_scd .more_btn").on("click",function(){
		var navId = $(this).attr("id");
		if($(".scd_export .cm_scd .more_view." + navId).css("display") != "block"){
			 $(".scd_export .cm_scd .more_view." + navId).slideDown();
			 $(".scd_export .cm_scd .more_btn#" + navId + " i").attr("class","xi-caret-up-min");
		}else{
			$(".scd_export .cm_scd .more_view." + navId).slideUp();
			$(".scd_export .cm_scd .more_btn#" + navId + " i").attr("class","xi-caret-down-min");
		}
	});
});
