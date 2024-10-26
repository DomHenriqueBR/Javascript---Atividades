function converterNome(nome) {
    let nomes = nome.split(' ');
    let ultimoNome = nomes.pop();
    let iniciais = nomes.map(n => n[0].toUpperCase() + '.');
    return `${iniciais.join(' ')} ${ultimoNome}`;
}

console.log(converterNome("Alan Mathison Turing"));
