const selector = document.getElementsByClassName("main-content");
const meleeForm = document.querySelector('form');
const character = document.querySelector('#character');
const color = document.querySelector('#color');
console.log('Client side javascript file is loaded!')

meleeForm.addEventListener('submit',(e) => {
    // e.preventDefault();
    submitContent();
})
    function submitContent() {
    const messageOne = document.getElementsByName("color").value;
    document.getElementById("message-1").innerHTML = messageOne;

    const messageTwo = document.getElementsByName("character").value;
    document.getElementById("message-2").innerHTML = messageTwo;

    console.log(messageOne);
    console.log(messageTwo);
    const iconPath = 'stock-icons/' + messageOne + ' ' + messageTwo + '.png';
    console.log(iconPath);
}