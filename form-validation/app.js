//----- 1st Form ------- just custom text but HTML standard validation
const email = document.getElementById("mail");

email.addEventListener('input', (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

//----- 2nd Form ------- stronger customized (novalidated) but with Constraint Validation API
const form = document.getElementsByTagName('form')[1];
const otherEmail = document.getElementById("anothermail");
const emailError = document.querySelector('span.error');

otherEmail.addEventListener('blur', handleBlur);
otherEmail.addEventListener('focus', handleFocus);

form.addEventListener('submit', (event) => {
  if (!otherEmail.validity.valid) {
    showError();
    // prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function handleBlur(event) {
  if (!otherEmail.validity.valid) {
    showError();
  }
}

function handleFocus(event) {
  // on focus we always remove the error message. invalid frame still active
  emailError.textContent = '';
}

function showError() {
  if (otherEmail.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (otherEmail.validity.typeMismatch) {
    emailError.textContent = 'Invalid e-mail format.';
  } else if (otherEmail.validity.tooShort) {
    emailError.textContent = `E-mail needs at least ${otherEmail.minLength} characters; you entered ${otherEmail.value.length}.`;
  }
}
