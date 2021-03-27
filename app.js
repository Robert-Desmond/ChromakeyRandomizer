const colors = ["aqua", "teal", "navy", "olive", "lime", "fuchsia", "purple", "maroon", "white", "gray", "silver", "black", "green", "red", "blue", "yellow"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number from color index

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}