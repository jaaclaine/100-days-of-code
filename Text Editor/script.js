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

// position tooltip
tooltip.style.top = document.clientY - 70 + "px";
tooltip.style.left = document.clientX - 50 + "px";
txt.addEventListener("mousedown", function(click){
  tooltip.style.top = click.clientY - 50 + "px";
  tooltip.style.left = click.clientX - 50 + "px";
});
  
  //display tooltip
txt.addEventListener("mouseup", function(){
  if(selection.toString() !== ""){
    tooltip.style.opacity = 1;
    tooltip.style.visibility = "visible";
  } else{
    tooltip.style.opacity = 0;
    tooltip.style.visibility = "hidden";
  }
});

document.addEventListener("click", function(){
  if(selection.toString() == ""){
    tooltip.style.opacity = 0;
    tooltip.style.visibility = "hidden";
  }
});

// create buttons
var bold = document.createElement("button"),
    italic = document.createElement("button"),
    underline = document.createElement("button"),
    strike = document.createElement("button"),
    quote = document.createElement("button"),
    color = document.createElement("span"),
    highlight = document.createElement("span"),
    center = document.createElement("button"),
    right = document.createElement("button"),
    left = document.createElement("button"),
    justify = document.createElement("button");

bold.innerHTML =  "<i class='fa fa-bold' aria-hidden='true'></i>";
italic.innerHTML = "<i class='fa fa-italic' aria-hidden='true'></i>";
underline.innerHTML = "<i class='fa fa-underline' aria-hidden='true'></i>";
strike.innerHTML = "<i class='fa fa-strikethrough' aria-hidden='true'></i>";
quote.innerHTML = "<i class='fa fa-quote-right' aria-hidden='true'></i>";
color.innerHTML = "color";
color.id = "color";
highlight.innerHTML = "highlight";
highlight.id = "highlight";
center.innerHTML = "<i class='fa fa-align-center' aria-hidden='true'></i>";
right.innerHTML = "<i class='fa fa-align-right' aria-hidden='true'></i>";
left.innerHTML = "<i class='fa fa-align-left' aria-hidden='true'></i>";
justify.innerHTML = "<i class='fa fa-align-justify' aria-hidden='true'></i>";

bold.value = "bold";
italic.value = "italic";
underline.value = "underline";
strike.value = "strike";
quote.value = "quote";
color.value = "color";
highlight.value = "highlight";
center.value = "center";
right.value = "right";
left.value = "left";
justify.value = "justify";

tooltip.appendChild(bold);
tooltip.appendChild(italic);
tooltip.appendChild(underline);
tooltip.appendChild(strike);
tooltip.appendChild(quote);
tooltip.appendChild(color);
tooltip.appendChild(highlight);
tooltip.appendChild(center);
tooltip.appendChild(right);
tooltip.appendChild(left);
tooltip.appendChild(justify);

var colorOptions = document.createElement("div");
colorOptions.innerHTML = "<button value='Tred' style='background: #e87575'></button><button value='Torange' style='background: #FFC8BA'></button><button value='Tpink' style='background: #E3AAD6'></button><button value='Twhite' style='background: #fff'></button><button value='Tblack' style='background: #000'></button>";
document.getElementById("color").appendChild(colorOptions);

var highlightOptions = document.createElement("div");
highlightOptions.innerHTML = "<button value='Horange' style='background: #F9E3D5'></button><button value='Hred' style='background: #E4BAC6'></button><button value='Hpurple' style='background: #E7CEE4'></button><button value='Hgreen' style='background: #d1ffd2'></button><button value='Hblue' style='background: #D1ECFF'></button>";
document.getElementById("highlight").appendChild(highlightOptions);

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
        case "underline":
          range.surroundContents(document.createElement("u"));
          break;
        case "strike":
          range.surroundContents(document.createElement("s"));
          break;
        case "quote":
          range.surroundContents(document.createElement("blockquote"));
          break;
        case "Tred":
          span.style.color = "#e87575";
          range.surroundContents(span);
          break;
        case "Torange":
          span.style.color = "#FFC8BA";
          range.surroundContents(span);
          break;
        case "Tpink":
          span.style.color = "#E3AAD6";
          range.surroundContents(span);
          break;
        case "Tblack":
          span.style.color = "#000";
          range.surroundContents(span);
          break;
        case "Twhite":
          span.style.color = "#fff";
          range.surroundContents(span);
          break;
        case "Horange":
          span.style.background = "#F9E3D5";
          range.surroundContents(span);
          break;
        case "Hred":
          span.style.background = "#E4BAC6";
          range.surroundContents(span);
          break;
        case "Hpurple":
          span.style.background = "#E7CEE4";
          range.surroundContents(span);
          break;
        case "Hgreen":
          span.style.background = "#d1ffd2";
          range.surroundContents(span);
          break;
        case "Hblue":
          span.style.background = "#D1ECFF";
          range.surroundContents(span);
          break;
        case "center":
          var p = document.createElement("p");
          p.style.textAlign = "center";
          range.surroundContents(p);
          break;
        case "left":
          var p = document.createElement("p");
          p.style.textAlign = "left";
          range.surroundContents(p);
          break;
        case "right":
          var p = document.createElement("p");
          p.style.textAlign = "right";
          range.surroundContents(p);
          break;
        case "justify":
          var p = document.createElement("p");
          p.style.textAlign = "justify";
          range.surroundContents(p);
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





