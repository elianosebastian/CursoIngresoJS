function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numero
numero = Math.floor((Math.random() * 10) + 1);	
var mensaje = "Excelente";
var mensaje2 = "Aprobado";
var mensaje3 = "Vamos, la proxima se puede";

console.log(numero);

if (numero>=9)
	{
   alert(mensaje);		
	}
	else if (numero>=4)
	{
		alert(mensaje2);
	}	
    else {
	alert(mensaje3);
}

}//FIN DE LA FUNCIÓN