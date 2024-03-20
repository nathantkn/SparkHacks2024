document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.taskCheckbox');
    const progressBar = document.getElementById('progressBar');
    let checkedItems = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if(e.target.checked) {
                checkedItems++;
            } else {
                checkedItems--;
            }
            const progress = (checkedItems / checkboxes.length) * 100;
            progressBar.style.width = progress + '%';
        });
    });

    const submitBtn = document.getElementById('submitBtn');
    const userInput = document.getElementById('userInput');
    const spinner = document.getElementById('spinner');
    const taskContainer = document.getElementById('taskContainer');

    function toggleSpinner(show) {
        spinner.style.display = show ? 'block' : 'none';
    }

    submitBtn.addEventListener('click', () => {
        const prompt = userInput.value.trim();
        if (prompt) {
            toggleSpinner(true);
            fetch("https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQmwyYW5rdTRHSUFhMGstb1VsOHEyTFE4SGMwVDdha18tZE1RcllDQVFkSFhPR3QzbGhBTk9idGU1Z3NYY1dGRWFjX01FbEtyLUx3NTJPYkN1TlQyeWpVWm5idEE9PQ==", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt })
            })
            .then(response => response.json())
            .then(data => {
                toggleSpinner(false);
                if (data.status === 'success') {
                    // Assuming the API returns keywords directly for simplicity
                    const tasks = data.text.split(', ');
                    taskContainer.innerHTML = tasks.map(task => `<div class="flex items-center mb-2"><input type="checkbox" class="mr-2">${task}</div>`).join('');
                } else {
                    alert('There was an error processing your request. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toggleSpinner(false);
                alert('An error occurred. Please check the console for more information.');
            });
        }
    });
});


