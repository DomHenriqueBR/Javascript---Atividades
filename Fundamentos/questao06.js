function numeroComMaiorOcorrencia(arr) {
    let contagem = {};
    let maxNum = arr[0];
    let maxContagem = 1;

    arr.forEach(num => {
        contagem[num] = (contagem[num] || 0) + 1;
        if (contagem[num] > maxContagem) {
            maxContagem = contagem[num];
            maxNum = num;
        }
    });

    return maxNum;
}

console.log(numeroComMaiorOcorrencia([1, 2, 2, 3, 3, 3, 4])); // 3
