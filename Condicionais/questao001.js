function compararNumeros(num1, num2) {
    if (num1 % 2 !== 0) {
        console.log(`O número ${num1} é considerado o maior (é ímpar)`);
    } else if (num2 % 2 !== 0) {
        console.log(`O número ${num2} é considerado o maior (é ímpar)`);
    } else if (num1 > num2) {
        console.log(`O número ${num1} é maior que ${num2}`);
    } else if (num2 > num1) {
        console.log(`O número ${num2} é maior que ${num1}`);
    } else {
        console.log("Os números são iguais");
    }
}

compararNumeros(10, 7); 
compararNumeros(6, 4);  