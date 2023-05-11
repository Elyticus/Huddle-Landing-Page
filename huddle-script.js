const freeButtonELement = document.querySelector(".started__btn");
const headerFlex = document.querySelector(".header__info");
const thankYouMessage = document.querySelector(".thank__message");

freeButtonELement.addEventListener("click", () => {
  headerFlex.classList.add("header__js");
  thankYouMessage.style.display = "block";
  freeButtonELement.classList.remove("started__btn");
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

// const fahrenheitToCelsius = () => {
//   let fahrenheit = 129;
//   let celsius = Math.floor(((fahrenheit - 32) * 5) / 9);

//   return celsius;
// };

// console.log(fahrenheitToCelsius());

// const reverseString = (string) => {
//   return string.split("").reverse().join(" ");
// };

// console.log(reverseString("string"));

// const calculateRectangleArea = (width, height) => {
//   return width * height;
// };

// console.log(calculateRectangleArea(20, 70));

// const isEven = (n) => {
//   return n % 2 === 0;
// };

// console.log(isEven(7));

// const sumOfDigits = (n) => {
//   if (n < 0) n = -n;
//   let result = 0;

//   while (n > 0) {
//     result += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return result;
// };

// console.log(sumOfDigits(23));

// function findLongestWord(str) {
//   var longestWord = str.split(" ").sort(function (a, b) {
//     return b.length - a.length;
//   });
//   return longestWord[0].length;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
