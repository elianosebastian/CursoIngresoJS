function mostrar()
{
//tomo la edad  
var edadpers
var ecivil	
	
	edadpers=edad.value;
	 ecivil= document.getElementById('estadoCivil');
	 
	
	edadpers=parseInt(edadpers);

	if ( edadpers < 18 && ecivil!="Soltero" )
	{
	alert ('Es muy pequeño para NO ser soltero.') ;	
	}
	


}//FIN DE LA FUNCIÓN