var timer = 10;

// to start the game

function startGame(){
makebubble();
getNewHit();
runtime();
}
startGame()

// to generate clutter of bubbles

function makebubble() {
  var bbls = "";
  for (var i = 1; i <= 114; i++) {
    var rn = Math.floor(Math.random() * 10);
    bbls += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = bbls;
}

// to get a new hit
var hit;
function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitid").textContent = hit;
}

// when the hit is correct 
document.querySelector(".pbtm").addEventListener("click", function (e) {
  var hitnum = Number(e.target.textContent);
  if (hitnum === hit) {
    incScore();
    makebubble();
    getNewHit();
  }
});

// to increase score

var scr = 0;
function incScore() {
  scr += 10;
  document.querySelector("#scrid").textContent = scr;
}

// to run time

function runtime() {

  timeint = setInterval(function () {
   if (timer > 0) {
     timer--;
     document.querySelector("#timeid").textContent = timer;
   } else {
     clearInterval(timeint);
     document.querySelector(".pbtm").innerHTML = `<h1>Game Over!</h1>
     <button class="btn">Restart</button>`;
     restart()
   }
 }, 1000);
}

// to add pause button
var timeint;
function pause(){
  // console.log("paused");
  clearInterval(timeint)
}
function resume(){
  runtime();
  
}
document.getElementById('pause_btn').addEventListener('click',function(){
  if(timeint){
    pause();
    document.getElementById('pause_btn').textContent=  'Resume';
  }else{
    resume();
    document.getElementById('pause_btn').textContent= 'Pause';
  }
})


// to restart the game
function restart() {
  var restartbtn = document.querySelector(".btn");
  restartbtn.addEventListener('click',function(e){
      timer = 10
      scr=0
      document.querySelector("#timeid").textContent = timer;
      document.querySelector("#scrid").textContent = scr;

    makebubble()
    getNewHit()
    runtime()
  })
}
// to change the mode
var changingMode;
document.getElementById('mode').addEventListener('click', function() {
  changingMode = document.body.classList.toggle('dark-mode');
    if(changingMode){
    document.getElementById('mode').textContent = "Light"
  }
  else{
    document.getElementById('mode').textContent = "Dark"
  }
});

