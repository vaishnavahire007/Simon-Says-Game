let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let color = ["red", "yellow", "green", "blue"];  

document.addEventListener("keypress", function (){
    if ( started == false){
        console.log("Game Is Started");
        started = true;
        levelUp();
    }
});

function gameFlash(color) {
    color.classList.add("flash");
    setTimeout(function (){
        color.classList.remove("flash");
    }, 250);
}

function userFlash(color) {
    color.classList.add("userflash");
    setTimeout(function (){
        color.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = color[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameFlash(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
 
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `game is over!, <b>Your Score is ${level}</b> </br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        restart();
    }
}

function btnPress() {
    console.log(this)
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function restart() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}