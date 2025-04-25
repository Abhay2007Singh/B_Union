// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const userType = document.getElementById('user-type').value;
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login process (in a real application, you would send this data to your backend)
    if (userType && name && username && password) {
        console.log('Login attempt:', { userType, name, username, password });
        alert('Login successful!'); // Simulate successful login
        // Redirect to the appropriate dashboard based on user type
        // window.location.href = userType === 'labor' ? 'labor-dashboard.html' : 'contractor-dashboard.html';
    } else {
        alert('Please fill in all fields.');
    }
});