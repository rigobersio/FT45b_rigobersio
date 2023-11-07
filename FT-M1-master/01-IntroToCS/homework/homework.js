'use strict';

function BinarioADecimal(num) {//10101 = 21
    if (typeof num === 'string') {
        var arrBinario = num.split('');
        var i = 0;
        var j = arrBinario.length - 1;
        var resultado = 0;
        while (i < arrBinario.length) {
            resultado += parseInt(arrBinario[i]) * (2 ** j);
            i++;
            j--;
        }
        return resultado;
    } else if (typeof num === 'number') {
        var strNum = num.toString();
        var arrBinario = strNum.split('');
        var i = 0;
        var j = arrBinario.length - 1;
        var resultado = 0;
        while (i < arrBinario.length) {
            resultado += parseInt(arrBinario[i]) * (2 ** j);
            i++;
            j--;
        }
        return resultado;
    }

}

function DecimalABinario(num) {// 13 --> 1101
    let arrBinarios = [];
    
    do {
        arrBinarios.push(num % 2) // [1, 0, 1, 1]
        num = Math.floor(num / 2);
    } while (num > 0);
    return arrBinarios.reverse().join('');
}

module.exports = {
    BinarioADecimal,
    DecimalABinario,
};
