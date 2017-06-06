
document.getElementById("submit").addEventListener("click", verify);

function verify(){
  //Verify if the fields are empty
  var planet = document.getElementById("travelPlanet");
  if(planet.value === "none"){
    planet.classList.add("error");
  } else{
    planet.classList.remove("error");
    planet.classList.add("correct");
  }

  var textBox = document.getElementById("textBox");
  if(textBox.value.length === 0){
    textBox.classList.add("error");
  } else{
    textBox.classList.remove("error");
    textBox.classList.add("correct");
  }

  for(x = 0; x < 8; x++){
    var textFields = document.querySelectorAll("input[type='text']")[x];
    if(textFields.value === ""){
      textFields.classList.add("error");
    } else{
      textFields.classList.remove("error");
      textFields.classList.add("correct");
    }
  }

  // See if e-mail fields has "@" and ".com" and compare the two e-mails fields
  var emailVal = document.getElementById("youEmail").value;
  var emailValConf = document.getElementById("youEmailConf").value;

  if(emailVal.indexOf("@") < 0 || emailVal.indexOf(".com") < 0){
    document.getElementById("youEmail").classList.add("error");
    document.getElementById("youEmail").classList.remove("correct");
  } else {
    document.getElementById("youEmail").classList.remove("error");
  }

  if(emailVal !== emailValConf ){
    document.getElementById("youEmailConf").classList.add("error");
    document.getElementById("youEmailConf").classList.remove("correct");
  } else if(emailValConf === ""){
    document.getElementById("youEmailConf").classList.add("error");
    document.getElementById("youEmailConf").classList.remove("correct");
  } else{
    document.getElementById("youEmailConf").classList.remove("error");
  }

}
// Date mask
document.getElementById("dateGo").addEventListener("keydown", date);
document.getElementById("dateBack").addEventListener("keydown", date);

function date(){
  var value = this.value;
  if (value.match(/^\d{2}$/) !== null) {
  this.value = value + '/';
} else if (value.match(/^\d{2}\/\d{2}$/) !== null) {
  this.value = value + '/';
  }

}
// Number fields
for(i = 0; i < 3; i++){
document.getElementsByClassName("field-number")[i].addEventListener("keydown", numberOnly);
}
function numberOnly(value){
  var fieldValue = value.which || value.keyCode;
    if(fieldValue < 48 || fieldValue > 58){
    value.preventDefault();
    }
}
// Character count on textbox
document.getElementById("textBox").addEventListener("keydown", counter);
document.getElementById("chCount").innerHTML = 50;
function counter(){
  var characters = document.getElementById("chCount");
  var chVal = ( 50 - this.value.length);
  characters.innerHTML = chVal;
  if(chVal < 0){
    this.style.color = "#dd2323";
    characters.style.color = "#dd2323";
  }
}
