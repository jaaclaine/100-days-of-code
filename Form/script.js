
document.getElementById("submit").addEventListener("click", verify);


function verify(){

  //Verify if the fields are empty
  var planet = document.getElementById("travelPlanet");
  var textBox = document.getElementById("textBox");

  if(planet.value === "none" || textBox.value === " "){
    planet.classList.add("error");
    textBox.classList.add("error");
  } else{
    planet.classList.remove("error");
    textBox.classList.remove("error");
  }

  for(x = 0; x < 8; x++){
    var textFields = document.querySelectorAll("input[type='text']")[x];
    if(textFields.value === ""){
      textFields.classList.add("error");
    } else{
      textFields.classList.remove("error");
    }
  }



}


document.getElementById("dateGo").addEventListener("keydown", date);
document.getElementById("dateBack").addEventListener("keydown", date);

function date(type){

  var value = this.value;

  // Add the date mask
  if (value.match(/^\d{2}$/) !== null) {
  this.value = value + '/';
} else if (value.match(/^\d{2}\/\d{2}$/) !== null) {
  this.value = value + '/';
  }

  // Verify the type of value
  var x = type.which || type.keyCode;
    if(x < 48 || x > 58){
    type.preventDefault();
    }

}
