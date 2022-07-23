/* Crear una función que reciba un arreglo como argumento, la función debe de retornar OTRO
arreglo pero filtrando todos los nombres que empiezan con una determinada letra */

function filtrarPorLetra(arr, letra){
    let nuevoArr = [];

    for (let i = 0; i < arr.length; i++){
        let name = arr[i];
        if (name[0] === letra){
            nuevoArr.push(name)
        }

    

}

    return  nuevoArr
}
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra( heroes, 'S');
console.log( heroesCon ); // She Hulk, Spiderman
