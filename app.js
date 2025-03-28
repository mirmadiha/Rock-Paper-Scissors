let rock=document.querySelector(".btn1");
let paper=document.querySelector(".btn2");
let scissors=document.querySelector(".btn3");
let userChoiceDisplay=document.querySelector("#userChoice");
let computerChoiceDisplay=document.querySelector("#computerChoice");
let resultDisplay=document.querySelector("#winner");

function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playGround(playerChoice,computerChoice){
    userChoiceDisplay.innerText=playerChoice;
    computerChoiceDisplay.innerText=computerChoice;

    if(playerChoice===computerChoice){
        resultDisplay.innerText='Its a tie';
    }
    else if(
        playerChoice==="rock" && computerChoice==="scissor",
        playerChoice==="paper" && computerChoice==="rock",
        playerChoice==="scissor" && computerChoice==="paper"
    )
    {
        resultDisplay.innerText='You Win!';
    }
    else{
        resultDisplay.innerText='Computer Wins!';
    }
}

let computerChoice=getComputerChoice();
rock.addEventListener("click",()=>{
    playerChoice="rock";
    playGround(playerChoice,computerChoice);
})

paper.addEventListener("click",()=>{
    playerChoice="paper";
    playGround(playerChoice,computerChoice);
})

scissors.addEventListener("click",()=>{
    playerChoice="scissor";
    playGround(playerChoice,computerChoice);
})

