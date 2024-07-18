const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const token = data.token;
          localStorage.setItem('token', token);
          alert('Logged in successfully!');
        } else {
          alert('Login failed. Please try again.');
        }
      })
      .catch((err) => console.error(err));
  } else {
    alert('Please fill in all fields!');
  }
});