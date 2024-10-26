let data = new Date();
let diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let diaSemana = diasDaSemana[data.getDay()]; // Retorna o dia da semana em forma de texto

let horas = data.getHours().toString().padStart(2, '0');
let minutos = data.getMinutes().toString().padStart(2, '0');
let segundos = data.getSeconds().toString().padStart(2, '0');

console.log(`Hoje é: ${diaSemana}.`);
console.log(`A hora atual é: ${horas}:${minutos}:${segundos}.`);
