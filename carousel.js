const clicks = document.querySelectorAll('img.click');
const display = document.querySelector('img#display');
const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#main-menu');

if (display) {
    const savedSource = localStorage.getItem('featuredImageSrc');
    if (savedSource) {
        display.setAttribute('src', savedSource);
    }
}

clicks.forEach((click) => {
    click.addEventListener('click', () => {
        const source = click.getAttribute('src');
        if (source && display) {
            localStorage.setItem('featuredImageSrc', source);
            display.setAttribute('src', source);
        }
    });
});

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}
