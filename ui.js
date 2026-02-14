// UI Rendering Functions
const list = document.getElementById('guest-list');

function renderEntry(name, learn) {
    const li = document.createElement('li');
    li.className = 'guest-entry';
    li.innerHTML = `<div class="guest-info"><strong>${name}</strong><span>Learned: ${learn}</span></div>`;
    list.appendChild(li);
}

function clearInputFields() {
    document.getElementById('nameInput').value = '';
    document.getElementById('learnInput').value = '';
}
