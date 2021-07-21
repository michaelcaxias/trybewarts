const login = document.querySelector('#login');
const password = document.querySelector('#password');
const buttonNav = document.querySelector('#button-nav');
const checkBox = document.getElementById('agreement');
const submitButton = document.querySelector('#submit-btn');

buttonNav.addEventListener('click', (event) => {
  event.preventDefault();
  if (login.value !== 'tryber@teste.com' && password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.disabled = true;
  }
});
