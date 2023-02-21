const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('input[name="email"]');
const passwordInputEl = document.querySelector('input[name="password"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (emailInputEl.value == '' || passwordInputEl.value == '') {
    alert('Всі поля мають бути заповнені');
    return;
  }

  console.log({
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  });
  event.currentTarget.reset();
}
