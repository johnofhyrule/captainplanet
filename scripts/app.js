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
    console.log('compost de');
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

// -------- Hide/Create/Randomize Debris -------- //
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

const createDebris = numberOfDebris => {
    const $debrisJS = $('.debrisJS');  // loading for reference later
    for (let i = 1; i < numberOfDebris; i++) {
        const $debris = $('<div class ="debris"/>')
        $debrisJS.append($debris); // variable is just sitting there
    }
}

const applyRandomDebris = () => {
    const debris = ['compost', 'trash', 'recycle']
    const index = Math.floor(Math.random() * debris.length)
    return debris[index];
}

const handleDebris = event =>  {
    if(event.target.classList.contains('poked') === false){
    const debris = $(event.target).css('background-color');
    $(event.target).addClass('poked').css('opacity', 0.3);
    checkValidPoke(color);
    }
}

const checkValidPoke = debris => {
    const debrisValues = color.substring(4, color.length -1).split(', ');
    console.log(debrisValues[2]);
    if(debrisValue === "255"){
        score++
        $('h3').text(`Scoreboard: ${score}`);
    } else {
        score--
        $('h3').text(`Scoreboard: ${score}`);
    }
}

$('.debrisJS').on('click', '.debris', handleDebris);

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