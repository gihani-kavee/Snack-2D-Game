const calculation = document.getElementById("calculation");
const answer = document.getElementById("answer");

const buttons = document.querySelectorAll(".buttons button");

const frog = document.getElementById("frog");

const calculator = document.querySelector(".calculator");


/* =========================
   2. CALCULATOR VARIABLES
========================= */

let currentInput = "0";

let previousInput = "";

let operator = "";

let waitingForNextNumber = false;

let completedExpression = "";


/* =========================
   3. UPDATE DISPLAY
========================= */

function updateDisplay() {

    if (completedExpression) {

        calculation.textContent = completedExpression;

    } else if (operator) {

        calculation.textContent =
            previousInput + " " + operator +
            (waitingForNextNumber ? "" : " " + currentInput);

    } else {

        calculation.textContent = "";
    }

    answer.textContent = currentInput;
}

