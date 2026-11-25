//ejemplo de ciclo 


//for (let i = 1; i <= 10; i++){
//    console.log(i);
//}


///////////////// ciclo while

//let contador = 3;
//while (contador > 0) {
//    console.log(contador);
//    contador--; // resta 1 en cada vuelta 
//}




/////////////////////////////// Funcion y return

//function saludar (nombre){
//  return `hola, ${nombre} Bienvenid@ a la selva`;
//}
//console.log(saludar("ana"));
//console.log(saludar("Eneivel"));



//function sumar ( a, b = 0){ //el signo = representa lo que vale por defecto el numero, en este caso 0 
//    return a + b;
//}
//console.log(sumar(2, 3 ));
//console.log(sumar(2));



// funcion flecha 

//const multiplicar = (a,b) => a * b;
//console.log(multiplicar(878878, 5));




//function totalConIVA(precio) {
//  return Math.round(precio * 1.19);
//}

//console.log(totalConIVA(10000)); // 11900



//function ejemplo() {
//  const secreto = 42;
//  console.log(secreto); // 42
//}

//ejemplo();
//console.log(ejemplo); // Error: secreto is not defined






/////////////////////////////// Arrays y objetos 



//const frutas = ["manzana", "pera", "uva"];


//.log(frutas[0]);
//console.log(frutas[2]);
//console.log(frutas.length);

//frutas.push("kiwi");
//console.log(frutas);

//frutas.pop();
//console.log(frutas.includes("pera"));





const numeros = [1, 2, 3, 4];

const dobles = numeros.map((n) => n * 2);
console.log(dobles); // [2, 4, 6, 8]

const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4]

const suma = numeros.reduce((acumulado, n) => acumulado + n, 0);
console.log(suma); // 10






const persona = { nombre: "Ana", edad: 28 };

console.log(persona.nombre);   // "Ana"
console.log(persona.edad);  // 28

persona.ciudad = "Santiago";   // agregar una propiedad
persona.edad = 29;             // cambiar una propiedad

console.log(persona);               // { nombre: "Ana", edad: 29, ciudad: "Santiago" }
console.log(Object.keys(persona));  // ["nombre", "edad", "ciudad"]