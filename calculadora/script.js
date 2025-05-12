const display = document.getElementById('display');
let formula = '';

// monta o número no display
document.querySelectorAll('.buttons-container button[value]')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      display.value += btn.value;
      formula += btn.value;
    });
  });

// botão “+” (supondo que seja esse ícone)
document.querySelector('.ri-add-large-line').parentElement
  .addEventListener('click', () => {
     display.value += ' + ';
     formula += '+';
  });

document.querySelector('.ri-subtract-fill').parentElement
  .addEventListener('click', () => {
     display.value += '-';
     formula +='-';
});

document.querySelector('.ri-close-large-fill').parentElement
  .addEventListener('click', () => {
     display.value += ' x ';
     formula += '*'
});

document.querySelector('.ri-divide-fill').parentElement
  .addEventListener('click', () => {
     display.value += ' ÷ ';
     formula += '/'
});


document.querySelector('.ri-square-root').parentElement
  .addEventListener('click', () => {
    try{
        const result = Math.sqrt(eval(formula));
        display.value = '√' + display.value;
        formula = result.toString();
    } catch (e){
        display.value = 'Erro';
        formula = '';
    }
});

document.getElementById('decimal-point').addEventListener('click', () => {
    display.value += '.';
    formula += '.'
});

document.getElementById('percent').addEventListener('click', () => {
    display.value += '%';
    formula += '%'
});

document.getElementById('sign').addEventListener('click', () => {
   const currentValue = parseFloat(display.value);
   if(!isNaN(currentValue)){
    const newValue = currentValue * -1;
    display.value = newValue.toString();
    formula = newValue.toString();
   }
});

document.getElementById('less').addEventListener('click', () => {
    display.value += ' < ';
    formula += '<'
});

document.getElementById('greater').addEventListener('click', () => {
     display.value += ' > ';
     formula += '>'
});

document.getElementById("random").addEventListener('click', function () {
   const messages = ['dumb calculator', "i don't know' know any math 😭", 'i hate js. jk']
   const randomIndex = Math.floor(Math.random() * messages.length);
   const message = messages[randomIndex];

   alert(message);

});
      
function deleteLast() {
  // Se o display termina em espaço, removemos 3 chars (espaço+operador+espaço)
  if (display.value.endsWith(' ')) {
    display.value = display.value.slice(0, -3);
    formula = formula.slice(0, -1); // no formula só tem um caractere de operador (*, +, etc.)
  } else {
    // senão, só remove um dígito ou ponto
    display.value = display.value.slice(0, -1);
    formula = formula.slice(0, -1);
  }
}

// botão “C” de limpar
function cleanDisplay() {
  display.value = '';
  formula = '';
}


function equal() { 
  try {
    // Substitui padrões como "200 + 10%" por "200 + (200 * 10 / 100)"
    const parsedFormula = formula.replace(/(\d+(?:\.\d+)?)(\s*[\+\-])\s*(\d+(?:\.\d+)?)%/g, 
      (_, base, operator, percent) => {
        return `${base}${operator}(${base}*${percent}/100)`;
      }
    );

    // Substitui apenas 10% ou 5% isoladamente por (10/100)
    const finalFormula = parsedFormula.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

    const resultado = eval(finalFormula);
    display.value = resultado;
    formula = resultado.toString();
  } catch (e) {
    display.value = 'Erro';
    formula = '';
  }
}


