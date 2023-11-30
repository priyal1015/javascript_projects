const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
console.log("hourEl", hourEl)

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    console.log("time", time, month, day, date, hours);

    const hoursForClock = hours >=13 ? hours - 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    const ampm = hours>=12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;



    
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

}

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return(num-in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


setTime()