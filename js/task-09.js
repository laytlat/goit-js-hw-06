function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', buttonColorChanger);

function buttonColorChanger() {
  document.body.style.backgroundColor = getRandomHexColor();
}
