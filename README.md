# 🚀 JavaScript - Programação Web
## JavaScript Interno

### Definição
Código JS escrito diretamente no arquivo HTML dentro da tag `<script>`.

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    // JavaScript interno
    alert("Isso é JS interno!");
  </script>
</body>
</html>
```

## JavaScript Externo
### Definição
Código em arquivo separado (.js) vinculado via atributo src.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="scripts.js"></script>
</head>
</html>
```
## Métodos de Saída
### innerHTML
- Quando usar: Para modificar conteúdo de elementos HTML existentes
- Observações: Interpreta tags HTML, ideal para conteúdo dinâmico

```javascript
document.getElementById("elemento").innerHTML = "<b>Novo conteúdo</b>";
```

### document.write
- Quando usar: Apenas para testes rápidos
- Cuidado: Sobrescreve todo o documento se usado após carregamento.

```javascript
document.write("Texto inserido diretamente");
```

### alert
- Quando usar: Debugging simples ou avisos críticos
- Problema: Interrompe o fluxo da aplicação

```javascript
alert("Mensagem importante!");
```
### console.log
- Quando usar: Para debugging durante desenvolvimento
- Vantagem: Não interfere na experiência do usuário

```javascript
console.log("Debug:", variavel);
```

| Método          | Uso Recomendado          | Impacto na Página | Nível de Debug |
|-----------------|--------------------------|-------------------|----------------|
| `innerHTML`     | 🖊️ Conteúdo dinâmico     | 📍 Localizado     | 🔵 Baixo       |
| `document.write`| 🧪 Testes rápidos        | 🌍 Global         | 🟠 Médio       |
| `alert`         | ⚠️ Avisos importantes    | ⛔ Bloqueante     | 🔴 Alto        |
| `console.log`   | 🐛 Debugging detalhado   | ✨ Nenhum         | 💎 Essencial   |

## Variáveis 
Variáveis são "recipientes onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar variáveis:
- var: permite redeclaração, guarda o valor da última atribuição;
- let: torna a variável única, não pode redeclaração de uma variável. (mais utilizado), só funciona dentro do escopo que está trabalhando
- const: mantem sempre o mesmo valor

```javascript
//DECLARAÇÃO DE VARIÁVEIS
var a,b,c;

// ATRIBUIÇÃO DOS VALORES
a = 2;
b = 3;
c = a + b;

alert(c);
```
### Operador ternário

#### Sintaxe Básica
```javascript
condição ? valorSeVerdadeiro : valorSeFalso;
```

#### Funcionamento
- Condição: Expressão que retorna true ou false

- ?: Executa se true (antes do :)

- :: Executa se false (depois do :)

``` javascript
// Forma tradicional
if (idade >= 18) {
  mensagem = "Maior";
} else {
  mensagem = "Menor";
}

// Com ternário ✅
let mensagem = idade >= 18 ? "Maior" : "Menor";

```

#### Regras de Uso

- ✔️ Ideal para condições simples

- ✔️ Atribuições diretas de valor

- ❌ Evite para lógicas complexas (use if/else)


## Objetos 
Objetos são basicamente variáveis com muitos valores dentro.

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um método é uma função colacada dentro de uma propriedade.

```javascript
const carro = {
    marca: "ford",
    modelo: "ka", 
    ano: 2015, 
    placa: "ABC-1234",
    buzina: function() {alert('Biiiiiiii')},
    completo: function (){
        return "A marca é  " + this.marca + 
        "  O modelo é  " + this.modelo +
        "  O ano é  " + this.ano +
        "  A placa é " + this.placa 
    }
};

  
  console.log(carro);
  console.log(carro.ano);
  console.log(carro["marca"]);
  console.log(carro.completo())
  carro.buzina();

  
```
## Eventos
Eventos são ações disparadas pela interação dos usuários na página. É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

### Tipos de Eventos
- onclick: disparado quando recebe um click.

``` html
 <button onclick="eventoClick()">Clique aqui<button>
```
```javascript
function eventoClick(){
  alert('Botão clicado com sucesso!');
  document.body.style.backgroundColor = "yellow";
}
```
- ondblclick: disparado quando clique duplo.
```html
<p id ="texto"></p>
    <button ondblclick="eventoDblClick()">Clique aqui</button>
```
```javascript
function eventoDblClick(){
    alert('Evento de clique duplo');
    document.getElementById("texto").innerHTML = "<b>Você clicou duas vezes!</b>";
}
```
- onmouseover: disparado quando o mouse está sobre.

```html
<div id="teste" onmouseover="viraVermelho()" style="margin: auto auto; width:80%; height: 200px; background: blue;"></div>
```
```javascript
function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
```
- onmouseout: disparado quando o mouse é movido para fora do elemento.
```html
 <div id="teste" onmouseout="viraAzul()" onmouseover="viraVermelho()" style="margin: auto auto; width:80%; height: 200px; background: blue;"></div>
```
```javascript
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}
```
- onmousemove: disparado quando o mouse é movido no elemento.
```html
 <div id="teste" onmouseout="viraAzul()" onmouseover="viraVermelho()" style="margin: auto auto; width:80%; height: 200px; background: blue;"></div>
```
```javascript
function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('O mouse moveu');
}
```
- onmousedown: disparado quando o clique do botão foi pressionado.
```html
<body onmousedown="alert('clicou na tela')">
```
- onmouseup: disparado quando o clique do botão é liberado.
```html
<body onmouseup="alert('clicou na tela')">
```
- onfocus: disparado quando o elemento recebe o foco. Válido para input.
```html
 <input onfocus = "limpaTexto()" id="campoTexto" style="padding: 80px; font-size: medium;" type="text" placeholder="Digite alguma coisa" value="Alguma coisa">
```
```javascript
function limpaTexto(){
    document.getElementById("campoTexto").value = "";
}
```
- onchange: disparado quando existe uma mudança no conteúdo. "Ao mudar".
```html
 <select id="itens" onchange = "mudou()">
        <option value="1">Valor 1</option>
        <option value="2">Valor 2</option>
        <option value="3">Valor 3</option>
        <option value="4">Valor 4</option>
    </select>
```
```javascript
function mudou(){
    alert('Mudou');
}
```
- onblur: disparado quando um elemento perde o foco.
```html
<input onblur="eventoClick()" id="campoTexto" style="padding: 80px; font-size: medium;" type="text" placeholder="Digite alguma coisa" value="Alguma coisa">
```
```javascript
function eventoClick(){
  alert('Botão clicado com sucesso!');
  document.body.style.backgroundColor = "yellow";
}
```
- onkeydown: disparado quando uma tecla é pressionada.
```html
    <input onkeydown="teclaPressionada()" id="campoTexto" style="padding: 80px; font-size: medium;" type="text" placeholder="Digite alguma coisa">
```
```javascript
function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}
```
- onkeypress: disparado quando uma tecla é pressionada e solta.
```html
<input onkeypress="teclaPressionada()"  id="campoTexto" style="padding: 80px; font-size: medium;" type="text" placeholder="Digite alguma coisa" value="Alguma coisa">
```
```javascript
function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}
```
- onkeyup: disparado quando uma tecla é solta sobre um elemento.
```html
 <input onkeyup="teclaPressionada()" id="campoTexto" style="padding: 80px; font-size: medium;" type="text" placeholder="Digite alguma coisa">
```
```javascript
function teclaPressionada(){
    console.log('Tecla pressionada');
}
```
- onload: disparado quando a página terminou de ser carregada. Body.
```html
<body onload="alert('Terminou de carregar!')">
```
- onresize: disparado quando há um redimencionamento da janela.
```html
<body onresize="alert('Redimencionou!')">
```
## Array

### Métodos para Array

- .length: retorna quantidade de itens
```javascript
const pessoa = ["Clara", "Neves", 20];

alert(pessoa.length); //3
```
- [.length -1] : mostra o ultimo item independente do tamanho do array.
```javascript
const pessoa = ["Clara", "Neves", 20];

alert(pessoa[pessoa.length -1] ); //20
```

- .push(): acrescenta um item ao final da lista.
```javascript
const pessoa = ["Clara", "Neves", 20];

pessoa.push("F");

console.log(pessoa); //"Clara", "Neves", 20, "F"
```
*Array.isArray(nome_da_variavel) retorna se uma variável é um array ou não*

- .join(): coloca algo a mais entre os itens.
```javascript
const pessoa = ["Clara", "Neves", 20];

document.getElementById("teste").innerHTML = pessoa.join(" * "); //Clara * Neves * 20

```
- .pop(): remove o último item da matriz.
```javascript
const pessoa = ["Clara", "Neves", 20];
pessoa.pop();
document.getElementById("teste").innerHTML = pessoa; // //Clara,Neves
```
- .shift(): remove o primeiro item da matriz, todos os índices são alterados.
```javascript
const pessoa = ["Clara", "Neves", 20];
pessoa.shift();
document.getElementById("teste").innerHTML = pessoa; //Neves,20
```
- .unshift(): coloca um índice na primeira posição da matriz.
```javascript
const pessoa = ["Clara", "Neves", 20];
pessoa.unshift("GitHub");
document.getElementById("teste").innerHTML = pessoa; //GitHub,Clara,Neves,20
```
- delete array[i]: deleta um item, porém substitue o item por undefined
```javascript
const pessoa = ["Clara", "Neves", 20];
delete pessoa[0]; 
document.getElementById("teste").innerHTML = pessoa ;//,Neves,20
```
- .splice(): altera um array original removendo, substituindo ou adicionando elementos em posições específicas.
`array.splice(inicio, quantidadeRemovida, item1, item2, ..., itemN);`

inicio: índice onde as alterações começam.

quantidadeRemovida: número de elementos a serem removidos a partir do índice inicio.

item1, item2, ..., itemN (opcional): elementos que serão adicionados a partir do índice inicio.

```javascript
const pessoa = ["Clara", "Neves", 20];
pessoa.splice(1,0,"Item1", "Item2");

document.getElementById("teste").innerHTML = pessoa; //Clara,Item1,Item2,Neves,20
console.log(pessoa.length); //5
```
-.concat() : concatena arrays.

```javascript
const lista1 = ["Arroz", "feijão"];
const lista2 = ["bife", "salada"];

const superLista = lista1.concat(lista2);


document.getElementById("teste").innerHTML = superLista; //Arroz,feijão,bife,salada
```
- .slice(): "fatia" uma matriz,  copia uma parte de um array (ou string), entre dois índices, e retorna um novo array (ou string), sem alterar o original. `array.slice(inicio, fim);`

```javascript
const inteiros = [-2,-1,0,1,2,3,-2,-4];
const naturais = inteiros.slice(2,6);


document.getElementById("teste").innerHTML = naturais;//0,1,2,3
```

-.sort() : mostra itens em ordem alfabética;
```javascript
const linguagens = ["haskell", "go", "typescript", "javascript", "python","java", "fortran", "assemby"];

const langOrdem = linguagens.sort()

document.getElementById("teste").innerHTML = langOrdem;//assemby,fortran,go,haskell,java,javascript,python,typescript
```

- .reverse(): inverte a ordem dos elementos de um array modificando o array original.

```javascript
const linguagens = ["haskell", "go", "typescript", "javascript", "python","java", "fortran", "assemby"];

linguagens.sort();
linguagens.reverse();

document.getElementById("teste").innerHTML = linguagens;//typescript,python,javascript,java,haskell,go,fortran,assemby
```
*Ordenação numérica: `array.sort(function(a,b){ return a -b });`(crescente)/`array.sort(function(a,b){ return b-a });`(decrescente)*

*Maior Número: ``` function MaiorNumero(array){return Math.max.apply(null, array);}```*

*Menor Número: ``` function MenorNumero(array){return Math.min.apply(null, array);}```*

- filter(): cria um novo array contendo apenas os elementos que passam em um teste.

```javascript
const numeros = [40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
}

document.getElementById("teste").innerHTML = maior20; //40,100,25
```
## Eventos de tempo de JavaScript

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

- setTimeout(function, tempo em milissegundos): executa uma função, depois de esperar um número especificado de milissegundos.
```javascript
function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contagem";

    //EXECUTA APENAS UMA VEZ APÓS O TEMPO DETERMINADO
    tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
        document.body.style.backgroundColor = "green";
    }, 5000)
}

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem";
    document.body.style.backgroundColor = "red";
}

```
- setInterval(function, milliseconds): é o mesmo que setTimeout(), mas repete a execução da função continuamente.

```javascript
function ativarContagem(){

    const tempoElemento = document.getElementById('tempo');
    if(isNaN(parseInt(tempoElemento.innerHTML))){
        tempoElemento.innerHTML = 10;
        document.body.style.backgroundColor = "white";
    }
    tempo = setInterval(function(){
        var cronometro = parseInt(tempoElemento.innerHTML);

        var soma = cronometro - 1;

        if(soma === 0){
            document.getElementById('tempo').innerHTML = "Tempo esgotado";
            document.body.style.backgroundColor = "red";
            pararContagem()
        }
        else{
            document.getElementById('tempo').innerHTML = soma;
        }

        var cronometro = document.getElementById('tempo').innerHTML.value = 10; ;

    },1000);
    
}

function pararContagem(){
    clearInterval(tempo);
}

```
## Classes

Classses são como "fábricas" para criar objetos. Pode se dizer que são "funções especiais" para criação de objetos. Assim como uma fábrica da vida real precisa das máquinas pra construir os objetos, as Classes no Javascript usam um método chamado constructor() para fabricar os objetos.

```javascript
class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    buzina(){
        return this.modelo + "buzinou: Biiiiiiiiiiiiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2001);
console.log(gol);
console.log(uno);
gol.ano = 2014;
console.log(gol);

```

## Manipular datas

- Comando básico para pegar a data

```javascript
let data = new Date();
console.log(data);
```

- Pegar o ano atual com 4 dígitos

``` javascript
let ano = data.getFullYear();
console.log(ano);
```

- Pegar o mês atual (de 0 até 11 sendo 0 Janeiro e 11 Dezembro)

``` javascript
let mes = data.getMonth();
console.log(mes); //3
```
- Mostrar o mês no formato escrito

``` javascript
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro","Outubro", "Novembro", "Dezembro"];

let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito); //Abril
```

- Pegar dia do mês - 1 até 31

``` javascript
let diaMes = data.getDate();
console.log(diaMes);
```

- Pegar o dia da semana - 0 até 6 (mesma lógica do .getMonth())
```javascript
let diaSemana = data.getDay();
console.log(diaSemana);
```

- Pegar a hora - de 0 até 23
```javascript
let hora = data.getHours();
console.log(hora);
```

- Pegar os minutos - de 0 até 59
```javascript
let minutos = data.getMinutes();
console.log(minutos);
```

- Pegar os segundos - de 0 até 59
```javascript
let segundos = data.getSeconds();
console.log(segundos);
```
- Pegar os milisegundos - de 0 até 999
```javascript
let milisegundos = data.getMilliseconds();
console.log(milisegundos);
```

- Pegar a data no padrão brasileiro - dia/mes/ano
```javascript
let dataBR = data.toLocaleDateString('pt-BR')
console.log(dataBR);
```
- Pegar os valores separados

```javascript
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1 ;
ano = d.getFullYear();

function addZero(x){
    return x<10 ? '0'+ x : '' + x;
}

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);
```

- Comparar datas (maior ou menor)

```javascript
var hoje = new Date();
var vencimento = new Date(2022, 0, 15);

if(hoje > vencimento){
    console.log("Sua conta está vencida");
}
else{
    console.log("Ainda não venceu");
}
```

- Diferença em dias entre duas datas

```javascript
var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 *1000));
console.log(diferencaDias + "dias");
```
## JSON

JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto. Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.<br>

Para trabalhar com JSON no Javascript usamos dois métodos:

- JSON.parse(): converte texto no padrão JSON em objetos.
- JSON.stringify(): converte objetos em texto padrão JSON.

```javascript
//Objeto Carro

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}


document.getElementById('area').innerHTML = carro; //[object Object]

```
```javascript
//Objeto Carro

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}
//Converteu para texto JSON
let texto = JSON.stringify(carro);
document.getElementById('area').innerHTML = texto;//{"marca":"Fiat","modelo":"Uno","ano":2001}

//Convertemos texto em objeto
let obj = JSON.parse(texto)
console.log(obj.modelo); //Uno

```