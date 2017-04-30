//copyright Arne Wambeke
//29 april 2017

//variabelen aanmaken
var buttonReset = document.getElementById('reset');
var inputField = document.getElementsByClassName('textField');
//making new textnode
var contactForm = document.getElementById('input');
var node = document.createElement('p');
var succesNode = document.createTextNode("Your message has been successfully sent");
node.appendChild(succesNode);

//function for reset
buttonReset.onclick = function(){
  //custom message
contactForm.appendChild(succesNode);
  //reset of value
  var waarde;
  for (var i = 0; i<6; i++){
  waarde = inputField[i].value = "";
  
  }
};


