var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i = 1; i <= 152; i++){
    var rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            //this line is for the timer runs at backend but it wont show, that means it will occoupy memory, so prevent the memeory to be used , this line is used....
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!!`;
        }
    },1000)
}

//adding listener
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();
