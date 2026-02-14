// Main Application Logic
function addEntry() {
    const name = document.getElementById('nameInput').value;
    const learn = document.getElementById('learnInput').value;

    if (name === '' || learn === '') {
        alert("Please fill in both fields!");
        return;
    }

    // UI Logic
    renderEntry(name, learn);

    // Data Persistence Logic
    saveToStorage(name, learn);

    // Cleanup Logic
    clearInputFields();
}

// Initialize application on page load
window.onload = function() {
    const entries = loadFromStorage();
    entries.forEach(entry => renderEntry(entry.name, entry.learn));
};
