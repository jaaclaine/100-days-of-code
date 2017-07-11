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
			$("img:nth-of-type(3), .button-three img:nth-of-type(4), .button-three img:nth-of-type(5)").addClass("off").removeClass("current");
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

/*document*/
});



/*$(this).animate({
left: "+=50",
height: "100px"
}, time, function() {
// Animation complete.
$(this).css("background", "blue");
});

time += 500;
*/
