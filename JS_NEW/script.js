//arrays

// let familia = [true,24,59,'boris',20,32];
// console.log(familia.length);
// console.log(familia[2]);

//--------------------------------------------------------

// como declarar uma função
// verbo+ substantivo

// let corSite = "azul";

// function resetaCor(cor,tonalidade) {
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);
// resetaCor("vermelho" , "claro");
// console.log(corSite);
//------------------------------------------------------------------
// Realisar uma tarefa, não devolve nada

// function dizerNome(){
//     console.log('Cisco');
// }

// dizerNome();

// function MultiplicDois(valor){
//     return valor*2;
// }

// console.log(MultiplicDois(5));

// let resultado = MultiplicDois(5);
// console.log(resultado);

// ------------------------------------------------------------------

//Operadores Arithmeticos(matematicos)
//Operadores de comparção
//operadores Logicos
// Operadores Bitwise
// Operadores atribuições

// let salario = 100;

// console.log(salario + salario);
// console.log(5 ** 5 ) ; // exponencial

//++ incrementação  ; -- decrementação


//---------------------------------------------------------------------

// Igualdade estrita

//console.log(1 === 1); // compara o tipo
// diferente !==;
// Igualdade solita

//console.log(1 == 1);

//----------------------------------------------------------------------

//Operadores ternario ;

//tem um cliente , 100 premium , comum

//let pontos =100;
//let tipo = pontos > 100 ? 'premium' : 'commum';

//----------------------------------------------------------------------

//Operadores logicos e (&&)
// retorna TRUE se od Dois operandos forem true

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

//console.log(podeAplicar);

// operadores logicos ou (||)
// retornar true se apenas um dos oprandos for true
//podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

//console.log('pode aplicar: ',podeAplicar);
// Operador NOT (!)
//let candidatoRecusado = !podeAplicar; 
//console.log('candidato : ', candidatoRecusado);

//------------------------------------------------------------------------------

// Falsy  - undefined - null - 0  -  false - '' - NaN - Truth

// let corPersonalizada = 'Vermelho';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);

//--------------------------------------------------------------------------------------

//loop
// for  -  while - Do..While - for..in - for..of     


// const pessoa = {
//     nome: 'Cisco',
//     idade: 32
// };

// for (let chave in pessoa){
//     console.log(chave)
// };

// const cores = ['amarelo','vermelho','azul','verde'];

// for (let indice in cores){
//     console.log(indice,cores[indice])
// };

// for (let cor of cores){
//     console.log(cor)
// };

// // escreva duas funções que usa dois numero inteiro et devilve o maior deles

// function maior(num1,num2){
//     if (num1 > num2)
//         return num1;
//     return num2;
// }

// let m = maior(5,6);
// console.log(m);

//--------------------------------------------------------------------------------------------

// Velocidade maxima de até 70
//a cada 5km acima do limite vocẽ ganha 1 ponto 
// Math.floor() para arredondar para o numeiro mais baixo
// cada ponto maior a 12 pontos --> caiteira suspendida


// function verificarVelocidade(velocidade){
//     const velocidadeMaxima = 70;
//     const kmPorPontos = 5;
//     if(velocidade <= 70){
//         console.log('OK');
//     }
//     else {
//             let ponto = math.floor((velocidade - velocidadeMaxima)/5); 
//             if (ponto >= 12)
//                 console.log('carteira suspendida');
//             else
//                 console.log('Ponto : ',ponto);
//     }

// }


//---------------------------------------------------------------------------------------------

// Receber uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impares


//---------------------------------------------------------------------------------------------

// Criar um metodo para ler Propriedades de um objeto e exibir somente as propriedade do string que 
// estã nesse objeto


// const filme = {
//     titulo : 'Ultime combat',
//     ano : 2020,
//     diretor: 'Robin',
//     personagem : 'JC-Van Damme'
// }
// function exibirPropriedade(obj){
//     for(let f in obj){
//         if(typeof obj[f] === 'string')
//             console.log(f,obj[f]);
//     }
// }


//------------------------------------------------------------------------------------------------

// function fatory

const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela: {
        vertical : 155,
        horizontal : 75,
    },
    capacidadeBateria : 5000,
    ligar : function() {
        console.log("Fazendo ligação...")
    }
}

function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria){
    return  {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
    
}

const celular1 = criarCelular('Ifone',5.5,5000);
console.log(celular1);


// -------------------------------------------------------------

//----------#construtor function

//Pascal Case - UmDoisTres
function Celular(marcaCelular, tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela ,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo ligação...");
        }
}

const cel = new Celular('Ifone',5.5,5000)

console.log(cel);


//----------------------------------------------------------------

const mouse = {
    cor : 'red' ,
    marca : 'dazz'
}
mouse.velocidade = 500;
mouse.trocarDPI = function () {
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);


//-------------------------------------------------------------


//clonar Objeto

const novoObjeto = objet.assigned({
    bateria :1000
},celular);
console.log(novoObjeto);

const obj1 = {...Celular};


//------------------------------------------------------------

// metodo Math

//----------------------------------------------------------- --

// tipo string
 
// tipo primitive
const mensagem = 'minha primeira mensagem';

// tipo objeto
const outraMensagem = new String('bom dia');
/*
mensagem.length
mensagem.includes
mensagem.startsWith('') //para bverificar se começa com
mensagem.endsWith('') //para bverificar de termina com
mensagem.indexOf('') //o indice do string da palabvra especificado
mensagem.replace('') // para substituir
mensagem.trim('') // tirar espaco no inici
mensagem.split() //  
*/ 


//------------------------------------------------------------------

// Template Literal

const msg = ' Oi isso é minha\n primeira mensagem ';

// Objet {}
// Template ``
const aula_1 = 'mathematica';
const outra = `Oi isso ${aula_1} é minha 'primeira' `;

//----------------------------------------------------------------------

//Date
const date1 = new Date();
const date2 = new Date(2022,07,08,13,16);
const date0 = date3.setFullYear(2030);

// Objeto Endereço

// Criar um Objeto endereco que contem  -Rua -Cidade -CEP -Exibvir enderço

let endereco = {
    rua: 'a', 
    cidade : 'b',
    cep: 'c'
};

function Endereco(rua,cidade,cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

const end = new Endereco('visconde','curitiva',80010-100);
console.log(end);
//metodo 2;

function exibirEndereco(endereco){
    for (let chave in endereco)
        console.log(chave,':',endereco[chave]);
}

exibirEndereco(endereco);

// --------------------------------------------------------------------

//Igualdade de objeto
const end1 = new Endereco('a','b','c');
const end2 = new Endereco('a','b','c');

function saoIguais(end1,end2){
    //comparar se as propriedades são iguais
    return end1.rua === end2.rua &&
           end1.cidade === end2.cidade &&
           end1.cep  === end2.cep

}

function temMemoriasIguais(end1,end2){
    // comparando se referencia do obvjeto aponta opara o mesmo local da memoria
    return end1 === end2;
}


//-----------------------------------------------------------------------

// Objeto Postagem de blog

let postagem = {
    titulo : 'a',
    mensagem: 'b',
    autor: 'c',
    vizualizacao: 10, 
    comentario : [ 
        {autor: 'a',mensagem: 'b'},
        {autor: 'a',mensagem: 'b'}
    ], 

    estaAoVibvo : true
}

console.log(postagem);


//---------------------------------------------------------------------------

//construtor Function
// Criar um Objeto Postagem

function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.vizualizacao = [],
    this.estaAoVivo = false;
}

let post = new Postagem('a','b','c');

console.log(post);

// ----------------------------------------------------------------------

//Faixa de preço
// Criar um array de obvjetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre

let faixas = [
    {tooltip: 'até R$700',minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000',minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 ou mais',minimo: 1000, maximo: 9999999}
];

//segunda opção Factory function

function criaFaixaPreço(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    };
}

let faixa = [
    criaFaixaPreço('a',1,100),
    criaFaixaPreço('b',100,1000),
    criaFaixaPreço('c',1000,10000)
]
console.log(faixa);
console.log(faixas);

// -------------------------------------------------------------

/*
 Add nobvos elementos
rm novos elementos
encontrar elementos
dibvidir elementos
dibvidir arrays
combvnar arrays
*/

//add elementos

const numeros = [1,2,3];

//Inicio

numeros.unshift(0);
console.log(numeros);
//meio
numeros.splice(1,0,'a');
//final
numeros.push(5);

//------------------------------------------------------------------

//encontrado um tipo  primitibvo;

const num = [1,2,3,4];
num.indexOf();
num.lastIndexOf();

//encontrado referencia

const marca = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
];


