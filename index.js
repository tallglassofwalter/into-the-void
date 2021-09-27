console.log('hello world');
let pageForm = document.querySelector('form');
const display = document.querySelector('.display__text');

document.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const text = e.target[0].value;
  if (!!text) transformDisplayText(text);
}

function displayText(words) {
  pageForm.classList.add('hidden');
  display.innerHTML = `<p>${words}</p>`;

  $('.display__text p').children('.word').each(function() {
    var word = this;
    setTimeout(function () {
        $(word).css("opacity", 0);
    }, Math.random() * 3000)
  });

}

function transformDisplayText(str) {
  let words = str.split(' ');
  const randIdx = generateIdx(words.length);

  for (let i = 0; i < randIdx.length; i++) {
    words[randIdx[i]] = `<span class="word">${words[randIdx[i]]}</span>`;
  }

  return displayText(words.join(' '));
}

function generateIdx(len) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr.sort((a,b) => Math.random() > 0.5 ? -1 : 1);
}

function randomNumberGenerator(len) {
  const rand = Math.floor(Math.random() * len);
  return rand;
}