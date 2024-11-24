const typingText = "Sahyadri Intelligent Gallant Mascots of Artificial Intelligence";
const typingElement = document.querySelector(".typing-animation");

let index = 0;
let isTyping = true;
let currentText = "";

// Function to type the text
function typeText() {
  if (isTyping) {
    if (index < typingText.length) {
      currentText += typingText[index];
      typingElement.textContent = currentText;
      index++;
      setTimeout(typeText, 100); 
    } else {
      setTimeout(backspaceText, 1000);
    }
  }
}

// Function to backspace the text
function backspaceText() {
  if (index > 0) {
    currentText = currentText.slice(0, -1); // Remove last character
    typingElement.textContent = currentText;
    index--;
    setTimeout(backspaceText, 80); // Adjust backspacing speed here
  } else {
    // Once backspacing is done, start typing again after a short delay
    setTimeout(typeText, 500); // Wait before starting typing again
  }
}

// Start typing when the page loads
document.addEventListener("DOMContentLoaded", typeText);

