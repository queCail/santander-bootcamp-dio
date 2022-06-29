/* 
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

//Função considerando que alunos é do tipo array simples, que não contém objetos. Esta resolução foi feita por mim
function alunosAprovados(alunos, media){
    if(!alunos || !media) return;
    let aprovados = [];
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i] >= media){
            aprovados.push(alunos[i]);
        }
    }
    return aprovados;
}

//Função considerando que o array é composto por objetos. Esta resolução foi feita a partir da resolução da professora
function alunosAprovados2(alunos, media){
    if(!alunos || !media) return;
    let aprovados = [];
    for(let i = 0; i < alunos.length; i++){
        let {nome, nota} = alunos[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}


const cadastroAlunos= [
        {
            nome: 'João',
            nota: 5,
            turma: '1B',
        },
        {
            nome: 'Sofia',
            nota: 9,
            turma: '1B',
        },
        {
            nome: 'Paulo',
            nota: 6,
            turma: '2C',
        },
    ];
const notas = [10,2,3,5,7,9,8,6,2,1,4,7];
const mediaFinal = 5;

const aprovados1 = alunosAprovados(notas, mediaFinal);
const aprovados2 = alunosAprovados2(cadastroAlunos, mediaFinal);

console.log(aprovados1);
console.log(aprovados2);
