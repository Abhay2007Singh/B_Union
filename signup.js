// signup.js

document.getElementById('send-otp').addEventListener('click', function() {
    const janaadhar = document.getElementById('janaadhar').value;

    // Simulate sending OTP (in a real application, you would send a request to your backend)
    if (janaadhar) {
        alert('OTP sent to your registered mobile number.');
        document.getElementById('otp-label').style.display = 'block';
        document.getElementById('otp').style.display = 'block';
        document.getElementById('verify-otp').style.display = 'block';
    } else {
        alert('Please enter a valid Janaadhar number.');
    }
});

document.getElementById('verify-otp').addEventListener('click', function() {
    const otp = document.getElementById('otp').value;

    // Simulate OTP verification (in a real application, you would verify the OTP with your backend)
    if (otp === '123456') { // Simulated OTP for demonstration
        alert('OTP verified successfully!');
        document.getElementById('password-section').style.display = 'block';
        document.getElementById('verify-otp').style.display = 'none';
        document.getElementById('otp-label').style.display = 'none';
        document.getElementById('otp').style.display = 'none';
    } else {
        alert('Invalid OTP. Please try again);