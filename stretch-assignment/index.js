const colorBox = document.querySelectorAll('.blocks div');
function moveBox() {
    colorBox.forEach((move) => {
move.style.order = '2';
    });
}
colorBox.forEach((move) => {
move.addEventListener('click', (item) => {
moveBox();
move.style.order -= '1';
});
});
moveBox();
let count = 0;
function boxMoving() {
    count += 40;
    testBox.style.marginLeft = `${count}px`;
}
testBox.addEventListener('mouseup', (item) =>{
    setInterval(boxMoving,500) 
});
