document.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        changeRandomParagraphsColors();
    }, 1000);
});

function changeRandomParagraphsColors() {
    const paragraphs = document.querySelectorAll('.changeable');
    // First, reset all paragraphs to default color (e.g., black or any other)
    paragraphs.forEach(p => p.style.color = 'black');

    // Shuffle the paragraphs array and pick the first 6
    shuffleArray(paragraphs);

    for (let i = 0; i < 6; i++) {
        paragraphs[i].style.color = getRandomColor();
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
}




document.querySelector('nav').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        alert('Navigating to ' + event.target.textContent);
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});