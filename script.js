/*
Faça um algoritmo onde o usuário informe o nome e 4 notas de dois alunos e mostre a média desses 2 alunos.
*/

//Capturar o nome do Primeiro aluno
var nome1 = window.prompt("Informe o seu nome:");

//Guardar notas do Primeiro aluno
var nota1 = window.prompt("Digite a nota 1:");
nota1 = parseFloat(nota1);
var nota2 = window.prompt("Digite a nota 2:");
nota2 = parseFloat(nota2);
var nota3 = window.prompt("Digite a nota 3:");
nota3 = parseFloat(nota3);
var nota4 = window.prompt("Digite a nota 4:");
nota4 = parseFloat(nota4);

//Calcule a média das duas notas do Primeiro aluno
var media1 = (nota1 + nota2 + nota3 + nota4)/4;

//Capturar o nome do Segundo Aluno
var nome2 = window.prompt("Informe o seu nome:");

//Guardar notas do Segundo aluno
var nota10 = window.prompt("Digite a nota 1:");
nota10 = parseFloat(nota10);
var nota20 = window.prompt("Digite a nota 2:");
nota20 = parseFloat(nota20);
var nota30 = window.prompt("Digite a nota 3:");
nota30 = parseFloat(nota30);
var nota40 = window.prompt("Digite a nota 4:");
nota40 = parseFloat(nota40);

//Calcule a média das duas notas do Segundo Aluno
var media2 = (nota10 + nota20 + nota30 + nota40)/4;


//Gera a mensagem de exibição do nome e da média do Primeiro e Segundo aluno 
var mensagem = nome1 + ", você obteve a média: " + media1 + " e " + nome2 + ", você obteve a média: " + media2 ;
window.alert(mensagem);