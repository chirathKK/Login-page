

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Check credentials (this is a basic example, not secure)
  if(username === 'user' && password === 'password') {
    document.getElementById('loginMessage').textContent = 'Login successful!';
    // Redirect or perform other actions on successful login
  } else {
    document.getElementById('loginMessage').textContent = 'Invalid username or password';
  }
});
