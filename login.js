function validateForm(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // You can add more complex validation logic here, e.g., checking the strength of the password, etc.
  
    // If both fields are not empty, you can proceed with sending the data to the server or any other actions.
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
    } else {
      alert('Login successful!');  // Replace with your actual login logic
    }
    window.location.href = 'home.html';
  }
  