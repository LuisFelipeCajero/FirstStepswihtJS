/* Crear una función que reciba como argumento un arreglo, la función debe de retornar el
nombre que tenga más letras del arreglo, y debe de trabajar así:
let heroes = [‘Deadpool’, ‘Ciclope’, ‘Magneto’, ‘Profesor Charles Xavier’];
let heroeLargo = masLargo( heroes );
console.log( heroeLargo ); // Profesor Charles Xavier */


    function masLargo(built){
        let nombreLargo = '';

        for (let i = 0; i < built.length; i++){
            let name = built[i];
             if (name.length > nombreLargo.length){
            nombreLargo = name;
        } 
        }

        return nombreLargo;

    }
