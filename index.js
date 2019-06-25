
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)",
//   "rgb(0, 255, 255)"
// ]

// Variables
var numSquares = 6;
var colors = []; //= generateRandomColors(6);
var pickedColor; //= randoColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetColor");
var modebtns = document.querySelectorAll(".mode");
// var easybtn = document.querySelector("#easybtn");
// var hardbtn = document.querySelector("#hardbtn");

init();

function init (){
  setupModeButtons();
  setupSquares();
  reset();
}
  //** NEW ** replacing the difficulty buttons logic
function setupModeButtons(){
  for(var i = 0; i < modebtns.length; i++) {
    modebtns[i].addEventListener("click", function(){
      modebtns[0].classList.remove("selected");
      modebtns[1].classList.remove("selected");
      this.classList.add("selected");
       //this is a turnerary operator
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
       // if(this.textContent === "Easy"){
       //   numSquares = 3;
       // } else {
       //   numSquares = 6;
       // }
       // reset();

    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    // squares[i].style.background = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.background.match(/rgb\(\d+,\s\d+,\s\d+\)/);
      //compare color to pickedColor did they pick right color
      if(clickedColor == pickedColor){
        messageDisplay.textContent = "Correct!";
        //make reset button now say "play again"
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again.";
      }
    });
  }
}


function reset(){
  colors = generateRandomColors(numSquares);
  //pick new random colors from array
  pickedColor = randoColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  //change colors of squares
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
        squares[i].style.display = "none"
      }
  }
  h1.style.background = "steelblue";
}


//we are refactoring this.
//Setting up our easy and hard buttons
// easybtn.addEventListener("click", function(){
//   easybtn.classList.add("selected");
//   hardbtn.classList.remove("selected");
//   numSquares = 3;
//   //generate new colors
//   colors = generateRandomColors(numSquares);
//   //choose new picked color
//   pickedColor = randoColor();
//   //color display name should display matched colors
//   colorDisplay.textContent = pickedColor;
//   //hide 3 buttom squares from 6
//   for (var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// refactoring so we don't use the id = hardbtn
// hard button set up

// hardbtn.addEventListener("click", function(){
//   easybtn.classList.remove("selected");
//   hardbtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   //choose new picked color
//   pickedColor = randoColor();
//   //color display name should display matched colors
//   colorDisplay.textContent = pickedColor;
//   //bring back 3 buttom squares from 6
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//     }
// });

//RESET BUtton

resetButton.addEventListener("click", function(){
  reset();
})
//   //when you click on button,generate all New
//   colors = generateRandomColors(numSquares);
//   //pick new random colors from array
//   pickedColor = randoColor();
//   //change color display to match picked color
//   colorDisplay.textContent = pickedColor;
//   this.textContent = "New Colors";
//   //change colors of squares
//   messageDisplay.textContent = "";
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.background = colors[i];
//   }
//   h1.style.background = "steelblue";
// })

colorDisplay.textContent = pickedColor;


    //change all to the same color
function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function randoColor(){
  // pick random Number between 1 and 6, whole number
  // math.floor(math.random() * 6 + 1)
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generate a bunch of random rgb colors
function  generateRandomColors(num){
  //make an array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
}
      //return array
  return arr;
}
// ********
function randomColor(){
  // pick a random red 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a random green 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick random blue 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
