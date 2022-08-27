const email = document.getElementById("mail");

email.addEventListener('blur', (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

const form = document.getElementsByTagName('form')[1];
const otherEmail = document.getElementById("anothermail");
const emailError = document.querySelector('span.error');
otherEmail.addEventListener('input', handleInput);

form.addEventListener('submit', (event) => {
  // if the email field is valid, we let the form submit

  if (!otherEmail.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function handleInput(event) {
  console.log(event);
  if (otherEmail.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
}

function showError() {
  if (otherEmail.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (otherEmail.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (otherEmail.validity.tooShort) {
    emailError.textContent = `Email should be at least ${otherEmail.minLength} characters; you entered ${otherEmail.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}
