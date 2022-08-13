function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);    
    return choice;
}

let myLog = "";
for(let i = 0; i < 25; i++){
    myLog += getComputerChoice();
}
alert(myLog);