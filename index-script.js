const header = document.getElementById('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('nav-active');
    } else {
        header.classList.remove('nav-active');
    }
    lastScroll = currentScroll;
});

const words = ["CEO of pronox organization","Front End developer","Back End developer","UI/UX Designer","Logo Designer","Developer", "Content Writer","SEO specialist"];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector('.typing');

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWord, 100);
    } else {
        setTimeout(eraseWord, 2000);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWord, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord,300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWord();
});