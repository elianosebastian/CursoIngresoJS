/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var prod1
	var prod2
	var prod3
    
    prod1 = PrecioUno.value;
    prod2 = PrecioDos.value;
    prod3 = PrecioTres.value;
    
    prod1 = parseInt(prod1);
    prod2 = parseInt(prod2);
    prod3 = parseInt(prod3);

    suma = (prod1+prod2+prod3);

    alert('La suma es  '+suma);

}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}