const login = document.querySelector('#login');
const password = document.querySelector('#password');
const buttonNav = document.querySelector('#button-nav');
const checkBox = document.getElementById('agreement');
const submitButton = document.querySelector('#submit-btn');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const form = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputSurname = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const familyValue = document.querySelectorAll('.familyValue');
const rateValue = document.querySelectorAll('.rate');
const subjectValue = document.querySelectorAll('.subject');

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

textArea.addEventListener('keyup', () => {
  const size = 500 - textArea.value.length;
  counter.innerHTML = size;
});

function validateSubject() {
  let list = '';
  for (let index = 0; index < subjectValue.length; index += 1) {
    if (subjectValue[index].checked) {
      list += `${subjectValue[index].value}, `;
    }
  }
  return list;
}

function validateRate() {
  for (let index = 0; index < rateValue.length; index += 1) {
    if (rateValue[index].checked) {
      return rateValue[index].value;
    }
  }
}

function validateFamily() {
  for (let index = 0; index < familyValue.length; index += 1) {
    if (familyValue[index].checked) {
      return familyValue[index].value;
    }
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.innerHTML = `<p>Nome: ${inputName.value} ${inputSurname.value}</p>`;
  form.innerHTML += `<p>Email: ${inputEmail.value}</p>`;
  form.innerHTML += `<p>Casa: ${house.value}</p>`;
  form.innerHTML += `<p>Família: ${validateFamily()}</p>`;
  form.innerHTML += `<p>Matérias: ${validateSubject()} </p>`;
  form.innerHTML += `<p>Avaliação: ${validateRate()} </p>`;
  form.innerHTML += `<p>Observações: ${textArea.value} </p>`;
});
