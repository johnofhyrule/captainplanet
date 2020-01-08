// -------- Core Modules -------- //

// -------- Third Party Libraries -------- //

// -------- Sanity Check -------- //
console.log("This is the way");

// -------- Constants (variables) -------- //

// -------- Event Listners -------- //
$('#startSorting').on('click',() => {
    console.log('Game Start');
    setUpRound();
    setTimer();
});

// -------- Game Logic -------- //
let score = 0;
let time = 0;
let round = 1;

// -------- Hide Title and Buttons -------- //
const gameStart = document.getElementById("startSorting");
    gameStart.style.display = "block";
    gameStart.addEventListener("click", hideBanner);

function hideBanner() {
    var x = document.querySelector(".game-banner");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    //showScoreboard // have to show scoreboard at the same time function is below
  }

// -------- Scoreboard Hidden and Show Scoreboard -------- //
const hideScoreboard = document.getElementById("scoreboard").style.display = "none";
    gameStart.addEventListener("click", showScoreboard);

function showScoreboard() {
    var x = document.getElementById("scoreboard");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// -------- Create/Randomize Falling Debris -------- //
const hideDebris = document.querySelector(".debris").style.display = "none";
    gameStart.addEventListener("click", showDebris);

function showDebris() {
    var x = document.querySelector(".debris");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
// function create array of three objects setInterval

// var createDebris = document.getElementsByClassName('fas fa-recycle', 'fas fa-apple-alt', 'fas fa-trash');
// var fallingDebris = Array.prototype.filter.call(createDebris, function(createDebris) {
//     return createDebris.nodeName === 'class';
// });

// console.log(createDebris);

let debrisArray  = [
    (.fas fa-recycle),
    (.fas fa-apple-alt),
    (.fas fa-trash)
];

console.log(debrisArray);



// -------- Timer Function -------- //
const setTimer = () => {
    const timer = setInterval(() => {
        console.log(time)
        if(time <= 0){
        clearInterval(timer);
        round++;
        setUpRound();
        if(time > 0) setTimer();
        }
        updateTime();
        time--;
    },1000);
}
const updateTime = () => {
    $('#timer').text(`timer: ${time}s`);
}
const updateRound = () => {
    if(round < 4) $('#round').text(`round: ${round}`);
}

// -------- Round Function -------- //
const setUpRound = () => {
    updateRound();
    $('.squares').empty();
    if(round === 1){
        // createDebris(20);
        time = 30;
    } else if (round === 2){
        // createDebris(30);
        time = 30;
    } else if (round === 3){
        // createDebris(40);
        time =30;
    } else {
        // Create banner for player one and player two score
        $('h3').text(`GAME OVER score: ${score}`);
    }
}

// -------- App State -------- //