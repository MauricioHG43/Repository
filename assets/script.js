// Seleccionamos el nav y asignamos el evento de scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
        // Si el scroll está en la parte superior, añadimos el filtro de difuminado
        nav.classList.add('bg-neutral-300');
        nav.classList.remove('py-4');
        // nav.classList.remove('text-white');
    } else {
        // Si no, eliminamos el filtro de difuminado
        nav.classList.remove('bg-neutral-300');
        nav.classList.add('py-4');
        // nav.classList.add('text-white');
    }
});


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