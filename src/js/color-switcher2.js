
class ColorSwitcher {
  constructor(selector,size,delay) {
    this.container = document.querySelector(selector);
    this.startBtn = this.container.querySelector('button[data-start]');
    this.stopBtn = this.container.querySelector('button[data-stop]');
    this.areaRef = this.container.querySelector('.area');
    this.areaRef.style.width= size + 'px';
    this.areaRef.style.height= size + 'px';
    this.delay = delay;
    this.startBtn.addEventListener('click', this.changeColor);
    this.stopBtn.addEventListener('click', this.stopChangeColor.bind(this));
    this.intervalId = null;
  }
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  changeColor = () => {
     this.intervalId  = setInterval(() => {
      this.areaRef.style.backgroundColor = this.getRandomHexColor()
    }, this.delay)
      this.startBtn.disabled = true;
  }
  stopChangeColor() {
    console.log(this)
    clearInterval(this.intervalId);
    this.startBtn.disabled = false;
  }
}

new ColorSwitcher('.container', 200, 500)
new ColorSwitcher('.container2', 400, 1500)
