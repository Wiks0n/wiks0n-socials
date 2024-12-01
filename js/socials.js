document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const backgroundAudio = document.getElementById('background-audio');
    const audio = document.getElementById('background-audio');
    audio.volume = 0.015;

    welcomeScreen.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        backgroundAudio.play();

        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 800);
    });

    setTimeout(() => {
        const main = document.querySelector('main')
        main.style.opacity = 1;
    }, 1000);
});

document.getElementById('volume').addEventListener('input', function(event) {
    const audio = document.getElementById('background-audio');
    audio.volume = event.target.value;
});
