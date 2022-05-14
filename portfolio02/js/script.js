
//sec01
var loadTyping = function() {
    new TypeIt(".sec01 .text", {
        cursor:false,
    })
    .pause(3000)
    .go();
}
loadTyping();

//사람
gsap.timeline({
    scrollTrigger: {
      trigger:".sec01",
      start: "80% top",
      end: "100% 100%",
      scrub: 0,
     // markers: { startColor: "green", endColor: "red", fontSize: "12px"},
        onLeave: function() {
            document.querySelector('.heesun img').style.transform = "scale(0.8)";
        },
        onEnterBack: function() {
            document.querySelector('.heesun img').style.transform = "scale(1)";
        }
    }
});


var max = document.querySelectorAll(".sec02 .port_box li").length;
var portLiWidth = document.querySelector('.sec02 .port_box li').offsetWidth;
var wrapperWidth = portLiWidth * max; //래퍼 길이
var loadView = 4;
var index = 0;

document.querySelector('.sec02 .port_box ul').style.width = wrapperWidth + "px";

//마우스 휠 이벤트
document.addEventListener("wheel" , (e) => {
    if(document.querySelector('.sec02').classList.contains("active")){
        if (e.deltaY > 0){
            if(index < (max - loadView)){
                index ++;
                var shift = portLiWidth * index;
                 document.querySelector('.sec02 .port_box ul').style.transform = "translateX(-"+shift+"px)";
              }
        } else {
            if(index  > 0){
                index --;
                var shift = portLiWidth * index;
                document.querySelector('.sec02 .port_box ul').style.transform = "translateX(-"+shift+"px)";
            }
        }
    }

});


//sec02  롤링
var sec02 = gsap.timeline({
    scrollTrigger: {
      trigger:".sec03",
      start: "100px 10%",
      end: "bottom 0px",
      scrub: 0,
      //markers: { startColor: "green", endColor: "red", fontSize: "12px"},
      toggleClass:{targets:'.sec02',className:'active'},
    }
});
sec02.to({},{duration:1});


//핀
var target = document.querySelectorAll('section');
for(var i=0; i<2; i++){
gsap.timeline({
    scrollTrigger: {
      trigger: target[i],
      pin: true,
      start: "top top",
      end: "bottom",
      scrub: 0.3,
    }
  });
}


particlesJS("particles-js", {
    "particles":{
    "number":{
        "value":200,
        "density":{
            "enable":true,
            "value_area":500
        }},
        "color":{
            "value":"#ffffff"
        },
        "shape":{
            "type":"circle",
            "stroke":{
                "width":0,
                "color":"#000000"
            },
            "polygon":{
                "nb_sides":5
            },
            "image":{
                "src":"img/github.svg",
                "width":100,
                "height":100
            }},
            "opacity":{
                "value":0.8,
                "random":true,
                "anim":{
                    "enable":true,
                    "speed":1,
                    "opacity_min":0,
                    "sync":false
                }},
                "size":{
                    "value":3,
                    "random":true,
                    "anim":{
                        "enable":false,
                        "speed":4,
                        "size_min":0.3,
                        "sync":false
                    }},
                    "line_linked":{
                        "enable":false,
                        "distance":150,
                        "color":"#ffffff",
                        "opacity":0.4,
                        "width":1
                    },
                    "move":{
                        "enable":true,
                        "speed":1,
                        "direction":"none",
                        "random":true,
                        "straight":false,
                        "out_mode":"out",
                        "bounce":false,
                        "attract":{
                            "enable":false,
                            "rotateX":600,
                            "rotateY":600
                        }
                    }
                },
                "interactivity":{
                    "detect_on":"canvas",
                    "events":{
                        "onhover":{
                            "enable":false,
                            "mode":"bubble"
                        },
                        "onclick":{
                            "enable":false,
                            "mode":"repulse"
                        },
                        "resize":true
                    },
                    "modes":{
                        "grab":{
                            "distance":400,
                            "line_linked":{
                                "opacity":1
                            }},
                            "bubble":{
                                "distance":250,
                                "size":0,
                                "duration":2,
                                "opacity":0,
                                "speed":3
                            },
                            "repulse":{
                                "distance":400,
                                "duration":0.4
                            },
                            "push":{
                                "particles_nb":4
                            },
                            "remove":{
                                "particles_nb":2
                            }
                        }
                    },
                    "retina_detect":true
                });
                var count_particles, stats, update;
                stats = new Stats;
                stats.setMode(0);
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.left = '0px';
                stats.domElement.style.top = '0px';
                document.body.appendChild(stats.domElement);
                count_particles = document.querySelector('.js-count-particles');
                update = function() {
                    stats.begin();
                    stats.end();
                     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
                     }
                    requestAnimationFrame(update);
                };
                requestAnimationFrame(update);;
