/**
 * Un buen caso para usar switch
 * 
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 * 
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"  
 * 
 * Explra esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 * 
 */

let mes = 4;

// Escribir a partir de aquí

switch (Math.ceil(mes / 3)) {
    case 1:
      console.log("Nos encontramos en el primer trimestre");
      break;
    case 2:
      console.log("Nos encontramos en el segundo trimestre");
      break;
    case 3:
      console.log("Nos encontramos en el tercer trimestre");
      break;
    case 4:
      console.log("Nos encontramos en el cuarto trimestre");
      break;
    default:
      console.log("Mes inválido");
  }
  


