
function mostrar()
{
var mascota1;
var mascota2;
var peso1;
var peso2;
var suma;


 mascota1 = prompt("Ingresar el nombre");
 mascota2 = prompt("Ingresar el nombre de la otra mascota ");

 peso1 = prompt("Ingresar el peso de su "+mascota1);
 peso2 = prompt("Ingresar el peso de su "+mascota2);

 peso1 = parseInt(peso1);
 peso2 = parseInt(peso2);

 suma = peso1 + peso2 ; 

 alert ("tenes dos mascotas "+mascota1+" y "+mascota2+" Que pesan "+peso1+"y "+peso2+" kilos y la suma es "+suma);

}