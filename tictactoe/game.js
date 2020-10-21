let placementX = [];
let placementO = [];
let count = 0;
let end = true;
let scoreX = 0;
let scoreO = 0;


function start(element){
    let who = element.getAttribute("name");
    who=="X" ? count = 0 : count++;
    var modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
}

function changeCharacter(element) {
    let name = element.getAttribute("name")
    if(placementX.includes(name)||placementO.includes(name)||end==false){
        return;
    }
    if(count % 2 == 0||count==0){
        element.textContent = "X";
        placementX.push(name);
        count++;

        if(placementX.includes("a")&&placementX.includes("b")&&placementX.includes("c")){
            winning("X");
        }
        if(placementX.includes("d")&&placementX.includes("e")&&placementX.includes("f")){
            winning("X");
        }
        if(placementX.includes("g")&&placementX.includes("h")&&placementX.includes("i")){
            winning("X");
        }
        if(placementX.includes("a")&&placementX.includes("d")&&placementX.includes("g")){
            winning("X");
        }
        if(placementX.includes("b")&&placementX.includes("e")&&placementX.includes("h")){
            winning("X");
        }
        if(placementX.includes("c")&&placementX.includes("f")&&placementX.includes("i")){
            winning("X");
        }
        if(placementX.includes("a")&&placementX.includes("e")&&placementX.includes("i")){
            winning("X");
        }
        if(placementX.includes("c")&&placementX.includes("e")&&placementX.includes("g")){
            winning("X");
        }
    }else{
        element.textContent = "O";
        placementO.push(name);
        count++;

        if(placementO.includes("a")&&placementO.includes("b")&&placementO.includes("c")){
            winning("O");
        }
        if(placementO.includes("d")&&placementO.includes("e")&&placementO.includes("f")){
            winning("O");
        }
        if(placementO.includes("g")&&placementO.includes("h")&&placementO.includes("i")){
            winning("O");
        }
        if(placementO.includes("a")&&placementO.includes("d")&&placementO.includes("g")){
            winning("O");
        }
        if(placementO.includes("b")&&placementO.includes("e")&&placementO.includes("h")){
            winning("O");
        }
        if(placementO.includes("c")&&placementO.includes("f")&&placementO.includes("i")){
            winning("O");
        }
        if(placementO.includes("a")&&placementO.includes("e")&&placementO.includes("i")){
            winning("O");        
        }
        if(placementO.includes("c")&&placementO.includes("e")&&placementO.includes("g")){
            winning("O");
        }
    }
    

}
function winning(who){
    who=="X" ? scoreX++ : scoreO++;
    let text = document.getElementById("an");
    text.textContent = `X: ${scoreX} | O: ${scoreO}`;
    end = false;
}

let space=false;

function reset(){
    
    if(end == false && space==true){
        placementX = [];
        placementO = [];
        end = true;
        space=false;
        for(let i = 0; i<9; i++){
            document.getElementsByClassName("grid-item")[i].textContent = "";
        }
    }
    end==false ? space=true : null;
    if(placementX.length+placementO.length==9){
        placementX = [];
        placementO = [];
        end = true;
        space=false;
        for(let i = 0; i<9; i++){
            document.getElementsByClassName("grid-item")[i].textContent = "";
        }
    }
}