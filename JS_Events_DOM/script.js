document.addEventListener("DOMContentLoaded", function()
{
    let onLoadElement = document.getElementById("onload");

    onLoadElement.innerHTML = "<h1> I loaded because the DOM was fully rendered </h1>"
});

let directionElement = document.getElementById("direction");

document.addEventListener("keydown", function (e)
{
    directionElement.innerText = `They key you pressed is ${e.keycode}`
});

document.addEventListener("click", function(e)
{
    let clickMeElement = document.getElementById("clickMe");

    clickMeElement.innerText = "You clicked me!"
});

function randomColorGenerator() 
{
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
};

function setColor()
{
    return document.body.style.backgroundColor = randomColorGenerator()
}

const RANDOMCOLORS = document.getElementById("randomColorBtn")

RANDOMCOLORS.addEventListener("click", setColor)