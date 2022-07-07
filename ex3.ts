//Enunciado:

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

saldo.innerHTML = 0
campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    saldo.innerHTML += soma;
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    saldo.innerHTML = '';
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

//Resposta: 

export {} 
let atualizar = document.getElementById('atualizar-saldo');
let limpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let saldo = document.getElementById('campo-saldo');
let saldoTotal = 0
limparSaldo()
function somarAoSaldo(soma: number) {
    if (saldo) {
        saldoTotal += soma
        saldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limpaSaldo() {
    if (saldo) {
        saldoTotal = 0;
        saldo.innerHTML = saldoTotal.toString();
    }
}
if (atualizar) {
    atualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
limpar.addEventListener('click', () => { 
    limpaSaldo();
});