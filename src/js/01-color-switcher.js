const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');
let changeColor = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.addEventListener("click", () => {

  changeColor = setInterval(() => {

    bodyRef.style.backgroundColor =  getRandomHexColor()
  }, 1000);
   startBtn.disabled = 'disabled';
});

stopBtn.addEventListener("click", () => {
  clearInterval(changeColor);
  console.log(`Interval has stopped!`);
  startBtn.disabled = false;
});

