// selectors
let pageForm = document.querySelector('form');
const display = document.querySelector('.display__text');
let message = document.querySelector('.display__message');
let motto = document.querySelector('.display__motto');

// add event listeners
document.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const text = e.target[0].value;
  if (!!text) {
    pageForm.classList.add('hidden');
    displayMessage(text);
  } 
}

function displayMessage(text) {
  message.classList.remove('hidden');
  setTimeout(() => {
    message.classList.add('hidden');
    transformDisplayText(text);
  }, 30000);
}

function displayText(words) {
  display.innerHTML = `<p>${words}</p>`;
  display.classList.remove('hidden');
  let promises = [];

  $('.display__text p')
  .children('.word')
  .each(function () {
    promises.push(new Promise((resolve) => {
      setTimeout(() => {
          $(this).css("opacity", 0)
            .css("transition", `opacity ${(Math.random() * 7)}s linear`)
            .on('transitionend', resolve);
      }, Math.random() * 3000);
    }));
  });

  Promise.all(promises).then(() => {
    display.classList.add('hidden');
    motto.classList.remove('hidden');
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
