document.addEventListener("DOMContentLoaded", function()
{
    let onLoadElement = document.getElementById("onload");

    onLoadElement.innerHTML = "<h1> I loaded becasue the DOM was fully rendered </h1>"
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