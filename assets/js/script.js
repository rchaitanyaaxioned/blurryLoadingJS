//var declaration for background image
var bgImg = document.querySelector(".background-img");
var count = document.querySelector(".percentage");

//var declaration for percentage counter
let counts = setInterval(updated);
let upto = 0;

//funcation for percentage counter
function updated() {
    count.innerHTML = ++upto + "%";
    if (upto === 100) {
        clearInterval(counts);
    }
}

//function for percentage counter opacity
var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 200);
    document.querySelector(".background-img").classList.add("blur-out");
}

function show() {
    var body = document.getElementsByClassName("percentage");
    opacity = Number(window.getComputedStyle(body)
        .getPropertyValue("opacity"));
    if (opacity == 1) {
        opacity = opacity - 1;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}


























