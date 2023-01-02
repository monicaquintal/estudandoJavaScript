function soma() {
  var resultado = 0
  for (var i in arguments) {
    resultado += arguments[i]
  }
  return resultado
}
console.log(soma(1, 2, 3, 0.8))