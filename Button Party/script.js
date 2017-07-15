$(document).ready(function(){

// BUTTON ONE
$(".button-one .click").click(function(){
	$(this).toggleClass("active");
	var time = 300;
	if($(".button-one .item").hasClass("active")){
		$(".button-one .item").removeClass("active");
	}else{
		$(".button-one .item").each(function (i) {
			var $that = $(this);
			setTimeout(function () {
			$that.addClass("active");
			}, i * time);
		});
	}
});

// BUTTON TWO
$(".button-two .click").click(function(){
	$(".button-two .content").toggleClass("active");
	if(!$(".button-two .content").hasClass("active")){
		$(".button-two img").removeClass("on");
		$(".button-two img").removeClass("off");
	}
	$(".button-two img").click(function(){
		$(".active").removeClass("on");
		$(".button-two img").addClass("off");
		$(this).toggleClass("on");
		$(this).removeClass("off");
	});
});

//BUTTON THREE
$(".button-three img").mouseenter(function(){
	var itemValue = $(this).attr("value");
	switch(itemValue){
		case "1":
			$(this).addClass("current");
			$(".button-three img:nth-of-type(2), .button-three img:nth-of-type(3), .button-three img:nth-of-type(4), .button-three img:nth-of-type(5)").addClass("off").removeClass("current");
			break;
		case "2":
			$(".button-three img:first-of-type").addClass("on").removeClass("off").removeClass("current");
			$(this).addClass("current");
			$(".button-three img:nth-of-type(3), .button-three img:nth-of-type(4), .button-three img:nth-of-type(5)").addClass("off").removeClass("current");
			break;
		case "3":
			$(".button-three img:first-of-type, .button-three img:nth-of-type(2)").addClass("on").removeClass("off").removeClass("current");
			$(this).addClass("current");
			$(".button-three img:nth-of-type(4), .button-three img:nth-of-type(5)").addClass("off").removeClass("current");
			break;
		case "4":
			$(".button-three img:first-of-type, .button-three img:nth-of-type(2), .button-three img:nth-of-type(3)").addClass("on").removeClass("off").removeClass("current");
			$(this).addClass("current");
			$(".button-three img:nth-of-type(5)").addClass("off").removeClass("current");
			break;
		case "5":
			$(".button-three img:first-of-type, .button-three img:nth-of-type(2), .button-three img:nth-of-type(3), .button-three img:nth-of-type(4)").addClass("on").removeClass("off").removeClass("current");
			$(this).addClass("current");
			break;
	}
});

$(".button-three img").mouseout(function(){
	$(".button-three img").removeClass("on").removeClass("off").removeClass("current");

	$(".button-three img").click(function(){
		$(".button-three img").off("mouseout");
		var itemValue = $(this).attr("value");
		switch(itemValue){
		case "1":
			$(this).addClass("current");
			$(".button-three img:nth-of-type(2), .button-three img:nth-of-type(3), .button-three img:nth-of-type(4), .button-three img:nth-of-type(5)").removeClass("current");
			break;
		case "2":
			$(".button-three img:first-of-type").addClass("on").removeClass("current").removeClass("current");
			$(this).addClass("current");
			$(".button-three img:nth-of-type(3), .button-three img:nth-of-type(4), .button-three img:nth-of-type(5)").addClass("off").removeClass("current");
			break;
		case "3":
			$(".button-three img:first-of-type, .button-three img:nth-of-type(2)").addClass("on").removeClass("current").removeClass("current");
			$(this).addClass("current");
			$(".button-three img:nth-of-type(4), .button-three img:nth-of-type(5)").addClass("off").removeClass("current");
			break;
		case "4":
			$(".button-three img:first-of-type, .button-three img:nth-of-type(2), .button-three img:nth-of-type(3)").addClass("on").removeClass("current");
			$(this).addClass("current");
			$(".button-three img:nth-of-type(5)").addClass("off").removeClass("current");
			break;
		case "5":
			$(".button-three img:first-of-type, .button-three img:nth-of-type(2), .button-three img:nth-of-type(3), .button-three img:nth-of-type(4)").addClass("on").removeClass("current");
			$(this).addClass("current");
			break;
		}
	});

});

// BUTTON FOUR
var clickCount = 1;
$(".button-four .one").click(function(){
	$(".button-four .one .up").html(clickCount);
	clickCount++
	$(".button-four .one .up").addClass("on");
	setTimeout(function(){
		$(".button-four .one .up").removeClass("on");
	}, 1000);
});

var heartLike = 0;
var heartColor = ["#fb7aa0", "#f95182", "#c11a4b"];
$(".two .heart").click(function(){
	if(heartLike < 3){
		var heartSize = heartLike * 20 + 30;
		$(this).css("width", heartSize + "px");
		$(this).css("height", heartSize + "px");
		$(".two svg path").css("fill", heartColor[heartLike]);
		var position = Math.floor(heartLike * 20  / 2);
		$(this).css("top", "-" + position + "px");
		$(this).css("left", "-" + position + "px");
		heartLike++;
	}
});

$(".button-four .three .icon").click(function(){
	$(this).toggleClass("on");
	$(".button-four .three .thanks").toggleClass("on");
});

var $bigBall = $("<div></div>").addClass("big-ball");
$(".button-four .four").append($bigBall);
var colors = ["#ff8080", "#ff80ed", "#ffed80", "#a4ff80", "#80ffc8", "#80c8ff", "#a480ff"];
var divide = 300/7;
for(i = 0; i < 8; i++){
	var $smallBall = $("<div></div>").addClass("small-ball");
	$(".button-four .four").append($smallBall);

	var angle = Math.floor(i * divide - 90);
	var rotate = "rotate(" + angle + "deg) translate(20px) rotate(-90deg)";
	$($smallBall).css("transform", rotate);
	var randomColor = Math.floor(Math.random() * 7);
	$($smallBall).css("background", colors[randomColor]);
}
$(".item .four").click(function(){
	if(!$(this).hasClass("on")){
		$(this).addClass("on");
	} else{
		$(this).removeClass("on");
	}
});



/*document*/
});
