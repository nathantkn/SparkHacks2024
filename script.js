document.addEventListener('DOMContentLoaded', function() {
    const optionSelect = document.getElementById('optionSelect');
    const submitButton = document.getElementById('submitButton');
    

    optionSelect.addEventListener('change', function() {
        if (optionSelect.value !== "") {
            submitButton.classList.remove('hidden');
        } else {
            submitButton.classList.add('hidden');
        }
    });

    submitButton.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
const mainContainer = document.querySelector('div.text-center');
const forms = document.querySelectorAll('form');
const inputBox = document.querySelector('input[type="text"]');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Fade out the container
    mainContainer.classList.add('fade-out');

    // Wait for the fade out animation to complete
    setTimeout(() => {
        inputBox.value = "";

        const h1 = mainContainer.querySelector('h1');
        const inputFields = mainContainer.querySelectorAll('input, select');

        // Check the content of the h1 to determine the current page
        if (h1.textContent.includes("What's your plan for the near future?")) {
            // If on the second page, transition to the third page
            mainContainer.innerHTML = `
            <div class="logo text-center mb-8"><span class="text-6xl font-fantasy">Better Days</span></div>
                <h1 class="text-3xl font-semibold mb-6 text-center fade-in">Is there anything that's specifically bugging you?</h1>
                <form class="mb-6 fade-in" style="animation-delay: .5s;">
                    <input class="p-2 w-full rounded mb-2 focus:outline-none" type="text" placeholder="Something that makes you unhappy?" style="border-color: #FFC8DD; min-height: 3rem;">
                    <input class="p-2 w-full rounded mb-2 focus:outline-none" type="text" placeholder="Someone that you feel negatively about?" style="border-color: #FFC8DD; min-height: 3rem;">
                    <input class="p-2 w-full rounded focus:outline-none" type="text" placeholder="Somewhere that you dislike?" style="border-color: #FFC8DD; min-height: 3rem;">
                    <button class="text-white px-4 py-2 rounded focus:outline-none" style="min-height: 3rem; background-color: #CDB4DB; hover:background-color: #FFC8DD; margin: 2rem">Submit</button>
                </form>
            `;
            
            /*
            // Wait for the fade in animation to be potentially complete
            setTimeout(() => {
                const submitButton = mainContainer.querySelector('#submitButton');
                submitButton.addEventListener('click', function() {
                    // Redirect to the new HTML file
                    window.location.href = './betterdays.html'; // Change './betterdays.html' as needed to the correct file path
                });
            }, 600); // This waits a bit longer to ensure the element is there and can have an event listener attached
            mainContainer.classList.remove('fade-out');
            mainContainer.classList.add('fade-in'); */
        } else {
            // If on the first page, transition to the second page
            h1.textContent = "What's your plan for the near future?";
            
            inputFields.forEach(input => {
                if(input.tagName.toLowerCase() === 'input') {
                    input.placeholder = "Type here...";
                } else if(input.tagName.toLowerCase() === 'select') {
                    input.innerHTML = `
                    <div class="logo text-center mb-8"><span class="text-6xl font-fantasy">Better Days</span></div>
                    <h1 class="text-3xl font-semibold mb-6 text-center fade-in">Is there anything that's specifically bugging you?</h1>
                    <form class="mb-6 fade-in" style="animation-delay: .5s;">
                        <option selected> Select an option </option>
                        <option>I want to improve myself mentally.</option>
                        <option>I want to make a much-needed decision.</option>
                        <option>I want to escape.</option>
                        <option>I don't know?</option>
                        <button id="submitButton" class="hidden text-white px-4 py-2 rounded focus:outline-none" style="min-height: 3rem; background-color: #CDB4DB; hover:background-color: #FFC8DD; margin: 2rem">Submit</button>
                    </form>
                    `;
                }
            });
        }

        // Fade in the container with the new prompt
        mainContainer.classList.remove('fade-out');
        mainContainer.classList.add('fade-in');
    }, 1000); // Corresponds with the transition duration
    });
});
});