

var preguntas = [
{ pregunta: "quien canta la salsa GOTAS DE LLUVIA?", respuesta: "grupo niche"},
{ pregunta: "quien descubrio AMERICA?", respuesta: "SIMON BOLIVAR"},
{ pregunta: "de que color es el caballo de simon bolivar?", respuesta: "blanco"}, //http://www.ambiente.gob.ec/areas-protegidas-3/
{ pregunta: "Cuantos van en el carro de coyotito?", respuesta: "5"},
{ pregunta: "cuantos van en el carro de los chispas?", respuesta: "3"}
];
//Imprime las respuestas, distinguiendo del tipo, correcta o incorrecta
function imprimirRespuestas(respondidaCorrectamente)
{
	var stringRespuestas = '';
	var contRespuestas = 0;
	for (var i =0; i<preguntas.length; i++)
	{	
		if(respondidaCorrectamente==preguntas[i]["acerto"])
		{
			contRespuestas++;
			stringRespuestas += "<p><b>" + preguntas[i].pregunta + "</b><br>" + 
			preguntas[i].respuestaUsuario + "</p>";		
		
			//Si la respuesta es incorrecta, agregar las respuesta verdadera	
			if(!preguntas[i].acerto)
			{
			stringRespuestas+= "<i>La respuesta correcta era: " + 
			preguntas[i].respuesta + "</i>";
			}	
		}
	}
	
	if(contRespuestas<1)
	{
		stringRespuestas = "No hubo respuestas ";
		if(respondidaCorrectamente){
			stringRespuestas += "correctas";
		}else{
			stringRespuestas += "incorrectas";}
	}
	return stringRespuestas;
}


function imprimirCuestionario()
{
	html += '<h3 style="color:green;">Respuestas Correctas</h3>';
	html += imprimirRespuestas(true);
	html += '<h3 style="color:red;">Respuestas Incorrectas</h3>';
	html += imprimirRespuestas(false);
	return html;
}

function printHTML(mensaje)
{
	
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

for(var i=0; i<preguntas.length; i++)
{
	var respuestaSimple;
	do{
		respuestaSimple = prompt("Responda: " + preguntas[i].pregunta);
	}while(respuestaSimple=='')

	if(isNaN(respuestaSimple))
	{
		preguntas[i].respuestaUsuario = respuestaSimple.toLowerCase();
	}else{
		preguntas[i].respuestaUsuario = parseInt(respuestaSimple);
	}

	if(preguntas[i].respuestaUsuario==preguntas[i].respuesta)
	{
		preguntas[i].acerto = true;
	}else{
		preguntas[i].acerto = false;	
	}
}

var html = "<h1>Pregunta Pregunton</h1>";
html += "<h2>Aqui el resultado de sus respuestas</h2>"
html += imprimirCuestionario();
printHTML(html);