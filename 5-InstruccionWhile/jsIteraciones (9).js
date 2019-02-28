function mostrar()
{

	var contador=0;
	var respuesta='si';
	var bandera=true;
	var num;
	var min;
	var max;
	while (respuesta=='si') 
	{
	contador++;
		do  
		{	
		num=prompt("Ingresar numero");
		num=parseInt(num);
		respuesta=prompt("Quiere ingresar otro num");
		} while (isNaN(num));
    if (bandera==true) 
    {
    bandera=false;	
    max=num;
    min=num;
    }   else {
       		if (num>max){
       					max=num;
       					}
    		if (num<min) {
    					  min=num;
    					 }
    		}

    }
document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;
  



}//FIN DE LA FUNCIÓN