const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const email = document.getElementById('email').value;
    const
 
password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    
// Validate form
    if (!firstName) {
        alert('Please enter your first name');
        return;
    }

    if (!lastName) {
        alert('Please enter your last name');
        return;
    }

    if (!dateOfBirth) {
        alert('Please enter your date of birth');
        return;
    }

    if (!email) {
        alert('Please enter your email address');
        return;
    }

    if (!password) {
        alert('Please enter your password');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Submit form data
    // ...

    // Display success message
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Registration successful!';
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = 'bold';
    registrationForm.appendChild(successMessage);
});