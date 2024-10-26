function modificaFrase(frase) {
    return frase.split(' ').map(palavra => {
        return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();
    }).join(' ');
}

console.log(modificaFrase("Aquele que habita o esconderijo do Altíssimo, à sombra do Onipresente descansará"));
