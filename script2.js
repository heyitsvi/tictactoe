

let Gameboard = (function(){
    let gameboard=[];
    const grid = document.querySelectorAll(".grid");
    const resetBtn = document.querySelector("#reset");
    const startBtn = document.querySelector("#startBtn");

    resetBoard = () => {
        resetBtn.addEventListener("click", event => {
            for(let i = 0; i<9 ;i++){
                grid[i].textContent = "";
            }
            gameboard.length = 0;
        })
    }

    resetBoard();

    getinput = () => {
        startBtn.addEventListener("click", event => {
            const player1 = document.querySelector("#p1-name").value;
            const player2 = document.querySelector("#p2-name").value;
            const p1_color=document.getElementById("cp1").value;
            const p2_color=document.getElementById("cp2").value;
            let event_num = 0;

            grid.forEach(square => {
                square.addEventListener("click", event => {
                    if (square.textContent == "" && event_num % 2 == 0){
                        gameboard.push("X");
                        square.style.color = p1_color;
                        square.innerText = "X";
                        event_num++;
                    }
                    else if (square.textContent == "" && event_num % 2 != 0){ 
                        gameboard.push("O");
                        square.style.color = p2_color;
                        square.innerText = "O";
                        event_num++;
                    }
                    else {
                        return;
                    }
                })
            })
        })
    }
    return {
        getinput,
        resetBoard,
    }
})()

Gameboard.getinput();