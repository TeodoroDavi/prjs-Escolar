import linha from './moduloA.js';
import fatorial from './moduloB.js';
import trocarValores from './moduloC.js';
import { somar, dividir, multiplicar,subtrair } from './calculadora.js';
import aluno from './moduloD.js';

console.log('SISTEMA DE MÓDULOS EM JAVASCRIPT');
console.log(linha(70)); 
console.log(`5! = ${fatorial(5)}`);
console.log(linha(70)); 
const [aTrocado , bTrocado] = trocarValores(1,2);
console.log(`A = ${aTrocado}   B = ${bTrocado}`);
console.log(linha(70)); 

console.log(somar(5,3));
console.log(dividir(16,2));
console.log(multiplicar(4,2));
console.log(subtrair(10,2));

console.log(linha(70)); 
console.log("Alunos");
console.log(aluno());
aluno().map(({nome})=> console.log(nome));
console.log(linha(70)); 

aluno()
    .filter(({situação})=> situação == "cursando")
        .map(({nome})=> console.log(nome));
console.log(linha(70)); 

