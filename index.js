var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("what is your name? ");
console.log("Welcome " + "Do you know Shreyanshi? ");

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("right!!")
    score = score + 1;
  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("____________________");

}

var questions = [{
  question: "Where do I live? ",
  answer: "Bhopal"
},
{
  question: "My favourite color is? ",
  answer: "Black"
},
{
  question: "My favourite dish? ",
  answer: "Pizza"
},
{
  question: "My favourite actress is? ",
  answer: "Katrina Kaif"
},
{
  question: "My favourite movie? ",
  answer: "Rockstar"
},
{
  question: "I love tea or coffee? ",
  answer: "Coffee"
},
{
  question: "My favourite cartoon character? ",
  answer: "Winnie the pooh"
}
];

//loop

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("Yay! " + userName + " you  scored:   ", score)

console.log("check out the high scores, send me screenshot of your score. ");

