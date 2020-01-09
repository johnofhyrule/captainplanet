// -------- Sanity Check -------- //
console.log("This is the way");

// -------- Event Listners -------- //
// Event listener to start game (remove banner, show scoreboard, and have debris fall)
$('#startSorting').on('click',() => {
    console.log('Game Start');
    setUpRound();
    setTimer();
});

// Event listener for selecting debris
$('.compostDebris').on('click',() => {
    console.log('compost debris');
})
$('.trashDebris').on('click',() => {
    console.log('trash debris');
})
$('.recycleDebris').on('click',() => {
    console.log('recycle debris');
})

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

// -------- Hide/Show Debris -------- //
// const hideDebris = document.querySelector(".debris").style.display = "none";
//     gameStart.addEventListener("click", showDebris);

// function showDebris() {
//     var x = document.querySelector(".debris");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

// -------- Create Random Debris -------- //
const createDebris = numberOfDebris => {
    let debrisArray = ["compostDebris", "trashDebris", "recycleDebris"];
    let emptyDebrisArray = [];
    const $debris = $('.debris'); 
    for (let i = 1; i < numberOfDebris; i++) {
        randomNum = Math.floor(Math.random() * 3);
        const $debrisJS = $(`<div class ="${debrisArray[randomNum]}"/>`)
        emptyDebrisArray.push($debrisJS);
    }
    $debris.append(emptyDebrisArray );
}

const showRandomDebris = () => {
    const debris = ['.compostDebris', '.trashDebris', '.recycleDebris']
    const index = Math.floor(Math.random() * debris.length)
    return debris[index];
}

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
    if(round < 2) $('#round').text(`round: ${round}`);
}

// -------- Player/Round Function -------- //
const setUpRound = () => {
    updateRound();
    $('.debris').empty();
    if(round === 1){
        createDebris(50);
        time = 10;
    } else if (round === 2){
        createDebris(50);
        time = 10;
    } else {
        // Create banner for player one > player two score
        $('#score').text(`GAME OVER`); 
        $('#player1').text(`Player 1: ${score1} #TEAMGRETA`);
        $('#player2').text(`Player 2: ${score2} #TEAMTRUMP`);
        $('span').hide();
        // Create banner for player one < player two score
        // $('h3').text(`GAME OVER Player 1: ${score1} #TEAMTRUMP Player 2: ${score2} #TEAMGRETA`);
        // $('span').hide();
    }
}

// -------- App State -------- //