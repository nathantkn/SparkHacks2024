document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    // const heading1 = document.querySelector("#betterdays > span:first-child");
    // const heading2 = document.querySelector("#betterdays > span:last-child");
    const question = document.querySelector("#question > span:first-child")
    const inputField = document.querySelector("#loginForm > div > input");
    const newQuestion = document.getElementById("newQuestion");

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

        // Fade out the current question
        question.classList.add("fade-out");

        // Fade in the new question, with delay based on transition duration
        // Update input placeholder and heading after fade-out
        setTimeout(function() {
        inputField.value = "";
        inputField.placeholder = "Hobbies/Acquaintances/Places...";
        question.textContent = "Tell us something you do to destress.";

        // Fade in the updated question
        question.classList.remove("fade-out");
        question.classList.add("fade-in");
        }, 500); // Adjust the delay based on your transition duration
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const mainContainer = document.querySelector('div.text-center');
//     const forms = document.querySelectorAll('form');
//     const inputBox = document.querySelector('input[type="text"]');
//     const submitButton = document.getElementById('submitButton');

//     forms.forEach(form => {
//         form.addEventListener('submit', function(e) {
//             e.preventDefault(); // Prevent the form from submitting

//             // Fade out the container
//             mainContainer.classList.add('fade-out');

//             // Wait for the fade out animation to complete
//             // setTimeout(() => {
//             //     inputBox.value = "";

//             //     const h1 = mainContainer.querySelector('h1');
//             //     const inputFields = mainContainer.querySelectorAll('input, select');
                
//             //     // If on the first page, transition to the second page
//             //     h1.textContent = "What could be your solution? Tell us something you do to destress.";
                
//             //     inputFields.forEach(input => {
//             //         if(input.tagName.toLowerCase() === 'input') {
//             //             input.placeholder = "Social media/Hobbies/Acquaintances...";
//             //         } else if(input.tagName.toLowerCase() === 'select') {
//             //             input.innerHTML = `
//             //                 <div class="logo text-center mb-8"><span class="text-6xl font-fantasy">Better Days</span></div>
//             //                 <h1 class="text-3xl font-semibold mb-6 text-center fade-in">Is there anything that's specifically bugging you?</h1>
//             //                 <form class="mb-6 fade-in" style="animation-delay: .5s;">
//             //                     <input class="p-2 w-full rounded mb-2 focus:outline-none" type="text" style="border-color: #FFC8DD; min-height: 3rem;">
//             //                     <button id="submitButton" class="hidden text-white px-4 py-2 rounded focus:outline-none" style="min-height: 3rem; background-color: #CDB4DB; hover:background-color: #FFC8DD; margin: 2rem">Submit</button>
//             //                 </form>
//             //             `;
//             //         }
//             //     });

//                 // Fade in the container with the new prompt
//                 // mainContainer.classList.remove('fade-out');
//                 // mainContainer.classList.add('fade-in');
//             // }, 1000); // Corresponds with the transition duration
//         });
//     });

//     // Add event listener to the submit button on the second page
//     // submitButton.addEventListener('click', function() {
//     //     // Navigate to 'betterdays.html'
//     //     window.location.href = './betterdays.html';
//     // });
// });
