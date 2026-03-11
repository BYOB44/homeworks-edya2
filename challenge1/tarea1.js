//TODAS LAS FUNCIONES DE ARRAY EN JAVASCRIPT
//MOLIONA LARA ALEJANDRO

const arr = [1, 2, 3, 4, 5];

console.log("Array base:", arr);

// at() → Devuelve el elemento en una posición específica (este permite índices negativos)
console.log("at():", arr.at(0), arr.at(-1));

// concat() → Une arrays sin modificar el original
console.log("concat():", arr.concat([6, 7]));

// constructor → Referencia al constructor del array
console.log("constructor:", arr.constructor === Array);

// copyWithin() → Copia parte del array dentro del mismo
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3);
console.log("copyWithin():", copyArr);

// entries() → Devuelve un iterador con índice y valor
for (let [i, v] of arr.entries()) {
  console.log("entries():", i, v);
}

// every() → Verifica si TODOS cumplen una condición
console.log("every():", arr.every(n => n > 0));

// fill() → Rellena el array con un valor
let fillArr = [1, 2, 3];
fillArr.fill(0);
console.log("fill():", fillArr);

//  filter() → Filtra elementos según condición
console.log("filter():", arr.filter(n => n % 2 === 0));

// find() → Devuelve el primer elemento que cumple condición
console.log("find():", arr.find(n => n > 3));

// findIndex() → Devuelve el índice del primer elemento que cumple
console.log("findIndex():", arr.findIndex(n => n > 3));

// findLast() → Devuelve el último elemento que cumple
console.log("findLast():", arr.findLast(n => n < 5));

// findLastIndex() → Devuelve el índice del último que cumple
console.log("findLastIndex():", arr.findLastIndex(n => n < 5));

// flat() → Aplana arrays anidados
console.log("flat():", [1, [2, [3]]].flat(2));

// flatMap() → Map + flat en una sola operación
console.log("flatMap():", [1, 2, 3].flatMap(n => [n, n * 2]));

// forEach() → Itera sobre cada elemento (no retorna nada)
arr.forEach(n => console.log("forEach():", n));

// includes() → Verifica si un valor existe
console.log("includes():", arr.includes(3));

// indexOf() → Devuelve el primer índice donde aparece un valor
console.log("indexOf():", arr.indexOf(3));

// join() → Convierte el array en string con separador
console.log("join():", arr.join("-"));

// keys() → Iterador de índices
for (let key of arr.keys()) {
  console.log("keys():", key);
}

// lastIndexOf() → Devuelve el último índice donde aparece un valor
console.log("lastIndexOf():", [1, 2, 3, 2].lastIndexOf(2));

// map() → Transforma cada elemento
console.log("map():", arr.map(n => n * 2));

// pop() → Elimina el último elemento (modifica el array)
let popArr = [1, 2, 3];
popArr.pop();
console.log("pop():", popArr);

// push() → Agrega elemento al final (modifica el array)
let pushArr = [1, 2];
pushArr.push(3);
console.log("push():", pushArr);

// reduce() → Reduce el array a un solo valor
console.log("reduce():", arr.reduce((acc, n) => acc + n, 0));

// reduceRight() → Reduce desde la derecha
console.log("reduceRight():", arr.reduceRight((acc, n) => acc - n));

// reverse() → Invierte el array (modifica)
let reverseArr = [1, 2, 3];
reverseArr.reverse();
console.log("reverse():", reverseArr);

// shift() → Elimina el primer elemento (modifica)
let shiftArr = [1, 2, 3];
shiftArr.shift();
console.log("shift():", shiftArr);

// slice() → Devuelve una copia parcial (no modifica)
console.log("slice():", arr.slice(1, 4));

// some() → Verifica si AL MENOS uno cumple condición
console.log("some():", arr.some(n => n > 4));

// sort() → Ordena el array (modifica)
let sortArr = [10, 2, 5];
sortArr.sort((a, b) => a - b);
console.log("sort():", sortArr);

// splice() → Agrega o elimina elementos (modifica)
let spliceArr = [1, 2, 3, 4];
spliceArr.splice(1, 2);
console.log("splice():", spliceArr);

// toLocaleString() → Convierte a string según región
console.log("toLocaleString():", [1000, 2000].toLocaleString("es-CO"));

// toString() → Convierte el array en string
console.log("toString():", arr.toString());

// unshift() → Agrega elemento al inicio (modifica)
let unshiftArr = [2, 3];
unshiftArr.unshift(1);
console.log("unshift():", unshiftArr);

// values() → Iterador de valores
for (let value of arr.values()) {
  console.log("values():", value);
}