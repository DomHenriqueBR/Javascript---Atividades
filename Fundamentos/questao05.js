function verificaIntervalo(a, b, c) {
    if ((a >= 50 && a <= 99) && (b >= 50 && b <= 99) && (c >= 50 && c <= 99)) {
        console.log("Sucesso");
    } else {
        console.log("Erro");
    }
}

verificaIntervalo(55, 60, 70);  // Sucesso
verificaIntervalo(45, 50, 60);  // Erro
