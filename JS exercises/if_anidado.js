/* 
    Cree un algoritmo que permita determinar
    la calificación en letras de un alumno

    Si la nota se encuentra entre 100 a 90 = A
    Si la nota se encuentra entre 80 a 89 = B
    Si la nota se encuentra entre 70 a 79 = C
    Si la nota se encuentra entre 60 a 69 = D
    Si la nota es inferior a 60 = F

*/

let note = 70;
let noteWord = '';

if (note >= 90) {
    noteWord = 'A';
    console.log(note + " es equivalente a " + noteWord);
} else if (note >= 80){
    noteWord = 'B';
    console.log(note + " es equivalente a " + noteWord);
} else if (note >= 70){
    noteWord = 'C';
    console.log(note + " es equivalente a " + noteWord);
} else if (note >= 60) {
    noteWord = 'D';
    console.log(note + " es equivalente a " + noteWord)
} else {
    noteWord ='F';
    console.log(note + " es equivalente a " + noteWord)
}
