const correctAnswers = ["Demon", "Pochita", "Attack", "10", "Finger", "Sensei", "No", "Gambling games", "13", "wife"];
let totalQuestions = 10;


function submitQuiz() {
    let score = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);

        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = correctAnswers[i - 1];

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    }

    const resultElement = document.getElementById("result");
    resultElement.innerText = `Your score: ${score} out of ${totalQuestions}`;
    resultElement.style.fontWeight = 'bold';
    resultElement.style.fontSize = '18px';
}
