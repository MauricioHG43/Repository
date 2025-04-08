// Función para abrir y cerrar el menú de navegación
const navLinks = document.querySelector('#nav-links');
const menu = document.querySelector('nav');

// Seleccionamos el menu y asignamos el evento de scroll
window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
        // Si el scroll está en la parte superior, añadimos el filtro de difuminado
        menu.classList.add('bg-neutral-200');
        menu.classList.remove('py-4');
        navLinks.classList.add('bg-neutral-200')
        // menu.classList.remove('text-white');
    } else {
        // Si no, eliminamos el filtro de difuminado
        menu.classList.remove('bg-neutral-200');
        menu.classList.add('py-4');
        navLinks.classList.remove('bg-neutral-200')
        // menu.classList.add('text-white');
    }
});
function toggleMenu() {
    if (navLinks.classList.contains('h-0')) {
        navLinks.classList.add('h-48');
        navLinks.classList.remove('h-0');
        menu.classList.remove('bg-transparent');
        menu.classList.add('bg-white');
    } else {
        navLinks.classList.remove('h-48');
        navLinks.classList.add('h-0');
        menu.classList.add('bg-transparent');
        menu.classList.remove('bg-white');
    }
}

ScrollReveal().reveal('#hero .container', {
    delay: 100,
    duration: 1000,
    origin: 'top',
    distance: '50px'
});
ScrollReveal().reveal('#productos .grid', {
    delay: 400,
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});
