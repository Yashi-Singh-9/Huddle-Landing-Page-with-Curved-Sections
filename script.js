document.querySelector('.subscribe-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('newsletter-email');
    const errorMessage = document.getElementById('error-message');
    const emailValue = emailInput.value.trim(); // trim() to avoid whitespaces
    
    // Simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email field is empty
    if (!emailValue) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Please enter your email';
        errorMessage.classList.add('visible');
    }
    // If email is not empty but invalid
    else if (!emailPattern.test(emailValue)) {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Check your email please';
        errorMessage.classList.add('visible');
    }
    // If the email is valid
    else {
        emailInput.classList.remove('error');
        errorMessage.classList.remove('visible');
        errorMessage.textContent = 'Form Submitted.';
        errorMessage.style.color = 'hsl(207, 100%, 98%)';
        errorMessage.classList.add('visible');
    }
});
