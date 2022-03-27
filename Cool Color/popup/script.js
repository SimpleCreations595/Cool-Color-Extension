document.getElementById('new-button').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#' + Math.floor(Math.random() * 100000) + 1)
})