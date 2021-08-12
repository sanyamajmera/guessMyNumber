'use strict';
let randomNumber = Math.trunc(Math.random()*20)+1;
let score=20;
let displayMessage= function(message){
    document.querySelector('.message').textContent=message;
};
document.querySelector('.check').addEventListener('click', function(){
    let guess=document.querySelector('.guess').value;
    if (!guess){
        displayMessage('⛔ No Number');
    }
    else if (randomNumber==guess){
        displayMessage('🎉 Correct');
        document.querySelector('.number').textContent=randomNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(document.querySelector('.highscore').textContent<document.querySelector('.score').textContent){
            document.querySelector('.highscore').textContent=score;
        }
    }
    else if(guess !== randomNumber){
        if(score>1){
            displayMessage(randomNumber<guess ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent=score;
            }
            else {
                displayMessage('💥 You lose');
                document.querySelector('.score').textContent=0;
            }
    }
    
    /*
    else if (randomNumber<guess){
        if(score>0){
        document.querySelector('.message').textContent='Too High';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else {
            document.querySelector('.message').textContent='You lose';
            document.querySelector('.score').textContent=0;
        }
    }
    else if (randomNumber>guess){
        if(score>0){
        document.querySelector('.message').textContent='Too Low';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lose';
            document.querySelector('.score').textContent=0;
        } 
    }*/
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='Start guessing';
    randomNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
    
});