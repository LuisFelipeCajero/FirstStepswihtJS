//Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let mayor = 0;

for (let x = 0; x < numeros.length; x++){
        if (numeros[x] > mayor){
            mayor = numeros[x]
        }
}

console.log(mayor)
