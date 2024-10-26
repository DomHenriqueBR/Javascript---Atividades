function somaTamanhos(frase) {
    return frase.split(' ').reduce((soma, palavra) => soma + palavra.length, 0);
}

console.log(somaTamanhos("Aquele que habita o esconderijo do Altíssimo, à sombra do Onipresente descansará"));
