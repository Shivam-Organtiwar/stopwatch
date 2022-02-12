//declaring the required variables & importing buttons 
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let getSec = document.querySelector('.sec');
let getMilliSec = document.querySelector('.millisec');
let getMin = document.querySelector('.min');
let getStart = document.querySelector('.start');
let getStop = document.querySelector('.stop');
let getReset = document.querySelector('.reset');
let interval;

//handling event listener
getStart.addEventListener('click', () => {
    clearInterval(interval);
    inverval = setInterval(startTimer, 10);
})
getStop.addEventListener('click', () => {
    clearInterval(inverval);
})
getReset.addEventListener('click', () => {
    clearInterval(inverval);
    milliSeconds = '00';
    seconds = '00';
    minutes = '00';
    getSec.innerHTML = seconds;
    getMilliSec.innerHTML = milliSeconds;
    getMin.innerHTML = minutes;
})


function startTimer(){
    milliSeconds++;
    if(milliSeconds <= 9){
        getMilliSec.innerHTML = '0' + milliSeconds;
    }
    if(milliSeconds > 9){
        getMilliSec.innerHTML = milliSeconds;
    }
    if(milliSeconds > 99){
        seconds++;
        getSec.innerHTML = '0' + seconds;
        milliSeconds = 0;
        getMilliSec.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSec.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMin.innerHTML = '0' + minutes;
        seconds = 0;
        getSec.innerHTML = '0' + 0;
    }
    if(minutes > 9){
        getSec.innerHTML = minutes;
    }
}
