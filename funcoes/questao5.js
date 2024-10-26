function maiorPalavra(frase) {
    let palavras = frase.split(' ');
    let maior = palavras[0];
    
    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }
    
    return maior;
}

console.log(maiorPalavra("Encontrar a maior palavra nesta frase")); // Saída: "palavra"
