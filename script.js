var janela

function abrirPopUp() {
  janela = window.open('http://www.google.com', 'nova_janela', 'width=200', 'height=100')
}

function fecharPopUp() {
  janela.close()
}

var altura = window.screen.availHeight
var largura = window.screen.availWidth

document.write('Altura do navegador é: ' + altura + "<br/>")
document.write('Largura do navegador é: ' + largura)