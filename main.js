function acessarSubindex(element){
    let id = element.getAttribute("id");
    console.log(id);
    switch (id) {
        case "cronograma":
            alert("Não");
            break;
        case "tictactoe":
            window.location.href = "tictactoe/subindex.html";
            break;
    }

}
function stickBug(){
    let img = document.getElementById("questionMark");
    img.setAttribute("src","imagens1/tenor.gif");
}
