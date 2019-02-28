function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var respuesta=true;
	
	while (respuesta==true) 
	{
	contador++;
		do  
		{	
		num=prompt("Ingresar numero");
		num=parseInt(num);
		} while (isNaN(num));
	if (num>=0) 
 		{
 		positivo+=num;	
 	 	}
 	 else  
 		{
 		negativo*=num;	
 	 	}
 	respuesta=confirm("Quiere ingresar otro num");
 	} 		

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN