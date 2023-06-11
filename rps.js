function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playerSelection(){
    return prompt('Enter "Rock", "Paper" or "Scissors"');
}

function looser(winner, loser){
    return `You Lose!  ${winner} beats ${loser}`;
}

function winner(winner, loser){
    return `You Win!  ${winner} beats ${loser}`;
}

function capFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(player, cpu){
    const playerChoice = player.toLowerCase();
    const cpuChoice = cpu.toLowerCase();
    if(playerChoice === 'rock' && cpuChoice === 'paper') return {player: 0, cpu: 1, consoleValue: looser(capFirstLetter(cpuChoice), capFirstLetter(playerChoice))};
    if(playerChoice === 'rock' && cpuChoice === 'scissors') return {player: 1, cpu: 0, consoleValue: winner(capFirstLetter(playerChoice), capFirstLetter(cpuChoice))};
    if(playerChoice === 'paper' && cpuChoice === 'rock') return {player: 1, cpu: 0, consoleValue: winner(capFirstLetter(playerChoice), capFirstLetter(cpuChoice))};
    if(playerChoice === 'paper' && cpuChoice === 'scissors') return {player: 0, cpu: 1, consoleValue: looser(capFirstLetter(cpuChoice), capFirstLetter(playerChoice))};
    if(playerChoice === 'scissors' && cpuChoice === 'rock') return {player: 0, cpu: 1, consoleValue: looser(capFirstLetter(cpuChoice), capFirstLetter(playerChoice))};
    if(playerChoice === 'scissors' && cpuChoice === 'paper') return {player: 1, cpu: 0, consoleValue: winner(capFirstLetter(playerChoice), capFirstLetter(cpuChoice))};
    return {player: 0, cpu: 0, consoleValue: "It's a Tie"};
}


function game(){
    playerWins = 0;
    cpuWins = 0;
    do{
        const player = playerSelection();
        const cpu = getComputerChoice();
        const roundObj = playRound(player, cpu);
        playerWins += roundObj.player;
        cpuWins += roundObj.cpu;
        console.log(roundObj.consoleValue);
    } while(playerWins < 3 && cpuWins < 3);
    if(playerWins === 3){
        console.log('You Win!!');
    }
    if(cpuWins === 3){
        console.log('You Lose ...');
    }
}

game();