//declare questions give value of answers
var currentQuestion =[
{
	questionText: "What did Cramer name his pet rooster that he thought was a chicken?",
	choices: ['Newman' , 'Little Jerry' , 'El Pollo' , 'Lois'],
	correct: 1
},

{
	questionText: "What is the name of the seasonal holiday Georges father invented?",
	choices: ['Bestmas' , 'Greivance Day' , 'Festivus' , 'The Feats of Strength'],
	correct: 2
},

{
	questionText: "Who catches Jerry and his girlfriend making out during Shildlers List?",
	choices: ['Bania' , 'J. Petterman' , 'David Puddy' , 'Newman'],
	correct: 3
},

{
	questionText: "What religion did George convert to in an attempt to stay in a relationship?",
	choices: ['Islam' , 'Catholicisim' , 'Latvian Orthodox' , 'Judiasm'],
	correct: 2
},

{
	questionText: "Kramer accuses Calvin Klein of stealing what idea from him?",
	choices: ['A cologne' , 'His pants' , 'An underwear style' , 'His hot tub'],
	correct: 0
}];

// var wrongAnswer = currentQuestion.correct;
var correctAnswer = currentQuestion.correct;
var questionsRemaining = 5;
var questionCounter = 0;
var answerArray = [];
var counter = 20;
var wins = 0;
var losses = 0;
function timer() {
var interval = setInterval(function() {
    counter--;
    $("#time").html("Time Remaining: " + counter);

    
    if (counter == 0) {
        clearInterval(interval);
        }
}, 1000);
}

function reset() {
	if (counter == 0) {
		//play();

	}
}

function getQuestion(){
	time=26;
	$("#questions").html(currentQuestion[questionCounter].questionText);
	answerArray = currentQuestion[questionCounter].choices;
		$("#answer1").text(answerArray[0]);
    	$("#answer2").text(answerArray[1]);
    	$("#answer3").text(answerArray[2]);
    	$("#answer4").text(answerArray[3]);
    //answer = questions[questionCounter].correct	
}


 $("button").click(function() {
 	getQuestion();
 	timer();

 	$("#answer1").click(function() {
 		// if (this == wrongAnswer) {
 		// 	console.log(correctA)
 		// }
 		$("#questions").html("WRONG!");
 		// $("#choices").html('<img id="text-center" src="assets/images/wrong1.gif"/>');
 		questionCounter ++;
 		losses ++;

 		setTimeout(function(){
 				counter = 21;
 				if (questionsRemaining == 0) {
 					alert("Game Over");

 				}
 				getQuestion();
 				},
 			5000
 	);
 		

 
});
 	$("#answer2").click(function() {
 		$("#questions").html("CORRECT!");
 		//$("#choices").html('<img id="text-center" src="assets/images/littleJerry.gif"/>');
 		questionCounter ++;
 		wins ++;

 		setTimeout(function(){
 				counter = 21;
 				getQuestion();
 				},
 			5000
 	);
 
});
 	$("#answer3").click(function() {
 		$("#questions").html("WRONG!");
 		//$("#choices").html('<img id="text-center" src="assets/images/wrong2.gif"/>');
 		questionCounter ++;
 		losses ++;

 		setTimeout(function(){
 				counter = 21;
 				getQuestion();
 				},
 			5000
 	);
 
});
 	$("#answer4").click(function() {
 		$("#questions").html("WRONG!");
 		//$("#choices").html('<img id="text-center" src="assets/images/wrong3.gif"/>');
 		questionCounter ++;
 		losses ++;
 		console.log(losses);

 		setTimeout(function(){
 				counter = 21;
 				getQuestion();
 				},
 			5000
 	);
 
});
 	if (questionsRemaining == 0) {
 		alert("game over");
 	}
});






//display choices
//if correct display question 2 keep track of wins
//start timer over

//if incorrect tell incorrect display question 2 keep track of losses

//display new 4 choices once new question is displayed
//select new correct answer for each new question

