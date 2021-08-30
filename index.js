var readlineSync = require('readline-sync');

var username = readlineSync.question("Enter your name: ");

var highscores = [
  {
    name:"Yash",
    score:6
  },
  {
    name:"Sanket",
    score:4
  }
]

console.log("Welcome " + username + " to the superhero game.");

console.log("This game tests your knowledge on superhero powers and their various attributes")

console.log("There are a total of 6 questions and the highest score you can score is 6")
var score = 0;
//play function
function game(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Correct Answer");
    score = score + 1;
  }
  else {
    console.log("Incorrect Answer");
    console.log("The correct answer is "+answer)
  }
  return ("Current Score: " + score)
}

var superman = {
  name: "SuperMan",
  power: "Overpowered",
  origin: "DC",
  type: "Hero"
}

var thanos = {
  name: "Thanos",
  power: "Overpowered",
  origin: "Marvel",
  type: "Villain"
}

//this function shows the high score as well as the final score
function scoremapper(){
 
  console.log("Thank you for playing");
  console.log("Your score is: "+score);
  console.log("**********")
  console.log("Check out the high scores!");
  highscores.map(score => console.log(score.name+":"+score.score));
  console.log("**********")
  console.log("Send me a screenshot with your scores if you think you've beaten the high score!")

}

cast = [superman, thanos];
for (i = 0; i < cast.length; i++) {
  console.log(game("What is " + cast[i].name + "'s power: ", cast[i].power));
  console.log("**********");
  console.log(game("What comic does " + cast[i].name + " belong to: ", cast[i].origin));
  console.log(game("Is "+cast[i].name+" a Hero or a Villain? ", cast[i].type))
}

scoremapper();