function somarCubos(arr) {
    return arr.reduce((soma, num) => soma + Math.pow(num, 3), 0);
}

console.log(somarCubos([1, 2, 3]));  // 36
