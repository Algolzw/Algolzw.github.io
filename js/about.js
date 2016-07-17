$(function () {
    var controller = new ScrollMagic.Controller();

    var imgTween = new TimelineMax()
        .add([
            TweenMax.fromTo("#myCarousel img",1,{top:0},{top:202,ease:Linear.easeNone})
        ]);

    var carourselScene = new ScrollMagic.Scene({
        triggerElement:"#myCarousel",
        duration:$(".carousel").height(),
        triggerHook:0,
        reverse:true
    })
        .setTween(imgTween)
        .addIndicators()
        .addTo(controller);

});