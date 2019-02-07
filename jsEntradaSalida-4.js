/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=prompt ("Porfavor ingresar su nombre");
	document.getElementsById('elNombre').value=nombre;
	alert('nombre');
}

