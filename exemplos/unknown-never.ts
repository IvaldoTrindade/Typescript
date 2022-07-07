let anyEstadeVolta: any;
anyEstadeVolta = 3;
anyEstadeVolta = 'teste';
anyEstadeVolta = 5;

let stringTeste: string = 'Verificar'
stringTeste = anyEstadeVolta;


let unknownValor: unknown;  
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';
stringTeste2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo};
}

jogaErro('deu erro', 404)