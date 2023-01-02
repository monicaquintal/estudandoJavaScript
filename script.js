for (var y = 1; y <= 10; y++) {

  for (var x = 1; x <= 10; x++) {
  document.write(y + ' x ' + x + ' = ' + (y * x) + '<br/>')

  }

  document.write('<hr/>')

}



var listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']

for (var x in listaConvidados) {
  console.log('Índice ' + x + ' valor ' + listaConvidados[x])
}



var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']

listaFuncionarios.forEach(function(valor, indice, array){
  console.log('índice: ' + indice + ' | valor: ' + valor)
  console.log(array)
})