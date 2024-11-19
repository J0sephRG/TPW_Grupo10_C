const questions = [
    { question: "¿Cuál es el deporte con mayor número de jugadores?", correct: "X" },
            { question: "¿Qué deporte se juega en el agua?", correct: "Y" },
            { question: "¿Cuál es el deporte olímpico más actual?", correct: "Z" },
            { question: "¿Qué deporte usa una red alta?", correct: "W" },
            { question: "¿Qué deporte se juega con 11 jugadores de cada equipo?", correct: "X" },
];

let currentQuestion = 0;

function checkAnswer(selected) {
    const result = document.getElementById('result');

    if (selected === questions[currentQuestion].correct) {
        result.textContent = "¡Correcto!";
        result.style.color = "green";
        currentQuestion++;

        if (currentQuestion < questions.length) {
            setTimeout(() => {
                loadNextQuestion();
            }, 1000);
        } else {
            setTimeout(() => {
                showWinMessage();
            }, 1000);
        }
        result.classList.remove('hidden');
    } else {
        // Redirige a la página de error
        window.location.href = "error.html";
    }
}

function loadNextQuestion() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('question').textContent = questions[currentQuestion].question;
}

function showWinMessage() {
    document.getElementById('tierlist-container').classList.add('hidden');
    document.getElementById('win-message-container').classList.remove('hidden');
}