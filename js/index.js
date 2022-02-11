const loginBtn = document.getElementById('login-btn');




document.getElementById('login-btn').addEventListener('click', function () {
  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');

  const emailValue = email.value
  const passwordValue = password.value

  if (emailValue === 'user1@mail.com' && passwordValue === '1234') {
    window.location.href = 'bank.html';
  }
  email.value = '';
  password.value = '';
});


