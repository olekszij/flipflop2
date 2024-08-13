document.addEventListener('DOMContentLoaded', function () {
  const themeSelector = document.getElementById('theme-selector');
  
  themeSelector.addEventListener('change', function () {
      loadQuestions(this.value);
  });

  // Загрузка вопросов по умолчанию (например, JavaScript)
  loadQuestions('javascript');
});

function loadQuestions(theme) {
  fetch(`${theme}.json`)
      .then(response => response.json())
      .then(data => {
          createCards(data.questions);
      })
      .catch(error => console.error('Error:', error));
}

function createCards(questions) {
  const container = document.getElementById('card-container');
  container.innerHTML = '';  // Очищаем контейнер перед загрузкой новой темы
  let fragment = document.createDocumentFragment();

  questions.forEach(question => {
      const card = document.createElement('div');
      card.className = 'card';

      const front = document.createElement('div');
      front.className = 'card-front';
      front.textContent = question.question;

      const back = document.createElement('div');
      back.className = 'card-back';
      back.textContent = question.answer;

      const cardInner = document.createElement('div');
      cardInner.className = 'card-inner';
      cardInner.appendChild(front);
      cardInner.appendChild(back);

      card.appendChild(cardInner);
      fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

// Скрипт для прокрутки вверх
document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
});

