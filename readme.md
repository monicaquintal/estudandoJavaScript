
<div align="center">
<h2>Estudando JavaScript 📒</h2>
<h3>Seção 8: JavaScript</h3>
<p>Curso Desenvolvimento Web Completo 2022</p>
</div>

<div align="justify">

## Introdução ao JavaScript
<a href="#aula01">O que é JS?</a> | 
<a href="#aula02">Introdução</a> | 
<a href="#aula03">Local e Externo</a> | 
<a href="#aula04">Precedência de execução</a> |
<a href="#aula05">Comentários</a> | 
<a href="#aula06">Variáveis (introdução)</a> | 
<a href="#aula07">Variáveis (prática)</a> | 
<a href="#aula08">Concatenação</a> | 
<a href="#aula09">Uso do ';'</a> | 
<a href="#aula10">Variáveis null e undefined</a> | 
<a href="#aula11">Alterando valores de variáveis</a> |
<a href="#aula12">Revisão e desafio</a>

## Estruturas Condicionais
<a href="#aula13">If/else parte 1 - introdução</a> |
<a href="#aula14">Operadores Condicionais</a> |
<a href="#aula15">If/else parte 2 - praticando</a> |
<a href="#aula16">Praticando um pouco mais</a> |
<a href="#aula17">Casting de tipos</a> |
<a href="#aula18">Operadores lógicos</a> |
<a href="#aula19">If/else parte 3 - operadores lógicos</a> |
<a href="#aula20">Operador ternário</a> |
<a href="#aula21">Atividades para fixação</a> |
<a href="#aula22">Switch</a> |
<a href="#aula23">Switch na prática</a> |
<a href="#aula24">Operadores aritméticos</a> |
<a href="#aula25">Praticando com operadores aritméticos</a> |
<a href="#aula26">Operações aritméticas na atribuição de valores</a> |
<a href="#aula27">Precedência operações aritméticas</a> |
<a href="#aula28">Atividades de fixação</a>

## Funções
<a href="#aula29">Funções (intro)</a> |
<a href="#aula30">Funções (prática)</a> |
<a href="#aula31">Funções (parâmetros)</a> |
<a href="#aula32">Escopo de variáveis</a> |
<a href="#aula33">Funções anônimas e técnica de wrapper</a> |
<a href="#aula34">Funções de callback</a> |
<a href="#aula35">Funções nativas para manipular strings</a> |
<a href="#aula36">Funções nativas para tarefas matemáticas</a> |
<a href="#aula37">Funções nativas para manipular datas</a> |
<a href="#aula38">Praticando um pouco mais com datas</a> |
<a href="#aula39">Atividades para fixação</a>

## Eventos e DOM
<a href="#aula40">Eventos parte 1 - Introdução</a> |
<a href="#aula41">Eventos parte 2 - Mouse</a> |
<a href="#aula42">Eventos parte 3 - Teclado</a> |
<a href="#aula43">Eventos parte 4 - Janela</a> |
<a href="#aula44">Eventos parte 5 - Formulários</a> |
<a href="#aula45">DOM parte 1 - Introdução</a> |
<a href="#aula46">DOM parte 2 - Selecionando elementos da página</a> |
<a href="#aula47">DOM parte 3 - Manipulando valores de inputs (text)</a> |
<a href="#aula48">DOM parte 4 - Manipulando estilos de elementos</a> |
<a href="#aula49">DOM parte 5 - Manipulando classes de elementos</a> |
<a href="#aula50">Atividades para fixação do conteúdo</a>

## Arrays
<a href="#aula51">Array básico (Introdução)</a> |
<a href="#aula52">Array básico (Prática)</a> |
<a href="#aula53">Length string x array</a> |
<a href="#aula54">Array multidimensional</a> |
<a href="#aula55">Métodos de inclusão e exclusão de elementos</a> |
<a href="#aula56">Método de pesquisa</a> |
<a href="#aula57">Ordenação de elementos</a> |
<a href="#aula58">Atividade para fixação de conteúdo</a>

## Estrutura de repetição

<a href="#aula59">Introdução</a> | 
<a href="#aula60">While</a> | 
<a href="#aula61">Do while</a> | 
<a href="#aula62">For</a> | 
<a href="#aula63">Praticando: percorrendo e listando itens de Arrays</a> | 
<a href="#aula64">Praticando: tabuada</a> | 
<a href="#aula65">For in</a> | 
<a href="#aula65">Foreach</a> | 
<a href="#aula66">Atividade para fixação de conteúdo</a>

</div>

<hr>

<div id="aula01" align="center">
<h2>Aula 01: O que é JavaScript?</h2>
</div>

O JS é uma linguagem de programação de Alto Nível, ou seja, a codificação está muito próxima de uma linguagem humana (comandos são instruções realizadas com base na língua inglesa), tornando a leitura do código mais fácil.

Além disso, é uma linguagem muito abrangente, podendo ser executada dentro dos browsers (client-side), no server-side (do lado do servidor das aplicações web, baseado no protocolo http), desktop (utilizando Electron, por exemplo) e mobile (React Native).

A W3C cuida da padronização de tecnologiar web, como HTML e CSS. Ela disponibiliza um projeto chamado [W3schools](https://www.w3schools.com/js/), onde podemos ter acesso à documentação das linguagens e seus recursos.

O JS permite aplicar dinâmica aos elementos da página web!

Por fim, JS é uma linguagem de programação interpretada; os scripts são encaminhados ao browser, que os interpretará.


<div id="aula02" align="center">
<h2>Aula 02: Incluindo JavaScript em páginas HTML5 (parte 01) - Introdução e preparação.</h2>
</div>

### Incluindo arquivos JS no arquivo HTML5:

Há duas formas:

1. incluindo a codificação JS diretamente:
  ```javascript
  <script>
  // aqui fica a codificação JavaScript 
  </script>
  ``` 

2. a partir de um arquivo externo:
  ```javascript
  <script src="meu_script.js"></script>
  ```

Caso a codificação seja muito extensa, compartimentalizar o código criando um arquivo à parte. Caso sejam blocos pequenos de codificação em JS, inserir diretamente no código.

Na versão 4 do HTML, utilizava-se também "type"; atualmente, podemos omitir essa informação. A instrição "language"foi depreciada.

### Preparando o ambiente de desenvolvimento:

Realizada a criação do arquivo index.html.
que os interpretará.


<div id="aula03" align="center">
<h2>Aula 03: Incluindo JavaScript em páginas HTML5 (parte 02) - Local e Externo.</h2>
</div>

### Incluindo JavaScript diretamente em index.html:

A tag &lt;script&gt; pode ser inserida no head ou no body. A diferença é que as instruções na tag head são processadas antes do carregamento do body (pode gerar um erro de precedência de interpretação).

### Incluindo JavaScript em um arquivo externo:

1. criar um novo arquivo (script.js);
2. inserir o conteúdo no arquivo script.js;
3. importar o script no arquivo index.html (no head ou no body).


<div id="aula04" align="center">
<h2>Aula 04: Incluindo JavaScript em páginas HTML5 (parte 03) - Precedência de execução.</h2>
</div>

### Precedência de execução:

É fundamental para o estabelecimento da lógica!

Os elementos HTML são renderizados de acordo com a DOM, podendo ser selecionados a partir da linguagem JS para sofrer algum tipo de ação.

Avaliar a ordem de disposição: o scrip executado antes do elemento referenciado/novo fará com que o JS não encontre o elemento e não execute a operação solicitada.


<div id="aula05" align="center">
<h2>Aula 05: Comentários.</h2>
</div>

Auxilia a compreensão da lógica aplicada, e a compreensão do mesmo por terceiros.

1. Comentário de uma linha:
```javascript
//comentário de uma linha
```

2. Comentário de múltiplas linhas:
```javascript
/* 
Permite que várias linhas sejam 
encapsuladas em um mesmo comentário.
*/
```


<div id="aula06" align="center">
<h2>Aula 06: Variáveis - introdução.</h2>
</div>

### O que são variáveis?
São espaços na memória que possibilitam armazenar informações de forma temporária.

### Tipos de variáveis:
- string - cadeias de caracteres, textos;
- number - armazenam valores numéricos:
  - subtipo int (números inteiros);
  - subtipo float (admite fração - casas decimais separadas por ponto).
- boolean - armazena estados (true, false).

### Regras para declaração de variáveis:

- não podem ser iniciadas com números, apenas com letras ou "_";
- não podem ser utilizados caracteres especiais como "ç", "^", "~";
- não podem ser iguais as palavras reservadas da linguagem.

### Declarando variáveis com a instrução "var":
É opcional, porém fortemente recomendado que utilize essa instrução. Permite que o interpretador entenda de forma explicita que se trata de uma declaração de variável.

### Case sensitive:
O JS faz a diferenciação entre letras maiúsculas e minúsculas.


<div id="aula07" align="center">
<h2>Aula 07: Variáveis - prática.</h2>
</div>

a. string: usar aspas duplas ou simples.
```javascript
var texto = "Curso de JavaScript"
```

b. number: Int, Float, Double
```javascript
var numeroInteiro = -7
var numeroFracionado = 123.45
```

c. boolean: estruturas condicionais (true e false)
```javascript
var teste = true
```

Observação:
Utilizar a **função alert()** para verificar os valores inseridos em cada uma das variáveis.

A função **document.write()** é um método pelo qual podemos escrever valores dentro do browser.

O comando **console.log()** também é utilizado para debug, pois processa a página e, no ponto desse comando, imprime no console o valor da variável (permite acompanhar como uma variável está evoluindo ao longo do código).


<div id="aula08" align="center">
<h2>Aula 08: Concatenação.</h2>
</div>

Consiste na **unificação de valores textuais** das variáveis, de forma a montar strings ou textos personalizados.

Utilizar o operador ➕ para concatenar.

*Observação:* o prompt sempre recebe os dados inseridos como string!


<div id="aula09" align="center">
<h2>Aula 09: Usar ou não o ";" no final dos comandos?</h2>
</div>

Muitas linguagens utilizam o ; como caracter de finalização de instrução, para indicar para o compilador que aquela instrução foi finalizada.

No JS, podemos utilizar o ; ao término de cada instrução **ou não**, não produzindo nenhum tipo de erro. Ou seja, **usar ou não é opcional** - quem decide é a familiaridade do profissional com o desenvolvimento de códigos.

<div id="aula10" align="center">
<h2>Aula 10: Variáveis null e undefined.</h2>
</div>

Possuem diferença sutil entre si, que deve ser estudada a fim de evitar possíveis bugs.

### Variável null:

Representa a **ausência intencional** de um valor. 
Indica intencionalmente que ela, neste momento, apesar de declarada, faz referência à ausência de um valor dentro da variável.

### Variável undefined:

Indica que a variável, apesar de declarada, de fato **não possui nenhum valor** (valor inexistente).
Situações em que tentamos acessar um recurso que não está disponível.

<div id="aula11" align="center">
<h2>Aula 11: Alterando valores de variáveis.</h2>
</div>

Os valores das variáveis podem e costumam ser alterados durante o processamento dos scripts, para atender a determinadas lógicas. 🧮

Considerar a variável como uma caixa, onde armazenamos determinado(s) valor(es).´


<div id="aula12" align="center">
<h2>Aula 12: Revisão e desafio A-B-C.</h2>
</div>

### Revisão.

- inclusão de código JS;
- precedência de execução;
- comentários;
- variáveis;
- concatenação.

### Desafio A-B-C:

1. criar uma página que contenha um script JS;
2. deve conter as 3 variáveis: var a = 10, var b = 20, var c = null;
3. realizar a impressão dos valores utilizando o método write.document;
4. aplicar uma lógica: inverter os valores das variáveis A e B, porém não na forma hard code (utilizar a variável c neste processo);
5. utilizar novamente o método write para imprimir essa inversão de valores.


<div id="aula13" align="center">
<h2>Aula 13: If/else parte 1 - introdução.</h2>
</div>

É uma estrutura de controle, que nos permite definir qual fluxo a aplicação tomará, a partir de uma determinada condição.

```
if (condição) {
  // trecho de código que será executado
} else {
  // trecho de código que será executado
}
```

O comando if/else pode ser encadeado, como a seguir:

```javascript
if (condição) {
  // trecho de código que será executado
} else if  {
  // trecho de código que será executado
} else {
  // trecho de código que será executado
}
```


<div id="aula14" align="center">
<h2>Aula 14: Operadores de comparação (condicionais).</h2>
</div>

Também conhecidos como operadores relacionais (são 8 no total).

Servem para formar expressões condicionais para o comando if.

Operador | Função
----------|--------
Igual (==) | Verifica se os valores comparados são iguais
Idêntico (===) | Verifica se os valores são iguais e do mesmo tipo
DIferente (!=) | Verifica se os valores são diferentes
Não idêntico (!==) | Verifica se os valores são diferentes e de tipos distintos
Menor (&lt;) | Verifica se o valor da esquerda é menor que o da direita
Maior (&gt;) | Verifica se o valor da esquerda é maior que o da direita
Menor igual (&lt;=) | Verifica se o valor da esquerda é menor ou igual ao da direita
Maior ou igual (&gt;=) | Verifica se o valor da esquerda é maior ou igual ao da direita


<div id="aula15" align="center">
<h2>Aula 15: If/else (parte 2) - Praticando com operadores de comparação.</h2>
</div>

Aplicação dos conceitos das aulas 13 e 14 (estrutura if/else e utilização dos operadores relacionais).


<div id="aula16" align="center">
<h2>Aula 16: Praticando um pouco mais com operadores de comparação.</h2>
</div>

Aplicando estrutura if/else e utilização dos operadores relacionais em estruturas mais complexas/reais.

Exemplo: 

~~~javascript
  var nota = prompt('Digite a nota do aluno')
  var media = 7
  
  if (nota >= media) {
    document.write('Aprovado')
  } else {
    document.write('Reprovado')
  }
  ~~~

Atentar-se que, no exemplo acima, estamos comparando uma string (prompt) com um valor numérico. No caso do uso do '==', o JS possui a inteligência para identificar que trata-se de um valor a ser comparado (não utilizar o operador '===').


<div id="aula17" align="center">
  <h2>Aula 17: Casting de tipos com toString(), parseInt() e parseFloat().</h2>
</div>

Trata-se da conversão de um tipo de dado em outro.

~~~javascript
  var variavel1 = prompt('Digite algum número')
  var variavel2 = prompt('Digite outro número')

  document.write(variavel1 + variavel2)
~~~

No caso acima, apesar de se tratarem de números, são inseridos como String no prompt, ocorrendo, neste caso, a concatenação das strings (em vez de somar os números). 
  
Nesse momento que entra o Casting de tipos:

~~~javascript
  var variavel1 = prompt('Digite algum número')
  var variavel2 = prompt('Digite outro número')

  variavel1 = parseInt(variavel1)
  variavel2 = parseInt(variavel2)

  document.write(variavel1 + variavel2)
~~~

Na situação acima, o parseInt permite que o valor informado no prompt seja encarado como número inteiro!

Método | Descrição
--------|-----------
parseInt | Remove a fração, preservando apenas a parte inteira do número
parseFloat | Preserva a fração do número em questão
toString | Extrai a representação textual do valor numérico 


<div id="aula18" align="center">
  <h2>Aula 18: Operadores lógicos 💭</h2>
</div>

São operadores que nos permitem conectar operações de comparação. Garantem maiores dinâmicas às estruturas e condições.

Operador | Status
--------|----------
E (&&) | V, se todas as expressões forem V
OU (&verbar;&verbar;) | V, se pelo menos uma das expressões for V
Negação (!) | Inverte o resultado da expressão de comparação


<div id="aula19" align="center">
  <h2>Aula 19: If/else parte 3 - praticando com operadores lógicos.</h2>
</div>

Operadores lógicos são fundamentais para a criação de critérios mais complexos de tomada de decisão!


<div id="aula20" align="center">
  <h2>Aula 20: Operador ternário.</h2>
</div>

É uma estrutura de decisão semelhante ao if/else. 
A diferença é que ele possui uma **sintaxe mais enxuta**, tornando o código menos verboso. Entretanto, é um pouco mais limitado.

~~~javascript
var resultado = <condicao> ? <verdadeiro> : <falso>
~~~

É limitado, podendo retornar apenas valores que correspondam a dados, como Strigs e valores numéricos.


<div id="aula21" align="center">
  <h2>Aula 21: Atividades para fixação do conteúdo.</h2>
</div>

### Exercício:

Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo usuário. Considere os seguintes critérios:

- Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
- Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
- Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
- Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.

Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados para o usuário. 

### Solução:

~~~javascript
<script>
var idade = prompt('Informe a idade:')

if (idade >= 0 && idade < 15) {
	alert('Criança! 👶👲👧')
} else if (idade >= 15 && idade < 30) {
	alert('Jovem! 👱‍♂️👱‍♀️')
} else if (idade >= 30 && idade < 60) {
	alert('Adulto! 🧔👩')
} else {
	alert('Idoso! 👵🧓')
}
</script>
~~~


<div id="aula22" align="center">
  <h2>Aula 22: Switch.</h2>
</div>

É um condicional; segue um determinado fluxo na aplicação, de acordo com a condição.
Escrito de forma diferente do if, auxilia no entendimento do código, por ter uma escrita mais enxuta.
É limitado pelo fato se só realizar **comparação de idênticos**.

~~~javascript
var opcao = 2

switch (opção) {

  case 1:
    // trecho de código que será executado
    break

  case 2:
    // trecho de código que será executado
    break

  default:
    // trecho de código que será executado
    break

}
~~~

Ao terminar as instruções, devemos incluir o comando break, pois ele indica ao switch que aquele case chegou até o final.

O default funciona como o "else". Ele pode ser omitido e, caso nenhum case seja localizado, nada será feito. Caso ele seja definido e não seja identificado nenhum case, executará o default.


<div id="aula23" align="center">
  <h2>Aula 23: Switch na prática.</h2>
</div>

Switch realiza *comparação por identidade*. Portanto, numa aplicação, caso comparássemos a String '2' com o valor 2, não será identificado como case (irá para Default)!

Para solucionar, podemos transformar os cases em String, colocando os parâmetros entre aspas (como case '1'), por exemplo, ou utilizar casting de tipos (como switch (parseInt(parametro)).


<div id="aula24" align="center">
  <h2>Aula 24: Operadores aritméticos.</h2>
</div>

São (7) operadores matemáticos que nos permitem efetuar cálculos básicos em JavaScript.

Operadores | Representação | Função
-----------|:---------------:|---------
Adição | + | Soma valores
Subtração | - | Diferença entre valores
Multiplicação | * | Produto dos valores
Divisão | / | Quociente dos valores
Módulo | % | Resto existente em uma operação de divisão
Incremento | ++ | Pré/pós incremento (add 1 unidade ao valor)
Decremento | -- | Pré/pós decremento (tira 1 unidade ao valor)

O + é usado para concatenação (em caso de strings envolvidas) e para soma (quando inclui apenas valores numéricos).


<div id="aula25" align="center">
  <h2>Aula 25: Praticando com operadores aritméticos.</h2>
</div>

Aplicando o que foi estudado anteriormente:

~~~javascript
 <script>

        var num1 = prompt('Digite o valor de num1')
        var num2 = prompt('Digite o valor de num2')

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        document.write('A soma entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 + num2) + '<br />')
        document.write('A subtração entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 - num2) + '<br />')
        document.write('A multiplicação entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 * num2) + '<br />')
        document.write('A divisão entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 / num2) + '<br />')
        document.write('O módulo entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 % num2) + '<br />')
        document.write('O incremento de ' + num1 + ' é: ' + (++num1) + '<br />')
        document.write(num1 + '<br />')
        document.write('O decremento de ' + num1 + ' é: ' + (--num1) + '<br />')
        document.write(num1)

    </script>
~~~


<div id="aula26" align="center">
  <h2>Aula 26: Operações aritméticas na atribuição de valores.</h2>
</div>

Em JS, podemos realizar operações matemáticas ou concatenação no processo de atribuição de valores a variáveis!

O objetivo é diminuir a quantidade de código, tornando os sripts menos verbosos, mais enxutos.

Usualmente, escrevemos:
~~~javascript
var teste = 10
teste = teste + 5
~~~

Porém, no JS, podemos escrever da seguinte forma, obtendo o mesmo resultado:

~~~javascript
var teste = 10
teste += 5
~~~

Podemos fazer operações de subtração, multiplicação, divisão e mod da mesma forma.

Também podemos realizar a concatenação de strings da mesma forma!


<div id="aula27" align="center">
  <h2>Aula 27: Precedência de execução das operações aritméticas.</h2>
</div>

A interpretação do código ocorre de forma gravitacional: de cima para baixo, da esquerda para a direita. 

Entretanto, os princípios matemáticos são aplicados de modo coerente durante a leitura do código (há uma precedência ou importância maior para cada operação matemática). Portanto, há uma ordem:

1. Multiplicação e divisão 
2. Soma e subtração 

Há ainda os parênteses, capazes de aplicar precedência dentro das operações aritméticas.



<div id="aula28" align="center">
  <h2>Aula 28: Atividades para fixação do conteúdo.</h2>
</div>

Enunciado:

Crie uma aplicação para efetuar o cálculo do índice de massa corporal.
Considere os seguintes critérios:
1. Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.
2. Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em centímetros.
3. Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
4. Após as estradas de dados, atente-se a conversão das informações para dados do tipo float.
5. Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100).
6. Internamente a aplicação deve executar o cálculo do índice de massa corporal através da expressão: M = peso (quilos) ÷ altura²
7. Após identificar o índice de massa corporal o sistema deverá classificar em faixas descritivas utilizando os critérios abaixo:

    - Se M estiver abaixo de 16 : Baixo peso muito grave
    - Se M estiver entre 16 e 16,99: Baixo peso grave
    - Se M estiver entre 17 e 18,49: Baixo peso
    - Se M estiver entre 18,50 e 24,99: Peso normal
    - Se M estiver entre 25 e 29,99: Sobrepeso
    - Se M estiver entre 30 e 34,99: Obesidade grau I
    - Se M estiver entre 35 e 39,99: Obesidade grau II
    - Se M for maior que 40: Obesidade grau III
  
8. Ao término o sistema deve fornecer a seguinte saída para o usuário:
> “&lt;Nome&gt; possui índice de massa corporal igual a &lt;m&gt;, sendo classificado como: &lt;classificacao&gt;.”

Resolução:

~~~javascript
//parâmetros
var nome = prompt('Informe seu nome:')
var altura = prompt('Informe sua altura (em centímetros):')
var peso = prompt('Informe seu peso:')

//conversão caracteres em float
altura = parseFloat(altura)
peso = parseFloat(peso)

//conversão centímetros -> metros
altura /= 100

//cálculo IMC
var imc = peso / (altura * altura)

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

alert(nome + " possui índice de massa corporal igual a " + imc.toFixed(2) + ", sendo classificado como: " + classificacao + "." )
~~~


<div id="aula29" align="center">
  <h2>Aula 29: Funções - Introdução.</h2>
</div>

A função é responsável por encapsular um bloco de código para um objetivo definido, podendo ser reutilizada em diversos momentos de nossas aplicações.

Exemplo de declaração de função:

~~~javascript
function calcularAreaTerreno(largura, comprimento) {
  var area = largura * comprimento
  return area
}
~~~

É indicado (como boa prática) o uso de duas palavras combinadas para nomear funções, sendo a primeira um verbo no infinitivo, e a segunda, um substativo iniciado com a primeira letra maiúscula.

**Parâmetros ou argumentos**: funcionam como uma espécie de entrada de dados da função. Podemos não passar nenhum parâmetro, ou quantos forem necessários (separando-os por vírgulas). São variáveis.

**Escopo**: nele, podemos trabalhar com todos os recursos da linguagem para criação da lógica da função, podendo inclusive chamar outras funções - por isso falamos que as funções são subprogramas dos nossos programas.

Podem ser de **dois tipos**:

1. void: quando chamada, apenas processará alguma lógica (sem retorno para quem fez a chamada).
2. com retorno: como o exemplo acima; processa lógica e retornará algum valor para o script que efetuou a chamada da função.


<div id="aula30" align="center">
  <h2>Aula 30: Funções - Prática.</h2>
</div>

Continuando o estudo da aula anterior, para chamae a função acima, escrevemos (definindo os parâmetros nos parênteses):

~~~javascript
function calcularAreaTerreno(largura, comprimento) {
  var area = largura * comprimento
  return area
}

var area = calcularAreaTerreno(15, 25)
document.write('O terreno possui ' + area + ' metros quadrados.')
~~~

Acima definimos o valor retornado da função COMO UMA VARIÁVEL, tornando a escrita mais clara e facilitando a leitura do script.

Podemos, inclusive, fazer com que os parâmetros sejam fornecidos pelo usuário. Exemplo:

~~~javascript
function calcularAreaTerreno(largura, comprimento) {
  var area = largura * comprimento
  return area
}

var largura = prompt('Digite a largura do terreno (em metros).')
var comprimento = prompt('Digite o comprimento do terreno (em metros).')

var area = calcularAreaTerreno(15, 25)
document.write('O terreno possui ' + area + ' metros quadrados.')
~~~

Os dados do prompt são coletados como string. Entretanto, o JS identifica que é realizada uma operação de multiplicação com os valores coletados, e realiza a operação. Porém, sugere-se que seja realizado o parseFloat, para evitar bugs no futuro.

As funções não precisam ser declaradas antes das suas respectivas chamadas. Quando o interpretador do JS lê o script, ele procura primeiro pelas funções, as aloca em memória, e em seguida lê o script. Ou seja, nada impede de declarar a função ao final do script.


<div id="aula31" align="center">
  <h2>Aula 31: Funções - Flexibilidade de parâmetros.</h2>
</div>

Mesmo estabalecendo os parâmetros que uma função recebe (que constituem sua assinatura), não necessariamente esses parâmetros precisam ser passados. Isso é uma particularidade do JS!

Exemplo:

~~~javascript
function soma(a, b) {
	return a + b
}

document.write(soma(7, 7, 9, 15))
~~~

O JS descarta os demais parâmetros, caso sejam fornecidos mais do que os esperados, como no caso acima. Nessa situação, o resultado é 14 (soma dos dois primeiros valores).

Se, por acaso, chamar a função atribuindo apenas um parâmetro, aquele que não foi informado será considerado undefined. No caso acima, seria a soma do valor 7 com undefined, resultando em "not a number" (NaN).

É possível corrigir esse problema, se for previsto dentro da nossa aplicação. Para tal: 

~~~javascript
function soma(a, b) { 
  b = b === undefined ? 0 : b
	return a + b
}

document.write(soma(7))
~~~

Na situação acima, através do operador ternário, lemos: b equilave a undefined? se sim, b = 0; se não, utilizar o valor de b. Assim, solucionamos o problema.

Caso não passemos parâmetro nenhum, teremos undefined + undefined, resultando em NaN.


<div id="aula32" align="center">
  <h2>Aula 32: Escopo de variáveis.</h2>
</div>

O JS possui 3 escopos:

1. Global: 
    - é o script da função como um todo.
    - podemos ter acesso nos demais escopos, quando a variável é declarada no escopo global.

~~~javascript
var serie = 'Friends'

if (true) {
  document.write(serie) //escopo de bloco
}

function x() {
  document.write(serie) //escopo da função
}
~~~

2. Função
    - conteúdo inserido dentro de um bloco de função.
    - funções são subprogramas, definidos entre as chaves {}.
    - variáveis declaradas no escopo da função nao sofrem hoisting (não sofrem elevação pro escopo global); as variáveis ficam disponíveis APENAS no escopo da função.

~~~javascript
function x() {
  var serie 3 = 'The Office' //escopo da função
}

document.write(serie3) //escopo global

if (true) {
  document.write(serie3)
}
~~~

3. Bloco
    - instruções contidas dentro de comandos, como if e switch.
    - também abrimos e fechamos chaves para instruir os comandos.
    - variáveis declaradas dentro do escopo do bloco são elevadas (HOISTING) para o escopo global! Ou seja, também fica disponível no escopo da função.

~~~javascript
if (true) {
  var serie2 = 'Game of Thrones'
}

document.write(serie2) //escopo global

function x() {
  document.write(serie2) //escopo da função
}
~~~


<div id="aula33" align="center">
  <h2>Aula 33: Funções anônimas e técnica de wrapper.</h2>
</div>

### Funções anônimas:
- não possuem nome;
- sintaxe e funcionamento são iguais aos de uma função comum;
- para criá-la, utilizar a palavra reservada function, seguida de parênteses e chaves;
- para chamá-la, utilizar o conceito de wrapper.

~~~javascript
function () {
  document.write('Olá ' + nome + ', tudo bem?)
}
~~~

### Técnica de wrapper:
O JS tem a capacidade de associar a uma variável não apenas strings, valores booleanos e numéricos. Podemos associar também funções!

Exemplo:
~~~javascript
var exibirSaudacao = function () {
  document.write('Olá ' + nome + ', tudo bem?)
}

exibirSaudacao()
~~~

Ou seja, a variável passar a guardar uma referência para a função!


<div id="aula34" align="center">
  <h2>Aula 34: Funções de callback.</h2>
</div>

São funções encaminhadas como parâmetro para outras funções.

O objetivo é, após a finalização da função, ter condições de chamar a função encaminhada por parâmetro, dando continuidade no processamento da lógica da aplicação.

Exemplo:

~~~javascript
callbackSucesso(titulo, descricao)
callbackErro(erro)

function exibirArtigo(id,callbackSucesso, callbackErro) {
  //lógica para recuperar o artigo com base no id
  if (?) {
    callbackSucesso('Titulo', 'Descrição')
  } else {
    callbackErro('Erro')
  }
}
~~~


<div id="aula35" align="center">
  <h2>Aula 35: Funções nativas para manipular strings.</h2>
</div>

Vale lembrar que valores primitivos como strings por si só não possuem propriedades ou métodos. Porém, quando são interpretados pelo JS, podem ser interpretados como objetos, agregando propriedades e métodos pré-estabelecidos da linguagem!

Cada caractere contido dentro de uma string ocupa uma posição sequencial específica, sendo que tem início na posição 0.

Recomendado o acesso à [Documentação no site do W3schools](https://www.w3schools.com/js/) para ter acesso à relação de propriedades e atributos de objetos e strings em JS (clicar em JS String).

### Propriedade length:

Retrna a quantidade de caracteres de uma String. A partir dela, podemos testar o tamanho de uma String e tomar uma decisão, como por exemplo, truncar (cortar) a String para que caiba em uma área específica da página.

~~~javascript
document.write('Mônica Zungalo Quintal'.length)
// O exemplo acima retorna o resultado "22". 
~~~

Lembrar que a String tem início no valor zero, e a indexação dos caracteres é sequencial e automática. Os caracteres em branco também contam! 

### Método charAt():

Retorna um caractere com base na posição que o mesmo ocupa dentro da cadeia. 
Ou seja, encaminhamos um índice e o charAt informa o caracter contido no índice.

~~~javascript
document.write('Mônica Zungalo Quintal'.charAt(3))
// O exemplo acima retorna o resultado "i".
~~~

### Método indexOf():

Retorna a posição da primeira ocorrência de um valor específico dentro da String.

~~~javascript
document.write('Mônica Zungalo Quintal'.indexOf('a'))
// O exemplo acima retorna o resultado "5".
~~~

Caso informe um caractere que não existe na String, o resultado será **-1**.

### Método replace():

Permite, com base em um valor de pesquisa e também em um outro valor de modificação, substituir textos dentro de uma string.

~~~javascript
document.write('Mônica Zungalo Quintal'.replace('Zungalo Quintal', 'estudante de DS'))
// O exemplo acima retorna o resultado "Mônica estudante de DS"
~~~

### Método substr():

Permite extrair parte de uma string, com base em uma posição inicial, seguida de um valor que representa a quantidade de caracteres à frente daquela posição inicial (é como se recortasse uma parte da string).

~~~javascript
document.write('Mônica Zungalo Quintal'.substr(15, 7))
// O exemplo acima retorna o resultado "Quintal"
~~~

### Métodos toLowerCase() e toUpperCase():

toLowerCase converte todos os caracteres de uma string para caixa baixa (caracteres minúsculos), e toUpperCase, para caixa alta (caracteres maiúsculos).

~~~javascript
document.write('Mônica Zungalo Quintal'.toLowerCase())
//resultado 'monica zungalo quintal'
document.write('Mônica Zungalo Quintal'.toUpperCase())
//resultado 'MONICA ZUNGALO QUINTAL'
~~~

### Método trim ():

Remove os espaços em branco das extremidades de uma String.

~~~javascript
var nome = ' Mônica Zungalo Quintal '
document.write('-' + nome.trim() + '-')
// resultado -Mônica Zungalo Quintal-
~~~


<div id="aula36" align="center">
  <h2>Aula 36: Funções nativas para tarefas matemáticas.</h2>
</div>

Recomendado o acesso à [Documentação no site do W3schools](https://www.w3schools.com/js/) para ter acesso à relação de propriedades, atributos e métodos (clicar em JS Math).

### Função Math.ceil():

Força o arredondamento sempre para cima, independente da fração.

~~~javascript
var x = Math.ceil(10.380)
document.write(x)
// o resultado obtido será '11'
~~~

### Função Math.floor():

Força o arredondamento sempre para baixo, independente da fração.

~~~javascript
var x = Math.floor(10.380)
document.write(x)
// o resultado obtido será '10'
~~~


### Função Math.round():

Caso seja necessário algo mais dinâmico, em que o arredondamento seja feito através de uma média. Leva em consideração o peso da fração, para determinar se arredonda para cima ou para baixo.

~~~javascript
var x = Math.round(10.380)
document.write(x)
// o resultado obtido será '10'
~~~

### Método random()

Fornece um n°. aleatório (randômico) entre 0 e 1.

~~~ javascript
var x = Math.random()
document.write(x)
~~~


<div id="aula37" align="center">
  <h2>Aula 37: Funções nativas para manipular datas.</h2>
</div>

Recomendado o acesso à [Documentação no site do W3schools](https://www.w3schools.com/js/) para ter acesso à relação de propriedades e métodos (clicar em JS Date).

O Date é um objeto que precisa ser instanciado. Para isso, cria-se uma variável, e a ela é atribuída uma nova instância ao objeto Date, como a seguir:

~~~javascript
var data = new Date()
~~~

O operador "new Date()" faz com que um novo objeto de data seja criado e atribuído a uma variável. A partir dessa variável, temos acesso a um objeto que contém todos os detalhes de datas do momento da instância do objeto - naquele momento em que nós criamos a instrução new Date(). 

Todas essas informações de datas são criadas com base na data do Sistema Operacional aonde o browser está rodando - o JS solicita parâmetros de data pro browser, que solicita ao SO. Se o usuário alterar hora e data em sua máquina, o objeto se baseará nesses dados.

Geralmente informações de data são armazenadas em BD, de modo que a complexidade é menor e a segurança se torna maior, porque a informação já vem trabalhada para ser exibida no front-end.

### Método getDate():

Recupera o dia do mês em que estamos (de 1 a 31).

~~~javascript
var data = new Date()

document.write(data.getDate())
~~~

### Método getMonth():

Recupera o mês em que estamos (considera os meses de 0 a 11). Lembrar de somar 1 unidade ao valor de retorno, para ajustar a forma de exibição do mês;

~~~javascript
var data = new Date()

document.write(data.getMonth() + 1)
~~~

### Método getFullYear():

Recupera o ano em que estamos.

~~~javascript
var data = new Date()

document.write(data.getFullYear())
~~~

### ➕ Concatenando:  

~~~javascript
var data = new Date()

document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())
~~~

### Observação:

Um detalhe importante sobre o objeto Date é que ele também possui métodos para configuração dos seus respectivos valores.

Os **métodos "get"** são utilizados para recuperar dados, enquanto os **métodos "set"** são utilizados para setar dados.

Assim, podemos criar objetos diversos do tipo Date, e utilizá-los para realizar cálculos.


<div id="aula38" align="center">
  <h2>Aula 38: Praticando um pouco mais com datas.</h2>
</div>

### Adicionar/remover dias da data:

1. utilizar o **método toString()** (converte o objeto data em uma String, uma representação textual da mesma);

2. recuperar a data com o método **setDate()** (seta valores no objeto data) e adicionar a quantidade de dias pretendida no getDate().

Exemplo:

~~~javascript
var data = new Date()

document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<hr>')
document.write(data.toString())
~~~

Para *remover* dias, trocar o "+" da operação por "-".

O método setDate também tem inteligência para atuar sobre meses e anos (se adicionarmos uma grande quantidade de dias, por exemplo, ele adequará dia, mês e ano).

Podemos também trabalhar adicionando/removendo meses e anos (utilizando getMonth() e getFullYear()).

### Cálculo entre duas datas diferentes:

1. Inicialmente, criar duas variáveis e os objetos que representam as datas.

2. Converter as datas para um valor que possa ser calculado:
    - utilizar o **método getTime()** para as datas.
    - esse método recupera a quantidade de milisegundos entre as datas.
    - calcular a quantidade de milisegundos para cada uma das datas.

3. Calcular a quantidade de milisegundos entre datas 1 e 2.
    - subtrair uma data da outra.
    - utilizar o **método Math.abs()** - retorna o valor absoluto de um número (porque não da para dizer que a distância entre um dia e outro é negativa, por exemplo).

4. Converter os milisegundos em dias:
    - multiplicar um dia por 24 horas, 60 minutos, 60 segundos, 1000 milisegundos -> para obter a quantidade de milisegundos em um dia.
    - dividir o resultado da diferença de milisegundos entre datas pela quantidade de milisegundos que há em um dia.

5. Realizar o arredondamento da quantidade de dias:
    - no exemplo, o prof. usou o método Math.ceil() para arredondar para cima.

6. Imprimir o resultado.

~~~javascript
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
var milissegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundosEntreDatas)
document.write('<br /><br /><hr />')

//1 dia tem 24 horas, cada hora tem 60 minutos, cada minuto tem 60 segundos e cada segundo tem 1000 milissegundos

//então quantos milissegundos existem em um dia?
var milissegundosPorDia = (1*24*60*60*1000)
document.write(' 1 dia tem: ' + milissegundosPorDia + ' milissegundos' )

document.write('<br /><br /><hr />')
document.write('A diferença entre data1 e data2 é de ' + Math.ceil(milissegundosEntreDatas / milissegundosPorDia) + ' dia(s)')

~~~


<div id="aula39" align="center">
  <h2>Aula 39: Atividades para fixação do conteúdo.</h2>
</div>

### Exercício proposto:

Crie uma aplicação para efetuar cálculo aritméticos de soma e subtração.

Considere os seguintes critérios:

1. Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de uma operação de soma ou subtração e posteriormente seguido de um segundo
número.

2. A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as
aspas).

3. Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido cálculo. Exemplo: calculo(num1, num2, operacao).

4. A função deve executar o cálculo com base na operação informada pelo usuário e na sequência deve retornar o valor encontrado.
5. Ao término o sistema deve fornecer a seguinte saída para o usuário: “O resultado é: &lt;resultado&gt;.”

### Resolução:

~~~javascript
var numero1 = prompt('Informe um número:')
var operacao = prompt('Digite a operação desejada - informe "soma" ou "subtração" (sem as aspas)')
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
}

alert("O resultado é: " + Calcular(numero1, numero2, operacao))
~~~

<div id="aula40" align="center">
  <h2>Aula 40: Eventos parte 1 - Introdução.</h2>
</div>

É um recurso muito importante do JS, quando executada do lado do cliente (browser).

Os Eventos nos possibilitam capturar ações que são feitas pelo usuário dentro do browser (comportamentos, como clique no teclado, mouse, redimensionamento de tela, carregamento da página, etc).

Com isso, podemos disparar a realização de lógicas a partir da interação do usuário com os elementos da página.


<div id="aula41" align="center">
  <h2>Aula 41: Eventos parte 2 - Mouse.</h2>
</div>

Inicialmente, precisamos criar um elemento HTML para atribuir um evento cujo disparo se dê a partir da utilização do mouse.

Os elementos são declarados no HTML usando a sintaxe de propriedade.

Principais eventos que podem ser capturados pelo JS a partir do uso do mouse:

### 1. onclick:

Acionado quando o elemento é clicado.

~~~javascript
<script>
function acao() {
 alert("Evento disparado!")
}
</script>

<body>
<div onclick="acao()" style="background: #ccc; height: 150px; width: 250px"></div>
</body>
~~~

No caso dos demais Eventos, apenas trocar a propriedade atribuída à div, conforme o exemplo acima.

### 2. ondblclick:

Acionado quando o elemento é clicado duas vezes.

### 3. onmouseup:

Acionado quando o clique sobre determinado elemento é liberado.

### 4. onmouseover:

Acionado quando o cursor do mouse sobrepõe o elemento.

### 5. onmouseout:

Acionado quando o cursor do mouse sai da região da página ocupada pelo elemento.

### Importante:

Esses eventos podem ser combinados!
E nem todos os eventos estão disponíveis para todos os elementos HTML. Consultar a documentação (acessar a [Documentação no site do W3schools](https://www.w3schools.com/js/), em DOM Events > HTML DOM Events).


<div id="aula42" align="center">
  <h2>Aula 42: Eventos parte 3 - Teclado.</h2>
</div>

### 1. onkeydown:

Acionado quando uma tecla é pressionada.

~~~javascript
<script>
function acao() {
 alert("Evento disparado!")
}
</script>

<div>
 <input onkeydown="acao()" type="text">
</div>
~~~

O evento é disparado e, só após sua execução, que o caractere digitado é exibido. Permite tratar o caracter antes dele ser exibido.

### 2. onkeypress:

Acionado quando a tecla é liberada. Addim como onkeydown, o evento ocorre antes da apresentação do caracter digitado. A diferença para onkeydown é que a ação é tomada somente quando a tecla pressionada é um caracter.

### 3. onkeyup:

Instante em que a tecla é mantida pressionada. Ao pressionar a tecla, ela será apresentada, e só depois a ação será executada.


<div id="aula43" align="center">
  <h2>Aula 43: Eventos parte 4 - Janela.</h2>
</div>

### 1. onresize:

Acionado quando o frame ou página é redimensionada.

Portanto, esse evento deve ser associado a um elemento HTML que sofra influência da alteração do tamanho da janela. Nesse caso, o elemento é o **body** (encapsula todo o conteúdo).

~~~javascript
<body onresize = "alert('Evento disparado!')"></body>
~~~

### 2. onscroll:

Acionado quando o scroll do mouse é acionado.

Associado a qualquer elemento que possua uma barra de rolagem.

~~~javascript
<body onscroll = "alert('Evento disparado!')"></body>
~~~


<div id="aula44" align="center">
  <h2>Aula 44: Eventos parte 5 - Formulários.</h2>
</div>

Grupo de eventos relacionados a formulários.

### 1. onfocus:

Acionado quando o elemento recebe o foco do cursor do mouse (quando clicamos nele).

~~~javascript
<input onfocus="console.log('teste')" type="text">
~~~

Nesse caso, o prof. não exemplifica com alert, e sim com console.log, pois o alert causaria um looping (ativarria repetidamente a função).

### 2. onblur:

Acionado quando o elemento perde o foco clicamos em outro ou pressionamos tab).

~~~javascript
<input onfocus="console.log('recebeu o foco')" onblur="console.log('perdeu o foco')" type="text">
~~~

### 3. onchange:

Acionado quando o estado do elemento é modificado. É muito utilizado em conjunto com o elemento select.

~~~javascript
<select onchange="console.log('estado foi modificado')">
 <option>-- Selecione --</option>
 <option value="1">Primeira opção</option>
 <option value="2">Segunda opção</option>
</select>
~~~


<div id="aula45" align="center">
  <h2>Aula 45: DOM parte 1 - Introdução. 🌳</h2>
</div>

DOM significa ***Document Object Model***. É uma API multiplataforma que permite o acesso via JS aos elementos HTML da página. É através da API do DOM que podemos modificar os elementos HTML.

Todos os elementos HTML, quando interpretados pelo navegador, ficam organizados num objeto document, e essa organização tem a representação análoga à uma árvore, onde os elementos pais encapsulam os filhos, de tal modo a estabelecer trajetos específicos para alcançar cada um destes elementos (estrutura hierárquica). Por isso é comum utilizar o termo ***árvore de elementos de DOM***.

Cada elemento HTML contido num DOM é chamado de **nó ou node**.


<div id="aula46" align="center">
  <h2>Aula 46: DOM parte 2 - Selecionando elementos da página.</h2>
</div>

Para fazer a seleção de elementos (a partir de seus atributos), há alguns métodos na API do DOM, acessíveis a partir do objeto document. São eles:

### 1. getElementById():

Seleciona o elemento HTML a partir da propriedade id. É usaado em 85% dos casos!
Importante: id é uma identificação única para o elemento; não podemos ter repetições de id!!!

~~~javascript
console.log(document.getElementById("nome_usuario"))

// em index.html
<input type="text" placeholder="Digite seu nome" id="nome_usuario" class="campo_texto" name="nome">
~~~

### 2. getElementsByTagName():

Seleciona pelo nome da tag; no caso abaixo, &lt;input&gt;.

~~~javascript
console.log(document.getElementsByTagName("input"))

// em index.html
<input type="text" placeholder="Digite seu nome" id="nome_usuario" class="campo_texto" name="nome">
~~~

### 3. getElementsByClassName():

Seleciona elementos pelo atributo classe.

~~~javascript
console.log(document.getElementsByClassName("campo_texto"))

//em index.html
<input type="text" placeholder="Digite seu nome" id="nome_usuario" class="campo_texto" name="nome">
~~~

### 4. getElementsByName():

Recupera elementos pelo atributo name.

~~~javascript
console.log(document.getElementsByName("nome"))

// em index.html
<input type="text" placeholder="Digite seu nome" id="nome_usuario" class="campo_texto" name="nome">
</body>
~~~


<div id="aula47" align="center">
  <h2>Aula 47: DOM parte 3 - Manipulando valores de inputs (tipo text 📝).</h2>
</div>

### Exercício:

Verificar o caractere digitado no input; em caso de letra, vai para o campo "Letras" e, se for número, para o campo "Números".

### Estudando...

1. inicialmente, aplicado o método onkeyup no input, para capturar a entrada de caracteres.

2. adicionada id "entrada" a este input, para utilizá-lo na função distribuiCaracter.

3. atribuir ".value" ao document.getElementById("entrada"), para que retorne o valor digitado no campo.

4. para limpar o campo de digitação, definir o valor como "".

5. switch case; lembrar de comparar o valor com strings ("0", por exemplo), pois a var captura o valor digitado como string.

6. limpar espaços em branco nas extremidades da string através do método trim().

7. criar a condição de 0 a 9 no switch case. O default será todo o restante pois, se o digitado não for número, será enquadrado como letra.

8. atribuir ids aos inputs de letras e numeros, para utilização no switch case.

9. através do getElementById, setar/atribuir o valor (.value) como a variável caracter.

10. podemos, inclusive, em vez de apenas atribuir o valor, utilizar o operador de concatenação (+=), concatenando cada um dos caracteres digitados, ao invés de sobrepor.

### Na prática:

~~~javascript
function distribuiCaracter() {
 // selecionar o valor digitado
 var caracter = document.getElementById("entrada").value

 // limpar o campo de digitação
 document.getElementById("entrada").value = ""

//limpar espaços em branco nas extremidades da string
caracter.trim()

switch (caracter) {
 case "0": 
 case "1": 
 case "2": 
 case "3": 
 case "4": 
 case "5": 
 case "6": 
 case "7": 
 case "8":
 case "9": 

// adicionar o caracter no campo referente a números
document.getElementById("apenas_numeros").value +=  caracter
break;

default: 
// adicionar caractere no campo referente a letras
document.getElementById("apenas_letras").value +=  caracter
 }
}

// em index.html
<input type="text" placeholder="Digite um caracter aqui" onkeyup="distribuiCaracter()" id="entrada">
<hr>
<span>Letras:</span>
<input type="text" id="apenas_letras" disabled="disabled">
<span>Números:</span>
<input type="text" id="apenas_numeros" disabled="disabled">
~~~


<div id="aula48" align="center">
  <h2>Aula 48: DOM parte 4 - Manipulando estilos de elementos.</h2>
</div>

### Exercício:

Criar uma página com 3 botões: ao clicar sobre cada um deles, iremos afetar o estilo de uma div (modificar o style inline).

### Praticando: 

1. criação de 3 botões.

2. criação de uma div onde serão aplicados os estilos.

3. incluído em cada um dos botões a função modificaEstilo(), e passado por parâmetro o código hexadecimal que representa a cor em cada um deles.

4. declarar a função na tag script, com corDeFundo como parâmetro.

5. definido id "quadrado" para a div, que será usada como referência para getElementbyId no script. Incluir **".style.backgroundColor"** ao final, pois acessaremos o atributo style deste elemento, especificamente de background, no caso (usar camel case para se referir ao atributo CSS).

6. recuperar também altura (a) e largura (l), e inclui-los como parâmetros da função.

### O código:

~~~javascript
function modificaEstilo(corDeFundo, l, a){
 document.getElementById('quadrado').style.backgroundColor = corDeFundo     
 document.getElementById('quadrado').style.width = l     
 document.getElementById('quadrado').style.height = a     
}

// em index.html
<button type="button" onclick="modificaEstilo('#FF0000', '200px')">Vermelho</button>
<button type="button" onclick="modificaEstilo('#00FF00', '150px', '20px')">Verde</button>
<button type="button" onclick="modificaEstilo('#0000FF', '150px', '200px')">Azul</button>

<div id="quadrado" style="border: solid 1px #000; width: 100px; height: 100px;"></div>
~~~


<div id="aula49" align="center">
  <h2>Aula 49: DOM parte 5 - Manipulando classes de elementos.</h2>
</div>


### Proposta:

Aprenderemos a manipular o atributo class, que alterará o estilo visual inicial de um elemento.

### Desenvolvendo:

1. criar estilos 1 e 2 na tag style, bem como seus atributos.

2. criar a div com id="mensagem" no body, e incluir o button.

3. add evento onclick no botão, com evento modificaClasse().

4. na tag script, criar a função modificaClasse(), com document.getElementById "mensagem", utilizando atributo .className e informando a classe que será aplicada no momento que a função for aplicada.

### O código:

1. CSS:

~~~css
.estilo1 {
 background: #FF0000;
 color: #FFF;
}

.estilo2 {
 width: 400px;
 height: 50px;
 background-color: #FF0000;
 text-align: center;
 font-size: 25px;
 color: #FFF;
 padding: 25px;
}
~~~

2. JavaScript

~~~javascript
function modificaClasse() {
 document.getElementById('mensagem').className = 'estilo2'
}
~~~

3. HTML

~~~html
<div id="mensagem" class="estilo1">Modificando a classe do elemento</div>
<hr />
<button type="button" onclick="modificaClasse()">Aplicar classe</button>
~~~


<div id="aula50" align="center">
  <h2>Aula 50: Atividades para fixação do conteúdo.</h2>
</div>

### Enunciado:

Crie um campo &lt;input type="text"&gt; e aplique os seguintes controles com base nos eventos abaixo:
* No evento de foco modifique o background do input para amarelo.
* Quando o campo perder o foco, recupere o seu respectivo valor e:
  * Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo deve ter seu background alterado para vermelho.
  * Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background
deve ser alterado para verde

### Resolução:

1. HTML

~~~html
<input id="campo" type="text" onfocus="eventoDeFoco()" onblur="recuperaValor()">
<button id="teste">Submit</button>
~~~

2. Javascript

~~~javascript
function eventoDeFoco() {
 document.getElementById("campo").style.background = "yellow"
}

function recuperaValor() {
 var valor = document.getElementById("campo").value

 if (valor.length < 3) {
  document.getElementById("campo").style.background = "red"
 } else {
  document.getElementById("campo").style.background = "green"
 }
}
~~~


<div id="aula51" align="center">
  <h2>Aula 51: Array básico - Introdução.</h2>
</div>

**Arrays** são listas ordenadas; são variáveis que nos permitem relacionar itens associados a índices (também conhecidos como chaves ou posições). Armazena, de forma relacionada, qualquer tipo de coisa.

~~~javascript
var lista_frutas = Array ();

lista_frutas[1] = 'banana'
lista_frutas[2] = 'maçã'
lista_frutas[3] = 'morango'
lista_frutas[4] = 'uva'
~~~

<div id="aula52" align="center">
  <h2>Aula 52: Array básico - Prática.</h2>
</div>

Trabalhado o mesmo exemplo da aula anterior.

> O índice deve ser único, mas não precisa ser numérico nem sequencial!!!

Também pode ser utilizado abertura e fechamento de colchetes para indicar Array, da seguinte forma:

~~~javascript
var lista_frutas = [];

lista_frutas[1] = 'banana'
lista_frutas[2] = 'maçã'
lista_frutas[3] = 'morango'
lista_frutas[4] = 'uva'
~~~

Seja utilizando "Array()" ou "[]", em ambos os casos poderemos **manipular os índices**.  

Há ainda **outras duas formas de escrita** de Arrays, as quais *não permitem a manipulação dos índices* (o JS cria as posições, iniciando no INDICE ZERO). São elas:

~~~javascript
var lista_frutas = Array('banana', 'maçã', 'morango', 'uva')
~~~

e

~~~javascript
var lista_frutas = ['banana', 'maçã', 'morango', 'uva']
~~~


<div id="aula53" align="center">
  <h2>Aula 53: Extra - diferença entre o atributo length de variáveis do tipo string e array.</h2>
</div>

O atributo length está disponível para objetos do tipo Array e para variáveis do tipo string.

Em Array, o atributo length conterá a quantidade de elementos dentro do array, desde que sejam indexados por valores numéricos sequenciais, sem intervalo, e que iniciem em zero.


<div id="aula54" align="center">
  <h2>Aula 54: Array multidimensional.</h2>
</div>

**Arrays multidimensionais** são arrays de arrays. Ou seja, através de uma variável e um índice, poderemos acessar outro Array! Ou seja, podemos encadear outros arrays dentro dos índices.

~~~javascript
var lista_coisas = Array()

lista_coisas ['frutas'] = Array('banana', 'maçã', 'morango', 'uva')
lista_coisas ['pessoas'] = Array('João', 'José', 'Maria')

document.write(lista_coisas['frutas'][3])
document.write(lista_coisas['pessoas'][1])
~~~


<div id="aula55" align="center">
  <h2>Aula 55: Array - métodos de inclusão e exclusão de elementos.</h2>
</div>

~~~javascript
var lista_frutas = Array();

lista_frutas[0] = 'banana'
lista_frutas[1] = 'maçã'

console.log(lista_frutas)
~~~

1. Inclusão de elementos:

a) Para incluir um elemento no final do Array (na última posição), podemos utilizar um método nativo chamado **.push()**. 
Exemplo:

~~~javascript
lista_frutas.push('uva')
~~~

b) Para incluir um elemento no início do Array (na posição zero), podemos utilizar um método chamado **.unshift()**. 
Os demais índices serão rearranjados!
Exemplo:

~~~javascript
lista_frutas.unshift('uva')
~~~

3. Exclusão de elementos:

a) Para excluir elementos do final do Array, utilizar o método **.pop()**!
Como trata-se de uma operação de exclusão, não há necessidade de passar nenhum parâmetro.

~~~javascript
lista_frutas.pop()
~~~

b) Para excluir elementos do início do Array, utilizar o método **.shift()**!
Como trata-se de uma operação de exclusão, não há necessidade de passar nenhum parâmetro.

~~~javascript
lista_frutas.shift()
~~~

3. Importante: podemos também utilizar estes métodos de inclusão e exclusão em Arrays multidimensionais!


<div id="aula56" align="center">
  <h2>Aula 56: Array - método de pesquisa.</h2>
</div>

A pesquisa é utilizada para verificar se um elemento existe ou não e sua posição (índice) e, a partir disso, tomar decisões dentro da lógica de programação.

O método utilizado é o **.indexOf()**.

~~~javascript
var lista_frutas = Array();

lista_frutas[0] = 'banana'
lista_frutas[1] = 'maçã'
lista_frutas[2] = 'morango'
lista_frutas[3] = 'uva'

console.log(lista_frutas.indexOf('uva'))
~~~

Retorna o índice em que o elemento está contido (ou ***-1***, caso ele não exista dentro do Array)!
Podemos utilizar o método "if" para indicar quando o elemento não existe, como no exemplo:

~~~javascript
var lista_frutas = Array();

lista_frutas[0] = 'banana'
lista_frutas[1] = 'maçã'
lista_frutas[2] = 'morango'
lista_frutas[3] = 'uva'

if (lista_frutas.indexOf('abacaxi') === -1) {
  console.log('Elemento nao existe!')
} else {
  console.log('Elemento existe e está na posição ' + lista_frutas.indexOf('uva'))
}
~~~

***IMPORTANTE:*** a pesquisa é case sensitive!!!

E, como observação: podemos criar uma variável auxiliar que armazene "lista_frutas.indexOf('abacaxi')" para tornar o código acima menos verboso. 


<div id="aula57" align="center">
  <h2>Aula 57: Array - ordenação de elementos.</h2>
</div>

O método ***.sort()*** age sobre o Array e faz uma reordenação alfanumérica, com base nos valores dos elementos, ajustando inclusive seus respectivos índices.
Ele é ESPECÍFICO para ordenação alfanumérica!!!

~~~javascript
var lista_frutas = Array();

lista_frutas[0] = 'maçã'
lista_frutas[1] = 'uva'
lista_frutas[2] = 'banana'
lista_frutas[3] = 'morango'

console.log(lista_frutas.sort())
~~~

Para ordenação de Arrays que contêm valores numéricos, precisamos "ensinar" o método .sort() a trabalhar nessa situação.
Para isso, encaminhar uma função padrão ao método sort, como a seguir:

~~~javascript
console.log(lista_frutas.sort(ordenaNumeros))

function ordenaNumeros(a, b) {
  return a - b
}
~~~

A função ordenaNumeros é passada como referência, sem a abertura e fechamento de parênteses (pois deve ser executada dentro do método sort para que o resultado seja coerente - recuperará o valor da posição a, que será testada, em comparação com o segundo elemento, na próxima posição - b).

Portanto:

- se &lt; 0: a ordenado antes de b;
- se &gt; 0: b ordenado antes de a;
- se a == b, a ordem será mantida;
- caso haja uma string no meio da lista, por exemplo, a ordenação será indefinida, ocorrendo um erro. 

Se os valores do array, apesar de serem strings, representarem valores numéricos (como lista[1] = "12"), ainda assim poderemos utilizar sort!


<div id="aula58" align="center">
  <h2>Aula 58: Atividades para fixação de conteúdo.</h2>
</div>

### Enunciado:

1. Crie uma aplicação web contendo um campo para entrada de texto (input text) e dois botões (buttons), sendo um botão com a descrição "Adicionar" e outro com a descrição "Ordenar".

2. Após criar os elementos de interação com o usuário acima, crie um Array de nome objetos contendo os seguintes valores:

var objetos = Array('Cadeira', 'Impressora', 'Garfo')

3. Os próximos passos são:

A) Ao clicar no botão "Adicionar" disparar função que irá:

- Recuperar o valor contido no campo de texto.
- Verificar se o valor está vazio ou preenchido.
  - Se vazio, exibir alert com a mensagem "Informe um valor válido".
  - Se preenchido:
    - Verificar se o valor informado já existe dentro do Array objetos.
    - Se existir, exibir alert com a mensagem "Objeto já foi adicionado".
    - Se não existir:
      - Incluir o valor preenchido no campo dentro do Array.
      - Efetuar um console.log do Array para debug (checar se está
funcionado).
      - Limpar o valor contido no campo de entrada de texto.

B) Ao clicar no botão "Ordenar" disparar função que irá:
- Ordenar de forma alfabética os valores do Array de objetos.
- Efetuar um console.log do Array para debug (checar se está funcionado).

### Resolução:

HTML:
~~~html
<input type="text" id="objeto" placeholder="Informe o objeto">
<button onclick="adicionarObjetos()">Adicionar</button>
<button onclick="ordenarObjetos()">Ordenar</button>
~~~

JavaScript:
~~~javascript
var objetos = Array('Cadeira', 'Impressora', 'Garfo')

function adicionarObjetos() {
  //recupera o valor inserido no campo id objeto
  var objeto = document.getElementById('objeto').value
  //caso possua algum valor preenchido entra no if

  if(objeto != '') { //verifica se o valor já não foi inserido anteriormente
  //se sim, informa que valor já existe, se não insere novo valor
    if(objetos.indexOf(objeto) !== -1) {
      alert('Objeto já foi adicionado')
    } else {
      objetos.push(objeto)
      console.log(objetos)
      document.getElementById('objeto').value = ''
    }

  } else {
  alert('Informe um objeto válido')
  }
}

function ordenarObjetos() {
  objetos.sort()
  console.log(objetos)
}
~~~


<div id="aula59" align="center">
  <h2>Aula 59: Estrutura de repetição parte 1 - introdução.</h2>
</div>

### O que são?

Também chamadas de laços ou loops, são estruturas que permitem que façamos a repetição de um comando ou bloco de código, até atender determinada condição.

De forma geral, os laços esperam um critério de parada, ou seja, uma instrução que indica que a repetição ou bloco deve parar de ser reproduzido. Caso isso não ocorra, implicará em um **loop infinito**, resultando no travamento da aplicação.


<div id="aula60" align="center">
  <h2>Aula 60: Estruturas de repetição parte 2 - while.</h2>
</div>

Sintaxe:
~~~javascript
while (<condição>) {
  //códigos
}
~~~

- condição: estabelece operações de comparação e lógicas, para encontrar "true" ou "false", determinando se permanece ou não no laço de repetição.

- estabelecer um critério de parada bastante convincente, como por exemplo, realizar o incremento de uma unidade ao final do código (i++ ou i += 3, por exemplo).

- podemos utilizar a instrução break para interromper completamente o laço de repetição.

- há também a instrução "continue", que finaliza aquele passo da interação: interrompe o laço e passa para instrução seguinte. Tomar cuidado com esta instrução, pois pode levar a um loop infinito (atentar-se à posição do incremento, por exemplo).


<div id="aula61" align="center">
  <h2>Aula 61: Estruturas de repetição parte 3 - do while.</h2>
</div>

Sintaxe:
~~~javascript
do {
  //comandos
} while (<condição>)
~~~

Apenas ao término do bloco de códigos é que será lida a condição! Ou seja, o conteúdo das chaves será executado PELO MENOS uma vez!!!


<div id="aula62" align="center">
  <h2>Aula 62: Estruturas de repetição parte 4 - for.</h2>
</div>

Sintaxe:
~~~javascript
for (variável; condição; controle) {
  //códigos
}
~~~

Todas as instruções referentes à condição de parada estão dispostas lado a lado, facilitando sua manutenção e compreensão.

Também podemos utilizar break e continue, assim como incremento e decremento.


<div id="aula63" align="center">
  <h2>Aula 63: Praticando um pouco - Percorrendo e listando itens de Arrays.</h2>
</div>

~~~javascript
var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var y = 0

while (y < lista_frutas.length) {
  //ação
  document.write(lista_frutas[y] + '<br/>')
  y++ //incremento
}
~~~

A estrutura acima permite recuperar e imprimir os valores contidos nos índices, a partir da estrutura de um laço ( estrutura de repetição while).


<div id="aula64" align="center">
  <h2>Aula 64: Praticando um pouco - Criando uma tabuada de 1 a 10 (laços encadeados).</h2>
</div>

Laços encadeados são laços inseridos dentro de outros laços de repetição.

A) Laço simples:

~~~javascript
for (var x = 1; x <= 10; x++) {
  document.write('1 x ' + x + ' = ' + (1 * x) + '<br/>')
}

document.write('<hr/>')

for (var x = 1; x <= 10; x++) {
  document.write('2 x ' + x + ' = ' + (2 * x) + '<br/>')
}

(etc, até tabuada do 10)
~~~

Na situação acima, obtemos como resultado a tabuada de 1 a 10 para o n°. indicado em cada um dos laços.
Entretanto, teremos um código muito verboso!

B) Laços encadeados:

~~~javascript
for (var y = 1; y <= 10; y++) {

  for (var x = 1; x <= 10; x++) {
  document.write(y + ' x ' + x + ' = ' + (y * x) + '<br/>')

  }
  document.write('<hr/>')
}
~~~

Desse modo, obtemos a tabuada de 1 a 10 de forma menos verbosa, mais prática!


<div id="aula65" align="center">
  <h2>Aula 65: Estrutura de repetição parte 5 - For in.</h2>
</div>

Sintaxe:

~~~javascript
for (var x in Array) {
  //comandos
}
~~~

Exemplo:

~~~javascript
var listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']

for (var x in listaConvidados) {
  console.log('Índice ' + x + ' valor ' + listaConvidados[x])
}
~~~

No exemplo acima, a variável x vai receber, a cada interação, o valor do indice de cada uma das posições do Array!

O JS executa o laço até que a próxima posição seja undefined, não sendo necessário informar o fim do laço.

É um recurso que permite que naveguemos por elementos do Array que tenham chaves customizadas, não sequenciais (índices não ordenados, de tipos diferentes, por exemplo)!


<div id="aula66" align="center">
  <h2>Aula 66: Estrutura de repetição parte 6 - Foreach.</h2>
</div>

Em linguagens como PHP, o foreach é um comando de repetição (laço/loop), enquato no JS é uma função que fica abaixo do Prototype do objeto Array (no contexto do JS, é aplicado a Arrays, funcionando como uma função, não exatamente como uma estrutura de repetição). 

O Foreach aguarda como parâmetro uma função de callback (como deve atuar em cada um dos índices do Array).

Sintaxe:

~~~javascript
var arrayX = ['0', '1', '2', '3']

arrayX.forEach(function(valor, indice, array){
  //lógica
})
~~~

Exemplo:

~~~javascript
var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']

listaFuncionarios.forEach(function(valor, indice, array){
  console.log('índice: ' + indice + ' | valor: ' + valor)
  console.log(array)
})
~~~

Lembrando que é possível não atribuir índice e array, apenas valor (parâmetros variáveis do JS)!

Outro detalhe bastante comum é o fato de que geralmente encaminhamos uma variável que contenha a função de callback como parâmetro ao foreach (em vez de diretamente a função, como no exemplo acima), o que torna o código mais legível.

Foreach funciona apenas em valores numéricos, iniciando em zero (os demais serão ignorados, caso existam)!


<div id="aula67" align="center">
  <h2>Aula 67: Atividades para fixação do conteúdo.</h2>
</div>

