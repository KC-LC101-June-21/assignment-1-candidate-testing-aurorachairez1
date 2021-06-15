const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //


let question = "Who was the first American woman in space?  "
let correctAnswer = "Sally Ride"
let candidateAnswer; 
let questions;
let correctAnswers;

let question1 = input.question("True or false: 5 kilometers === 5000 meters");
let answers1 = true;
console.log(answers1);
let candidate1; 
let question2 = input.question("(5 + 3)/2 * 10 = ?");
let answers2 = 40 
let candi
let question3 = input.question("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?");
let answers3 = "Trajectory";
let question4 =input.question("What is the minimum crew size for the ISS?")
let answer4 = 3;


let questionArr = [question, question1, question2, question3,question4];
let answersArr = ["Sally Ride", true, 40, "Trajectory", 3 ];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name:");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

let num = input.question()
num = Number(num);

for (let i = 0; i < questionArr.length; i++) {
   console.log(questionArr[i]);

   }




function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if(candidateAnswer === correctAnswer){
  console.log("The answer is correct");
} else if(candidateAnswer != correctAnswer){
  console.log("That is NOT correct, the correct answer is " + correctAnswer);
}

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  console.log("Hello, " + candidateName + "!");
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};