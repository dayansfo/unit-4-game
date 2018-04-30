var win = 0; 
var Losses= 0; 
var TotalScore = 0; 

// radom number from 1 to 120
var target_result = Math.floor(Math.random() * 90 ) + 30;
console.log(target_result); 


var images = [
    'assets/images/blue.jpg', 
    'assets/images/pink.jpg',
    'assets/images/ruby.jpg',
    'assets/images/yellow.jpg',
]

// var resetAndStart = function () {
//   $(".crystals").empty();
// }

$("#result").html('Target Result: ' + target_result);

// Random crystal value

$("#blue").attr("dataValue", Math.floor(Math.random() * 11) + 1);
$("#red").attr("dataValue", Math.floor(Math.random() * 11) + 1);
$("#yellow").attr("dataValue", Math.floor(Math.random() * 11) + 1);
$("#pink").attr("dataValue", Math.floor(Math.random() * 11) + 1);

// Score

$("#previous").html("Total Score: " + previous);

// click event

$(document).on('click', '.crystalsImg', function () {
    console.log(this);

  var num = parseInt($(this).attr('dataValue'));
  previous += num;
  console.log(num);

//   Score message
// alert("New score: " + counter);

// if (counter === targetNumber) {
//   alert("You win!");
//   resetGame();
// }

// else if (counter >= targetNumber) {
//   alert("You lose!!");
//   resetGame();
// }

// function resetGame(){
//   counter = 0;
//   targetNumber = Math.floor(Math.random() * 50);
// }

});


    $("#previous").html("Total score: " + previous);
    console.log(previous);

  if(previous > target_result){
    lost--;
    $("#lost").html("You lost" + lost);
    previous = 0;
    resetAndStart();

  }
  else if(previous == target_result){
    win++;
    $("#win").html("You Win" + win);
    previous = 0;
    resetAndStart();
  }
  
// });