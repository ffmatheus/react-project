let idadeTeste = 10;
console.log(idadeTeste);
let alturaTeste = '1000';
console.log(alturaTeste);
let teste = null;
console.log(teste)
console.log(typeof alturaTeste)
console.log(typeof idadeTeste)
/* Camel case --- BOAS PRATICAS */
/* ; NO FINAL DAS LINHAS !!! */

const nome = 'OI',altura = 100;
console.log(nome);
/* DECLARAR AS VARIAVEIS USA O LET PARA CAMPOS COM VALORES ALTERAVEIS*/
/* const DECLARA CONSTANTES*/


//OBEJTOS
const pessoa = {
    nome: 'Matheus',
    idade: 26,
    estaAprovado: true,
    sobrenome: ' Fernandes'
};

console.log(pessoa)
console.log(pessoa.idade)
console.log(pessoa.nome + pessoa.sobrenome)


//ARRAYS
const megasena = [26,45,50,17];

console.log(megasena);
console.log(megasena[2]);
console.log(megasena.length);
console.log(pessoa.nome.length);

//FUNCTIONS
//Verbo + Substantivo CAMEL CASE
let cor = 'azul';

function resetaCor(collor,tonalidade){
    cor = collor + tonalidade;
};

console.log(cor);
resetaCor('rosa',' pink');
console.log(cor);

function multiplicarPor2(valor){
    return valor * 2;
};
resultado = multiplicarPor2(10);
console.log(resultado);

//OPERATORS msma q nas outras
let idades = 10;
console.log(idades++);
console.log(idades);
console.log(++idades);

//OPERADOR DE IGUALDADE
console.log('1' === 1); // NAO IGNORA A TIPAGEM , OPTAR SEMPRE POR ESSA FALSE
console.log('1' == 1); // IGUALA OS TIPOS E COMPARA TRUE

function tipoCliente(pontos){
    return pontos > 100 && pontos < 300 ? 'premium' : 'comum'
}

console.log(tipoCliente(101))
console.log(tipoCliente(301))
console.log(tipoCliente(99))

let maior = true
let carteira = false
let pode = maior || carteira
