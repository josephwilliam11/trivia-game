
var question1 = "What did Cramer name his pet rooster that he thought was a chicken?";
var question2 = "What is the name of the seasonal holiday Georges father invented?";
var question3 = "Who catches Jerry and his girlfriend making out during Shildlers List?";


var choices1A = "Newman";
var choices1B = "Little Jerry";
var choices1C = "El Pollo Loco";
var choices1D = "Lois"; 


var choices2A = "Bestmas";
var choices2B = "International Greivances Day"; 
var choices2C = "Festivus";
var choices2D = "The Feats of Strength";


var choices3A = "Newman";
var choices3B = "Bania";
var choices3C = "J. Peterman";
var choices3D = "David Puddy";


$("button").click(function() {

var counter = 20;
var interval = setInterval(function() {
    counter--;
    $("#time").html("Time Remaining: " + counter);

    
    if (counter == 0) {
        clearInterval(interval);
        }
}, 1000);

$("#questions").html(question1);

// if (question1) {
  	$("#answer1").html(choices1A);
  	$("#answer2").html(choices1B);
  	$("#answer3").html(choices1C);
  	$("#answer4").html(choices1D);

 

 $("#answer1").click(function() {
 	$("#questions").html("WRONG!");
 	setTimeout(
 		function(){
 			$("#questions").html(question2);
 			$("#answer1").html(choices2A);
 			$("#answer2").html(choices2B);
		 	$("#answer3").html(choices2C);
		 	$("#answer4").html(choices2D);
 			counter = 21;
 		},
 			3000
 	);
 });

 $("#answer2").click(function() {
 	$("#questions").html("CORRECT!");
 	setTimeout(
 		function(){
 			$("#questions").html(question2);
 			$("#answer1").html(choices2A);
 			$("#answer2").html(choices2B);
		 	$("#answer3").html(choices2C);
		 	$("#answer4").html(choices2D);
 				
 				counter = 21;
 	
 			},
 			3000
 			);
 })

  $("#answer3").click(function() {
 	$("#questions").html("WRONG!");
 	setTimeout(
 		function(){
 			$("#questions").html(question2);
 			$("#answer1").html(choices2A);
 			$("#answer2").html(choices2B);
		 	$("#answer3").html(choices2C);
		 	$("#answer4").html(choices2D);
 			counter = 21;
 		},
 			3000
 	);
 });

  $("#answer4").click(function() {
 	$("#questions").html("WRONG!");
 	setTimeout(
 		function(){
 			$("#questions").html(question2);
 			$("#answer1").html(choices2A);
 			$("#answer2").html(choices2B);
		 	$("#answer3").html(choices2C);
		 	$("#answer4").html(choices2D);
 			counter = 21;
 		},
 			3000
 	);
 });

// }

// if (question2) {
//  	// $("#answer1").html(choices2A);
//  	// $("#answer2").html(choices2B);
//  	// $("#answer3").html(choices2C);
//  	// $("#answer4").html(choices2D);

 $("#answer1").click(function() {
 	$("#questions").html("WRONG!");
 	setTimeout(
 		function(){
 			$("#questions").html(question3);
 			$("#answer1").html(choices3A);
 			$("#answer2").html(choices3B);
		 	$("#answer3").html(choices3C);
		 	$("#answer4").html(choices3D);
 			counter = 21;
 		},
 			3000
 	);
 });

 $("#answer2").click(function() {
 	$("#questions").html("WRONG!");
 	setTimeout(
 		function(){
 			$("#questions").html(question3);
 			$("#answer1").html(choices3A);
 			$("#answer2").html(choices3B);
		 	$("#answer3").html(choices3C);
		 	$("#answer4").html(choices3D);
 				
 				counter = 21;
 	
 			},
 			3000
 			);
 })

  $("#answer3").click(function() {
 	$("#questions").html("CORRECT!");
 	setTimeout(
 		function(){
 			$("#questions").html(question3);
 			$("#answer1").html(choices3A);
 			$("#answer2").html(choices3B);
		 	$("#answer3").html(choices3C);
		 	$("#answer4").html(choices3D);
 			counter = 21;
 		},
 			3000
 	);
 });

  $("#answer4").click(function() {
 	$("#questions").html("WRONG!");
 	setTimeout(
 		function(){
 			$("#questions").html(question3);
 			$("#answer1").html(choices3A);
 			$("#answer2").html(choices3B);
		 	$("#answer3").html(choices3C);
		 	$("#answer4").html(choices3D);
 			counter = 21;
 		},
 			3000
 	);
 });

// }

//this is the end
});






