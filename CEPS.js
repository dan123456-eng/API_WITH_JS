/*VAMOS NESSE EXERCICIO CONSUMIR UMA API DE CEP
consumindo API de CEP
Acessando o webservice de CEP--
Exemplo de pesquisa por CEP:
viacep.com.br/ws/01001000/json/ */

function buscacep(){
	var cep = document.getElementById("cep");
	var localidade = document.getElementById("localidade");
	var bairro = document.getElementById("bairro");
	var logradouro = document.getElementById("logradouro");
	var complemento = document.getElementById("complemento");
	var uf = document.getElementById("uf");
	
	var url = "http://viacep.com.br/ws/"+ cep.value +"/json/";
	fetch(url, {method: 'GET'}) // fetch o que é? A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP
	     .then (response =>{response.json() //.then o que é? O método then() retorna uma Promise
		                   .then(data => {
						       /*Promise é um objeto usado para processamento assíncrono. 
							   Um Promise (de "promessa") representa um valor que pode estar
							   disponível agora, no futuro ou nunca.*/
							   // MANDA OS VALORES PARA OS ids de a - e .
							   localidade.value = data.localidade;
							   bairro.value = data.bairro;
							   complemento.value = data.complemento;
							   logradouro.value = data.logradouro;
							   uf.value = data.uf;
							   
							   //console.log(data);// pedir para mostrar na tela
						       //document.write(data);
						   })
		 
		 })
		 //TRATA O ERRO:
	     .catch(err => { //.catch o que é? método catch() retorna uma Promise e lida apenas com casos rejeitados
		                       localidade.value = data.localidade;
							   bairro.value = data.bairro;
							   complemento.value = data.complemento;
							   logradouro.value = data.logradouro;
							   uf.value = data.uf;
		 })
}
//document.getElementById('aperte').addEventListener ( 'click' , buscacep);