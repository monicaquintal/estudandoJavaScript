/* Questão 1 */

var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']

for (var i = 0; i < lista_frutas.length; i++) {
  document.write(lista_frutas[i] + '<br/>');
  console.log(lista_frutas[i])
} 

document.write('<hr/>')

/* Questão 2 */

var x = 1;
var y = 1;

while (x <= 10) {
  y = 1;
  while (y <= 10) {
    console.log(x + ' x ' + y + ' = ' + x * y);
    document.write(x + ' x ' + y + ' = ' + x * y + '<br/>');
    y++;
  }
  console.log("\n");
  document.write("<hr/>");
  x++;
}