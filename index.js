const displayElement = document.getElementById('content-space');
const buttons = document.querySelectorAll('.buttons');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

let currentInput = '';
// for(let i = 0; i < buttons.length; i++){
    buttons.forEach(button => {
    button.addEventListener('click', () => {
    const buttonText = button.textContent;
    
    if (buttonText === 'C') {
        currentInput = '';
    } else if (buttonText === '+') {
        currentInput += '+';
    } else if(buttonText === '-'){
        currentInput += '-';
    } else if(buttonText === '*'){
        currentInput += '*';
    } else if(buttonText === '/'){
        currentInput += '/';
    } else if(buttonText === '1'){
        currentInput += '1';
    } else if(buttonText === '2'){
        currentInput += '2';
    } else if(buttonText === '3'){
        currentInput += '3';
    } else if(buttonText === '4'){
        currentInput += '4';
    } else if(buttonText === '5'){
        currentInput += '5';
    } else if(buttonText === '6'){
        currentInput += '6';
    } else if(buttonText === '7'){
        currentInput += '7';
    } else if(buttonText === '8'){
        currentInput += '8';
    } else if(buttonText === '9'){
        currentInput += '9';
    } else if(buttonText === '.'){
        currentInput += '.';
    } else if(buttonText === '0'){
        currentInput += '0';
    } else if(buttonText === '='){
        // Perform calculation here and update display
        try {
          currentInput = eval(currentInput);
        } catch (error) {
          currentInput = 'Error';
        }
    
    } 
    updateDisplay();
  });
});

function updateDisplay() {
  displayElement.value = currentInput;
}

