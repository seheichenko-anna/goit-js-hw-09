const form = document.querySelector('.feedback-form');

const localStorageKeyInput = 'inputText';
const localStorageKeyTextarea = 'textareaText';

form.elements.message.value = localStorage.getItem(localStorageKeyInput) ?? '';
form.elements.email.value = localStorage.getItem(localStorageKeyTextarea) ?? '';

form.elements.message.addEventListener('input', evt => {
  localStorage.setItem(localStorageKeyInput, evt.target.value);
});

form.elements.email.addEventListener('input', evt => {
  localStorage.setItem(localStorageKeyTextarea, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKeyInput);
  localStorage.removeItem(localStorageKeyTextarea);
  form.reset();
});
