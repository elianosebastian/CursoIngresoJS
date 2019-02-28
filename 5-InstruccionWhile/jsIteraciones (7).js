function mostrar()
{

	var contador=0;
	var suma =0;
	var num;
	var respuesta='si';
	while (respuesta=='si') 
	{
	contador++;
		do  
		{	
		num=prompt("Ingresar numero");
		num=parseInt(num);
		respuesta=prompt("Quiere ingresar otro num");
		} 	while (isNaN(num))
			{	
			suma+=num;
 	 		}
 	} 		
document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN