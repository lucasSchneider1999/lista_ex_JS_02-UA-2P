// ({sigint: true})
const receber = require("prompt-sync");
const prompt = receber();
let entrada = prompt("Digite uma frase: ");

function converterParaMaiusculo(entrada) {
    var resultado = '';
    for (var i = 0; i < entrada.length; i++) {
      var char = entrada[i];
      if (char >= 'a' && char <= 'z') {
        // Converter caractere em minúsculo para maiúsculo
        var codigoUnicode = char.charCodeAt(0) - 32;
        var charMaiusculo = String.fromCharCode(codigoUnicode);
        resultado += charMaiusculo;
      } else {
        resultado += char;
      }
    }
    return resultado;
  }

  entrada = converterParaMaiusculo(entrada) ;
  console.log(entrada);