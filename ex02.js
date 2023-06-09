const receber = require("prompt-sync");
const prompt = receber();

let nota = [];//array para receber as notas do teclado
let arrayNum = [];//array para pegar a conversão
//loop para receber as 4 notas do usuario
for (let i=0 ; i < 4 ; i++){
    nota[i] = prompt("Digite a nota: ");
}
//loop para converter o array de tipo string para numerico
for (i=0 ; i < 4 ; i++){ 
    var elementoNumerico = parseInt(nota[i]);
    arrayNum.push(elementoNumerico);
}
//função que calcula e retorna a media
function calculomedia(array){
    let somanotas = 0 ;
    for (i=0 ; i < 4 ; i++){
        somanotas += array[i]; 
    }
    return somanotas/4 ;
 }

console.log(calculomedia(arrayNum));