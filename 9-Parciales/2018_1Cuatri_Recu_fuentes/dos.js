function mostrar()
{

var compra;
var descuento;
var total;
var iva ;
var totaldesc;

compra = prompt ("Ingresar valor de compra ");

compra = parseInt(compra);

descuento = compra*10/100;

totaldesc = compra - descuento;

iva = totaldesc*21/100;

total = iva + totaldesc

alert ("tu compra es de $"+compra+" tenes un descuento del 10% queda en $ "+totaldesc+" mas el iva es $ "+total);



}
