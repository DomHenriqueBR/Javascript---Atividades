function verificaNumeros(a, b) {
    return (a === 30 || b === 30 || a + b === 30 || (a === 12 && b === 12));
}

console.log(verificaNumeros(12, 30)); // true
console.log(verificaNumeros(12, 12)); // true
console.log(verificaNumeros(20, 10)); // true
console.log(verificaNumeros(10, 5));  // false
