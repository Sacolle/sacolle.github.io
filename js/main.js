function changeImage(){
    let minhaImagem = document.querySelector('img');
    minhaImagem.setAttribute('src',"imagens1/tenor.gif');
}   

function changeTitle(){
    const meuCabecalho = document.querySelector('h1');
    const stateOn = "Button function is working properly.";
    const stateOff = "Colle's random assortment of little things.";

    meuCabecalho.textContent == stateOn ? meuCabecalho.textContent = stateOff : meuCabecalho.textContent = stateOn;
        
}

