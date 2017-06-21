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

// Status clicks
document.getElementById("kudos-status").addEventListener("click", function(){
  var heart = document.getElementById("kudos-icon");
  if(heart.classList.contains("fa-heart-o")){
    heart.classList.remove("fa-heart-o");
    heart.classList.add("fa-heart");
    this.style.color = "#ad3434";
  } else{
    heart.classList.remove("fa-heart");
    heart.classList.add("fa-heart-o");
    this.style.color = "#292b2c";
  }
});
document.getElementById("bookmark-status").addEventListener("click", function(){
  var book = document.getElementById("bookmark-icon");
  if(book.classList.contains("fa-bookmark-o")){
    book.classList.remove("fa-bookmark-o");
    book.classList.add("fa-bookmark");
    this.style.color = "#ad3434";
  } else{
    book.classList.remove("fa-bookmark");
    book.classList.add("fa-bookmark-o");
    this.style.color = "#292b2c";
  }
});

// Show button
var textInfo = document.getElementById("text-info");
var textHeight = document.getElementById("info-inside").offsetHeight + 55;
var textBtn = document.getElementById("text-show");

textBtn.addEventListener("click", function(){
  if(textBtn.innerHTML == "SHOW MORE"){
    textBtn.innerHTML = "SHOW LESS";
    textInfo.style.height = textHeight + "px";
  }  else{
    textBtn.innerHTML = "SHOW MORE";
    textInfo.style.height = 120 + "px";
  }
});

// Toggle commands
document.getElementById("download_button").addEventListener("click", function(){
  document.getElementById("download").classList.toggle("active");
});
document.getElementById("share_button").addEventListener("click", function(){
  document.getElementById("share").classList.toggle("active");
});

// font size
var txt = document.getElementById("text");
var txtSize = 14;
document.getElementById("size-minus").addEventListener("click", function(){
  if(txtSize > 14){
    txtSize -= 2;
    txt.style.fontSize = txtSize + "px";
  }
});
document.getElementById("size-plus").addEventListener("click", function(){
  txtSize += 2;
  txt.style.fontSize = txtSize + "px";
});
document.getElementById("text-hide").addEventListener("click", function(){
  document.getElementById("text").classList.toggle("hide");
});
