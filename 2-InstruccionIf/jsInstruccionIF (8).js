function mostrar()
{
//tomo la edad  
var edadpers
var ecivil	
	
	edadpers=edad.value;
 	ecivil= document.getElementById('estadoCivil').value; 
	
	edadpers=parseInt(edadpers);

	if ( edadpers > 18 && ecivil=="Soltero" )
    	{
     alert("Es soltero y no es menor");
		}
	
	


}//FIN DE LA FUNCIÓN