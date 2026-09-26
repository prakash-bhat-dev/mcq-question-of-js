import questions from "./api/questions.json" with { type: "json" };

let questionLevel=document.querySelector(".quesiton-level");
let currentQuestion = Number(localStorage.getItem("name")) || 0;
let button = document.querySelector(".next-button");
let questionNumber = document.querySelector("#question-number");
let questionPart = document.querySelector("#question-part");
let codePart = document.querySelector(".code-cotainer");
let correct = document.querySelector(".correct");
let input = document.querySelectorAll("input");
let label = document.querySelectorAll("label");
let store = localStorage.getItem("questionnumber");
let previousButton = document.querySelector(".previous-button");

// localStorage.clear();

function showQuestion() {
    localStorage.setItem("name", currentQuestion);
    correct.textContent = "";
    let question = questions[currentQuestion];
    let currentAnswer = question.answer;

    // get question and code 
    questionLevel.textContent=question.level;
    questionNumber.textContent = question.id;
    questionPart.textContent = question.question;
    codePart.textContent = question.code;
    if (question.code) {
        codePart.style.display = "block";
    }
    else {
        codePart.style.display = "none";
    }

    // get option 
    let count = 0;
    label.forEach(element => {
        element.textContent = question.options[count];
        count++;
    });
input.forEach(element=>{
element.checked=false;
})
}
showQuestion();

// next question button
button.addEventListener("click", function () {

    if (currentQuestion >= 0) {
        currentQuestion++;
        showQuestion();
    }

});


// previous question button 

previousButton.addEventListener("click", function () {

    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }

});


// show correct answer

input.forEach(element => {
    element.addEventListener("change", function () {
        let question = questions[currentQuestion];
        correct.textContent = `Correct Answer : ${question.answer}`;
    })
});