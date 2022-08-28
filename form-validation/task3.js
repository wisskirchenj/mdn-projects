const email = document.getElementById("mail");
const errorLabel = document.querySelector("span.error");
email.addEventListener('input', handleInput);

function handleInput() {
  if (email.validity.valid) {
    errorLabel.textContent = "";
    return;
  }
  if (email.validity.valueMissing) {
    errorLabel.textContent = "Please fill in your email!";
  } else if (email.validity.typeMismatch) {
    errorLabel.textContent = "The email entered is not valid!";
  } else if (email.validity.tooShort) {
    errorLabel.textContent = `Email address needs at least 10 chars; yours
    has ${email.value.length}`;
  }
}