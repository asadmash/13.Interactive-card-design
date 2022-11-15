const name = document.querySelector("#name").value;
const number = document.querySelector("#number");
const exp = document.querySelector("#exp");
const cvc = document.querySelector("#cvc");

name.addEventListener("change", valueChecker)

function valueChecker() {
  if (typeof name === 'string') {
    console.log('value is string');
  } else {
    console.log('not a string value');
  }
}
