document.addEventListener("DOMContentLoaded", function() {
    const matrix = document.getElementById('matrix');
    const characters = '01'; // Caracteres para a animação

    function createMatrixText() {
        const text = document.createElement('div');
        text.classList.add('matrix-text');
        text.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        text.style.left = Math.random() * 100 + 'vw';
        text.style.setProperty('--random-rotate', (Math.random() * 90 - 45) + 'deg');
        text.style.animationDuration = Math.random() * 6 + 5 + 's';
        matrix.appendChild(text);

        setTimeout(() => {
            text.remove();
        }, parseFloat(text.style.animationDuration) * 1000);
    }

    setInterval(createMatrixText, 300);

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            document.querySelector(".loading-screen").style.display = "none";
            document.querySelector(".main-content").style.display = "block";
        }
    });
});
