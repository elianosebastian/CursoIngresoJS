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
  /*
  if (cantlamp>=6)
 	  {
 	     desc  = total*50/100;
       preciototal = total - desc;
       precioDescuento.value = preciototal;                             
     } else if (cantlamp==5 )
               { 
               desc  = total*30/100;
               preciototal = total - desc;
               precioDescuento.value = preciototal;
               }    
               else if ( marca=="ArgentinaLuz") {
                       desc  = total*40/100;
                       preciototal = total - desc;
                       precioDescuento.value = preciototal;
                       } 
                       else if  (cantlamp==4 ) 
                            {
                            desc  = total*20/100;
                            preciototal = total - desc;
                            precioDescuento.value = preciototal;
                              } else if (cantlamp==4 && marca=="ArgentinaLuz")
                                  {
                                   desc  = total*25/100;
                                   preciototal = total - desc;
                                   precioDescuento.value = preciototal; 
                                  } else if (cantlamp==4 && marca=="FelipeLamparas")
                                             {
                                             desc  = total*25/100;
                                             preciototal = total - desc;
                                             precioDescuento.value = preciototal; 
                                            } 
                                         else if  (cantlamp==3 && marca=="ArgentinaLuz")
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
  
  */ /*
  switch (cantlamp){
    case 5:
       if (marca=="ArgentinaLuz") 
       {
        desc  = total*0.4;
        precioDescuento.value = total;
       } else {
              desc  = total*0.3;
              precioDescuento.value = total;
              }
     break;

    case 4:
      
      if  (marca=="ArgentinaLuz" || marca=="FelipeLamparas" )  
         {
            desc  = total*0.25;
            precioDescuento.value = total;
         } else {
                desc  = total*0.20;
                precioDescuento.value = total;
                }
      break;  
      
    case 3: 

        if (marca=="ArgentinaLuz")  
          {
            desc  = total*0.15;
            precioDescuento.value = total;  
          } else if (marca=="FelipeLamparas")  
                    {
                    desc  = total*0.1;
                    precioDescuento.value = total;   
                    } else {
                            desc  = total*0.05;
                            precioDescuento.value = total;
                            }
      break;
      
      default: 
      if (cantlamp>=6)
        {
        desc  = total*0.5;
        precioDescuento.value = total;   
        } break;
   */
   switch (cantlamp){
    case "5":
        switch(marca){
                  case "ArgentinaLuz":
                   desc  = total*0.4;
                   precioDescuento.value = total;
                   default: 
                   desc  = total*0.3;
                   precioDescuento.value = total;
                     }
   break;
   case "4":











   }





  if (total > 120)
  {
  rec = total*0.10;
  recargototal = total + rec;
  alert ("IIBB Usted pago : "+recargototal+"$ , siendo 10% el impuesto que se pagó.");
  }






















}



