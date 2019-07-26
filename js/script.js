$(function(){
	/*
	//화면에 맞춰 글꼴크기 조정하는 거.. 일단 어려우니까 제껴두기..
	var autoFont = function () {
        $("body").css('font-size', Math.max(Math.min($("body").width() / (1 * 3))));
    }
    autoFont();
    $(window).resize(function () {
        autoFont();
    }); //navi를 제외한 다른 요소들
	var autoFont = function () {
        $("#pc_nav").css('font-size', Math.max(Math.min($("#pc_nav").width() / (3.3 * 10))));
    }
    autoFont();
    $(window).resize(function () {
        autoFont();
    }); //nav
	var autoFont = function () {
        $("article").css('font-size', Math.max(Math.min($("article").width() / (5* 10))));
    }
    autoFont();
    $(window).resize(function () {
        autoFont();
    }); //article 부분들
	var autoFont = function () {
        $("footer").css('font-size', Math.max(Math.min($("footer").width() / (3.3* 10))));
    }
    autoFont();
    $(window).resize(function () {
        autoFont();
    }); //article 부분들
	*/
    /* http://jsfiddle.net/ra2h9/3/*/
	
    

	//#ScrollHeader
	$(window).scroll(function(){
		var k = $(window).scrollTop();
		if(k >= 40 ){
			//$("#logo svg#w_new").css("height","0");
			//$("#logo").css("height","0");
			$("#logo").addClass("scrollActive");
			$("#w_new").addClass("scrollActive");
			$("#scrollHeader").addClass("scrollActive");
			$("nav").addClass("scrollActive");
			$("#mobile_nav").addClass("scrollActive");

		}else{
			//$("#logo").css("height","500px");
			$("#logo").removeClass("scrollActive");
			$("#w_new").removeClass("scrollActive");
			$("#scrollHeader").removeClass("scrollActive");
			$("nav").removeClass("scrollActive");
			$("#mobile_nav").removeClass("scrollActive");
		}
	});


	//Menu click
	$("#pc_nav > ul > div.ul_center > li").on("click",function(){
		var a = $(this).index();
		$("#pc_nav > ul > div.ul_center > li").removeClass("on");
			$(this).addClass("on");
		$("#pc_nav > ul > div.ul_center > li").find().css("color","#000");
			
			$(this).siblings().find("> a").css("color","#bbb");
			$(this).find("> a").css("color","#000");

		return false;
	});

	/* 이렇게는 말고 아래와 같은 방법으로! 이 방법은 안됌!
	$("#logo") | $("#scrollHeader") | $("section").on("click",function(){
		$("#pc_nav > ul > div.ul_center > li").removeClass("on");
		$("#pc_nav > ul > div.ul_center > li").find("a").css("color","#000");
		return false;
	});
	
	*/
	$("#logo,#scrollHeader,section").on("click",function(){
		$("#pc_nav > ul > div.ul_center > li").removeClass("on");
		$("#pc_nav > ul > div.ul_center > li").find("a").css("color","#000");
		return false;
	});

	//#article5 video



	//#popQuestion
	
	$(".popQ_Closebtn").click(function(){
		$(this).parent("#popQuestion").css("display","none");
	});




	//mobile menu click
	$(".mobile_menu_sub_wrap").css("display","none");
	$(".mobile_menu p").click(function(){
		$(".mobile_menu_sub_wrap").css("display","block");
		return false;
	});
	$(".mobile_menu_sub_clsbtn").click(function(){
		$(".mobile_menu_sub_wrap").css("display","none");
		return false;
	});
	$(".mobile_menu_sub_wrap").click(function(){
		$(this).css("display","none");
		return false;
	});

	$(".mobile_menu_sub > li:nth-child(4)").click(function(){
		$(this).toggleClass("selected");
		$(this).find(".art_submenu").toggleClass("selected");
		//$(this).find(".art_submenu").slideDown();

		/*if(artsub == none){
			$(this).addClass("selected");
			$(this).find(".art_submenu").css("display","block");
			//$(this).find(".art_submenu").slideDown();
			}
			$(this).removeClass("selected");
			$(this).find(".art_submenu").slideUp();
		*/
		return false;
	});
	
	//search menu
	$(".search").click(function(){
		$(".search_window").css("display","block");
		return false;
	});
	$(".search_window button").click(function(){
		$(".search_window").css("display","none");
		return false;
	});

});