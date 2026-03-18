// Generación de partículas artísticas
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Posicion y tamaño random
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;

    // Duración y retardo de animación aleatorios
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    // Color random
    const colors = ['#ff00cc', '#3333ff', '#00ccff', '#ffffff'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    particlesContainer.appendChild(particle);
}

// Animación del footer
const footer = document.querySelector('.footer');
if (footer) {
    footer.style.animation = 'footerFadeIn 2s ease-in forwards';
}

console.log("Hello World del proyecto de DevOps ");
