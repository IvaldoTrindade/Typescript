"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'dev',
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["JogadoraDeFutebol"] = 1] = "JogadoraDeFutebol";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 3] = "Desenvolvedora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Paula',
    idade: 25,
    profissao: Profissao.Atriz
};
