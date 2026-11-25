//let nombre = "Camila";   // no cambia
//let edad = 30;             // puede cambiar
//edad = 31;                 // se cambió el valor de la variable
//nombre = "Eneivel"
//console.log(nombre, edad); // Camila 29






console.log(typeof "hola");    // "string": texto
console.log(typeof 42);        // "number": número
console.log(typeof true);      // "boolean": verdadero o falso
console.log(typeof undefined); // "undefined": variable sin valor





const ciudad = "Santiago";
console.log(`vivo en ${ciudad}`); // Vivo en Santiago








console.log(5 === 5);     // true: igual en valor y en tipo
console.log(5 === "5");   // false: un número no es un texto
console.log(5 !== 3);     // true: distinto
console.log(5 > 3);       // true
console.log(5 <= 3);      // false




//Operadores lógicos
console.log(5 > 3 && 2 > 1);  // true: las dos cosas deben ser verdad
console.log(5 > 3 || 2 > 10); // true: basta con que una sea verdad
console.log(!true);           // false: lo contrario







//tomar decisiones con if
const nota = 3.0;

if (nota >= 4.0){
    console.log("Aprobado");
} else{
    console.log("Reprobado");
} 

const hora = 12 ;
if (hora < 12){
    console.log("Buenos Dias");
} else if (hora < 20){
        console.log("Buenas Tardes");
    } else {
        console.log("Buenas Noches")
    }



    //practica propia 

    const nombre = "Eneivel Rodriguez";
    let edad = 28;
    console.log(nombre, edad)