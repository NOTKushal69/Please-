// // let boxes=document.querySelectorAll(".box");
// // let reset=document.getElementById("reset");
// // let newbtn=document.querySelector("#newbtn");
// // let msg=document.getElementById("msg");






// // reset.addEventListener("click",reseet());
// // newbtn.addEventListener("click",reseet());



// // let trun0=true;
// // const reseet=()=>{
// //     let trun0=true;
// //     boxesenabale();

// // }
// // const winpattern=[
// //     [0,1,2],
// //     [0,3,6],
// //     [0,4,8],
// //     [1,4,7],
// //     [2,5,8],
// //     [2,4,8],
// //     [2,4,6],
// //     [3,4,6],
// //     [6,7,8],
// // ];
// // boxes.forEach((box)=>{
// //     box.addEventListener("click",()=>{
// //         console.log("Box was clicked ")
// //         if(trun0){
// //             box.innerText="O"
// //             trun0=false;
// //         }
// //         else{
// //             box.innerText="X"
// //             trun0=true
// //         }
// //         box.disabled=true;
// //         checkwinner();
// //     })
   
// // })

// // // ... (your existing code)

// // const checkwinner = () => {
// //     for (let pattern of winpattern) {
// //         let po1 = boxes[pattern[0]].innerText;
// //         let po2 = boxes[pattern[1]].innerText;
// //         let po3 = boxes[pattern[2]].innerText;

// //         if (po1 !== "" && po2 !== "" && po3 !== "") {
// //             if (po1 === po2 && po2 === po3) {
// //                 console.log("Winner");
// //                 alert(`Player ${po1} wins!`);
// //                 boxesdiabale();
// //                 showwinner();
// //                 // You can add more actions here, like resetting the game.
// //             }
// //         }
// //     }
// // }
// // const showwinner=()=>{
// // msg.innerText=`Congratulation ${po1}` 
// // }
// // const boxesdiabale=()=>{
// // for(let box of boxes){
// //     box.disabled=true;
// // }
// // }
// // const boxesenabale=()=>{
// // for(let box of boxes){
// //     box.disabled=false;
// //     box.innerText="";
// // }
// // }


// let boxes = document.querySelectorAll(".box");
// let reset = document.getElementById("reset");
// let newbtn = document.querySelector("#newbtn");
// let msg = document.getElementById("msg");

// // Move the reseet function declaration above the event listeners
// const reseet = () => {
//     trun0 = true;
//     boxesenabale();
// };

// reset.addEventListener("click", reseet); // Remove parentheses
// newbtn.addEventListener("click", reseet); // Remove parentheses

// let trun0 = true;

// const winpattern = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 8],
//     [2, 4, 6],
//     [3, 4, 6],
//     [6, 7, 8],
// ];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked ");
//         if (trun0) {
//             box.innerText = "O";
//             trun0 = false;
//         } else {
//             box.innerText = "X";
//             trun0 = true;
//         }
//         box.disabled = true;
//         checkwinner();
//     });
// });

// const checkwinner = () => {
//     for (let pattern of winpattern) {
//         let po1 = boxes[pattern[0]].innerText;
//         let po2 = boxes[pattern[1]].innerText;
//         let po3 = boxes[pattern[2]].innerText;

//         if (po1 !== "" && po2 !== "" && po3 !== "") {
//             if (po1 === po2 && po2 === po3) {
//                 console.log("Winner");
//                 alert(`Player ${po1} wins!`);
//                 boxesdiabale();
//                 showwinner();
//                 // You can add more actions here, like resetting the game.
//             }
//         }
//     }
// };

// const showwinner = () => {
//     msg.innerText = `Congratulations Player ${po1}`;
// };

// const boxesdiabale = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const boxesenabale = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// };
let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newbtn = document.querySelector("#newbtn");
let msg = document.getElementById("msg");

const resetGame = () => {
    trun0 = true;
    boxesEnable();
};

reset.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);

let trun0 = true;
let winner = null; // New variable to store the winner

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [2, 4, 8],
    [3, 4, 6],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked ");
        if (trun0) {
            box.innerText = "O";
            trun0 = false;
        } else {
            box.innerText = "X";
            trun0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let po1 = boxes[pattern[0]].innerText;
        let po2 = boxes[pattern[1]].innerText;
        let po3 = boxes[pattern[2]].innerText;

        if (po1 !== "" && po2 !== "" && po3 !== "") {
            if (po1 === po2 && po2 === po3) {
                winner = po1; // Store the winner
                console.log("Winner");
                alert(`Player ${winner} wins!`);
                boxesDisable();
                showWinner();
                // You can add more actions here, like resetting the game.
            }
        }
    }
};

const showWinner = () => {
    msg.innerText = `Congratulations Player ${winner}`;
};

const boxesDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const boxesEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
