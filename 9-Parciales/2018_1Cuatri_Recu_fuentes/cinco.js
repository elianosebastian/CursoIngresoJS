function mostrar()
{
	var precio;
 	var tipoPago; 
 	
 	precio = prompt("Ingresar precio");
 	tipoPago =prompt("Ingrese el tipo de pago");

 	switch (tipoPago) 
 	{
 		case "tarjeta visa":
 		case "mercadoPago" :
 		desc = precio - (precio*0.10);
 		break;
 		
 		case "paypal":
 		desc = precio - (precio*0.15);
 		break;

 		case "efectivo":
 		desc = precio - (precio*0.20);
 		break;	

 		case "todoIncluido":
 			switch (tipoPago)
 			{
 			case "paypal":
			desc = precio - (precio*0.35);				
 			default:
 			desc = precio - (precio*0.25);	
 			}
 		break;
 				
 		case "soloDesayuno":
 			switch (tipoPago)
 			{
 			case "efectivo":
			desc = precio - (precio*0.3);				
 			default:
 			desc = precio - (precio*0.00);	
 			}	
 		break;
 				
 		default:		
 		desc = precio - (precio*0.05);	
 	} 
 	// Corregir el ejercicio 














}
