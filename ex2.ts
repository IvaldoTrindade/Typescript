//Enunciado

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}

//Respostas: 

enum Profession {
    Atriz,
    Padeiro,
    Professor,
    Desenvolvedor
}

interface Person {
    nome: string,
    idade: number,
    profissao: Profession
}

let pessoa: Person = {
    nome: 'Bruna',
    idade: 32,
    profissao: Profession.Atriz
}

let pessoa2: Person = {
    nome: 'Ivaldo',
    idade: 22,
    profissao: Profession.Desenvolvedor
}

let pessoa3: Person = {
    nome: 'Alexandre',
    idade: 23,
    profissao: Profession.Professor
}
