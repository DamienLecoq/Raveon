// Exemples pour ajouter une animation de mouvement ou de changement de couleur.
const lights = document.querySelectorAll('.light');

lights.forEach((light, index) => {
    light.style.animationDelay = `${index * 0.5}s`;
});