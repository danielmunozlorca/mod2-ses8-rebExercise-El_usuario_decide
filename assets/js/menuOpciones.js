var menu = "Seleccione que desea hacer: \n";
menu += "1.- Calcular cual número es mayor \n";
menu += "2.- Sumar \n";
menu += "3.- Restar \n";
menu += "4.- Multiplicar \n";
menu += "5.- Dividir \n";
menu += "6.- Mostrar los números ingresados \n";
menu += "7.- Salir\n";

var opcion = 0;

do {
  opcion = parseInt(prompt(menu));

  switch (opcion) {
    case 1:
        var numero1 = parseInt(prompt("Ingrese el primer número"));
        var numero2 = parseInt(prompt("Ingrese el segundo número"));
            if (numero1 > numero2) {
                window.alert(numero1 + " es mayor que " + numero2);
            } else {
                window.alert(numero2 + " es mayor que " + numero1);
            }
    break;  
    case 2:
        var numero1 = parseInt(prompt("Ingrese el primer número"));
        var numero2 = parseInt(prompt("Ingrese el segundo número"));
                window.alert(" El resultado de "+ numero1 + "+" + numero2 + " es "+ (numero1+numero2) );
    break; 
    case 3:
        var numero1 = parseInt(prompt("Ingrese el primer número"));
        var numero2 = parseInt(prompt("Ingrese el segundo número"));
                window.alert(" El resultado de "+ numero1 + "-" + numero2 + " es "+ (numero1 - numero2) );
    break; 
    case 4:
        var numero1 = parseInt(prompt("Ingrese el primer número"));
        var numero2 = parseInt(prompt("Ingrese el segundo número"));
                window.alert(" El resultado de "+ numero1 + "x" + numero2 + " es "+ (numero1 * numero2) );
    break;

    case 5:
    var numero1 = parseInt(prompt("Ingrese el primer número")); 
    var numero2 = [];
    var num2 = "";   
      do {        
        num2 = parseInt(prompt("Ingrese el segundo número"));
            if(num2 == 0)
            {alert("ingresar número mayor a cero")}
            else {
                  numero2.push(num2);
                  }
      }  
      while (num2 == 0)     
      window.alert(" El resultado de "+ numero1 + "/" + numero2 + " es "+ (numero1 / numero2) );
    break;

    case 6:
      var numero1 = parseInt(prompt("Ingrese el primer número"));
      var numero2 = parseInt(prompt("Ingrese el segundo número"));
      window.alert(" Los números ingresados son el "+ numero1 + " y el " + numero2 );
      break;
    case 7:
      alert("Gracias por participar");
      break;
    default:
      alert("Elección incorrecta. Adios!");
  }
} while (opcion != 7);
