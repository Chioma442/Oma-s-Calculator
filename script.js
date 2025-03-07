// Get the display element
const display = document.getElementById('display');

// Function to append a character to the display
function appendChar(char) {
    display.value += char;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}