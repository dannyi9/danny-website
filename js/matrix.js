const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size dynamically based on window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// Matrix settings
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const letters = Array(columns).fill(0);

// Randomise initial positions of letters
function initialiseLetters() {
    for (let i = 0; i < letters.length; i++) {
        letters[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
}
initialiseLetters();

// Get a random character out of a range
function getRandomCharacter() {
    const charCode = 0x30A0 + Math.floor(Math.random() * 96);
    return String.fromCharCode(charCode); // Katakana Unicode range
}

// Draw the actual Matrix
function drawMatrix() {
    // Create trailing effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff00';
    ctx.font = `${fontSize}px monospace`;
    for (let i = 0; i < columns; i++) {
        const character = getRandomCharacter();
        const x = i * fontSize;
        const y = letters[i] * fontSize;
        ctx.fillText(character, x, y);
        // Reset column if it reaches the bottom with a random probability
        if (y > canvas.height && Math.random() > 0.975) {
            letters[i] = 0;
        }
        // Move the letter down
        letters[i]++;
    }
}

// Animation loop
function animate() {
    setTimeout(() => {
        drawMatrix();
        requestAnimationFrame(animate);
    }, 50);
}

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    resizeCanvas();
    letters.length = Math.floor(canvas.width / fontSize);
    initialiseLetters();
});
animate();
