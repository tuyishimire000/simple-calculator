const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
let currentInput = '';

calculator.addEventListener('click', function(event) {
    const buttonValue = event.target.textContent;
  
    if (!isNaN(buttonValue) || buttonValue === '.') {
      currentInput += buttonValue;
      display.textContent = currentInput;
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      currentInput += ` ${buttonValue} `;
      display.textContent = currentInput;
    } else if (buttonValue === '=') {
      try {
        currentInput = eval(currentInput);
        display.textContent = currentInput;
      } catch (error) {
        display.textContent = 'Error';
      }
    } else if (buttonValue === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (buttonValue === '←') { // Backspace button
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput;
    }
  });

  
  