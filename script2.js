

let Gameboard = (function(){
    let gameboard=[];
    const grid = document.querySelectorAll(".grid");
    const resetBtn = document.querySelector("#reset");
    const startBtn = document.querySelector("#startBtn");
    const input_node = document.getElementById("player1");
    const input_node2 = document.getElementById("player2");
    let event_num = 0;


    resetBoard = () => {
        resetBtn.addEventListener("click", event => {
            for(let i = 0; i<9 ;i++){
                grid[i].textContent = "";
            }
            gameboard.length = 0;
            event_num = 0;
            pointerEvents("all");
            while(document.querySelector(".result")){
                document.querySelector(".result").remove();
            }
        })
    }

    resetBoard();

    function deleteResult(id) {
        var nodes = document.getElementById(`${id}`).childNodes;
        for(var i=0; i<nodes.length; i++) {
            nodes[i].remove();
        }
    }

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

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }


    changedisplay = (parent,name) => {
        const div = document.createElement("div");
        div.textContent = name;
        div.style["font-size"] = "50px";
        div.style.color = "white";
        div.style.border ="solid";
        div.style.borderColor ="white";
        div.style.boxShadow = "4px 4px black";
        div.style.alignSelf = "center";
        div.style.justifySelf = "center";
        div.style.padding = "5px";
        div.style.borderRadius = "10px";
        parent.appendChild(div);
    }

    function displayWinner(parent_node,text){
        let div = document.createElement('div');
        div.setAttribute("class","result");
        div.textContent = text;
        div.style["font-size"] = "50px";
        div.style.color = "white";
        parent_node.appendChild(div);
    }

    function pointerEvents(value) {
        grid.forEach(square => {
            square.style["pointer-events"] = value;
        })
    }


    function getinput(){
        startBtn.addEventListener("click", event => {
            const player1 = document.querySelector("#p1-name").value;
            const player2 = document.querySelector("#p2-name").value;
            const p1_color=document.getElementById("cp1").value;
            const p2_color=document.getElementById("cp2").value;

            if(player1 !="" && player2 !=""){
                removeAllChildNodes(input_node);
                removeAllChildNodes(input_node2);
                changedisplay(input_node,player1);
                changedisplay(input_node2,player2);
                
                grid.forEach(square => {
                    square.addEventListener("click", event => {
                        if (square.textContent == "" && event_num % 2 == 0){
                            gameboard[square.dataset.index] = "X";
                            if (checkGameStatus()==true){
                                displayWinner(input_node,"WINNER");
                                pointerEvents("none");
                            }
                            if (checkGameStatus()!=true && event_num == 8){
                                displayWinner(input_node,"DRAW");
                                displayWinner(input_node2,"DRAW");
                                event_num = 0;
                                pointerEvents("none");
                            }
                            square.style.color = p1_color;
                            square.innerText = "X";
                            event_num++;
                        }
                        else if (square.textContent == "" && event_num % 2 != 0){ 
                            gameboard[square.dataset.index] = "O";
                            if (checkGameStatus()==true){
                                displayWinner(input_node2,"WINNER");
                                pointerEvents("none");
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
                return;
            }
        })
    }
    getinput();

    return {
    }
})()
