const screenTextElement = document.querySelector(".calculator__screen__text");
let isCalculated = false;

function appendText(text) {
  screenTextElement.innerText += text;
}

function removeLast() {
  const screenText = screenTextElement.innerText;
  screenTextElement.innerText = screenText.slice(0, screenText.length - 1);
}

function resetScreen() {
  screenTextElement.innerText = "";
}

function calculate() {
  const screenText = screenTextElement.innerText;
  const result = eval(screenText);
  screenTextElement.innerText = Number.isInteger(result)
    ? result
    : result.toFixed(8);
}

function handleOperations(input) {
  //   if (isCalculated === true && !isNaN(input)) {
  //     // resetScreen();
  //     isCalculated = false;
  //   }
  if (input === "<<") {
    return removeLast();
  }
  if (input === "AC") {
    return resetScreen();
  }

  if (screenTextElement.innerText.length < 1 && isNaN(parseFloat(input))) {
    return;
  }
  {
  }

  if (input === "=") {
    isCalculated = true;
    return calculate();
  }

  appendText(input);
}
document
  .querySelector(".calculator__buttons")
  .addEventListener("click", (event) => {
    const text = event.target.innerText;
    handleOperations(text);
  });
