const dropdown = document.querySelector('.dropdown')
const overlay = document.querySelector('.overlay')

dropdown.addEventListener('hover', navToggle);

function navToggle() {
    dropdown.classList.toggle('dropdown')
    overlay.classList.toggle('overlay-show');
}