// // let userscore=0;
// // let comscore=0;
// // const choice=document.querySelectorAll(".choice")


// // const computerchoice=()=>{
// // let option=["Rock","Paper","Sissors"]
// // const randidx=Math.floor(Math.random()*3);
// // return option[randidx];
// // };



// // const playgame=(userchoice)=>{
// // console.log("user choice=",userchoice)
// // console.log(computerchoice)

// // };

// // choice.forEach((choice)=>{
// //     choice.addEventListener("click",function(){
// //         const choiceid=choice.getAttribute("id");
// // playgame(userchoice);
// //     })
// // })
// let userScore = 0;
// let comScore = 0;
// const choices = document.querySelectorAll(".choice");

// // Function to get a random computer choice
// const computerChoice = () => {
//     const options = ["Rock", "Paper", "Scissors"];
//     const randomIndex = Math.floor(Math.random() * 3);
//     return options[randomIndex];
// };





// const drawgame=()=>{
//     console.log("Draw")
// }


// // Function to play the game based on user choice
// const playGame = (userChoice) => {
//     console.log("User choice =", userChoice);
//     const computerChoiceResult = computerChoice();
//     console.log("Computer choice =", computerChoiceResult);
//     // Add logic here to determine the winner and update scores
// if (userChoice === computerChoiceResult){
// drawgame();
// }

// };

// // Adding event listeners to each choice element
// choices.forEach((choice) => {
//     choice.addEventListener("click", function () {
//         const userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });
let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
let Userscorepara=document.getElementById("user-score");
let computerscorepara=document.getElementById("Computer-score");
// Function to get a random computer choice
const computerChoice = () => {
    const options = ["Rock", "Paper", "Sissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

// Function to handle a draw
const drawGame = () => {
    console.log("Draw");
    let msg=document.getElementById("msg").innerText="Its a Draw // play again"
    document.getElementById("msg").style.backgroundColor="Aqua"
}

// Function to play the game based on user choice
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const computerChoiceResult = computerChoice();
    console.log("Computer choice =", computerChoiceResult);
    



     const showwinner=(userwin)=>{
        if(userwin){
            userScore++;
            Userscorepara.innerText=userScore;
            console.log("you win")
            let msg=document.getElementById("msg").innerText=`You win `;
            document.getElementById("msg").style.backgroundColor="Green";
        }
        else{
            comScore++;
            computerscorepara.innerText=comScore;
            console.log("you loose");
            let msg=document.getElementById("msg").innerText="You loose "
            document.getElementById("msg").style.backgroundColor="Red";
        }

     }
    // Add logic here to determine the winner and update scores
    if (userChoice === computerChoiceResult) {
        drawGame();
    }
    else{
        let userwin=true;
        if (userChoice ==="Rock"){
// scisors Paper
userwin=computerChoiceResult === "Paper"?false:true;

        }
        else if(userChoice==="Paper"){

userwin  =computerChoiceResult==="Sissors"?false:true;



        }
        else{
            userwin = computerChoiceResult === "Rock"?false:true;
        }

showwinner(userwin);
    }    // Add more logic here to handle other cases (win/lose) and update scores
};

// Adding event listeners to each choice element
choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
