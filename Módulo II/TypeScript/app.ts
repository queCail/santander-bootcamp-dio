const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora',
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor',
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora',
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadora
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao,
}

interface Estudante extends Pessoa{
    materias: string[],
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['matemática discreta', 'programação'],
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['matemática discreta', 'programação'],
}