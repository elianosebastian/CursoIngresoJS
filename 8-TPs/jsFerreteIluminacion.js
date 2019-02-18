/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

	var precio;
	var cantlamp;
	var marca;
	var desc;
	var total;
  var preciofinal;

	precio=35;
	precio=parseInt(precio);
  cantlamp =  Cantidad.value;
  cantlamp = parseInt(cantlamp);
  marca    =  Marca.value;
  


  total = cantlamp*precio;
  
  if (cantlamp>=6)
 	  {
 	     desc  = total*50/100;
       preciototal = total - desc;
       precioDescuento.value = preciototal;                             
     } if (cantlamp==5 && marca=="ArgentinaLuz")
               { 
               desc  = total*40/100;
               preciototal = total - desc;
               precioDescuento.value = preciototal;
               }    
                  else {
                       desc  = total*30/100;
                       preciototal = total - desc;
                       precioDescuento.value = preciototal;
                       } 
                        if  (cantlamp==4  && marca=="ArgentinaLuz") 
                            {
                            desc  = total*25/100;
                            preciototal = total - desc;
                            precioDescuento.value = preciototal;
                              } else if (cantlamp==4 && marca=="FelipeLamparas")
                                  {
                                   desc  = total*25/100;
                                   preciototal = total - desc;
                                   precioDescuento.value = preciototal; 
                                  } else {
                                             desc  = total*20/100;
                                             preciototal = total - desc;
                                             precioDescuento.value = preciototal; 
                                          } 
                                         if  (cantlamp==3 && marca=="ArgentinaLuz")
                                                  {
                                                  desc  = total*15/100;
                                                  preciototal = total - desc;
                                                  precioDescuento.value = preciototal; 
                                                  } else if (cantlamp==3 && marca=="FelipeLamparas") 
                                                      {
                                                       desc  = total*10/100;
                                                       preciototal = total - desc;
                                                       precioDescuento.value = preciototal; 
                                                       } else { 
                                                              desc  = total*5/100;
                                                              preciototal = total - desc;
                                                              precioDescuento.value = preciototal;
                                                              }
  if (preciototal > 120)
  {
  rec = preciototal*10/100;
  recargototal = preciototal + rec;  
  alert ("IIBB Usted pago : "+recargototal+"$ , siendo "+rec+"$ el impuesto que se pagó.");
  }






















}



