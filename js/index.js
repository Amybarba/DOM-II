// Your code goes here

const button = document.querySelector('body');

button.addEventListener('click', function() {
window.scrollTo(0, 1000);
console.log('WOW')
});
// 1  button to jump around sight upon click - Click

const funBusHtPnk = document.querySelector('.intro');

funBusHtPnk.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'hotpink';
});
// 2 Turn fun bus background Pink - Mouseenter

const conDest = document.querySelector('.content-destination');

conDest.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'limegreen';
}); 
// 3 Turn boat picture background lime green - Mouseenter

const logClick = document.querySelector('body');

window.addEventListener('keypress', function(event) {
console.log(event);
console.log('keys pressed')
});
// / 4 Log when keys are pressed on the page - Keypress

const foot = document.querySelector('.footer');

foot.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'purple';
}); 
// 5 Turn footer background purple - Mouseover

const funBusName = document.querySelector('.container.home');

funBusName.addEventListener('wheel', function (event) {
    event.stopPropagation();
    alert ( 'Yellow Submarine');
});
// 6 Name the bus - Alert

const signUp = document.querySelectorAll('.btn');

signUp[0].addEventListener('click',  event => {
    signUp[0].style.color = 'yellow';
    signUp[0].style.backgroundColor = 'blue';
    signUp[1].style.color = 'limegreen';
    signUp[1].style.backgroundColor = 'hotpink';
    signUp[2].style.color = 'lightblue';
    signUp[2].style.backgroundColor = 'lightpink';
}); 
// 7 Turn button background blue, text yellow - Click/Nested - Thank You Tyree

const funBusNameSwitch = document.querySelector('.logo-heading');

funBusNameSwitch.addEventListener('dblclick', function (event) {
funBusNameSwitch.textContent =
  'Yellow Submarine';
});
// // 8 Name the bus with a - Dblclick

const coffeeDrag = document.querySelector('.img-content');

coffeeDrag.addEventListener('drag', function(event) {
    event.stopPropagation();
    console.log('Grab that coffee!!!');
});
// 9 Drag picture - Drag

const loadPage = document.querySelector('body');

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});
// 10 message appears when - load

const Adventure = document.querySelectorAll('.text-content');

for (let i = 0; i < Adventure.length; i++) {
    Adventure[i].addEventListener('click', function (event) {
        event.preventDefault();
        alert(`Welcome`);
    });
}

// 11 message appears using Click/preventDefault



// Codes that failed:

// languagechange
// const lang = document.querySelector('.main-navigation');

// window.addEventListener('languagechange', function() {
//     console.log('languagechange event detected!'); 
//   });

// TimeStamp
// const time = document.querySelector('.container .home');

// time.addEventListener('click', function (event) {
// window.timeStamp();
// console.log(event.timeStamp);
// });
// W3 html solution
// function myFunction(event) {
//     var n = event.timeStamp;
//     document.getElementById("demo").innerHTML = n;
