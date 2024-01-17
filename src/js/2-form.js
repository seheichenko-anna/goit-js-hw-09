const STORAGE_KEY = 'formData';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const data = {
    message: form.elements.message.value,
    email: form.elements.email.value,
  };

  saveToLS(STORAGE_KEY, data);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    const data = JSON.parse(zip);
    return data;
  } catch {
    return zip;
  }
}

function savedDataInputs() {
  const data = loadFromLS(STORAGE_KEY);
  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
}

savedDataInputs();
