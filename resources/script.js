const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    const c = Math.floor(Math.random()*3);    
    return choices[c];
}

let myLog = "";
for(let i = 0; i < 25; i++){
    myLog += getComputerChoice() + " ";
}
alert(myLog); 