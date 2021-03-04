let Aulas = [
    M1 = {nome : "Matemática Discreta", horario : "8:00", dias : ["segunda","quarta"], linkZoom : "https://pucrs.zoom.us/j/94542064876?pwd=UU00Um1ENHN1SXVWU2QwTDhQQlVIUT09"},
    M2 = {nome : "Fundamentos da programação", horario : "9:45", dias : ["segunda", "quarta", "sexta"], linkZoom : "https://pucrs.zoom.us/j/98414194821?pwd=by9LcFp5Z1NHMWxOMk5CTDZGYzRPQT09"},
    M3 = {nome : "Cálculo", horario : "11:30", dias : ["terça", "sexta"], linkZoom : "https://pucrs.zoom.us/j/97173996206?pwd=alJEbTBBV3IwUDVQNFRiM3hEWVkzQT09"},
    M4 = {nome : "Metodologia Científica", horario : "8:00" , dias : ["terça"], linkZoom : null},
    M5 = {nome : "Introdução a Computação", horario : "9:45", dias : ["terça"], linkZoom : "https://pucrs.zoom.us/j/94547154921?pwd=VEYxVVUvalFjWTZmTzdYeldWMjZNdz09"}
];

function loadGridNames(){
    for (let index = 0; index < Aulas.length; index++) {
        const element = Aulas[index];
        for (let index2 = 0; index2 < 6; index2++) {
            gridElement800 = document.getElementsByClassName("time-grid-item-row-800")[index2]
            if(element.dias.includes(gridElement800.getAttribute("name")) && element.horario == "8:00"){
                gridElement800.textContent = element.nome;
            }
        }
        for (let index3 = 0; index3 < 6; index3++) {
            gridElement945 = document.getElementsByClassName("time-grid-item-row-945")[index3]
            if(element.dias.includes(gridElement945.getAttribute("name")) && element.horario == "9:45"){
                gridElement945.textContent = element.nome;
            }
        }        
        for (let index4 = 0; index4 < 6; index4++) {
            gridElement1130 = document.getElementsByClassName("time-grid-item-row-1130")[index4]
            if(element.dias.includes(gridElement1130.getAttribute("name")) && element.horario == "11:30"){
                gridElement1130.textContent = element.nome;
            }
        }
    }
}

function siteOperation(butao){
    for (let index = 0; index < Aulas.length; index++) {
        const element = Aulas[index];

        if (butao.textContent == element.nome) {
            if(element.linkZoom == null){
                alert("Não possui um link");
                return;
            }

            window.open(element.linkZoom);
        }
        
    }
    
}