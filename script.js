//alert('Olá, seja bem vindo ao curso!!!')

/*
	selecionar um elemento no DOM
	atualizar o valor desse elemento com uma string:

document.getElementById('nome').value = 'Oi'
*/



/* --------------------- atividade para fixação ---------------------

//parâmetros
var nome = prompt('Informe seu nome:')
var altura = prompt('Informe sua altura (em centímetros):')
var peso = prompt('Informe seu peso:')

//conversão caracteres utilizando float
altura = parseFloat(altura)
peso = parseFloat(peso)

//conversão centímetros -> metros
altura /= 100

//cálculo IMC
var imc = peso / (altura^2)

//classificação em categorias
var classificacao=""

if (imc < 16) {
	classificacao= "Baixo peso muito grave"
} else if (imc >= 16 && imc <= 16.99) {
	classificacao = "Baixo peso grave"
} else if (imc >= 17 && imc <= 18.49) {
	classificacao = "Baixo peso"
} else if (imc >= 18.50 && imc <= 24.99) {
	classificacao = "Peso normal"
} else if (imc >= 25 && imc <= 29.99) {
	classificacao = "Sobrepeso"
} else if (imc >= 30 && imc <= 34.99) {
	classificacao = "Obesidade grau I"
} else if (imc >= 35 && imc <= 39.99) {
	classificacao = "Obesidade grau II"
} else {
	classificacao = "Obesidade grau III"
} 

alert(nome + " possui índice de massa corporal igual a " + imc.toFixed(2) + ", sendo classificado como: " + classificacao + "." ) */



/*
function soma(a, b) {
	return a + b
}

document.write(soma(7, 7, 9, 15))
*/



/* --------------------- estudo escopo --------------------- 

var serie = 'Friends'

if(true){
	var serie2 = 'Game of Thrones'
	document.write(serie)
}

document.write(serie2)

document.write('<br />')

function x(){
	var serie3 = 'The Walking Dead'
	document.write(serie)
	document.write(serie2)
}

x() 

document.write('<br />')
document.write(serie3) //não renderiza  */



/* --------------------- funções de callback --------------------- 

function exibirArtigo(id, callbackSucesso, callbackErro) {
  //lógica: recuperar o id via requisição http
  if (true) {
    callbackSucesso("Funções Callback em JS", "São funções encaminhadas como parâmetro para outras funções. O objetivo é, após a finalização da função, ter condições de chamar a função encaminhada por parâmetro, dando continuidade no processamento da lógica da aplicação.")
  } else {
    callbackErro("Erro ao recuperar os dados!")
  }
}

var callbackSucesso = function(titulo, descricao) {
	document.write('<h1>' + titulo + '</h1>')
	document.write('<hr />')
	document.write('<p>' + descricao + '</p>')
}

var callbackErro = function(erro) {
	document.write('<p><b>Erro:</b>' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)
*/

/* --------------------- funções nativas para manipular strings --------------------- 

var nome = ' Mônica Zungalo Quintal '

document.write(nome.length + '<br>')
document.write(nome.charAt(3) + '<br>')
document.write(nome.indexOf('a') + '<br>')
document.write(nome.replace('Zungalo Quintal', 'estudante de DS') + '<br>')
document.write(nome.substr(15, 7) + '<br>')
document.write('Mônica Zungalo Quintal'.toLowerCase() + '<br>')
document.write('Mônica Zungalo Quintal'.toUpperCase() + '<br>')
document.write('-' + nome.trim() + '-') */

/* --------------------- funções nativas para tarefas matemáticas --------------------- 

var x = Math.ceil(10.380)
document.writeln(x)

var x = Math.floor(10.380)
document.writeln(x)


var x = Math.round(10.380)
document.writeln(x)

var x = Math.random()
document.write(x) */


/* --------------------- funções nativas para manipular datas --------------------- 
var data = new Date()

document.write(data.getDate() + '/')

document.write(data.getMonth() + 1 + '/')

document.write(data.getFullYear() + '<br>')

document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())
*/


/* --------------------- praticando um pouco mais com datas --------------------- 

var data = new Date()

	//adicionar / remover dias
	document.write(data.toString())
	data.setDate(data.getDate() + 720)
	document.write('<hr />')
	document.write(data.toString())
	document.write('<br /><br /><hr />')
				
	//adicionar / remover meses
	document.write(data.toString())
	data.setMonth(data.getMonth() + 1)
	document.write('<hr />')
	document.write(data.toString())
	document.write('<br /><br /><hr />')

	//adicionar / remover anos
	document.write(data.toString())
	data.setFullYear(data.getFullYear() + 1)
	document.write('<hr />')
	document.write(data.toString())
	document.write('<br /><br /><hr />')


	//24/07/2020
	var data1 = new Date(2020, 6, 24)

	//27/11/2022
	var data2 = new Date(2022, 10, 27)

	document.write(data1.toString())
	document.write('<hr />')
	document.write(data2.toString())

	document.write('<br /><br /><hr />')

	//converter as datas para valores numéricos (possíveis de usar em cálculos)
	document.write(data1.getTime())
	document.write('<hr />')
	document.write(data2.getTime())
  	document.write('<br /><br /><hr />')

	//calcula-se com base em 1 de janeiro de 1970 - padrão computacional, parâmetro para que possamos fazer cálculos na nossa aplicação

	//encontar a quantidade de milissegundos entre data1 e data2
	var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
	document.write(milissegundos_entre_datas)
	document.write('<br /><br /><hr />')

	//1 dia tem 24 horas, cada hora tem 60 minutos, cada minuto tem 60 segundos e cada segundo tem 1000 milissegundos

	//então quantos milissegundos existem em um dia?
	var milissegundos_por_dia = (1*24*60*60*1000)
	document.write(' 1 dia tem: ' + milissegundos_por_dia + ' milissegundos' )

	document.write('<br /><br /><hr />')
	document.write('A diferença entre data1 e data2 é de ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dia) + ' dia(s)') */

	
/* --------------------- atividade para fixação --------------------- */

/* minha resolução 

var numero1 = prompt('Informe um número:')
var operacao = prompt('Digite a operação desejada - informe "soma" ou "subtracao" (sem as aspas)')
var numero2 = prompt('Informe outro número')
var resultado = ""

function Calcular(numero1, numero2, operacao) {

	numero1 = parseFloat(numero1)
	numero2 = parseFloat(numero2)

	if (operacao == "soma") {
		resultado = numero1 + numero2 
	} else if ( operacao == "subtracao") {
		resultado = numero1 - numero2
	} else {
		alert('Informe dois valores, e indique a operação a ser realizada.')
	}

	return resultado
}

alert("O resultado é: " + Calcular(numero1, numero2, operacao)) */



/* resolução do prof 

var num1 = prompt('Digite um número');
var operacao = prompt('Digite a operação');
var num2 = prompt('Digite outro número');

function calc(num1, num2, operacao){

 num1 = parseFloat(num1);
 num2 = parseFloat(num2);

 var resultado = 0;

 if(operacao == 'soma'){
 resultado = num1 + num2;
 }

 if(operacao == 'subtracao'){
 resultado = num1 - num2;
 }

 return resultado;
}

document.write('O resultado é: ' + calc(num1, num2, operacao));
*/



/* --------------------- eventos - mouse --------------------- */

