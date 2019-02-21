function mostrar()
{
var planeta
planeta = prompt("Ingresar un planeta");

switch (planeta)
{
case "tierra":
		alert("Aca vivimos");
		break;
case "mercurio":		
case "venus":	 
case "marte":
		alert("acá hace más calor")	;
		break;	
case "jupiter":		
case "saturno":	 
case "urano":
case "neptuno":		
		alert("aca hace mas frio");
		break;
default:
       alert("Ese planeta no es valido");

}















}
