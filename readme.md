
<div align="center">
<h2>Estudando JavaScript 📒</h2>
<h3>Seção 8: JavaScript</h3>
<p>Curso Desenvolvimento Web Completo 2022</p>

<a href="#aula01">O que é JS?</a> | 
<a href="#aula02">Introdução</a> | 
<a href="#aula03">Local e Externo</a> | 
<a href="#aula04">Precedência de execução</a> |  
<a href="#aula05">Comentários</a> | 
<a href="#aula06">Variáveis (introdução)</a> | 
<a href="#aula76">Variáveis (prática)</a> | 

</div>

<hr>

<div id="#aula01" align="center">
<h2>Aula 01: O que é JavaScript?</h2>
</div>

O JS é uma linguagem de programação de Alto Nível, ou seja, a codificação está muito próxima de uma linguagem humana (comandos são instruções realizadas com base na língua inglesa), tornando a leitura do código mais fácil.

Além disso, é uma linguagem muito abrangente, podendo ser executada dentro dos browsers (client-side), no server-side (do lado do servidor das aplicações web, baseado no protocolo http), desktop (utilizando Electron, por exemplo) e mobile (React Native).

A W3C cuida da padronização de tecnologiar web, como HTML e CSS. Ela disponibiliza um projeto chamado [W3schools](https://www.w3schools.com/js/), onde podemos ter acesso à documentação das linguagens e seus recursos.

O JS permite aplicar dinâmica aos elementos da página web!

Por fim, JS é uma linguagem de programação interpretada; os scripts são encaminhados ao browser, que os interpretará.


<div id="#aula02" align="center">
<h2>Aula 02: Incluindo JavaScript em páginas HTML5 (parte 01) - Introdução e preparação.</h2>
</div>

### Incluindo arquivos JS no arquivo HTML5:

Há duas formas:

1. incluindo a codificação JS diretamente:
  ```
  <script>
  // aqui fica a codificação JavaScript 
  </script>
  ``` 

2. a partir de um arquivo externo:
  ```
  <script src="meu_script.js"></script>
  ```

Caso a codificação seja muito extensa, compartimentalizar o código criando um arquivo à parte. Caso sejam blocos pequenos de codificação em JS, inserir diretamente no código.

Na versão 4 do HTML, utilizava-se também "type"; atualmente, podemos omitir essa informação. A instrição "language"foi depreciada.

### Preparando o ambiente de desenvolvimento:

Realizada a criação do arquivo index.html.
que os interpretará.


<div id="#aula03" align="center">
<h2>Aula 03: Incluindo JavaScript em páginas HTML5 (parte 02) - Local e Externo.</h2>
</div>

### Incluindo JavaScript diretamente em index.html:

A tag &lt;script&gt; pode ser inserida no head ou no body. A diferença é que as instruções na tag head são processadas antes do carregamento do body (pode gerar um erro de precedência de interpretação).

### Incluindo JavaScript em um arquivo externo:

1. criar um novo arquivo (script.js);
2. inserir o conteúdo no arquivo script.js;
3. importar o script no arquivo index.html (no head ou no body).


<div id="#aula04" align="center">
<h2>Aula 04: Incluindo JavaScript em páginas HTML5 (parte 03) - Precedência de execução.</h2>
</div>

### Precedência de execução:

É fundamental para o estabelecimento da lógica!

Os elementos HTML são renderizados de acordo com a DOM, podendo ser selecionados a partir da linguagem JS para sofrer algum tipo de ação.

Avaliar a ordem de disposição: o scrip executado antes do elemento referenciado/novo fará com que o JS não encontre o elemento e não execute a operação solicitada.


<div id="#aula05" align="center">
<h2>Aula 05: Comentários.</h2>
</div>

Auxilia a compreensão da lógica aplicada, e a compreensão do mesmo por terceiros.

1. Comentário de uma linha:
```
//comentário de uma linha
```

2. Comentário de múltiplas linhas:
```
/* 
Permite que várias linhas sejam 
encapsuladas em um mesmo comentário.
*/
```


<div id="#aula06" align="center">
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