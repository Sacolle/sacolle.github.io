function piramide (tamanho){
	//cria-se um array
	var array = [];

	//faz-se um loop dentro de um loop
	for (let index = 0; index <= tamanho; index++) {
		for (let indexs = 0; indexs <= index; indexs++) {
			array.push(indexs);
		}
	//depois do array ser feito, ele é impresso
	console.log(...array);
	//deleta-se o array
	array = [];
	}
}

function exame(){
	
	const erroMensagem = ["no-line","no-var","line-on-top"];
	arraios = [];
	function makeList(arraios){
		if (!Array.isArray(arraios)){
			return "erro";
		}
		const listaDeErros = [];
		
		for(let i = 0; i < arraios.length; i++){
			listaDeErros.push(`<li class="text-warning">${arraios[i]}</li>`);
		}
		
		if(listaDeErros.length === 0){
			return "tamanho da lista = 0";
		}
		return listaDeErros;
	}
console.log(makeList(erroMensagem));
}
