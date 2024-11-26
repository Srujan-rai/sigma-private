const typingText = "Sahyadri Intellectual And Gallant Mascots of AI";
const typingElement = document.querySelector(".typing-animation");

let index = 0;
let isTyping = true;
let currentText = "";

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

function backspaceText() {
  if (index > 0) {
    currentText = currentText.slice(0, -1);
    typingElement.textContent = currentText;
    index--;
    setTimeout(backspaceText, 80);
  } else {
    setTimeout(typeText, 500); 
  }
}

document.addEventListener("DOMContentLoaded", typeText);

