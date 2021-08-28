/*
list of functions:
    Modules : gameboard,displayboard
    Factory: makeUsers, getinput, checkgame
*/

(function getinput(){
    const gameboard=[];
    const grid = document.querySelectorAll(".grid");
    grid.forEach(square => {
        square.addEventListener("click", e => {
            if (square.textContent == ""){
                gameboard.push("X");
                displayGrid(gameboard,square.id);
            }
            else {
                return
            }
        })
        square.addEventListener("contextmenu", e => {
            e.preventDefault();
            if (square.textContent == ""){
                gameboard.push("O");
                displayGrid(gameboard,square.id);
            }
            else {
                return
            }
        })
    })
})()

function displayGrid(input,id){
    document.getElementById(`${id}`).textContent = input.slice(-1);
}

function createPlayer(){
    const name = "Vivek";
}

