document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    // const heading1 = document.querySelector("#betterdays > span:first-child");
    // const heading2 = document.querySelector("#betterdays > span:last-child");
    const question = document.querySelector("#question > span:first-child")
    const inputField = document.querySelector("#loginForm > div > input");
    const newQuestion = document.getElementById("newQuestion");
    let secondQuestion = false;

    // Disable the submit button initially
    submitButton.disabled = true;

    // Add event listener to input field
    inputField.addEventListener("input", function() {
        // Enable submit button if input field is not empty
        submitButton.disabled = inputField.value.trim() === '';
    });

    // Add event listener to form submission
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        // Prevent form submission if input field is empty
        if (inputField.value.trim() === '') {
            event.preventDefault();
        }
    });

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Apply fade-out to the question, input field, and button
        question.classList.add("fade-out");
        inputField.classList.add("fade-out");
        submitButton.classList.add("fade-out");

        // Fade in the new question, with delay based on transition duration
        // Update input placeholder and heading after fade-out
        setTimeout(function() {
            if (secondQuestion) {

                setTimeout(function() {
                    window.location.href = "mainmenu.html";
                }, 250);
            }

            inputField.value = "";
            inputField.placeholder = "Your hobbies/acquaintances/favorites...";
            question.textContent = "Tell us something you do to de-stress.";

            // Set flag to indicate the second question is displayed
            secondQuestion = true;

            // Apply fade-in to update the question, input field, and button
            question.classList.remove("fade-out");
            inputField.classList.remove("fade-out");
            submitButton.classList.remove("fade-out");

            question.classList.add("fade-in");
            inputField.classList.add("fade-in");
            submitButton.classList.add("fade-in");

        }, 250); // Adjust the delay based on your transition duration
    });
});
