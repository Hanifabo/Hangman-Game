function populate(){

	if(quiz.isEnded()){
		showScores();
	}
	else{
				//show questions;
			var element = document.getElementById("question");
			element.innerHTML = quiz.getQuestionIndex().text;
			
				//show choies
			var choices = quiz.getQuestionIndex().choice;

			for(var i =0; i < choices.length; i++){
				var element = document.getElementById("choice"+i);

				//element.innerHTML = choices[i];
				element.innerHTML = "_________";
				guess("btn"+i, choices[i]);
			}

	}
}

function guess(id, guess){


	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}

	


}

function showScores(){
	var	gameOverHtml = "<h2 id='score'> Your scores: " + quiz.score +  "</h2>";
		
		console.log(gameOverHtml);
		var element = document.getElementById("scorebor");
		element.innerHTML = gameOverHtml;
}

function showProgress(){
	var currentQueiontNumber = quiz.getQuestionIndex+1;
	var element = document.getElementById("scorebor");
	element.innerHTML = "questions" + currentQueiontNumber + " of" +quiz.questions.length;
}

var questions = [
	new Question("This is a name of a soccer player",["a","b","E","D"],"b"),
	new Question("This is a name of a President",["g","o","o","d"],"o"),
	new Question("This is a name of a boxer",["G","g","g","t"],"t"),
		new Question("This is a word",["G","g","g","t"],"t"),
];

var quiz = new Quiz(questions);

populate();



