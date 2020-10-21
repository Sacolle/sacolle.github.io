let placementX = [];
let placementO = [];
let count = 0;
let end = true;

function changeCharacter(element) {
    let name = element.getAttribute("name")
    if(placementX.includes(name)||placementO.includes(name)||end==false){
        return;
    }
    if(count % 2 == 0||count==0){
        element.textContent = "X";
        placementX.push(name);
        console.log(placementX);
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
        console.log(placementO);
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
    let text = document.getElementById("an");
    console.log(text);
    text.textContent = `results: ${who} won`;
    end = false;
}