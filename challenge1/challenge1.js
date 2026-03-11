//DESARROLLADO POR ALEJANDRO MOLINA LARA
//Las funciones regulares y las arrow functions cumplen la misma función básica, pero se diferencian principalmente en la sintaxis y 
// en el manejo del this.
//Las arrow functions son más modernas y cortas, pero no tienen su propio this, lo que puede cambiar su comportamiento en objetos.

// Función tradicional
function comprobarNumero(num) {
  if (num % 2 === 0) {
    console.log("El número " + num + " es PAR");
  } else {
    console.log("El número " + num + " es IMPAR");
  }
}

comprobarNumero(8);
comprobarNumero(5);


//Función de flecha
const comprobarNumeroArrow = (num) => {
  if (num % 2 === 0) {
    console.log(`El número ${num} es PAR`);
  } else {
    console.log(`El número ${num} es IMPAR`);
  }
};

comprobarNumeroArrow(10);
comprobarNumeroArrow(7);