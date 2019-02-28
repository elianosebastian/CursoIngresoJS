function mostrar()
{

	var contador=0;
	var suma =0;
	var num;
	var prom;
	while (contador<5) 
	{
	contador++;
	do  {	
		num=prompt("Ingresar numero");
		num=parseInt(num);
		} while (isNaN(num));
		suma+=num;
 	 }


document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN
