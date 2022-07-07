let valorAny: any;

valorAny = 3;
valorAny = true;
valorAny = 'ola';

let valorString: string = "teste";
valoString = valorAny;
let valorString2: string = 'testeee';
valoString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('Olá', 'tudo bem?');