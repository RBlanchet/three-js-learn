// Contenu de l'application en JS

// Intialisation des variables
let scene, camera, renderer, container, height, width, floor;

// Au chargement de la page, on lance la function d'intialisation
window.addEventListener('load', init, false);

/**
 * Fonction d'initialisation de l'application
 */
function init() {
  // Création de la scène de notre jeu
  createScene();

  // Ajout des différents objets qui vont peupler notre scene
  addFloor();

  // Animation de la scène
  animate();
}

/**
 * Fonction qui initialisera la position de la camera avec la scene
 */
function createScene() {
  // Prise en compte des dimensions de la fenêtre
  height = window.innerHeight;
  width = window.innerWidth;

  // Initialisation de l'objet scene
  scene = new THREE.Scene();

  // Initialisation de la camera et définition de sa position dans l'espace
  camera = new THREE.PerspectiveCamera(
    80,
    width / height,
    1,
    10000
  );
  camera.position.x = 0;
  camera.position.z = 200;
  camera.position.y = 100;

  // Création du rendu
  renderer = new THREE.WebGLRenderer({
    alpha: true, // Transparence du background
    antialias: true // Ajout de l'anti aliasing
  });
  renderer.setSize(width, height);

  // Ajout de la scène à notre <div id="world"></div>
  container = document.getElementById('world');
  container.appendChild(renderer.domElement);

  // On écoute si jamais la fenêtre est resize
  window.addEventListener('resize', handleWindowResize, false);
}

/**
 * Fonction qui adapte les dimensions de la fenêtre au rendu de notre appli
 */
function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Objet Floor qui determinera le sol de notre jeu
 *
 * @constructor
 */
Floor = function () {
  // Création d'un objet geométrique
  const element = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
  // Création d'un Material à appliquer sur notre forme geometrique
  const material = new THREE.MeshPhongMaterial({
    color: 0x59332e,
    transparent:true,
    opacity:.6,
    flatShading: THREE.FlatShading,
  });
  // Création du Mesh en lui ajoutant un objet geométrique et un material
  this.mesh = new THREE.Mesh(element, material);
  this.mesh.receiveShadow = true;
  this.mesh.position.y = -600;
};

/**
 * Ajout du sol à notre scene
 */
function addFloor() {
  scene.add((new Floor()).mesh);
}

/**
 * Fonction d'animation
 */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}