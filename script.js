// Variables that select or create the elements for the quiz
const questionEl = document.querySelector(".question")
const choicesEl = document.querySelector(".choices")
const instructionsEl = document.querySelector(".instructions")
const startBtn = document.querySelector('.start')
const countdownEl = document.querySelector('.countdown')
const quitBtn = document.querySelector('.quit')
const saveBtn = document.querySelector('.save')
const continueBtn = document.querySelector('.next')

//let score = 0;
//let time = 60;
//let randQuestion = "";
//let questionIndex = 0;
//let savedScores;
//let scoreList = [];
//let potentialAnswers = [];

var questions = [
    {
        question: "Which one of these is a primitive data type??",
        choices: [{answer: "Array", isCorrect: false}, {answer: "Object", isCorrect: false}, {answer: "String", isCorrect: true}, {answer: "JSON", isCorrect: false}],
    }    
    
        /*{
        //question: "Which of these methods return a random number between 0 and 1?",
        //listedAnswers: [ "A. toExponential()", "B. toString()", "C. Math.random()", "D. Math.floor()"],
        //correctAnswer: listedAnswers[2]},
        */
    



]
const currentQuestionIndex = 0;
const lastQuestionIndex = questions.length - 1;
let score = 0;
let timer = 5000;

function startTimer(){
    setInterval(function() {
        var timerInterval = setInterval(function() {
            timer--;
            countdownEl.textContent = `Timer: ${timer}`;
            console.log(timer);
        
            if (timer === 0) {
                clearInterval(timerInterval);
                alert('You Ran Out Of Time!');
                stopTimer();
                gameOver();
             } else if (currentQuestionIndex === questions.length) {
                 clearInterval(timerInterval);
             }
            }, 1000);

            return score;
        }, 
    )}

    function stopTimer() {
        // stops timer
    
        clearTimeout(timerInterval);
    }
    

   
function gameStart() {

    confirm('You will have 5 minutes to complete this quiz. Good Luck!')
    //Hide the h1 and instructions and button
    instructionsEl.style.display = 'd-none';
    // starts timer countdown
    // renders first question
    renderQuestion();
    startTimer();
       //renderQuestion();
   
   }
         
    


function renderQuestion() {
    // target question element and render question
    const question = questions[0].question
    questionEl.textContent = question

    

    //for (let i = 0; i < questions[currentQuestionIndex].questions.length; i++) {
        //const btnEl = document.createElement('button');
        //const questionEl = document.createElement("p").appendChild(btnEl);
        //const questions = questions[currentQuestionIndex].text;
        //choiceEl.appendChild(answersEl);
        //questionEl.textContent = questions;

        for (let i = 0; i < questions[0].choices.length; i++) {
            const choiceEl = document.createElement("li")
            const isCorrect = questions[0].choices[i].correct
            choiceEl.setAttribute("data-set-correct", isCorrect)
            choicesEl.appendChild(choiceEl)
            choiceEl.textContent = questions[0].choices[i].answer
            
        }
    
    }
    
    renderQuestion()
    


// target choices element and render my choices
    



//}








//function displayCorrectAnswer() {
    // Render correct text
    // Add to score
    // Add one to currentQuestionIndex
    // if it is NOT the final question, call renderQuestion again
    // if it IS the final question, call gameOver()

//}
//function displayWrongAnswer() {
    // Render wrong text
    // Remove time from timer
    // Add one to currentQuestionIndex
    // if it is NOT the final question, call renderQuestion again
    // if it IS the final question, call gameOver()}

//function gameOver() {}
    // When user answers all questions, stops timer
    // When timer runs out
    // show input for intiials, and score
    // save button that saves initials and score to local storage

//function saveResults() {}

//function nextQuestion()

startBtn.addEventListener('click', gameStart);
startBtn.addEventListener('click', startTimer);
//startBtn.addEventListener('click', saveResults);
//continueBtn.addEventListener('click', nextQuestion)