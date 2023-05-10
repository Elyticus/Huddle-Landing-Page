const freeButtonELement = document.querySelector(".started__btn");
const headerFlex = document.querySelector(".header__info");
const thankYouMessage = document.querySelector(".thank__message");

freeButtonELement.addEventListener("click", () => {
  headerFlex.classList.add("header__js");
  thankYouMessage.style.display = "block";
});

function emailValidation() {
  const inputElement = document.querySelector(".input__element");
  const displayError = document.querySelector(".thankyou__message");
  const thankYouMessage = document.querySelector(".display__error");
  const submitButton = document.querySelector(".submit__btn");

  const regex = /\S+@\S+\.\S+/; // Regular expression for email validation

  if (inputElement.value.trim() === "") {
    // inputElement.classList.add("redClass");
    displayError.textContent = "It looks like you forgot to add your email";
  } else if (!regex.test(inputElement.value)) {
    displayError.textContent = "Enter a valid emal address";
  } else {
    thankYouMessage.textContent = `Thank you for subscribing!`;
    inputElement.style.display = "none";
    submitButton.style.display = "none";
    displayError.style.display = "none";
  }
}

const submitButton = document.querySelector(".submit__btn");
submitButton.addEventListener("click", emailValidation);

// function appoimentValidation() {
//   const footerButton = document.querySelector(".footer__btn");
//   const inputAppoiment = document.querySelector(".input__appoiment");
//   const sectionElement = document.querySelector("section");

//   sectionElement.style.display = "none";
//   inputAppoiment.style.display = "block";
// }

// const appoimentButton = document.querySelector(".footer__btn");
// appoimentButton.addEventListener("click", appoimentValidation);
