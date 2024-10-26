function contarVogaisConsoantes(frase) {
    let vogais = 0;
    let consoantes = 0;
    let fraseLimpa = frase.toLowerCase().replace(/[^a-z]/g, ''); // Remove caracteres não alfabéticos
    
    for (let char of fraseLimpa) {
        if ("aeiou".includes(char)) {
            vogais++;
        } else {
            consoantes++;
        }
    }
    
    return { vogais, consoantes };
}

console.log(contarVogaisConsoantes("Exemplo de frase")); // Saída: { vogais: 6, consoantes: 7 }
