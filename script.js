/*
list of functions:
    Modules : gameboard,displayboard
    Factory: makeUsers, getinput, checkgame
*/

const GameBoard = (function (){
    let gameboard=[];
    const grid = document.querySelectorAll(".grid");
    const player1 = document.querySelector("#p1-name").value;
    const player2 = document.querySelector("#p2-name").value;
    const p1_color=document.getElementById("cp1").value;
    const p2_color=document.getElementById("cp2").value;


    getinput = (p1_color,p2_color) => {
        grid.forEach(square => {
            square.addEventListener("click", e => {
                if (square.textContent == ""){
                    gameboard.push("X");
                    displayGrid(gameboard,square.id,p1_color);
                }
                else {
                    return;
                }
            })
            square.addEventListener("contextmenu", e => {
                e.preventDefault();
                if (square.textContent == ""){
                    gameboard.push("O");
                    displayGrid(gameboard,square.id,p2_color);
                }
                else {
                    return;
                }
            })
        })
    }
    

    resetBoard = () => {
        document.querySelector("#reset").addEventListener("click", e => {
            for(let i =0; i < 9; i++){
                grid[i].textContent ="";
            }
            gameboard.length = 0;
        })
    }



    return {
        gameboard,
        getinput,
        resetBoard,
    }
})()

function clearInput(){
    document.querySelector("#p1-name").value = "";
}

function displayGrid(input,id,color){
    document.getElementById(`${id}`).textContent = input.slice(-1);
    document.getElementById(`${id}`).style.color = color;
}


(function gameFlow(){
    const p1_color=document.getElementById("cp1").value;
    const p2_color=document.getElementById("cp2").value;
    const p1 = GameBoard.getinput();

    document.querySelector("#startBtn").addEventListener("click", GameBoard.getinput());

    document.querySelector("#reset").addEventListener("click",GameBoard.resetBoard());
})()







