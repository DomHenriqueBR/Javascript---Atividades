function maiorEMenor(lista) {
    let maior = lista[0];
    let menor = lista[0];
    
    for (let numero of lista) {
        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }
    
    return { maior, menor };
}

console.log(maiorEMenor([10, 25, 3, 45, 65, 8, 75, 2, 90, 18])); // Saída: { maior: 90, menor: 2 }
