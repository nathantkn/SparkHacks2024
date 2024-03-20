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
});


