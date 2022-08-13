const choices = ["rock","paper","scissors"];

gameRound();



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
    for(let i = 0; i < choices.length; i++){
        if(choices[i] === answer){
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
    switch (playerChoice) {
        case 0: // rock
            break;
        case 1: // paper
            break;
        case 2: // scissors
            break;
    }
    
}

function gameRound(){
    alert("Start!");
    let playerChoice = getPlayerChoice();
    alert(`You played ${choices[playerChoice]}.`);
    let computerChoice = getComputerChoice();
    alert(`The computer played ${choices[computerChoice]}.`);

    
}
