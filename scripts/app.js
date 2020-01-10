// -------- Sanity Check -------- //
console.log("This is the way");

// -------- Event Listners -------- //
// Event listener to start game (remove banner, show scoreboard, and show debris)
$('#startSorting').on('click',() => {
    // console.log('Game Start');
    setUpRound();
    setTimer();
});

// Event listener for selecting debris
var debrisClick;
var binClick;

$('.debris').on('click', '.compostDebris', () => {
    // console.log('compost debris');
    debrisClick = 1;
    // console.log(debrisClick);
})
$('.debris').on('click', '.trashDebris', () => {
    // console.log('trash debris');
    debrisClick = 2;
    // console.log(debrisClick);
})
$('.debris').on('click', '.recycleDebris', () => {
    // console.log('recycle debris');
    debrisClick = 3;
    // console.log(debrisClick);
})

// Event listener for selecting bins
$('.compost').on('click',() => {
    // console.log('compost');
    binClick = 1;
    // console.log(debrisClick);
    debrisCompare();
    // console.log("SCORE: " + score);
})
$('.trash').on('click',() => {
    // console.log('trash');
    binClick = 2;
    // console.log(debrisClick);
    debrisCompare();
    // console.log("SCORE: " + score);
})
$('.recycle').on('click',() => {
    // console.log('recycle');
    binClick = 3;
    // console.log("Debris Click:" + debrisClick);
    debrisCompare();
    // console.log("SCORE: " + score);
})

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
const hideDebris = document.querySelector(".debris").style.display = "none";
    gameStart.addEventListener("click", showDebris);

function showDebris() {
    var x = document.querySelector(".debris");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

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

// -------- Points -------- //
// var p1 = playerOne;
// var p2 = playerTwo;

function debrisCompare() {
    if (debrisClick === binClick) {
       score+= 1
       $('h2').text(`Score: ${score}`);
    } else {
       score--
       $('h2').text(`Score: ${score}`);
    }
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
    updatePlayerScore();
}
const updateRound = () => {
    if(round < 2) $('#round').text(`round: ${round}`);
}

// const updatePlayerScore = () => {
//     if (round = 1) {
//         $('#player1Score').text(`${score}`)
//     } else {
//         $('#player2Score').text(`${score}`)
//     a}
// }

const updatePlayerScore = () => {
    $('#player1Score').text(`${score}`)
}

// -------- Player/Round Function -------- //
const setUpRound = () => {
    updateRound();
    $('.debris').empty();
    $('.score').empty();
    if(round === 1){
        createDebris(50);
        time = 10;
    } else if (round === 2){
        createDebris(50);
        time = 10;
    } else {
        // Create banner for player one > player two score
        $('#score').text(`GAME OVER`); 
        $('.h2').text(`Player One: ${score}`);
        $('.h2').text(`Player Two: ${score}`);
        $('span').hide();
    }
}

// -------- App State -------- //