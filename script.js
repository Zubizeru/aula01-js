//Exibir no terminal
console.log("Olá Mundo");
//Exibir no navegador
document.write("Olá Navegador");
//Um alerta
alert("Alerta de Confirmação!");

//string

//Capturar o nome do Aluno
var nome = window.prompt("Informe o seu nome:");

//Guardar a primeira nota
var nota1 = window.prompt("Digite a nota 1:");

//Converte a nota1 de texto para decimal
nota1 = parseFloat(nota1);

//Guardar a segunda nota
var nota2 = window.prompt("Digite a nota 2:");

//Converte a nota2 de texto para decimal
nota2 = parseFloat(nota2);

//Calcule a média das duas notas
var media = (nota1 + nota2)/2;

//Gera a mensagem de exibição do nome e da média do aluno 
var mensagem = nome + ", você obteve a média: " + media;
window.alert(mensagem);
