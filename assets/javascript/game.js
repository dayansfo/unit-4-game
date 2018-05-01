var win = 0; 
var Losses= 0; 
var totalScore = 0; 
var previous = 0;

// radom number from 1 to 120
var target_result = Math.floor(Math.random() * 90 ) + 30;
console.log(target_result); 


var images = [
    'assets/images/blue.jpg', 
    'assets/images/pink.jpg',
    'assets/images/ruby.jpg',
    'assets/images/yellow.jpg',
]



$("#result").html('Target Result: ' + target_result);

// Random crystal value

$("#blue").attr("dataValue", Math.floor(Math.random() * 11) + 1);
$("#red").attr("dataValue", Math.floor(Math.random() * 11) + 1);
$("#yellow").attr("dataValue", Math.floor(Math.random() * 11) + 1);
$("#pink").attr("dataValue", Math.floor(Math.random() * 11) + 1);

// click event

$(document).on('click', '.crystalsImg', function () {
    console.log(this);

    var num = parseInt($(this).attr('datavalue'));
    previous += num;
    console.log(num);
    
    stillPlaying();

});

function stillPlaying() {

    if (previous === target_result) {
        alert("You win! Press 'ok' to play again.");
        win++
        $("#winBox").html(win);
        reset();

    } else if (previous > target_result) {
        alert("You lose! Press 'ok' to play again.");
        loss++
        $("#lossBox").html(loss);
        reset();
    }

    $("#previous").text(previous);

var resetAndStart = function () {
  $(".crystals").empty();

}
}