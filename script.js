// Variables that select or create the elements for the quiz
const questionEl = document.querySelector(".question")
const answersEl = document.querySelector(".choices")
const instructionsEl = document.querySelector(".instructions")
const startBtn = document.querySelector('.start')

const questions = [
    {
        text: "Which one of these is a primitive data type??",
        choices: [{ answer: "Array", correct: false }, { answer: "Object", correct: false }, { answer: "String", correct: true }, { answer: "JSON", correct: false }] // 4 choices, only one is correct: true
    },
    {
        text: "Is this my second question?",
        choices: [{ answer: "Yes", correct: true }, { answer: "No", correct: false }]
    },
    // {
    //     text: "Is this my first question?",
    //     choices: [{ answer: "Yes", correct: true }, { answer: "No", correct: false }]
    // }
]

const currentQuestionIndex = 0
const lastQuestionIndex = questions.length - 1
let score = 0;
let timer = 10;

function renderQuestion() {
    // target question element and render question
    for (let i = 0; i < questions[currentQuestionIndex].questions.length; i++) {
        const btnEl = document.createElement('button')
        const questionEl = document.createElement("p").appendChild(btnEl)
        const question = questions[currentQuestionIndex].text
        choiceEl.appendChild(answersEl)
        questionEl.textContent = questions

    }
    
    


// target choices element and render my choices
    for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        const btnEl = document.createElement('button')
        const choiceEl = document.createElement("li").appendChild(btnEl)
        const isCorrect = questions[currentQuestionIndex].choices[i].correct
        choiceEl.setAttribute("data-set-correct", isCorrect)
        answersEl.appendChild(choiceEl)
        choiceEl.textContent = questions[currentQuestionIndex].choices[i].answer
    }

}

function gameStart() {
    // Hide the h1 and instructions and button
    instructionsEl.style.display = 'none'
    // starts timer countdown
    // renders first question
    renderQuestion()

}

function startTimer(duration,display) {
    // starts the timer
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

    const timerEl = document.createElement("div").style.textAlign = "right"

}

function stopTimer() {
    // stops timer

    clearTimeout(timer)
}


function displayCorrectAnswer() {
    // Render correct text
    // Add to score
    // Add one to currentQuestionIndex
    // if it is NOT the final question, call renderQuestion again
    // if it IS the final question, call gameOver()

}
function displayWrongAnswer() {
    // Render wrong text
    // Remove time from timer
    // Add one to currentQuestionIndex
    // if it is NOT the final question, call renderQuestion again
    // if it IS the final question, call gameOver()
}
function gameOver() {
    // When user answers all questions, stops timer
    // When timer runs out
    // show input for intiials, and score
    // save button that saves initials and score to local storage
}

startBtn.addEventListener("click", gameStart) 

