

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

    checkGameStatus = () => {
        test = gameboard;
        const combination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (const comb of combination){
            const [a,b,c] = comb;
            if (test[a] && (test[a]==test[b] && test[a]==test[c])){
                return true;
            }
        }
    }

    getinput = () => {
        startBtn.addEventListener("click", event => {
            const player1 = document.querySelector("#p1-name").value;
            const player2 = document.querySelector("#p2-name").value;
            const p1_color=document.getElementById("cp1").value;
            const p2_color=document.getElementById("cp2").value;
            let event_num = 0;

            if(player1 && player2){
                grid.forEach(square => {
                    square.addEventListener("click", event => {
                        if (square.textContent == "" && event_num % 2 == 0){
                            gameboard[square.dataset.index] = "X";
                            if (checkGameStatus()==true){
                                console.log("Player 1 wins");
                            }
                            square.style.color = p1_color;
                            square.innerText = "X";
                            event_num++;
                        }
                        else if (square.textContent == "" && event_num % 2 != 0){ 
                            gameboard[square.dataset.index] = "O";
                            if (checkGameStatus()==true){
                                console.log("Player 2 wins");
                            }
                            square.style.color = p2_color;
                            square.innerText = "O";
                            event_num++;
                        }
                        else {
                            return;
                        }
                    })
                })
            }
            else{
                alert("Please enter player names");
            }
        })
    }
    getinput();


    return {
    }
})()
