document.getElementById("name").addEventListener("keyup", function(){
	if(document.getElementById("name").value[0] === undefined){
		document.getElementById("img").innerHTML = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 513.32 513.32' style='enable-background:new 0 0 513.32 513.32;' xml:space='preserve'><g><path fill='#ffffff' d='M346.491,316.547c49.193-29.944,81.275-83.414,81.275-145.44C427.767,76.998,350.768,0,256.66,0 S85.553,76.998,85.553,171.107c0,62.026,32.082,115.497,81.275,145.44C81.275,348.63,17.11,423.489,0,513.32h42.777	c21.388-98.386,109.081-171.107,213.883-171.107s192.495,72.72,213.883,171.107h42.777	C496.21,421.35,432.045,346.491,346.491,316.547z M128.33,171.107c0-70.581,57.749-128.33,128.33-128.33 s128.33,57.749,128.33,128.33s-57.749,128.33-128.33,128.33S128.33,241.688,128.33,171.107z'/></g></svg>";
	}else{
		document.getElementById("img").innerHTML = "<span>" + document.getElementById("name").value[0] + "</span>";
	}
});


document.getElementById("ok").addEventListener("click", function(){
document.getElementById("log").classList.add("fade");
this.style.background = "red";
});

setTimeout(function(){document.getElementById("log").innerHTML = "";}, 2500);

