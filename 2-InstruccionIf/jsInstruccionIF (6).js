function mostrar()
{
//tomo la edad  
var edadpers
	
	edadpers=document.getElementById('edad').value;
	
	edadpers=parseInt(edadpers);

	if (edadpers < 13 )
	{
	alert ("Niño") ; 	
	}
	else { 
		if  ( edadpers < 17){
		alert ("Adolescente");
		} else {
			alert("sos mayor")}
	}

	



}//FIN DE LA FUNCIÓN