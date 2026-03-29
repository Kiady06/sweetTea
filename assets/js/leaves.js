/* ─────────────────────────────────────────
   FEUILLES QUI TOMBENT
   Génère des divs de feuilles dynamiquement
   pour ne pas polluer le HTML
───────────────────────────────────────── */

// SVG de la feuille — forme simple naturelle
const LEAF_SVG = `
  <svg viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2 C20 2, 38 15, 35 35 C32 50, 20 58, 20 58
             C20 58, 8 50, 5 35 C2 15, 20 2, 20 2 Z"/>
    <line x1="20" y1="5" x2="20" y2="55"
          stroke="rgba(255,255,255,0.3)" stroke-width="1.2"
          stroke-linecap="round"/>
  </svg>
`;

// Nombre de feuilles simultanées à l'écran
const LEAF_COUNT = 12;

// Crée le conteneur et l'ajoute au body
const container = document.createElement("div");
container.classList.add("leaves-container");
document.body.appendChild(container);

// Génère une feuille avec des propriétés aléatoires
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.innerHTML = LEAF_SVG;

  // Taille aléatoire entre 20px et 45px
  const size = random(20, 45);
  leaf.style.width = size + "px";
  leaf.style.height = (size * 1.5) + "px";

  // Position horizontale aléatoire
  leaf.style.left = random(0, 100) + "vw";

  // Durée de chute aléatoire entre 6s et 14s
  const duration = random(6, 14);
  leaf.style.animationDuration = duration + "s";

  // Délai aléatoire pour que les feuilles n'apparaissent pas toutes en même temps
  leaf.style.animationDelay = random(0, 10) + "s";

  // Balancement horizontal aléatoire (positif ou négatif)
  const swayDirection = Math.random() > 0.5 ? 1 : -1;
  const swayAmount = random(80, 200) * swayDirection;
  leaf.style.setProperty("--sway", swayAmount + "px");

  // Rotation aléatoire pendant la chute
  const rotationDirection = Math.random() > 0.5 ? 1 : -1;
  const rotationAmount = random(180, 540) * rotationDirection;
  leaf.style.setProperty("--rotation", rotationAmount + "deg");

  // Opacité légèrement différente pour chaque feuille
  leaf.querySelector("svg").style.opacity = random(15, 30) / 100;

  container.appendChild(leaf);
}

// Fonction utilitaire — nombre aléatoire entre min et max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Crée toutes les feuilles
for (let i = 0; i < LEAF_COUNT; i++) {
  createLeaf();
}