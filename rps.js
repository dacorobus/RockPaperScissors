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
    if(playerChoice === 'rock' && cpuChoice === 'paper') return looser(capFirstLetter(cpuChoice), capFirstLetter(playerChoice));
    if(playerChoice === 'rock' && cpuChoice === 'scissors') return winner(capFirstLetter(playerChoice), capFirstLetter(cpuChoice));
    if(playerChoice === 'paper' && cpuChoice === 'rock') return winner(capFirstLetter(playerChoice), capFirstLetter(cpuChoice));
    if(playerChoice === 'paper' && cpuChoice === 'scissors') return looser(capFirstLetter(cpuChoice), capFirstLetter(playerChoice));
    if(playerChoice === 'scissors' && cpuChoice === 'rock') return looser(capFirstLetter(cpuChoice), capFirstLetter(playerChoice));
    if(playerChoice === 'scissors' && cpuChoice === 'paper') return winner(capFirstLetter(playerChoice), capFirstLetter(cpuChoice));
    return "It's a Tie";
}

function game(){
    for(let i = 0; i < 10; i++){
        console.log(playRound(playerSelection(), getComputerChoice()));
    }
}

game();