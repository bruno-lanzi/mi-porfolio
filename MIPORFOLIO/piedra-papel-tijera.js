var eleccionMaquina = parseInt(eleccionMaquina);
let max;
let min;
let tijeras ;
let papeles ;
let piedras;

function comenzar()
{
	max = 3;

	min = 1;

    eleccionMaquina = Math.floor(Math.random() * (max - min + 1)+ min);
	 
		alert("Comenzo el juego!!!" );
    


}//FIN DE LA FUNCIÓN
function piedra()
{
    
	piedras = document.getElementsByClassName("imagenPiedra").value;
    piedras = parseInt(piedras);
    

    
  switch(eleccionMaquina){
    case 1: 
        alert("usted empato, porque la maquina eligio" +eleccionMaquina);
    break;
    case 2:
        alert("usted perdio, porque la maquina eligio" +eleccionMaquina);
    break;
    case 3:
        alert("usted gano, porque la maquina eligio" +eleccionMaquina);
    break;
  }

    

}//FIN DE LA FUNCIÓN
function papel()
{
   
    papeles = document.getElementsByClassName("imagenPapel").value;
   
    switch(eleccionMaquina){
        case 1:
            alert("usted gano, porque la maquina eligio" +eleccionMaquina);
        break;
        case 2:
            alert("usted empato, porque la maquina eligio" +eleccionMaquina);
        break;
        default:
            alert("usted perdio, porque la maquina eligio" +eleccionMaquina);
        break;
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	
    tijeras = document.getElementsByClassName("imagenTijera").value;
    

    switch(eleccionMaquina){
        case 1:
            alert("usted perdio, porque la maquina eligio" +eleccionMaquina);
        break;
        case 2:
            alert("usted gano, porque la maquina eligio" +eleccionMaquina);
        break;
        default:
            alert("usted empato, porque la maquina eligio" +eleccionMaquina);
        break;
      }


}