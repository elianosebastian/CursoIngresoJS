function mostrar()
{
var nota;
var cont=0;
var sexo;
var comparacion=true;
var notabaj;
var sexonotabaj;
 while(cont<5) 
 {
 cont++;
 do {
 	sexo=prompt("Ingresar sexo m o f");
	 } while(sexo!="m" && sexo!="f");
 do {
 	nota=prompt("Ingresar nota");
 	nota=parseInt(nota);
 	suma+=nota;
 	promedio=suma/cont;
 	} while (isNan(nota) && (nota<0 || nota >10));
 if (comparacion)
  	{	
  	notabaj=false;
  	notabaj=nota;	
 	} else { if (nota<notabaj) {
 								nota=notabaj;
 								sexo=sexonotabaj;
 								}
 			else  {}					
 			}
}