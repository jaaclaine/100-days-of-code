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

// Mobile menu
mobile.addEventListener("click", function(){
  var mobile = document.getElementById("mobile");
  var mobileIcon = document.getElementById("mobileIcon");
  var menu = document.getElementById("top-menu");
  menu.classList.toggle("open");
  document.getElementsByTagName("body")[0].classList.toggle("block");
  if(mobileIcon.classList.contains('fa-bars')){
    mobileIcon.classList.remove("fa-bars");
      mobileIcon.classList.add("fa-times");
  } else{
    mobileIcon.classList.add("fa-bars");
      mobileIcon.classList.remove("fa-times");
  }
});
window.addEventListener("resize", function(){
  if(document.getElementsByTagName("body")[0].offsetWidth > 1000){
    document.getElementsByTagName("body")[0].classList.remove("block");
  }
});
