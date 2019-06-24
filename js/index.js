// Your code goes here

const button = document.querySelector('body');

button.addEventListener('click', function() {
window.scrollTo(0, 1000);
console.log('WOW')
});
// 1  button to jump around sight upon click

// failed code
// const time = document.querySelector('container home');

// time.addEventListener('click', function (event) {
// time = event.timeStamp;
// console.log(event.timeStamp);
// });

// W3 html solution
// function myFunction(event) {
//     var n = event.timeStamp;
//     document.getElementById("demo").innerHTML = n;

const funBusHtPnk = document.querySelector('.intro');

funBusHtPnk.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'hotpink';
});
// 2 Turn fun bus background Pink

const conDest = document.querySelector('.content-destination');

conDest.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'limegreen';
}); 
// 3 Turn boat picture background lime green

// failed code
// const logClick = document.querySelector('body');

// logClick.addEventListener('keypress', function(event) {
// console.log(event);
// console.log('button clicked')
//     // console.log(event.target.value);
//     // const capturedInput = event.target.value;
//     // button.textContent = capturedInput;
// });

const foot = document.querySelector('.footer');

foot.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'purple';
}); 
// 4 Turn footer background purple

const funBusName = document.querySelector('.container.home');

funBusName.addEventListener('wheel', function (event) {
    event.stopPropagation();
    alert ( 'Yellow Submarine');
});
// 5 Name the bus







