const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const botText = document.querySelector('.bot-move');
const playerText = document.querySelector('.player-move');
const resultText = document.querySelector('.result');
const countdownText = document.querySelector('.countdown-text');
const startCountdownButton = document.querySelector('.start-countdown');
const errorPlayText = document.querySelector('.error-play');
const playerBold = document.querySelector('.player-span');
const botBold = document.querySelector('.bot-span');


let timingStatus = 0;


const countdownFunction = ()=>{
    countdownText.classList.remove('error-play');
    let countdownTextList = ['GET READY!', '3', '2', '1'];
    let i = 0; 
    timingStatus = 1;  
    let randomNumber = Math.random();
    let botStatus = 0;
    countdownText.innerHTML = ''
    playerBold.innerHTML = ''
    botBold.innerHTML = ''
    playerText.innerHTML = ''
    botText.innerHTML = ''
    resultText.innerHTML = ''

    const updateCountdown =()=>{
        if(i < countdownTextList.length){
        countdownText.innerHTML = countdownTextList[i];
        console.log(countdownTextList[i]);
        i++; 
        
    }}

    const intervalCount = setInterval(()=> updateCountdown(), 1000);
    setTimeout(()=>{ 
        if(!countdownText.classList.contains('error-play')){
            countdownText.innerHTML =''
        }
        startCountdownButton.classList.remove('margin-remove')
        timingStatus = 2;
        console.log('moment of play');
        if(randomNumber >= 0 && randomNumber < 1/3){
            botText.innerHTML = 'bot played:\xa0';
            botBold.innerHTML = 'Rock'
            console.log('bot played: Rock');
            botStatus = 'Rock'

        }else if(randomNumber >= 1/3 && randomNumber <= 2/3){
            botText.innerHTML = 'bot played:\xa0';
            botBold.innerHTML = 'Paper'
            console.log('bot played: Paper');
            botStatus = 'Paper'

        }else if(randomNumber >= 2/3){
            botText.innerHTML = 'bot played:\xa0';
            botBold.innerHTML = 'Scissors'
            console.log('bot played: Scissors');
            botStatus = 'Scissors'

        }
    }, 5000); 
    setTimeout(()=> timingStatus = 3, 5400);
    setTimeout(()=> timingStatus = 0, 7000);

  
    const play = (playerMove)=>{
        if(timingStatus === 0){             // before countdown
            console.log('before countdown');
            countdownText.classList.add('error-play');
            countdownText.innerHTML = 'you must start the countdown'
            countdownTextList = ['you must start the countdown','you must start the countdown','you must start the countdown','you must start the countdown']
            clearInterval(intervalCount)

        } else if(timingStatus === 1){      // too early
            console.log('too early'); 
            countdownText.classList.add('error-play');
            countdownText.innerHTML = 'You played too early';
            countdownTextList = ['You played too early','You played too early','You played too early','You played too early']
            clearInterval(intervalCount)

        } else if(timingStatus === 3){      // too late 
            console.log('too late');
            countdownText.classList.add('error-play');
            countdownText.innerHTML = 'You played too late '
            countdownTextList = ['You played too late','You played too late','You played too late','You played too late']
            clearInterval(intervalCount)


        }else{ 
            if(botStatus === 'Rock'){
                if(playerMove === 'Rock'){resultText.innerHTML = ''; resultText.innerHTML = "it's a draw"}
                if(playerMove === 'Paper'){resultText.innerHTML = ''; resultText.innerHTML = "You win!"}
                if(playerMove === 'Scissors'){resultText.innerHTML = ''; resultText.innerHTML = "You lose"} 
            } else if(botStatus === 'Paper'){
                if(playerMove === 'Paper'){resultText.innerHTML = ''; resultText.innerHTML = "it's a draw"}
                if(playerMove === 'Scissors'){resultText.innerHTML = ''; resultText.innerHTML = "You win!"}
                if(playerMove === 'Rock'){resultText.innerHTML = ''; resultText.innerHTML = "You lose!"} 
            } else if (botStatus === 'Scissors'){
                if(playerMove === 'Scissors'){resultText.innerHTML = ''; resultText.innerHTML = "it's a draw"}
                if(playerMove === 'Rock'){resultText.innerHTML = ''; resultText.innerHTML = "You win!"}
                if(playerMove === 'Paper'){resultText.innerHTML = ''; resultText.innerHTML = "You lose"} 
            }
            playerText.innerHTML = `you played:\xa0`;
            playerBold.innerHTML = `${playerMove}`
        }}
    rockButton.addEventListener('click', ()=> play('Rock'));
    paperButton.addEventListener('click', ()=> play('Paper'));
    scissorsButton.addEventListener('click', ()=> play('Scissors'));
};





    



startCountdownButton.addEventListener('click', ()=> countdownFunction());



/* 

    if(playerMove === 'Rock'){resultText.innerHTML = ''; resultText.innerHTML = "it's a draw"}
    if(playerMove === 'Paper'){resultText.innerHTML = ''; resultText.innerHTML = "You win!"}
    if(playerMove === 'Scissors'){resultText.innerHTML = ''; resultText.innerHTML = "You lose"} 
    console.log('bot played: Rock');

    
    if(playerMove === 'Paper'){resultText.innerHTML = ''; resultText.innerHTML = "it's a draw"}
    if(playerMove === 'Scissors'){resultText.innerHTML = ''; resultText.innerHTML = "You win!"}
    if(playerMove === 'Rock'){resultText.innerHTML = ''; resultText.innerHTML = "You lose!"} 
    console.log('bot played: Paper');

    if(playerMove === 'Scissors'){resultText.innerHTML = ''; resultText.innerHTML = "it's a draw"}
    if(playerMove === 'Rock'){resultText.innerHTML = ''; resultText.innerHTML = "You win!"}
    if(playerMove === 'Paper'){resultText.innerHTML = ''; resultText.innerHTML = "You lose"} 



*/