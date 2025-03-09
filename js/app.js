
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('menu-hidden');
    menu.classList.toggle('menu-visible');
});



let img = document.querySelector(".floating-img");
let pos = 0;
let direction = 1;

function floatEffect() {
    pos += direction * 0.09; // Reducimos la velocidad
    if (pos > 5 || pos < -5) direction *= -1; // Reducimos la amplitud del movimiento
    img.style.transform = `translateY(${pos}px)`;
    requestAnimationFrame(floatEffect);
}

floatEffect();

