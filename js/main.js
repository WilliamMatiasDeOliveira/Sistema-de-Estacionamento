document.getElementById("formulario").addEventListener("submit",cadastrarVeiculo);


function cadastrarVeiculo(e){
	var modeloCarro = document.querySelector("#modeloVeiculo").value;
	var placaCarro = document.querySelector("#placaVeiculo").value;
	var time = new Date();

	carro={
		modelo:modeloCarro,
		placa:placaCarro,
		hora:time.getHours(),
		minutos:time.getMinutes(),

	}
	
	
	if(localStorage.getItem('patio')==null){
		var carros = [];
		carros.push(carro);
		localStorage.setItem('patio',JSON.stringify(carros));
	}else{
		var carros = JSON.parse(localStorage.getItem('patio'));
		carros.push(carro);
		localStorage.setItem('patio',JSON.stringify(carros));
	}

}

function apagarVeiculo(placa){
	var carros = JSON.parse(localStorage.getItem("patio"));
	for(i=0;i<carros.length;i++){
		if(carros[i].placa==placa){
			carros.splice(i,1)
		}
		localStorage.setItem("patio",JSON.stringify(carros));
	}
	mostraPatio();

}


function mostraPatio(){
	
	var carros=JSON.parse(localStorage.getItem("patio"));
	var carrosResultado=document.querySelector("#resultados");
	
	carrosResultado.innerHTML ="";

	for(var i = 0;i < carros.length;i++){
		var modelo = carros[i].modelo;
		var placa = carros[i].placa;
		var hora = carros[i].hora;
		var minutos = carros[i].minutos;

		carrosResultado.innerHTML += "<tr><td>"+modelo+
		"</td><td>"+placa+
		"</td><td>"+hora+" : "+minutos+	
		"</td><td><button class='btn btn-danger'onclick='apagarVeiculo(\""+placa+"\")'>EXCLUIR</button></td>"+						
		"</tr>";
	}

}