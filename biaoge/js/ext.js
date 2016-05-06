/**
 * Created by algo_lzw on 2016/5/6.
 */
$(document).ready(function(){

    $(".biaoge").scroll(function(){
        //alert("top:"+$(this).offset().top+"left:"+$(this).offset().left);
        //alert($(this).scrollTop()+"px");
        var x = $(this).scrollLeft();
        var y = $(this).scrollTop();
        $(".biaogett").css("margin-left",x+"px");
        $(".biaogett02").css("margin-right","-"+x+"px");
    });
});