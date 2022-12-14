var numeroSecreto = parseInt(numeroSecreto); 
var contadorIntentos = 0;

var min;
var max;

function comenzar()
{
	
	max = 100;

	min = 1;

    numeroSecreto = Math.floor(Math.random() * (max - min + 1)+ min);
	 
		alert("Comenzo el juego!!!");
	 
	

}

function verificar()
{
	var numero = parseInt(document.getElementById("txtIdNumero").value);

	if (numero == numeroSecreto){
		switch(contadorIntentos){
			case 1:
				alert("Usted es un psiquico, Lo logro en el intento: "+ contadorIntentos);
			break;
			case 2:
				alert("Exelente percepcion, Lo logro en el intento: "+ contadorIntentos);
			break;
			case 3:
				alert("Esto es suerte,. Lo logro en el intento: "+ contadorIntentos);
			break;
			case 4:
				alert("Excelente técnica,. Lo logro en el intento: "+ contadorIntentos);
			break;
			case 5:
				alert("usted está en la media, Lo logro en el intento: "+ contadorIntentos);
			break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Falta mas tecnica, Lo logro en el intento: "+ contadorIntentos);
			break;
	
			default:
				alert("desafortunado en el juego, afortunado en el amor. Lo logro en el intento: "+ contadorIntentos);
			break;
	
	
		   }
	   }
	  
	  else{
	  
		do{
		   contadorIntentos = contadorIntentos + 1;
			  txtIdIntentos.value = contadorIntentos;
			alert("Ese numero no es, se le suma un intento" );
	   
		}while(contadorIntentos < 1);

		if( numero > numeroSecreto ){

			alert("te pasaste");   
		 
		}
	   
		else {
		 
		 alert("le falta ");
		}
	  
	   
	  }
}

