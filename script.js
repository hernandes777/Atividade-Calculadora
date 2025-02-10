function calcular(operacao) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Não é possível dividir por zero!");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Erro";
    }

    document.getElementById("resultado").value = resultado;
}

 // Função para o conversor de moeda
 function converterMoeda() {
    let taxaCambio = 5.00; // Cotação fixa, pode ser atualizada dinamicamente
    let valorReal = parseFloat(document.getElementById("valorReal").value);

    if (isNaN(valorReal) || valorReal <= 0) {
        alert("Por favor, insira um valor válido em reais.");
        return;
    }

    let valorConvertido = valorReal / taxaCambio;
    document.getElementById("resultadoConversao").value = valorConvertido.toFixed(2) + " USD";
}