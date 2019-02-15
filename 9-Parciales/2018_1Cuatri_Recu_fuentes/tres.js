function mostrar()
{
var total;
var cantpersonas;
var propina;
var cantpersonas;
var cantpagar;
var iva;
var ivatotal;

	cantpersonas = prompt("Ingresar cantidad de personas");
	total = prompt("Ingresar el total de su mesa");

	cantpersonas = parseInt(cantpersonas);
	total = parseInt(total);
		
	iva = total*21/100;

	ivatotal = iva + total;

	propina = ivatotal*10/100;

	cantpagar = ivatotal/cantpersonas;

	cantpagartotal = cantpagar+propina;

 alert("Ustedes son "+cantpersonas+" Y su total es:  "+total+" con iva(21%) : " +ivatotal+ " , mas 10% de propina: "+propina+" y cada uno debe pagar:  "+cantpagartotal);
 }
