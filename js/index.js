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

renderer.render(scene, camera);