/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importe;
	var aumento;

	aumento = resultado.value;
	importe = sueldo.value;

	aumento = parseInt(aumento);
	importe = parseInt(importe);

	aumento = (importe*10/100);

 	alert ("Resultado del aumento del 10%  es "+aumento);

}
