const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Auto Text Typer: testing ...';
let index = 1;
let speed = 300 / speedEl.value;

typeText();

function typeText() {
  textEl.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }

  setTimeout(typeText, speed);
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
