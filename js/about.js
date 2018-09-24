$(function () {

    $("[data-toggle='tooltip']").tooltip();

    //针对jquery mobile a标签不能跳转
    $("a").attr("data-ajax", "false");

    //响应式图片
    $('.imgLiquid').imgLiquid();

    changeSize();

    var mainline = $(".mainline").html();

    window.onresize = function () {
        changeSize()
        if($(window).width()>760){
            $(".mainline").html(mainline);
            backTimeline();
        }
    }

    function changeSize(){
        $("#myCarousel").height($(window).height() * 0.8);
        $("#myCarousel .item").height($(window).height() * 0.8);

        if ($(window).width() < 760) {
            reTimeline();
        }
    }

    function backTimeline(){
        $(this).css({"position":"absolute"});

        $(".timeline .mainline").css({"position":"static","height":"1000px","left":"none"});
        $(".mainline>.year").css("margin-top","10px");
    }

    function reTimeline() {

        var totallen = 0;
        $(".mainline>div").each(function (i) {
            $(this).attr("style","top:"+(50*i)+"px").css({"position":"relative"});
        });

        totallen = $(".mainline>div.year:last").offset().top - $('.mainline>div:first').offset().top + 50;
        $(".timeline .mainline").css({"position":"relative","height":totallen+"px","left":"-120px"});

        $(".mainline>.year").css("margin-top","0");

        $(".mainline>.item").addClass("rig");
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
        .addTo(controller);

    $(".mainline div.item").each(function () {
        var imgOpacity = new TimelineMax().add([
            TweenMax.fromTo(this, 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
        ]);

        var timelineScene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '100px',
            triggerHook: '.9',
            reverse: false
        })
            .setTween(imgOpacity)
            .addTo(controller);
    });

    //轮播可在手机上滑动
    $('#myCarousel').swipeleft(function () {
        $(this).carousel('next');
    }).swiperight(function () {
        $(this).carousel('prev');
    });

    //颜色组
    var colors = ["#a94442", "#CDDDA8", "#386AA0", "#00FEFE", "#F98481", "#FDCF69", "#503874", "#FFDEAD", "#CD5C5C"];

    //个人标签
    $(".self-intro b").bind("mouseenter", function () {
        var index = $(this).index();
        // alert(index);
        $(this).css({color: colors[Math.floor(Math.random() * colors.length)]});

    }).bind("mouseleave", function () {
        $(this).css({color: '#686868'});
    });

    //头像变化
    $(".portrait").bind("mouseenter",
        function () {
            $(this).css('background-image', "url(/images/self-colored.jpg)");
        }).bind("mouseleave",
        function () {
            $(this).css('background-image', "url(/images/self.jpg)");
        }
    );

    // $(".timeline .mainline>div").each(function(){
    //     var index = $(this).index();
    //     $(this).css("top",100+index*50);
    // });


});