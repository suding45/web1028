$(document).ready(function(){
	// 메뉴
	$(".navi > li").mouseover(function(){
		$(".submenu", this).stop().slideDown();
	}).mouseout(function(){
		$(".submenu", this).stop().slideUp();
	});
	// 레이어 팝업
	$(".notice li:first").click(function(){
		$("#modal").addClass("active");
	});
	$(".btn").click(function(){
		$("#modal").removeClass("active");
	});
	// 이미지 슬라이드
	$(".imgslide a:gt(0)").hide();
	setInterval(function(){
		$(".imgslide a:first").fadeOut()
			.next("a")
			.fadeIn()
			.end()
			.appendTo(".imgslide");
	}, 3000);
});