const choices = ["rock","paper","scissors"];
                //["fire", "earth", "water", "grass" ]

// here is where I'll put the DOM elements. 
// It's after the choices array so I can generate buttons based on it.

let playerPoint = 0;
let computerPoint = 0;
const pointCap = 5;

const buttonCont = document.body.querySelector('.button-container');
let myButtons = [];

// this is the text that pops up at the start of each round.
// It's expedient to set it up here with everything else that depends on 
// the array of buttons/choices.
let initialText = `What will you play? ${capitalize(choices[0])}`;
for(let i = 0; i < choices.length; i++){
    myButtons[i] = document.createElement('button');
    myButtons[i].textContent = capitalize(choices[i]);
    myButtons[i].classList.add(`choice`);
    myButtons[i].setAttribute('id', `${i}`);
    buttonCont.appendChild(myButtons[i]);

    myButtons[i].disabled = true;

    myButtons[i].addEventListener('click', () => {
        endRound(Number(myButtons[i].id));
    });

    if(i > 0 && i < choices.length - 1){
        initialText += `, ${choices[i]}`;
    } else if(i === choices.length - 1){
        initialText += ` or ${choices[i]}?`;
    }
}


// this is where I'll put the game text.
const gameText = document.body.querySelector('.game-text');


// this is where I'll put the start game button.
const startButton = document.body.querySelector('.start');
startButton.addEventListener('click', gameSet);





// this is used to automatically convert strings from tHIs to This.
function capitalize(scr){ 
    let newScr = [scr.slice(0,1),scr.slice(1)];
    newScr[0] = newScr[0].toUpperCase();
    newScr[1] = newScr[1].toLowerCase();
    return (newScr[0] || "") + (newScr[1] || "");
}

// this just generates a random number to refer to the members of the choices array.
function getComputerChoice() {
    return Math.floor(Math.random()*choices.length);  
}

function result(playerChoice,computerChoice){
    // this should return 0 for a loss, 1 for a win and 2 for a tie.
    // At the moment this will be determined numerically, but
    // I'm sure some contraption can be worked out for more 
    // intricate type advantage systems.
    //
    // actually scrap that let's just do this conditionally it's easier
    // and let's just make this function return the win/loss string.
    //
    // nope we're determining it numerically
    // and actually in order to accommodate for making the tie retry doable
    // I have to limit this function to outputting the numerical result.

    return (choices.length + playerChoice - computerChoice) % choices.length;
    // this will return a 1 for a win, a 2 for a loss, and anything else
    // will be a tie.
}

//
//
//
//
////////////////
// A set of entirely new functions for the purpose of this new button-based input.
// Honestly, it might as well be a separate program entirely

function printGameText(string){
    gameText.innerHTML = string;
    
}

// endRound will be initialized by clicking on a button for player input.
function endRound(playerChoice){
    
    let computerChoice = getComputerChoice();
    let roundResult = result(playerChoice,computerChoice);

    let roundGameText = "";
    roundGameText += `You played ${choices[playerChoice]}.<br>The computer played ${choices[computerChoice]}.<br>`

    switch(roundResult){
        case 2: {
            roundGameText += "You lose!<br>" + 
                   capitalize(choices[computerChoice]) + 
                   " beats " + 
                   choices[playerChoice] + 
                   ".<br><br>";
            
            computerPoint++;
            break;
        }
        case 1: {
            roundGameText += "You win!<br>" + 
                   capitalize(choices[playerChoice]) + 
                   " beats " + 
                   choices[computerChoice] + 
                   ".<br><br>";

            playerPoint++;
            break;
        }
        default: {
            roundGameText += "You tied!<br><br>";
        }
    }

    if(playerPoint < pointCap && computerPoint < pointCap){
        roundGameText += `You have ${playerPoint} points. The computer has ${computerPoint} points.<br>`
        roundGameText += `${initialText}`;
    }
    else{ // This is the only place I can figure putting the end of gameSet will even work
        if(playerPoint >= pointCap){
            roundGameText += `You reached ${pointCap} points.<br>You've won!`;
            
        } else{
            roundGameText += `The computed reached ${pointCap} points.<br>Better luck next time!`
        }
        
        startButton.disabled = false;
        for(let i=0; i<myButtons.length; i++){
            myButtons[i].disabled = true;
        }
    }

    printGameText(roundGameText);    

}

// this function should start once startButton is pressed,
// run for x rounds and then reenable startButton once all
// rounds are over.
// Never mind, all it does is start the set.
function gameSet() { 
    playerPoint = 0;
    computerPoint = 0;

    printGameText(initialText);
    for(let i=0; i<choices.length; i++){
        myButtons[i].disabled = false;
    }

    alert("Start!");
    startButton.disabled = true;
}