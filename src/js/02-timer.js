import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes:document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]')
}

let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userDate = selectedDates[0].getTime();
     if(userDate < new Date()){
       Notiflix.Report.warning('WARNING', "Please choose a date in the future", 'return to date selection');
      refs.startBtn.disabled = 'disabled';
    } else {
        refs.startBtn.removeAttribute('disabled');
        }
  },
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(refs.input, options)

function onStartClick() {
const timerId = setInterval(function () {
  let currentTime = Date.now();
  let selectedTime = userDate;
  let timeDifference = selectedTime - currentTime;
  console.log(timeDifference)
  const time =  convertMs(timeDifference);
  updateTime(time);
  console.log(time)

  if (timeDifference <= 1000) {
    clearInterval(timerId);
    console.log('время кончилось')
  }
}, 1000)
}
function updateTime({days,hours,minutes,seconds}){
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent  = seconds;

}
refs.startBtn.addEventListener('click', onStartClick)









