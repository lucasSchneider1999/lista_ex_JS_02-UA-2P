const receber = require("prompt-sync");
const prompt = receber();

let nota = [];
let arrayNum = [];
for (let i = 0; i < 3; i++){
    nota[i] = prompt("digite a nota: ");
}
for (i = 0; i < 3; i++){
    var x = parseFloat(nota[i]);
    arrayNum.push(x);
}
function notaFinal(array){
    let somaMedia = 0;
    for (i=0 ; i<3 ; i++){
        somaMedia += array[i];
    }
    return (somaMedia);
}
let notaF = notaFinal(arrayNum);
console.log(notaF);
if (notaF < 210){
    console.log("Não é possivel passar");
}else if(notaF >= 280){
    console.log("Parabens ja esta aprovado")
}
else{
    console.log("É necessario tirar no minimo " +(280 - notaF), "na nota final para passar");
}