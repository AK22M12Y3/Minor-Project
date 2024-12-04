document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneCode = document.getElementById('phoneCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (firstName && lastName && email && phoneNumber) {
        alert(`Thank you, ${firstName}! Your signup details are submitted.`);
    } else {
        alert('Please fill all the fields.');
    }
});

<button type="button" class="submit-btn" onclick="window.location.href='home.html';">Let's Go</button>
