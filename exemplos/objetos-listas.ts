const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'dev',

}

pessoa.idade = 25;


const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    JogadoraDeFutebol,
    Atriz,
    Desenvolvedora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const vanessa = {
    nome: 'Paula',
    idade: 25,
    profissao: Profissao.Atriz
}

interface Estudante extends Pessoa = {
    materias: string[]
}

const jessica: Estudante {
    nome: jessica,
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Progamaçao']
}

const monica: Estudante {
    nome: monica,
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Progamaçao']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ',item);
    }
}

listar(jessica.materias);
