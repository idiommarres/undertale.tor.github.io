const createDialogueBox = (type, emotion, key) => {
    // Контейнер для діалогових коробок
    const container = document.getElementById('dialogue-container');

    // Створення елемента діалогової коробки
    const box = document.createElement('div');
    box.classList.add('dialogue-box');
    box.setAttribute('data-key', key);  // Зберігаємо ключ для кожного діалогу

    // Стилі для коробки
    box.style.cssText = `
        position: relative;
        background-color: black;
        border: 6px solid white;
        color: white;
        font-family: '8bitOperatorPlus-Bold', monospace;
        display: flex;
        align-items: flex-start;
        padding: 24px 28px;
        box-sizing: border-box;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        word-wrap: break-word;
        text-align: left;
    `;

    // Додаємо лице персонажа (якщо тип не 0)
    if (type !== "0") {
        const face = document.createElement('img');
        face.src = `assets/img/face_${type}_${emotion}.png`;
        face.alt = "Character Face";
        face.classList.add('character-face');
        face.classList.add('x1'); // За замовчуванням масштаб 1x
        face.style.cssText = `
            position: absolute;
            top: 30px;
            left: 34px;
            object-fit: contain;
            image-rendering: pixelated;
        `;
        box.appendChild(face);
    }

    // Додаємо текст діалогу
    const textElement = document.createElement('p');
    textElement.classList.add('dialogue-text');
    textElement.style.cssText = `
        margin: 0;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-size: 1.1rem;
        ${type !== "0" ? "margin-left: 144px;" : "margin-left: 0;"}
    `;

    // Додаємо сам текст
    const actualText = document.createElement('span');
    actualText.classList.add('text-content');
    textElement.appendChild(actualText);

    box.appendChild(textElement);

    // Додаємо коробку до контейнера
    container.appendChild(box);

    // Оновлюємо текст відразу після створення діалогу
    updateDialogueText(box);
};

// Оновлює текст діалогу на основі обраної мови
const updateDialogueText = (dialogueBox) => {
    const key = dialogueBox.getAttribute('data-key');
    const text = translations[localStorage.getItem('selectedLanguage')][key];
    dialogueBox.querySelector('.dialogue-text').innerHTML = text;
};
