// Seleccionamos el nav y asignamos el evento de scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
        // Si el scroll está en la parte superior, añadimos el filtro de difuminado
        nav.classList.add('bg-neutral-300');
        nav.classList.remove('py-4');
        nav.classList.remove('text-white');
    } else {
        // Si no, eliminamos el filtro de difuminado
        nav.classList.remove('bg-neutral-300');
        nav.classList.add('py-4');
        nav.classList.add('text-white');
    }
});
// ScrollReveal animations
ScrollReveal().reveal('nav', {
    delay: 200,
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('#hero h1', {
    delay: 300,
    duration: 1000,
    origin: 'left',
    distance: '50px'
});

ScrollReveal().reveal('#hero img', {
    delay: 400,
    duration: 1000,
    origin: 'right',
    distance: '50px'
});