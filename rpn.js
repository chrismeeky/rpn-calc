// initialize screen
const screenTextElement = document.querySelector(".calculator__screen__text");

function appendText(text) {
  screenTextElement.innerText += text;
}

function removeLast(text) {
  screenTextElement.innerText = screenTextElement.innerText.slice(
    0,
    screenTextElement.innerText.length - 1
  );
}

function calculate(input) {
  if (input === "<<") {
    return removeLast();
  }

  appendText(input);
}
document
  .querySelector(".calculator__buttons")
  .addEventListener("click", (event) => {
    const text = event.target.innerText;
    calculate(text);
  });
