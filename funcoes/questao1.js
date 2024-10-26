function inverterNumero(numero) {
    let numeroStr = numero.toString();
    let numeroInvertido = '';
    
    for (let i = numeroStr.length - 1; i >= 0; i--) {
        let digito = numeroStr[i];
        
        switch (digito) {
            case '0': numeroInvertido += '0'; break;
            case '1': numeroInvertido += '1'; break;
            case '2': numeroInvertido += '2'; break;
            case '3': numeroInvertido += '3'; break;
            case '4': numeroInvertido += '4'; break;
            case '5': numeroInvertido += '5'; break;
            case '6': numeroInvertido += '6'; break;
            case '7': numeroInvertido += '7'; break;
            case '8': numeroInvertido += '8'; break;
            case '9': numeroInvertido += '9'; break;
        }
    }
    
    return parseInt(numeroInvertido);
}

console.log(inverterNumero(12356)); // Saída: 65321
