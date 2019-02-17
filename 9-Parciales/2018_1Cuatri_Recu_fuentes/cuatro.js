function mostrar()
{
var cantlibros;
var precio;
var tipo;
var desc;
var totaldesc;
var totalrec;
var rec;
var mensaje  = "Recibe descuento del 10%";
var mensaje2 = "Recibe descuento del 15%";
var mensaje3 = "Recibe recargo del 10% por utilizar tarjeta de credito";

	cantlibros = prompt ("Cantidad de libros para comprar");
	
	cantlibros = parseInt(cantlibros);
	
	precio = prompt ("Ingresar Precio Total de todos los libros");
    
  precio = parseInt(precio);

  tipo = prompt ("Pago con Efectivo (D) o Pago con Tarjeta (T)");


   if (cantlibros>1 && precio<2000)
			{
			desc = precio *10/100;
			totaldesc = precio - desc;
			alert(mensaje);
      }
  			 else if  (cantlibros>1 && precio>=2000)
  				    {
   								desc = precio *15/100;
   								totaldesc = precio - desc;
   								alert(mensaje2);
  						}
                  
  		      if (tipo=="T") 
              {
    			     rec = totaldesc*10/100; 	
  				     totalrec = totaldesc + rec;
  		  	     alert(mensaje3);
  		         } else   {
                        totalrec = totaldesc;
                        }

 alert("Usted compro "+cantlibros+" libros y el total de su compra es  : "+totalrec+" $");

}
