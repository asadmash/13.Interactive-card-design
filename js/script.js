const nameEl = document.querySelector("#name");
const numberEl = document.querySelector("#number");
const monthExpEl = document.querySelector("#month");
const yearExpEl = document.querySelector("#year");
const cvcEl = document.querySelector("#cvc");
const nameErrEl = document.querySelector("#name-err");
const formEl = document.querySelector("#signup");
const regex = new RegExp(/[^0-9]/, "g");

// Reusable utility functions
const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, max, min) =>
  length < min || length > max ? false : true;

// Function for show error
const showErr = (input, message) => {
  // Get the form field element
  const formField = input.parentElement;
  // Add error class
  formField.classList.remove("success");
  formField.classList.add("error");
  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

// Function for show success
const showSuccess = (input, message) => {
  // Get the form field
  const formField = input.parentElement;
  // Add success class
  formField.classList.remove("error");
  formField.classList.add("success");
  // Hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

// const checkUsername = () => {
//   let valid = false;
//   const min = 3,
//     max = 25;
//   const username = nameEl.value.trim();
//   if (!isRequired(username)) {
//     console.log(nameEl);
//     showErr(nameEl, "Username can not ber blank");
//   } else if (isBetween(username.length, max, min)) {
//     showErr(nameEl, `username must be between {min} and {max character.}`);
//   }
// };

// formEl.addEventListener("keyup", formChecker);
nameEl.addEventListener("keyup", checkUsername);
numberEl.addEventListener("keyup", checkCardNum);
monthExpEl.addEventListener("keyup", checkMonthExp);
yearExpEl.addEventListener("keyup", checkYearExp);

// Functions for input actions

function checkUsername() {
  let valid = false;
  const min = 3,
    max = 25;
  const username = nameEl.value.trim();

  if (!isRequired(username)) {
    showErr(nameEl, "Username can not be blank");
  } else if (!isBetween(username.length, max, min)) {
    showErr(nameEl, `username must be between ${min} and ${max}  character.`);
  } else {
    showSuccess(nameEl);
    valid = true;
  }
}

function checkCardNum() {
  let valid = false;
  const min = 8,
    max = 25;
  const cardnum = numberEl.value.trim();

  if (!isRequired(cardnum)) {
    showErr(numberEl, "Card number can not be blank!");
  } else if (isNaN(cardnum)) {
    showErr(numberEl, "Numbers only.");
  } else if (!isBetween(cardnum.length, max, min)) {
    showErr(numberEl, `password must be between ${min} to ${max} character.`);
  } else {
    showSuccess(numberEl);
    valid = true;
  }
}

function checkMonthExp() {
  let valid = false;
  const min = 1,
    max = 12;

  const month = monthExpEl.value.trim();
  console.log("🛠️ ← month", month);

  if (!isRequired(month)) {
    showErr(monthExpEl, "please enter a month");
  } else if (isNaN(month)) {
    showErr(monthExpEl, "Numbers only.");
  } else if (!isBetween(month, max, min)) {
    showErr(monthExpEl, `Month number must be between ${min} to ${max}`);
  } else {
    showSuccess(monthExpEl);
    valid = true;
  }
}

function checkYearExp() {
  let valid = false;
  const min = 2015,
    max = 2022;
  const year = yearExpEl.value.trim();
  if (!isRequired(year)) {
    showErr(yearExpEl, "please enter a year");
  } else if (isNaN(year)) {
    showErr(yearExpEl, "Numbers only.");
  } else if (!isBetween(year, max, min)) {
    showErr(yearExpEl, `Year number must be between ${min} to ${max}`);
  } else {
    showSuccess(yearExpEl);
    valid = true;
  }
}

function checkCvc() {
  let valid = false;
}
