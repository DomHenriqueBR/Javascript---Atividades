let lado1 = 5, lado2 = 6, lado3 = 7;
let semiPerimetro = (lado1 + lado2 + lado3) / 2;
let area = Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3));
console.log(`A área do triângulo é: ${area}`);
