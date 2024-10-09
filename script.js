let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

document.getElementById("submit").addEventListener("click", function () {
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;
    const result = document.getElementById("result");

    if (guess < 1 || guess > 10 || isNaN(guess)) {
        result.innerHTML = "Please enter a number between 1 and 100.";
    } else if (guess < randomNumber) {
        result.innerHTML = "Too low! Try again.";
    } else if (guess > randomNumber) {
        result.innerHTML = "Too high! Try again.";
    } else {
        result.innerHTML = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById("restart").style.display = "block";
    }
});

document.getElementById("restart").addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("guess").value = "";
    document.getElementById("restart").style.display = "none";
});
