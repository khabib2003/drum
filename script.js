for (let button of document.querySelectorAll("button")) {
    button.addEventListener("click", () => {
        soundFunction(button.innerHTML);
        buttonAnimation(button.innerHTML);
    })
}

var keySounds = document.addEventListener("keydown", function (event) {
    soundFunction(event.key);
    buttonAnimation(event.key);
})

var soundFunction = function (arg) {
    switch (arg) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(arg);
    }
}

var buttonAnimation = function (btn) {
    var currentBtn = document.querySelector(`.${btn}`);
    currentBtn.classList.add("pressed");
    setTimeout(() => currentBtn.classList.remove("pressed"), 100);
}
