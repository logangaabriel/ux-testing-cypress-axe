document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-button');
    const feedback = document.getElementById('feedback');

    const validateForm = () => {
        const isFormValid = nameInput.value.trim() !== '' &&
                            emailInput.value.trim() !== '' &&
                            messageInput.value.trim() !== '' &&
                            emailInput.validity.valid;
        submitButton.disabled = !isFormValid;
    };

    [nameInput, emailInput, messageInput].forEach(input => input.addEventListener('input', validateForm));

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!emailInput.validity.valid) {
            feedback.textContent = 'Please enter a valid email address';
            feedback.className = 'error';
            feedback.classList.remove('hidden');
            feedback.setAttribute('role', 'alert');
            return;
        }

        feedback.textContent = 'Form successfully submitted';
        feedback.className = 'success';
        feedback.classList.remove('hidden');
        feedback.setAttribute('role', 'alert');

        form.reset();
        submitButton.disabled = true;
    });
});
