
<div align="center">
<h2>Estudando JavaScript 📒</h2>
<h3>Seção 8: JavaScript</h3>
<p>Curso Desenvolvimento Web Completo 2022</p>
</div>

<div align="justify">
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
<a href="#aula12">Revisão e desafio</a> |
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
