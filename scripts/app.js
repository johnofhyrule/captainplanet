// -------- Core Modules -------- //

// -------- Third Party Libraries -------- //

// -------- Sanity Check -------- //
console.log("This is the way");

// -------- Constants (variables) -------- //

// -------- Event Listners -------- //
// Event listener to start game (remove banner, show scoreboard, and have debris fall)
$('#startSorting').on('click',() => {
    // console.log('Game Start');
    setUpRound();
    setTimer();
});

// Event listener for selecting bins
$('.compost').on('click',() => {
    console.log('compost');
})
$('.trash').on('click',() => {
    console.log('trash');
})
$('.recycle').on('click',() => {
    console.log('recycle');
})

// -------- Game Logic -------- //
let score1 = 0;
let score2 = 0;
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

// -------- Hide/Create/Randomize Falling Debris -------- //
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
let divs = document.querySelectorAll("i");
    values = [];
// console.log(divs);
for(var i = 0; i < divs.length; i++) {
    values.push(divs[i]);
}
// console.log(values);



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
    if(round < 1) $('#round').text(`round: ${round}`);
}

// -------- Player/Round Function -------- //
const setUpRound = () => {
    updateRound();
    $('.squares').empty();
    if(round === 1){
        // createDebris(20);
        time = 30;
    } else {
        // Create banner for player one > player two score
        $('h3').text(`GAME OVER Player 1: ${score1} #TEAMGRETA Player 2: ${score2} #TEAMTRUMP`);
        $('span').hide();
        // Create banner for player one < player two score
        // $('h3').text(`GAME OVER Player 1: ${score1} #TEAMTRUMP Player 2: ${score2} #TEAMGRETA`);
        // $('span').hide();
    }
}

// -------- App State -------- //