function showAbout() {
    const aboutBox = document.getElementById('about-box');
    aboutBox.style.display = 'block';

    const centerText = document.getElementById('center-text');
    centerText.style.opacity = '0';

    const closeDiv = document.getElementById('close-div');
    closeDiv.style.pointerEvents = 'auto';
}

document.addEventListener('click', function(event) {
    const aboutBox = document.getElementById('about-box');
    const centerText = document.getElementById('center-text');
    const closeDiv = document.getElementById('close-div');
    
    if (event.target.matches('.close-btn') || event.target.matches('#close-div')) {
        aboutBox.style.display = 'none';
        centerText.style.opacity = '1';
        closeDiv.style.pointerEvents = 'none';
    }
});