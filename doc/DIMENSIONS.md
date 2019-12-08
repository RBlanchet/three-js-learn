# Le rendu en trois dimensions

Actuellement nous avons juste un carré blanc ... Super ! Mais comment savoir qu'il est vraiment en 3D ? 

### L'animation de notre objet

#### La rotation
Une fois notre Cube créer, nous pouvons lui assigner plusieurs propriétées comme `rotation`, elle aura pour but de rotationner
notre objet.

```
Cube.rotation.x = 10;
Cube.rotation.y = 10;
``` 

Wah ! Notre Cube est bien en 3D !

Nous allons donc le faire tourner afin qu'on puisse le voir sous toutes ses formes.

#### Animate
Dans Three.js si y'a bien une fonction ou tous le monde passe, c'est bien `animate`.

Elle va nous permettre, comme son nom l'indique, d'animer notre Scène afin qu'elle soit un peu plus vivante. Je pense que
c'est le bon moment pour pouvoir faire tourner notre Cube.

Nous allons donc créer une fonction qui va incrémenter nos postions (x, y) de 0.01. Elle prendre en paramètre un Mesh Object et 
s'occupera d'incrémenter ses positions.
```
/**
 * Permet d'effectuer une rotation sur notre Mesh
 *
 * @param {Mesh} element
 */
function rotateElement(element) {
  element.rotation.y += 0.01;
  element.rotation.x += 0.01;
}
```

En lancant cette fonction on distingue que notre objet à bouger un touuuuut petit peu. Pour cela on pourrait éventuellement 
le mettre dans une boucle sans fin afin qu'il bouge. Mais pour cela il faudra re-rendre la Scene à chaque fois.

C'est donc maintenant que notre fonction `animate` va rentrer en jeu !

```
/**
 * S'occupe de mettre à jour notre Canvas en lui indiquant que faire
 */
function animate(callback) {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  rotateElement(Cube);
}

animate();
```

Elle va donc être lancée une première fois, puis va s'auto appelée à la fin de son execution avec le [requestAnimationFrame](https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame).

On va donc pouvoir lui indiquer qu'à chaque fois qu'on lance l'animation, elle va éxécuter notre fonction `rotateElement`.

Si on actualise, MIRACLE ! Notre cube tourne ! On peut donc bien voir que notre Objet, est bien un objet 3D.

Pour la suite, nous verrons comment manipuler les contrôles afin de pouvoir tourner, grâçe à la souris, autour du Cube.