document.addEventListener("DOMContentLoaded", function()
{
    let onLoadElement = document.getElementById("onload");

    onLoadElement.innerHTML = "<h1> I loaded because the DOM was fully rendered </h1>"
});

let directionElement = document.getElementById("direction");


/*Click Excercise*/
document.addEventListener("keydown", function (e)
{
    directionElement.innerText = `They key you pressed is ${e.keycode}`
});

document.addEventListener("click", function(e)
{
    let clickMeElement = document.getElementById("clickMe");

    clickMeElement.innerText = "You clicked me!"
});


/*Random Color Excercise*/
function randomColorGenerator() 
{
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
};

function setColor()
{
    return document.body.style.backgroundColor = randomColorGenerator()
};

const RANDOMCOLORS = document.getElementById("randomColorBtn")
RANDOMCOLORS.addEventListener("click", setColor)

/*classList Toggle Excercise*/
function changeBtnStyle() {
    const btn = document.querySelector(".button");
    btn.classList.add("cool-btn");
    btn.classList.toggle("glow"); 
}   

/*Dark Mode Excercise*/
function switchMode()
{
    const btn = document.querySelector("#lightSwitch");
    if (btn.classList.contains("light"))
    {
        const btn = document.querySelector(".light");
        btn.classList.add("dark");
        btn.classList.toggle("light");
        document.getElementById("lightSwitch").innerText = "Light Mode";
        document.body.style.backgroundColor = "black";
    }
    else 
    {
        const btn = document.querySelector(".dark");
        btn.classList.toggle("dark");
        btn.classList.toggle("light");
        document.getElementById("lightSwitch").innerText = "Dark Mode";
        document.body.style.backgroundColor = "white";
    }
};