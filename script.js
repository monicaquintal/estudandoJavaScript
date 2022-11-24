//alert('Olá, seja bem vindo ao curso!!!')

/*
	selecionar um elemento no DOM
	atualizar o valor desse elemento com uma string:

document.getElementById('nome').value = 'Oi'
*/

var idade = prompt('Informe a idade:')

if (idade >= 0 && idade < 15) {
	document.write('Criança! 👲')
} if (idade >= 15 && idade < 30) {
	document.write('Jovem! 👱‍♂️👱‍♀️')
} else if (idade >= 30 && idade < 60) {
	document.write('Adulto! 🧔👩')
} else {
	document.write('Idoso! 👵🧓')
}