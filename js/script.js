const div = document.querySelector('div');

const buttonOne = document.querySelector('#link-img-1');
const buttonTwo = document.querySelector('#link-img-2');

buttonOne.addEventListener("click", (e) => {
  buttonTwo.click();
});

buttonTwo.addEventListener("click", (e) => {
  buttonTwo.style.backgroundColor = "green";
});