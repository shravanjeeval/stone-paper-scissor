let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorepara= document.querySelector("#comp-score");

const drawGame = ()=> {
    
     msg.innerText=" draw ! try again.";
     msg.style.backgroundColor= "blue";
    
};
const gencompchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
};




const playGame = (userchoice ) => {
    console.log("user choice = ", userchoice);
    //generate computer choice
    const compChoice = gencompchoice();
    console.log("comp choice=", compChoice );
    if(userchoice === compChoice){
       drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compChoice === "paper"? false : true;
        }else if(userchoice ===" paper"  ) {
            userwin = compChoice === "scissors" ? false: true;
         }else {
            userwin = compChoice === "rock"? false: true;
         }
         showwinner(userwin);
    }
};


const showwinner = (userwin , userChoice , compChoice ) => {
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText ="you win!" ;
        msg.style.backgroundColor= "green";
      } 
       else 
       {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText = "you lose!" ;
        msg.style.backgroundColor= "red";

       }
    
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
     console.log("choice was clicked",userchoice);
     playGame(userchoice);
    });
});