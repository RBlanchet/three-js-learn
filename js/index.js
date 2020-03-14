// Contenu de l'application en JS

// Intialisation Caméra, Scene et Moteur de Rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Ajout de figures Geométriques
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
const Cube = new THREE.Mesh( geometry, material );

scene.add(Cube);

// Position de la camera et rendu de la Scene
camera.position.z = 2;

// Controles
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.update();

// Animation de notre Scene
/**
 * S'occupe de mettre à jour notre Canvas en lui indiquant que faire
 */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

// Lors du resize de notre fenêtre, il faut redimenssioner nos objets
window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
});