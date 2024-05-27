document.addEventListener('DOMContentLoaded', function() {
    const continueButton = document.getElementById('continue-button');
    continueButton.addEventListener('click', function() {
        const landingPage = document.getElementById('landing-page');
        landingPage.classList.add('fade-out');
        setTimeout(function() {
            landingPage.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 600); // Match this duration with the CSS transition duration
    });

    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});
