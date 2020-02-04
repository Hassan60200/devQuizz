const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})


function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    }else {
        startButton.innerText = ("Recommencez !");
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}



const questions = [
    {
        question: "Que signifie PHP ?",
        answers: [
            { text: 'PHP Hypertext Preprocessor', correct: true },
            { text: 'Pokeball Hyperball Pokemon', correct: false },
            { text: 'Programming Home Pages', correct: false },
            { text: 'Page Helper Process', correct: false },
        ]
    },
    {
        question: "Que signifie CSS  ?",
        answers: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Create Simple Samples', correct: false },
            { text: 'Cascading Sheets Style', correct: false },
            { text: 'Create Samples Simple', correct: false },
        ]
    },
    {
        question: "Quelle méthode permet d'envoyer la plus grande quantité de données ?",
        answers: [
            { text: 'GET', correct: false },
            { text: 'SEND', correct: false },
            { text: 'POST', correct: true },
            { text: 'GET et POST', correct: false },
        ]
    },
    {
        question: "Quelle balise permet la saisie de plusieurs lignes de texte ?",
        answers: [
            { text: '<textbox>', correct: false },
            { text: '<input value = "combo">', correct: false },
            { text: '<input type="multiple">', correct: false },
            { text: '<textarea>', correct: true },
        ]
    },
    {
        question: "Qu'est-ce qu'un < br > ?",
        answers: [
            { text: 'crée un saut de ligne', correct: true },
            { text: 'une ligne horizontale', correct: false },
            { text: 'une action en php', correct: false },
            { text: 'un contenu gras', correct: false },
        ]
    },
    {
        question: "Comment créer une nouvelle table nommée 'Table1' ?",
        answers: [
            { text: 'CREATE TABLE Table1', correct: true },
            { text: 'ADD TABLE Table1', correct: false },
            { text: 'NEW TABLE Table1', correct: false },
            { text: 'CREATE DATABASE Table1', correct: false },
        ]
    },
    {
        question: "Que fait i++ ?",
        answers: [
            { text: 'décale la valeur binaire de i', correct: false },
            { text: 'renvoie la chaîne "i+"', correct: false },
            { text: 'incrémente i de 1', correct: true },
            { text: "n'existe par en JavaScript", correct: false },
        ]
    },
    {
        question: "L'opérateur ==  ?",
        answers: [
            { text: 'teste l "égalité', correct: true },
            { text: "n'existe par en JavaScript", correct: false },
            { text: 'créer des variables', correct: false },
            { text: "s'utilise pour l'affectation", correct: false },
        ]
    },
    {
        question: "Quelle fonction permet de temporiser l'exécution d'une commande ?",
        answers: [
            { text: 'wait()', correct: false },
            { text: 'sleep()', correct: false },
            { text: 'setTimeout()', correct: true },
            { text: 'setTimer()', correct: false },
        ]
    },
    {
        question: "La balise < ? ? > permet ?",
        answers: [
            { text: "d'insérer des cookies", correct: false },
            { text: 'ne fonctionne pas', correct: false },
            { text: 'd"inclure un commentaire', correct: false },
            { text: 'd"inclure du code PHP', correct: true },
        ]
    },
    {
        question: "On utilise < tr > pour ?",
        answers: [
            { text: 'une cellule de tableau', correct: false },
            { text: 'un saut de page', correct: false },
            { text: 'une ligne de tableau', correct: true },
            { text: 'tracer une ligne horizontale', correct: false },
        ]
    }
]