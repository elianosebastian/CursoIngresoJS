function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo!="f" && sexo!="m")	
		 {
		 sexo = prompt ("Error ingrese f o m para validar sexo") 
		}
document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN