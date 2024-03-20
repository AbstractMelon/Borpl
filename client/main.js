// client/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Fetch mods from the server and display them
    fetchMods();
});

async function fetchMods() {
    try {
        const response = await fetch('/mods');
        const mods = await response.json();

        // Display mods in the UI
        displayMods(mods);
    } catch (error) {
        console.error('Error fetching mods:', error);
    }
}

function displayMods(mods) {
    const main = document.querySelector('main');
    main.innerHTML = '';

    mods.forEach(mod => {
        const modElement = document.createElement('div');
        modElement.classList.add('mod');

        const modName = document.createElement('h2');
        modName.textContent = mod.name;

        const modAuthor = document.createElement('p');
        modAuthor.textContent = `Author: ${mod.author}`;

        const modDescription = document.createElement('p');
        modDescription.textContent = mod.description;

        modElement.appendChild(modName);
        modElement.appendChild(modAuthor);
        modElement.appendChild(modDescription);

        main.appendChild(modElement);
    });
}
