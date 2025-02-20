$(document).ready(function(){
	$(".navi > li").mouseover(function(){
		$(".submenu, .menuBG").stop().slideDown();
	});
	$(".navi > li").mouseout(function(){	
		$(".submenu, .menuBG").stop().slideUp();
	});
});