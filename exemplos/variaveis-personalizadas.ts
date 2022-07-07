function somaValores(input1: number | string, input2: number | string) {
    if (typeof input1 === 'string' || type of input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }
    
}

console.log(somaValores(1,5));
console.log(somaValores('Olá', ', tudo bem?'));
console.log(somaValores('1',5);