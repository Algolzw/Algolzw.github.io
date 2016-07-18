$(function () {

    $("[data-toggle='tooltip']").tooltip();

    //响应式图片
    $('.imgLiquid').imgLiquid();

    $("#myCarousel").height($(window).height()*0.8);
    $("#myCarousel .item").height($(window).height()*0.8);


    window.onresize = function(){
        $("#myCarousel").height($(window).height()*0.8);
        $("#myCarousel .item").height($(window).height()*0.8);
    }

    //定义滚动效果
    var controller = new ScrollMagic.Controller();

    //轮播图片滚动比鼠标慢
    var imgTween = new TimelineMax()
        .add([
            TweenMax.fromTo("#myCarousel .item", 1, {top: 0}, {top: 202, ease: Linear.easeNone})
        ]);

    var carourselScene = new ScrollMagic.Scene({
        triggerElement: "#myCarousel",
        duration: $(".carousel").height(),
        triggerHook: 0,
        reverse: true
    })
        .setTween(imgTween)
        .addIndicators()
        .addTo(controller);

    //轮播可在手机上滑动
    $('#myCarousel').swipeleft(function () {
        $(this).carousel('next');
    }).swiperight(function () {
        $(this).carousel('prev');
    });

    //颜色组
    var colors = ["#a94442", "#CDDDA8", "#386AA0", "#00FEFE", "#F98481", "#FDCF69", "#503874", "#FFDEAD", "#CD5C5C"];

    $(".self-intro b").bind("mouseenter", function () {
        var index = $(this).index();
        // alert(index);
        $(this).css({color: colors[Math.floor(Math.random() * colors.length)]});

    }).bind("mouseleave", function () {
        $(this).css({color: '#686868'});
    });

    $(".portrait").bind("mouseenter",
        function () {
            $(this).css('background-image', "url(/images/self-colored.jpg)");
        }).bind("mouseleave",
        function(){
            $(this).css('background-image', "url(/images/self.jpg)");
        }
    );



});