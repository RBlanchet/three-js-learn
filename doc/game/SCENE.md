# Création de la scene de notre jeu

Avant de créer le jeu, il va falloir imaginer la gueule qui pourrait avoir. J'ai imaginé à un jeu ou l'on incarnera un 
personnage (un carré pour le début) et il devra sauter au dessus d'element qui lui bloqueront le passage, un peu à la manière
du dinosaure de Google Chrome.

## Initialisation de la scène
Nous allons donc créer notre scène, et pour cela nous allons donc lui définir une camera avec une position.

```
 camera = new THREE.PerspectiveCamera(
    60,
    width / height,
    1,
    10000
  );
  camera.position.x = 0;
  camera.position.z = 200;
  camera.position.y = 100;
```

Cette camera sera ajouter à la scène par le biais d'une fonction `createScene` qui aura pour but, comme son nom l'indique,
de créer la scène avec tous les éléments necessaire au bon fonctionnement de notre jeu.

## C'est bien gentil, mais on voit rien ...

Patience ! En effet notre scène est vide et il va falloir lui ajouter différents Mesh qui permettront de peupler un peu notre scène.

Dans un premier temps, nous allons donc créer le sol ou notre (futur) personnage courira dessus. Le sol sera donc un Mesh 
de type Cylindrique.

```
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
```

Nous pourrons donc ajouter ce Mesh à notre scène en initialisant l'objet `Floor` et en l'ajoutant à notre scène déjà existante
`scene.add((new Floor()).mesh);`

Lorsque nous actualisons la page nous voyons donc bien notre sol un peu incurvé.

## C'est un peu statique non ?
En effet, y'a rien qui se passe, on voit juste un bout de cylindre en bas de nôtre écran, rien qui va révolutionner les jeux AAA.
C'est pour cela que dans la prochaine partie nous allons essayer d'ajouter quelques petits obstacles à ce sol et lui ajouter une 
rotation !


