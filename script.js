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
const rateValue = document.querySelectorAll('.rate-input');
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
  const list = [];
  for (let index = 0; index < subjectValue.length; index += 1) {
    if (subjectValue[index].checked) {
      list.push(` ${subjectValue[index].value}`);
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
  return 'Sem avaliação';
}

function validateFamily() {
  for (let index = 0; index < familyValue.length; index += 1) {
    if (familyValue[index].checked) {
      return familyValue[index].value;
    }
  }
  return 'Sem família';
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const section = document.createElement('section');
  section.id = 'infos';
  form.innerHTML = '';
  form.appendChild(section);
  section.innerHTML = `<h1>Olá, ${inputName.value} ${inputSurname.value}</h1>`;
  section.innerHTML += `<p><strong>Nome:</strong> ${inputName.value} ${inputSurname.value}</p>`;
  section.innerHTML += `<p><strong>Email:</strong> ${inputEmail.value}</p>`;
  section.innerHTML += `<p><strong>Casa:</strong> ${house.value}</p>`;
  section.innerHTML += `<p><strong>Família:</strong> ${validateFamily()}</p>`;
  section.innerHTML += `<p><strong>Matérias:</strong> ${validateSubject()} </p>`;
  section.innerHTML += `<p><strong>Avaliação:</strong> ${validateRate()} </p>`;
  section.innerHTML += `<p><strong>Observações:</strong> ${textArea.value} </p>`;
});
