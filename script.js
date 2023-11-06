//Intersection Observer
const pages = document.querySelectorAll('.page');
const navLink = document.querySelectorAll('.nav-link');

const options = {
    rootMargin: '0px',
    threshold: 0.7
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const currentPage = entry.target.classList[1];
            navLink.forEach(link => {
                link.style.fontSize = '5rem';
            });
            const currentLink = document.querySelector(`.${currentPage}-link`);
            currentLink.style.fontSize = '8rem';
        }
    });
}, options);

pages.forEach(page => {
    observer.observe(page);
});

//clock page
const clock = document.querySelector('.clock');
const h1 = document.createElement('h1');
clock.appendChild(h1);
var hour;
var minute;
var second;
var ampm;

const time = () => {
    const date = new Date();
    //hour formatting
    if (date.getHours() === 0){
        hour = 12;
    } else if(date.getHours() > 12){
        hour = date.getHours() - 12;
    }

    //minutes formatting
    if (date.getMinutes().toString().length == 1){
        minute = `0${date.getMinutes()}`;
    } else{
        minute = date.getMinutes();
    }

    //seconds formatting
    if (date.getSeconds().toString().length == 1){
        second = `0${date.getSeconds()}`;
    } else{
        second = date.getSeconds();
    }

    //am/pm formatting
    if(date.getHours() > 12){
        ampm = "PM";
    } else{
        ampm = "AM";
    }

    h1.innerText = `${hour} : ${minute} : ${second} ${ampm}`;
}

setInterval(time, 1000);

//stopwatch page
const stopwatchNumber = document.querySelector('#stopwatch-number');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

var paused = true;
var currentTime;
var elapsedTime = 0;

const counting = () => {
    if(!paused){
        var counter = elapsedTime + (new Date()).getTime() - currentTime.getTime();
        stopwatchNumber.innerHTML = `${Math.floor(counter / 1000)}s ${counter % 1000}`;
    }
};

start.addEventListener(('click'), (e) => {
    e.preventDefault();
    paused = !paused;
    if (!paused){ 
        start.innerHTML = "Stop";
        currentTime = new Date();
        const starting = setInterval(counting, 100);
    } else{ 
        start.innerHTML = "Resume";
        elapsedTime += (new Date()).getTime() - currentTime.getTime(); 
    }
})

reset.addEventListener(('click'), (e) => {
    e.preventDefault();
    stopwatchNumber.innerHTML = '0s 000';
    paused = true;
    start.innerHTML = "Start";
    elapsedTime = 0;
})

//timer page

const minutesInput = document.querySelector('.minutes-input');
const secondsInput = document.querySelector('.seconds-input');
const minutesCounter = document.querySelector('#minutes-counter');
const secondsCounter = document.querySelector('#seconds-counter');
const form = document.querySelector('form');

form.addEventListener(('submit'), (e) => {
    e.preventDefault();
});