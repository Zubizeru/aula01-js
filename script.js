/*
Faça um algoritmo onde o usuário informe o nome
e 4 notas de dois alunos e mostre as
médias desses 2 alunos.
*/
var nome1, nome2 = "";
var nota1, nota2, nota3, nota4,
    nota5, nota6, nota7, nota8 = 0;
const quantidadeProvas = 4;
 
nome1 = prompt("Digite o Nome do Aluno 1:");
nota1 = parseFloat(prompt("Digite a Nota 1 do Aluno 1: "));
nota2 = parseFloat(prompt("Digite a Nota 2 do Aluno 1: "));
nota3 = parseFloat(prompt("Digite a Nota 3 do Aluno 1: "));
nota4 = parseFloat(prompt("Digite a Nota 4 do Aluno 1: "));
 
nome2 = prompt("Digite o Nome do Aluno 2:");
nota5 = parseFloat(prompt("Digite a Nota 1 do Aluno 2: "));
nota6 = parseFloat(prompt("Digite a Nota 2 do Aluno 2: "));
nota7 = parseFloat(prompt("Digite a Nota 3 do Aluno 2: "));
nota8 = parseFloat(prompt("Digite a Nota 4 do Aluno 2: "));
 
var media1, media2 = 0;
media1 = (nota1 + nota2 + nota3 + nota4) / quantidadeProvas;
media2 = (nota5 + nota6 + nota7 + nota8) / quantidadeProvas;
 
var mensagem = `
${nome1}, sua média é ${media1}, parabéns!  
${nome2}, sua média é ${media2}, parabéns!`;
 
alert(mensagem);