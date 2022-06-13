#

<img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTedB_f8DOxHJMyjQk1QZOj4v0spJG5oPd2OQoQJTgk0hIv8CE%26s&sp=1654636493Td88f58b243cdbbc9598970f871f1db61bf479297997b73d244f00ff05bb98672" alt="maratona-logo">
<a href="https://html.com/">
    <img src="https://img.shields.io/badge/HTML%20link-HTML-red" alt="html-link">
</a>

## O que é HTML ?

-> HyperText Markup Language.

## Markup = **Marcação**

<ol>
    <li>Tags</li>
    <li>Atributos</li>
</ol>

## Linguagens

- Maneira de escrever

## Tag para anexar um link

```htm
<a href="https://google.com"> google.com </a>
```

## O que são tags ?

As tags são usadas para informar ao navegador a estrutura do site. Ou seja: quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, produzindo assim a estrutura e o conteúdo visual da página.

## O que são atributos ?

Define uma característica ou propriedade de um elemento; é sempre incluído no tag inicial de um elemento, usando a sintaxe: nome_do_ atributo="valor".
Um elemento pode ter vários atributos, separados por espaço(s) em branco. Ao contrário de HTML, em XHTML todo atributo deve ter um valor, mesmo que seja vazio ("") e o valor deve ser sempre delimitado por aspas duplas. Por exemplo:

```htm
<img src="sun.jpg" alt="sunburst graphic" width="32" height="21" align-items="left">
```
# Introdução ao CSS

<ol>
    <li>Apresentação visual para o cliente</li>
    <li>Estilos para o HTML</li>
    <li>Cascading Style Sheets <strong>Folha de estilo em cascata</strong></li>
</ol>

## Sintaxe

```css
<nome do seletor> {
    //propriedades e os valores
}
```

# Javascript

## O que é ?

<div>
    <ul>
        <li>Linguagem de programação: interpretada e executada pelos navegadores.</li>
        <li>A inteligência de uma tríade: HTML é a estrutura, CSS a beleza e JS é a inteligência.</li>
        <li>Não é Java: apesar do nome ser semelhante, são linguagens diferentes.</li>
    </ul>
</div>

## Porque JS ?

<div>
    <ul>
        <li>Aplicativos para web, desktop e mobile;</li>
        <li>Empresas famosas: instagram, google, netflix, etc;</li>
        <li>Moderna e viva: comunidade e linguagem que cresce cada vez mais.</li>
    </ul>
</div>

## Sintaxe

<p>É presente em toda linguagem e é importante para a comunicação.</p>

```javascript
const MENSAGEM = "Bom te ver aqui!!";
alert(MENSAGEM + (10 * 100) + "abraços");
// => Bom te ver aqui!! 1000 abraços
```

## Executando Javascript

### 1) De maneira imediata

No Browser a partir da ferramenta Devtools apertando o atalho F12 no seu teclado;
Plataformas online (codepen.io, frontend.dev).

### 2) Arquivos no computador (exemplo abaixo):

```html
<!-- em um arquivo index.html -->

<!-- executando o javascript direto no .html -->
<script>alert('Olá!!')</script>

<!-- importa um arquivo .js no seu .html -->
<script src="./script.js"></script>
```