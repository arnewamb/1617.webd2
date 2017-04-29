//variabelen aanmaken
var buttonReset = document.getElementById('reset');
var inputField = document.getElementsByClassName('textField');

//function for reset
buttonReset.onclick = function(){
  var waarde;
  for (var i = 0; i<6; i++){
  waarde = inputField[i].value = "";
  console.log(waarde);
  }
};

