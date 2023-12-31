import _ from 'lodash';

const email = document.querySelector('input[name="email"');
const message = document.querySelector('textarea[name="message"');
const submit = document.querySelector('button[type="submit"');
const json = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  const ffs = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = ffs.email;
  message.value = ffs.message;
}

email.addEventListener(
  'input',
  _.throttle(e => {
    if (!localStorage.getItem('feedback-form-state')) {
      localStorage.setItem('feedback-form-state', JSON.stringify(json));
    }
    let inputEmail = e.target.value;
    let actualValue = JSON.parse(localStorage.getItem('feedback-form-state'));
    actualValue.email = inputEmail;
    localStorage.setItem('feedback-form-state', JSON.stringify(actualValue));
  }, 500)
);

message.addEventListener(
  'input',
  _.throttle(e => {
    if (!localStorage.getItem('feedback-form-state')) {
      localStorage.setItem('feedback-form-state', JSON.stringify(json));
    }
    let inputMessage = e.target.value;
    let actualValue = JSON.parse(localStorage.getItem('feedback-form-state'));
    actualValue.message = inputMessage;
    localStorage.setItem('feedback-form-state', JSON.stringify(actualValue));
  }, 500)
);

submit.addEventListener('click', e => {
  e.preventDefault();
  const checkEmail = JSON.parse(localStorage.getItem('feedback-form-state'));
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (checkEmail !== null && checkEmail.email.match(validRegex)) {
    if (checkEmail.message === '') {
      alert(`Message can't be empty!`);
    } else {
      console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
      localStorage.clear();
      email.value = '';
      message.value = '';
    }
  } else {
    alert('Invalid email address!');
  }
});
