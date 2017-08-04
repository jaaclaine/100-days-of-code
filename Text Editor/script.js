var txt = document.getElementById("text");
var result = document.getElementById("result");

//create tooltip
var tooltip = document.createElement("div");
tooltip.id = "tooltip";
document.body.appendChild(tooltip); 

  
// get selection
var selection;
if(window.getSelection){
  selection = window.getSelection();
} else if(document.getSelection){
  selection = document.getSelection();
}
  
  //display tooltip
txt.addEventListener("mouseup", function(click){

  if(selection.toString() !== ""){
    tooltip.style.display = "block";
    // position tooltip
    tooltip.style.top = click.clientY - 50 + "px";
    tooltip.style.left = click.clientX + 50 + "px";
  } else{
    tooltip.style.display = "none";
  }
});

document.addEventListener("click", function(){
  if(selection.toString() == ""){
    tooltip.style.display = "none";}
});

// create buttons
var bold = document.createElement("button"),
    italic = document.createElement("button"),
    color = document.createElement("button"),
    highlight = document.createElement("button");

bold.innerHTML = "bold";
italic.innerHTML = "italic";
color.innerHTML = "color";
highlight.innerHTML = "highlight";

bold.value = "bold";
italic.value = "italic";
color.value = "color";
highlight.value = "highlight";

tooltip.appendChild(bold);
tooltip.appendChild(italic);
tooltip.appendChild(color);
tooltip.appendChild(highlight);

// add event to the buttons
var btn = document.getElementsByTagName("button");
for(i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function(val){
    val = this.value;
    
    if(selection.rangeCount){
      var range = selection.getRangeAt(0).cloneRange();
      selection.removeAllRanges();
      selection.addRange(range);
      
      // buttons actions
      var span = document.createElement("span");
      switch(val){
        case "bold":
          range.surroundContents(document.createElement("b"));
          break;
        case "italic":
          range.surroundContents(document.createElement("i"));
          break;
        case "color":
          range.surroundContents(document.createElement("span"));
          break;
        case "highlight":
          span.style.background = "red";
          range.surroundContents(span);
          break;
          
      }
      
    }
    
  });
}

// show HTML
document.getElementById("html").addEventListener("click", function(){
  
  if(!this.checked){
    result.textContent = "";
  } else {
    var theHTML = txt.innerHTML; 
    result.textContent = theHTML;
  }
  
});

// transform <br> into <p>
txt.addEventListener("keydown", function(key){
  if(key.which === 13 || key.keyCode === 13){
    document.execCommand("insertBrOnReturn", false, true);
    return false;
  }
  return true;
});





