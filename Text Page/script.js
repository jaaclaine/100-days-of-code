// Show / Hide top bar when scroll
document.addEventListener("scroll", topBar);
var scrollBar = 0;
function topBar(){
  var bar = document.getElementById("top-bar");
  var scrollTop = document.getElementsByTagName("body")[0].scrollTop;
  if(scrollBar > scrollTop || scrollBar < 200){
    bar.classList.remove("active");
  } else{
    bar.classList.add("active");
  }
  scrollBar = scrollTop;
}
