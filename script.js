//alert('Olá, seja bem vindo ao curso!!!')

/*
	selecionar um elemento no DOM
	atualizar o valor desse elemento com uma string:

document.getElementById('nome').value = 'Oi'
*/

/* atividade para fixação 

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

/*
estudo escopo

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
document.write(serie3) //não renderiza */