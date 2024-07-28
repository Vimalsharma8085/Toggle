document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    // Initialize with light mode
    body.classList.add('light');

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('light')) {
            body.classList.replace('light', 'dark');
        } else {
            body.classList.replace('dark', 'light');
        }
    });
});
