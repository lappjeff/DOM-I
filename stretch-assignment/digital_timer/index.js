//DOM elements

let msTens = document.getElementById('msTens')
let msHundreds = document.getElementById('msHundreds')
let secondOnes = document.getElementById('secondOnes')
let secondTens = document.getElementById('secondTens')
let digits = document.querySelectorAll('.digit')
let timerVar = setInterval(timer, 10)
let totalMS = 0;
let totalSec = 0;

function timer () {
    //logs
    if (totalSec < 10) {
        totalMS += 10;
        if (totalMS === 1000) {
            totalMS = 0;
            totalSec += 1;
        }
        console.log(totalMS)
        console.log(totalSec)
    }
}
//  Attempt 1
// function timer () {
//     totalSeconds = totalSeconds + 10;
//
//     if (totalSeconds <= 10) {
//         msTens.textContent = totalSeconds;
//         msHundreds
//     } else if ( totalSeconds <= 1000) {
//         msHundreds.textContent = totalSeconds;
//
//         msTens.style.display = 'none';
//     } else if (totalSeconds < 10000) {
//         secondOnes.textContent = Math.floor(totalSeconds / 1000);
//         secondTens.style.display = 'none';
//     } else if (totalSeconds === 10000) {
//         secondTens.textContent = Math.floor(totalSeconds / 1000)
//         secondOnes.style.display = 'none';
//         secondTens.style.display = 'inline-block';
//         secondOnes.style.color = 'none';
//
//     }
//
// }
