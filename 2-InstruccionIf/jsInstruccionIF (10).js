function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numero
numero = Math.floor((Math.random() * 10) + 1);	

console.log(numero);
if (numero>=9)
	{
		alert( "EXCELENTE "+numero);
	}
	else {	
    if (numero>=4)
	{
		alert("Aprobado "+numero);
	}
	}	
else {
	alert("Vamos, la proxima se puede "+numero);
}

}//FIN DE LA FUNCIÓN