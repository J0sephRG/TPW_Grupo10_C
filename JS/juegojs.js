const questions = [
    { question: "¿Qué deporte, que se juega en equipos de 11 jugadores por lado, es considerado el más popular y tiene una de las mayores audiencias a nivel mundial?", correct: "X" },
            { question: "¿En qué deporte, que se practica en el agua, los competidores deben nadar distancias específicas en diferentes estilos, compitiendo individualmente o en relevos, y cuya principal característica es la velocidad con la que se recorren los carriles de la piscina?", correct: "Y" },
            { question: "¿Qué deporte de raqueta, que se juega en una pista cerrada con paredes y con una pelota que se golpea usando una pala, combina elementos de tenis y squash y se ha popularizado en los últimos años, aunque aún no ha sido incluido en los Juegos Olímpicos?", correct: "Z" },
            { question: "¿En qué deporte se utilizan dos equipos que se enfrentan sobre un campo rectangular con una red que los divide, y el objetivo es pasar una pelota de tamaño específico por encima de la red, sin que toque el suelo en el lado del oponente?", correct: "W" },
            { question: "¿En qué deporte de equipo, que involucra una competencia entre dos selecciones nacionales con un total de 22 jugadores en el campo, es común que los equipos intenten marcar goles utilizando una pelota redonda, y que se juega en un campo rectangular con una portería en cada extremo?", correct: "X" },
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