function mostrar()
{

	var cantlibros;
	var precio;
    var desc2;
    var tipo;
    var rec;
    var rectotal;
    var totaldesc;

	cantlibros = prompt ("Cantidad de libros para comprar");
	
	cantlibros = parseInt(cantlibros);
	
	precio = prompt ("Ingresar Precio Total de todos los libros");
    
    precio = parseInt(precio);

    tipo = prompt ("Pago con Debito (D) o Pago con Tarjeta (T)");


   if (cantlibros>2)
			{
			desc = precio *10/100;
			totaldesc = precio - desc;
			alert("Por la compra de mas de 2 libros usted se lleva un descuento del 10%. Su total:" +totaldesc);
			}
  				 else (precio>2000)
  							 {
   								desc2 = precio *25/100;
   								totaldesc = precio - desc2;
   								alert("Por la compra de mas de 2 libros y porque supero los 2000$ se le descontara un 25% . Su total:" +totaldesc);
  								 }
  		if (tipo="T") {
    			rec = totaldesc*10/100; 	
  				totalrec = precio + rec;
  			alert ("Debido a que usted paga con tarjeta , 10% de recargo, le queda un total de :"+totalrec);
  				}

 alert("Usted compro "+cantlibros+" libros y el total de los mismos es: "+totalrec+" $");

}
