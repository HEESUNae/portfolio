// sec01
var type02 =  new TypeIt('.sec02 .cm_title', {
     cursor:false,
     waitUntilVisible: true
    }).go();

var type03 =  new TypeIt('.sec03 .cm_title', {
     cursor:false,
     waitUntilVisible: true
    }).go();

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".sec01 .cm_title", {
        cursor:false,
        afterComplete: function() {
            type02();
        },function(){
            type03();
        }
    }).go();
});

var rellax = new Rellax('.rellax');

var controller = new ScrollMagic.Controller();
var tween01 = new TweenMax.to('.sec01 ul li', 0.5, {
    opacity:0
});
 var scene01 = new ScrollMagic.Scene({
     triggerElement: '.sec02',
     duration: '50%', 
 })
.setTween(tween01)
.addTo(controller)
//.addIndicators();

//sec02
var scene02 = new ScrollMagic.Scene({
    triggerElement: ".sec02",
    triggerHook: 0.9,
    duration: "100%",
     offset: 800  })
.setClassToggle('.sec02 .txt_wrap', 'active')
.setPin("#pin1", {pushFollowers: false})
//.addIndicators({name: "1 (duration: 300)"})
.addTo(controller);

//sec03
TweenMax.set(".sec03_ico02", {right: "-=100"});

var tween02 = new TimelineMax()
.to(".sec03_ico02", 2, {top: "-=400", right: "+=720"});

var scene = new ScrollMagic.Scene({
    triggerElement: ".sec03"
})
.setClassToggle('.sec03 .txt_wrap', 'active')
.setTween(tween02)
//.addIndicators({name: "timeline"})
.addTo(controller);
