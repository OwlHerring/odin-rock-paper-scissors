const choices = ["rock","paper","scissors"];
                // ["fire", "earth", "water", "grass" ]

alert("Start!");
gameRound();
alert("GAME OVER");

function capitalize(scr){
    let newScr = [scr.slice(0,1),scr.slice(1)];
    newScr[0] = newScr[0].toUpperCase();
    newScr[1] = newScr[1].toLowerCase();
    return (newScr[0] || "") + (newScr[1] || "");
}

function getComputerChoice() {
    return Math.floor(Math.random()*choices.length);  
}
function getPlayerChoice() {
    let myPrompt = "What will you play? Rock? Paper? or Scissors?";
    let stillUndecided = true;
    let c; let a; // c: choice; a: answer

    while(stillUndecided){
        a = prompt(myPrompt); 
        // I'll put something here to break the flow if a is escape or something.
        c = convertChoiceToArray(a); 
        // the plan is to make it so convertChoiceToArray returns something falsy to c if the answer is wrong.
        if(c+1){ // because I want it to return true if c === 0
            stillUndecided = false;
        }
        else {
            myPrompt = "Please enter 'rock', 'paper', or 'scissors'.";
        }
    }
    return c;
    
}
function convertChoiceToArray(answer){
    // This should take the (player's) choice in script form and return the array object, case-insensitively.
    // For now let's just keep it case-sensitive.
    //
    // Oh wait, converting to lower case is pretty easy actually.
    for(let i = 0; i < choices.length; i++){
        if(choices[i] === answer.toLowerCase()){
            return i;
        }
    }
    // error state
    return -1;
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

function gameRound(){
    
    let playerChoice = getPlayerChoice();
    alert(`You played ${choices[playerChoice]}.`);
    let computerChoice = getComputerChoice();
    alert(`The computer played ${choices[computerChoice]}.`);

    let roundResult = result(playerChoice,computerChoice);
    switch(roundResult){
        case 2: {
            alert("You lose! " + 
                   capitalize(choices[computerChoice]) + 
                   " beats " + 
                   choices[playerChoice] + 
                   ".");
            break;
        }
        case 1: {
            alert("You win! " + 
                   capitalize(choices[playerChoice]) + 
                   " beats " + 
                   choices[computerChoice] + 
                   ".");
            break;
        }
        default: {
            alert("You tied!");
            alert("Get ready for the next round!");
            gameRound();
        }
    }
    if(confirm("Want to play again?"))
    {
        gameRound();
    }
}
