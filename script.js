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
const time = () => {
    const date = new Date();
    h1.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

setInterval(time, 1000);

//stopwatch page
const minutesStopwatch = document.querySelector('#minutes-stopwatch');
const secondsStopwatch = document.querySelector('#seconds-stopwatch');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
var int;

start.addEventListener(('click'), () => {
    var minutes = "00";
    var seconds= "00";
    
    const callback = () => {
        seconds++;

        if(seconds < 10){
            seconds = '0' + seconds;
        }

        if (seconds > 59){
            seconds = 0;
            minutes++;
        }

        if (minutes < 10 && seconds === 0){
            minutes = '0' + minutes;
            seconds = "00";
        }

        minutesStopwatch.innerText = minutes;
        secondsStopwatch.innerText = seconds;

    }
    const counter = setInterval(callback, 1000);
    start.disabled = true;

    //NOT SURE WHY THE STOP VARIABLE IS NOT EXISTING HUHHHHHHHH

    reset.addEventListener(('click'), () => {
        clearInterval(counter);
        var minutes = "00";
        var seconds = "00";
        minutesStopwatch.innerText = minutes;
        secondsStopwatch.innerText = seconds;
        start.disabled = false; 
    });
});

//timer page

const minutesInput = document.querySelector('.minutes-input');
const secondsInput = document.querySelector('.seconds-input');
const minutesCounter = document.querySelector('#minutes-counter');
const secondsCounter = document.querySelector('#seconds-counter');
const form = document.querySelector('form');

form.addEventListener(('submit'), (e) => {
    e.preventDefault();

});