const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    const c = Math.floor(Math.random()*3);    
    return choices[c];
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
        if(c){
            stillUndecided = false;
        }
        else {
            myPrompt = "Please enter 'rock', 'paper', or 'scissors'.";
        }
    }
    
}
function convertChoiceToArray(answer){
    // This should take the choice in script form and return the array object, case-insensitively.
    // For now it only returns "rock".
    return "rock";
}

function gameRound(playerChoice,computerChoice){
    console.log("Start!");
    let c = getPlayerChoice();
    console.log(`You played ${choices[c]}.`);
}

gameRound();

