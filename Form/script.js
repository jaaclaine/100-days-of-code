
document.getElementById("submit").addEventListener("click", verify);


function verify(){

  //Verify if the fields are empty
  var planet = document.getElementById("travelPlanet");
  if(planet.value === "none"){
    planet.style.background = "red";
  }

  var textBox = document.getElementById("textBox");
  textBox.style.background = "blue";

  for(x = 0; x < 10; x++){
    var textFields = document.querySelectorAll("input[type='text']")[x];
    if(textFields.value === ""){
      textFields.style.background = "green";
    }
  };

}


document.getElementById("dateGo").addEventListener("keydown", dateMask);
document.getElementById("dateBack").addEventListener("keydown", dateMask);

function dateMask(){
  var v = this.value;
  if (v.match(/^\d{2}$/) !== null) {
  this.value = v + '/';
  } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
  this.value = v + '/';
  }
}
