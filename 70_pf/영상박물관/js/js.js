$(document).ready(function(){
	// 메뉴
	$(".navi > li").mouseover(function(){
		$(".submenu").stop().slideDown(500);
	}).mouseout(function(){
		$(".submenu").stop().slideUp(500);
	});
	// 레이어
	$(".notice  li:first").click(function(){
		$("#modal").addClass("active");
		
	});
	$(".btn").click(function(){
		$("#modal").removeClass("active");
		
	});
	// 이미지 슬라이드(위로 방향으로 animate)
	setInterval(function(){
	$(".slidelist").animate({"marginTop":"-750px"}, function(){
		$(".slidelist a:first").appendTo(".slidelist")
		$(".slidelist").css({"marginTop":"0"})
	
		})
	}, 3000);






});

