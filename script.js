function calculadora(){
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
    if (!operacao ||  operacao >= 7) {
        alert('operação inválida');
        calculadora();
    }

    let num1 = Number(prompt('Selecione um número'));
    let num2 = Number(prompt('Selecione outro número'));
    var r;

    function soma() {
        r = num1 + num2;
        alert(`O resultado da soma ${num1} mais ${num2} é ${r}`);
        novaOperacao();
    }
    function subtracao() {
        r = num1 - num2;
        alert(`${num1} menos ${num2} é igual a ${r}`);
        novaOperacao();
    }
    function multiplicacao() {
        r = num1 * num2;
        alert(`${num1} vezes ${num2} é igual a ${r}`);
        novaOperacao();
    }
    function divisaoReal() {
        r = num1 / num2;
        alert(`${num1} dividido por ${num2} é igual a ${r}`);
        novaOperacao();
    }
    function divisaoInteira() {
        r = num1 % num2;
        alert(`O resto da divisão é igual a ${r}`);
        novaOperacao();
    }
    function potenciacao() {
        r = num1 ** num2;
        alert(`${num1} elevado a ${num2} é igual a ${r}`);
        novaOperacao();
    } function novaOperacao(){
        let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim \n 2 - Não')
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2){
            alert('até mais!');
        } else {
            alert('Digite uma operação valida!');
            novaOperacao();
        }
    }


    if (operacao == 1) {
        soma();
    } if (operacao == 2) {
        subtracao();
    } if (operacao == 3) {
        multiplicacao();
    } if (operacao == 4) {
        divisaoReal();
    } if (operacao == 5) {
        divisaoInteira();
    } if (operacao == 6) {
        potenciacao();
    }

}

calculadora();