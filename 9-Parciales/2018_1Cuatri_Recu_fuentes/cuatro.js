function mostrar()
{
 var num1;
 var num2;
 var num3;
 var num4;
 var suma;
 var masgrand;

num1 =  prompt("Ingrese primer numero");
num1 =  parseInt(num1);
num2 =  prompt("Ingrese segundo numero");
num2 =  parseInt(num2);
num3 =  prompt("Ingrese tercer numero");
num3 =  parseInt(num3);
num4 =  prompt("Ingrese cuarto numero");
num4 =  parseInt(num4);  

suma = num1+num2+num3+num4;
 

  if (num1>num2 && num1>num3 && num1>num4)
  {
  masgrand=num1;
  } else if (num2>num1 && num2>num3 && num2>num4 )
      {
     masgrand=num2;
      } else if (num3>num1 && num3>num2 && num3>num4) {
              masgrand=num3;
             
                            } else  {
                                      masgrand=num4;
                                      
                                      }
  
  if (suma>100) 
  { 
  desc=suma*0.10;
  total = suma - desc;
  }  else { if (suma>50)
             {
             desc=suma*0.05;
             total = suma - desc;
             } 
          }                 
        else {
              if (suma<50) 
               {
                rec=suma*0.15;
                total = suma + rec;
                }
              }                          
alert ("El mayor precio es")              












}


