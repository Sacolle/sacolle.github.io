let MyVars = {
    daySelectorOn : false,
    todasAulas : [],
    AtuaisElementos : [],
    meusBlocosObjetos : []
};
$(function(){
    //elemento mostruoso para criar as caixinhas e addicioná-las classe, id, e onClick respectivamente
    for (let index = 0; index < 96; index++) {
        $(".dayElements").append($("<div></div>")
            .addClass("containers").prop("id",index)
            .attr("onClick","elementSelected(this)"));
    }
    //muda as posições dos overlay quando ocorre um rezise
    $(window).resize(()=>{
        updateScreenObjects();
    });
    topMenuSetUp();
    localStorageLoad();




});
//chama a função rezise de todos os objetos Aulas
function updateScreenObjects(){
    for (let index = 0; index < MyVars.meusBlocosObjetos.length; index++) {
        MyVars.meusBlocosObjetos[index].resize();
        
    }
}

function elementSelected(element){
    if(MyVars.daySelectorOn == true){
        if(!MyVars.todasAulas.some(e => e.attr("id") == $(element).attr("id"))){
            $(element).css("background-color","#D84C4C"); //red
            MyVars.todasAulas.push($(element));
            return;
        }else{
            $(element).css("background-color","#C5C5C5"); //grey
            const spliceVariável = MyVars.todasAulas.map(e => e.attr("id")).indexOf($(element).attr("id"));
            MyVars.todasAulas.splice(spliceVariável,1);
            return;
        }
    }
}

function addClass(){
    if(document.getElementById("nomeAula").value == ""){
        alert("Coloque um nome para a aula.");
        return;
    }
    MyVars.daySelectorOn = true;
}

//muda a função pra receber os parametros externamente;

function Aulas(nm, lk, tam, id){
    this.nome = nm;
    this.link = lk;
    this.tamanho = tam;
    this.id = id;

    let objPosition = $("#"+this.id).position();

    this.resize = function(){
        objPosition = $("#"+this.id).position();
        $("#"+this.id+"O").css({top: objPosition.top, left: objPosition.left});    
    }
    $(".holder").append($("<div></div>")
        .addClass(this.nome)
        .attr("id",this.id+"O")
        .data("link",this.link)
        .attr("onClick","openZoomLink(this)")
        .css({top: objPosition.top, left: objPosition.left,height: this.tamanho-1})
        .append($("<p></p>").text(this.nome)));
    
    $(".removeSubmenu").append($("<div></div>").addClass("aulasAtuais")
        .append($("<p></p>").text(`Nome: ${this.nome} | Dia: ${dayOfTheWeek(this.id)}  `)
        .append($("<button></button>").text("X").attr("onclick", "removeThisDiv(this)").data("id",this.id)))
        );

    MyVars.meusBlocosObjetos.push(this);
    localStorage.setItem(this.id+"O",this.nome+";"+this.link+";"+this.tamanho+";"+this.id);
}
function removeThisDiv(element){
    const removeId = $(element).data("id");
    localStorage.removeItem(removeId + "O");
    $("#"+removeId + "O").remove();
    $(element).parent().parent().remove();
}

function openZoomLink (link){
    let realLink = $(link).data("link");
    if(realLink != "") window.open(realLink);
}

function confirmClass(){

    MyVars.todasAulas.sort(compare);

    while(MyVars.todasAulas.length != 0){

        determinarOsVizinhos(0);
        new Aulas($("#nomeAula").val(),$("#linkZoom").val(),MyVars.AtuaisElementos.length*75,MyVars.AtuaisElementos[0].attr("id"));
        $(".dayElements").children().css("background-color", "rgb(197,197,197)");

        MyVars.AtuaisElementos.forEach(objeto => {
            MyVars.todasAulas = MyVars.todasAulas.filter((ele)=>{
                return ele != objeto;
            })
        });
        MyVars.AtuaisElementos = [];
    }
    MyVars.todasAulas =[];
    MyVars.daySelectorOn = false;
    $(".textInputs").val("");
}

function determinarOsVizinhos(indexBase){
    let i = 0;
    while(i<MyVars.todasAulas.length){
        if(indexBase == i){
            MyVars.AtuaisElementos.push(MyVars.todasAulas[indexBase]);
        }else{
            if(parseInt($(MyVars.todasAulas[indexBase]).attr("id"))+6 == parseInt($(MyVars.todasAulas[i]).attr("id"))){
                determinarOsVizinhos(i);
                break;
            }
        }
    i++;
    }
}

function compare( a, b ) {
    if ( parseInt($(a).attr("id")) < parseInt($(b).attr("id")) ) return -1;
    if ( parseInt($(a).attr("id")) > parseInt($(b).attr("id")) ) return 1;
    return 0;
}
  function dayOfTheWeek(id){
    switch (parseInt(id)%6) {
        case 0:
            return "Segunda";        
        case 1:
            return "Terça";
        case 2:
            return "Quarta";
        case 3:
            return "Quinta";
        case 4:
            return "Sexta";
        case 5: 
            return "Sábado";
    }
}

function localStorageLoad(){
    if(localStorage.length == 0) return;

    for (let index = 0; index < localStorage.length; index++) {
        //let [name,link,tamanho,id] = parseLocalStorage(localStorage.getItem(localStorage.key(index)));
        let [name,link,tamanho,id] = localStorage.getItem(localStorage.key(index)).split(";");
        new Aulas(name.toString(),link.toString(),tamanho.toString(),id.toString()); 
    }
}
function parseLocalStorage(string){
    return string.split(";");
}

function topMenuSetUp(){
    let subMenu = $(".subMenu");
    let removeSubmenu = $(".removeSubmenu");
    let adicionarAula = $(".indexes");
    let removerAula = $(".remover");

    subMenu.css("top",$(".header").height());      //inicializa a posição do subMenu exatamente abaixo do menu
    removeSubmenu.css("top",$(".header").height());
    $(".spacer").css("height",$(".header").height()+120);      //inicializa um objeto fantasma para o header não ficar em cima da grid
    subMenu.hide();
    removeSubmenu.hide();   
    adicionarAula.click(()=>{
        if(subMenu.is(":hidden")){
            if(removeSubmenu.is(":hidden")){
                adicionarAula.css("background-color","#6d6d6d");
                subMenu.slideToggle(200);
            }else{
                removeSubmenu.slideToggle(200,()=>{
                    removerAula.css("background-color","#8d8d8d");
                    adicionarAula.css("background-color","#6d6d6d");
                    subMenu.slideToggle(200)
                });
            }
        }else{
            subMenu.slideToggle(200,()=>{
                adicionarAula.css("background-color","#8d8d8d");
            });
        }
    });

    removerAula.click(()=>{
        if(removeSubmenu.is(":hidden")){
            if(subMenu.is(":hidden")){
                removerAula.css("background-color","#6d6d6d");
                removeSubmenu.slideToggle(200);
            }else{
                subMenu.slideToggle(200,()=>{
                    adicionarAula.css("background-color","#8d8d8d");
                    removerAula.css("background-color","#6d6d6d");
                    removeSubmenu.slideToggle(200)
                });
            }
        }else{
            removeSubmenu.slideToggle(200,()=>{
                removerAula.css("background-color","#8d8d8d");
            });
        }
    });
}