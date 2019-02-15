function mostrar()
{
var total;
var cantpersonas;
var propina;
var cantpersonas;
var cantpagar;

	cantpersonas = prompt("Ingresar cantidad de personas");
	total = prompt("Ingresar el total de su mesa");

	cantpersonas = parseInt(cantpersonas);
	total = parseInt(total);

	propina = total*10/100;

	cantpagar = total/cantpersonas;

 alert("Ustedes son "+cantpersonas+" Y su total es:  "+total+" , mas 10% de propina: "+propina+" y cada uno debe pagar:  "+cantpagar);
 }
