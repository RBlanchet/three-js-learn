# Prise en main des controles
Afin de pouvoir prendre la main sur le fait que le Cube tourne ou pas, Three.js nous donne la possibilité d'utiliser des `Controls`.
#### 

#### Redimensionner
Avant toutes choses, pour garder un certain aspect lorsqu'on redimensionne notre fenêtre, il va falloir indiquer à la caméra
de reprendre les dimensions de la fenêtre actuelle.

Pour cela, JavaScript nous offre les _Listener_, qui écoutera un évenement et qui lui indiquera quelle action il devra effectuer.

```
window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
});
```

Lorsqu'on va redimensionner notre fenêtre, il récupèrera les dimensiosn de la fenêtre actuelle et va les appliquer à la Scene
et à la Camera.

#### Orbite
Grâçe à la communauté, beaucoup d'utilisateurs de Three.js ont pu créer des composants pour Three.js, nous allons en utiliser
un qui permettra d'avoir une camera orbitale afin qu'on puisse diriger la camera avec notre souris.

Pour cela il faut télécharger le module sur les [exemples](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js) de Three.js et 
l'importer dans notre application sous forme de balise script.

Nous pouvons ensuite l'utiliser dans le contexte de notre application en lui passant la camera ainsi que le DOM dans lequel il est rendu.

```
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.update();
```

Nous allons ajouter aussi la méthode `controls.update()` dans notre fonction `animate` afin de pouvoir l'avoir tout au long de notre
application.

Nous pouvons donc bien voir que notre cube peut maintenant être observé sous tous ses aspects.