for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML; // NOTE: button inner html in makesound means this.innerhtml means """this"" helps to specify which button and innerhtml take words of button like -alphabets-- w,s,d and more

    makesound(buttonInnerHTML);//here it goes relatively works for switch case statment with it and alphabets assorted to btn

    makeanimation(buttonInnerHTML);//this also after whenever this.innerHTMLis triggered it runs both makesound and anim function this tells which button is pressed and innerhtml decodes and gives it in alphabets

  });
}

// NOTE: addEventListener is higher order function because it takes function as inputs.

document.addEventListener("keypress", function(event){ // in this keypress hepls to check for keyboard keys and function event mention
                                                       //which key is pressed in keyboard means which alphabets are typped functionevent tell us that

  makesound(event.key);  // here makesound the switch function works to check which key with the help of evevnt and which is function of key means the switch statment one.

  makeanimation(event.key);// same work first keypress which goes with to check and also refers to animation function which button is selected and make a pressed expreesion for 100 --1sec
})
////imp point 

/////imp point

// event checks which key is pressed and one of the attribute of event --- key to check which alpahbet is presse after checking it goes into switch case statment

////imp point


////imp point

////imp point

function makesound(key){

  switch (key) {                         // this switch works on expression key means related to function key
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();                                          // NOTE: checkproperly everything first in webpage only one drum dosnt work or all
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom5 = new Audio("sounds/snare.mp3");
      tom5.play();
      break;
    case "k":
      var tom6 = new Audio("sounds/crash.mp3");
      tom6.play();
      break;
    case "l":
      var tom7 = new Audio("sounds/kick-bass.mp3");
      tom7.play();
      break;
    default: console.log(buttonInnerHTML);

  }

}


function makeanimation(currentkey){
  var activeButton = document.querySelector("."+ currentkey);  // NOTE: makeanimation current key means in current position you are going to give the variable you choice


// The currentKey is already defined in your function, when you define the function buttonAnimation. Whatever value that goes in buttonAnimation() will be currentKey,
// and in the function, you would want the class of that value to be added temporarily to the active button. The currentKey is already defined in your function,
// when you define the function buttonAnimation. Whatever value that goes in buttonAnimation() will be currentKey, and in the function, you would want
// the class of that value to be added temporarily to the active button.


  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");  // NOTE: camelcasing is very imoortant check or alwasys refer docs
  },100)

}

// NOTE: you can also write this code in detaile

// var code = document.querySelectorAll(".drum").length;
//
// for ( var i = 0; i < code; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     alert("i got clicked");})
// }

// NOTE: sometimes even the space also matters from fisrt line starting space to secon line starting space//


// NOTE: you can also change the selector and makeiit work but clicking on space also they will work so dont

// document.querySelector(".set").addEventListener("click", function() {
//
//   alert("I got clicked!");
//
// });



// NOTE: we can also do in this way   with if else
// var noOfButtons = document.querySelectorAll(".drum").length;
// for (var a = 0; a < noOfButtons; a++) {
//     document.querySelectorAll("button")[a].addEventListener("click", function() {
//
//
//         if (this.textContent === "w") {
//             var audio = new Audio("./sounds/crash.mp3");
//             audio.play();
//         } else if (this.textContent === "a") {
//             var audio = new Audio("./sounds/kick-bass.mp3");
//             audio.play();
//         } else if (this.textContent === "s") {
//             var audio = new Audio("./sounds/snare.mp3");
//             audio.play();
//         } else if (this.textContent === "d") {
//             var audio = new Audio("./sounds/tom-1.mp3");
//             audio.play();
//         } else if (this.textContent === "j") {
//             var audio = new Audio("./sounds/tom-2.mp3");
//             audio.play();
//         } else if (this.textContent === "k") {
//             var audio = new Audio("./sounds/tom-3.mp3");
//             audio.play();
//         } else if (this.textContent === "l") {
//             var audio = new Audio("./sounds/tom-4.mp3");
//             audio.play();
//         }
//
//     });
// }
