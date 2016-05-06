// JavaScript Document

		 

$(function(){

	/*未元素的首尾添加补白*/
	var $panels				= $('#slider .scrollContainer > li');
	var $parent=$panels.parent();//或许当前li的最近一级的父元素
	var $length=$panels.length;//获取指定length值
	var $first=$panels.eq(0).clone().addClass("panel cloned").attr("id",'panel_'+($length+1));//获取第一个元素并复制
	var $last=$panels.eq($length-1).clone().addClass("cloned").attr("id",'panel_0');;//获取最后一个元素并复制
	$parent.append($first);//将li序列中的第一个添加到ul元素中的最后一个  $("#slide02").scrollLeft(0);
	$parent.prepend($last);//将li序列中的最后一个添加到ul元素中的第一个
	var totalPanels			= $(".scrollContainer").children().size();//所有子元素的数字，滚动元素的个数 7
	var regWidth			= $(".panel").css("width");//获取li元素的宽度
	var regImgWidth			= $(".panel img").css("width");//获取其中图片的宽度
	var movingDistance	    = 270;//每次移动的距离
	var curWidth			= 245;//当前中间li的宽度为350px
	var curHeight         =220;//当前中间li的高度未312  
	var curImgWidth  =245;
	var curImgHeight  =185;
	var othersW           =245;//其他li的宽度
	var othersH           =185;//高度
	var othersImgW           =245;//其他li的宽度
	var othersImgH           =185;//高度
	var $panels				= $('#slider .scrollContainer > li');//此处作用是将复制进来补白的元素重新赋值
	var $container			= $('#slider .scrollContainer');
	$panels.css({'float' : 'left','position' : 'relative'});
	$("#slider").data("currentlyMoving", false);//是否正在运动中
	$container.css('width', (($panels[0].offsetWidth+25) * $panels.length) + 60 ).css('left','0');//计算容器的总的宽度 PS：25为margin值 offsetWidth
	var scroll = $('#slider .scroll').css('overflow', 'hidden');
	function returnToNormal(element) {//li元素返回到正常状态
		$(element).animate({ width: othersW,height: othersH}).find("img").animate({width:othersImgW,height:othersImgH});
	};
	function growBigger(element) {//当前元素之间变大
		$(element).addClass("current").animate({ width: curWidth,height:curHeight}).siblings().removeClass("current")
		.end().find("img").animate({width:curImgWidth,height:curImgHeight})
	}
	//direction true = right, false = left
	function change(direction) {
		//if not at the first or last panel
		if((direction && !(curPanel < totalPanels-2)) || (!direction && (curPanel <= 1))) {
			return false;
		}	
		//if not currently moving
		if (($("#slider").data("currentlyMoving") == false)) {
			$("#slider").data("currentlyMoving", true);
			var next         = direction ? curPanel + 1 : curPanel - 1;
			var leftValue    = $(".scrollContainer").css("left");
			var movement	 = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
			$(".scrollContainer").stop().animate({"left": movement}, function() {
				$("#slider").data("currentlyMoving", false);
			});
			returnToNormal("#panel_"+curPanel);
			growBigger("#panel_"+next);
			curPanel = next;
			//remove all previous bound functions
			$("#panel_"+(curPanel+1)).unbind();	
			//go forward
			$("#panel_"+(curPanel+1)).click(function(){ change(true); });
			//remove all previous bound functions															
			$("#panel_"+(curPanel-1)).unbind();
			//go back
			$("#panel_"+(curPanel-1)).click(function(){ change(false); }); 
			//remove all previous bound functions
			$("#panel_"+curPanel).unbind();
		}
	}
	// Set up "Current" panel and next and prev 设置当前元素和上下
	growBigger("#panel_1");	
	var curPanel = 1;
	$("#panel_"+(curPanel+1)).click(function(){ change(true);return false;});
	$("#panel_"+(curPanel-1)).click(function(){ change(false);return false;});
	//when the prev/next arrows are clicked
	$("#slider .next").click(function(){ change(true);});	
	$("#slider .prev").click(function(){ change(false);});
	$(window).keydown(function(event){//键盘方向键控制
		switch (event.keyCode) {
			case 13: //enter
				$(".next").click();
			break;
			case 37: //prev arrow
				$(".prev").click();
			break;
			case 39: //next arrow
				$(".next").click();
			break;
		}
	});	
	
});




$(function(){
   	
	   $(".nav01 ul li").mouseover(function(){
		
		  $(this).find(".ziji").show(); 
		      
	    })
		
	   
	     $(".nav01 ul li").mouseout(function(){
		  
		  $(this).find(".ziji").hide();     
	    })
	
	   $(".ziji li").mouseover(function(){
		 $(this).attr("class","hong").siblings().attr("class","normal");
		 $(".ziji li .hong").eq($(this).index()).show().siblings().hide();   
	   })
	    

	  
})



$(function(){
			
	$(".wu").click(function(){
				if($(this).find(".show06").attr("style")=="display:none"){
					$(this).find(".hide06").attr("style","display:none");
					$(this).find(".show06").attr("style","display:inline");
                      $(this).find("h1").css("color","#595959");  
           
					
					}else{
						$(this).find(".hide06").attr("style","display:inline");
						$(this).find(".show06").attr("style","display:none");
                           $(this ).find("h1").css("color","#21292b");
                 
						}
	});

})

 

