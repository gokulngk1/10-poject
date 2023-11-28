// const newYears = "2024-01-01";

// function countdown(){
//     // const newYears = "1 jan 2024";
//     const newYearsData = new Data(newYears);
//     const currentData = new Data();

//     const seconds =(newYearsData-currentData) /1000;

//     const days = Math.floor(seconds /3600 / 24);

//     console.log(days);


// }
// const daysE1 = document.getElementById('days');
// const hoursE1 = document.getElementById('hours');
// const minsE1 = document.getElementById('mins');
// const secoundE1 = document.getElementById('seconds');


// const newYears = "2024-01-01"; // Corrected date format to "YYYY-MM-DD"

// function countdown() {
//     const newYearsDate = new Date(newYears);
//     const currentDate = new Date();

//     const totalseconds = (newYearsDate - currentDate) / 1000;

//     const days = Math.floor(totalseconds/ 3600 / 24);
//     const hours = Math.floor(totalseconds / 3600 ) % 24;
//     const mins = Math.floor(totalseconds / 60 ) % 60;

//     const seconds =Math.floor(totalseconds) % 60;


//     daysE1.innerHTML = days;
//     hoursE1.innerHTML = hours;
//     minsE1.innerHTML = mins;
//     seconds.innerHTML = seconds;
 

// }

// countdown();
// setInterval(countdown, 1000);


const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const newYears = "2023-12-04"; // Corrected date format to "YYYY-MM-DD"

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = mins;
    secondsElement.innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);

