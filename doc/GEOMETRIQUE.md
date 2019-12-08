# Elements Geométrique

Afin que notre scène paraisse un peu moin triste, nous allons dans un premier temps ajouter quelques éléments visible par
notre caméra.

### Implémentation de quelques figures geométrique

Nous allons commencer par rendre un _Cube_ geométrique devant notre caméra.
#### Les BoxGeometry
Afin de donner des dimensions à notre Cube, nous allons instancier une Classe `BoxGeometry` qui s'occupera de définir les
dimensions de notre cube.

Comme nous voulons faire un rendu en 3D il faudra donc lui passer 3 dimensions à savoir :
* _{Float}_ **Width** : La largeur de notre item
* _{Float}_ **Height** : La hauteur de notre item
* _{Float}_ **Depth** : La profondeur de notre item

```
const geometry = new THREE.BoxGeometry(1, 1, 1);
```
Notre cube fera donc 1*1*1.

#### Les Matériaux
Les matériaux sont une couleur, une surface ou encore une image que l'on va donner à notre Cube. Cela nous permettra de le voir
dans notre scène.

Pour cela nous allons instancier `MeshBasicMaterial` qui consistera à ajouter pas mal de propriétés de texture à notre Cube, nous utiliserons pour le moment que la propriété `color`.

```
const material = new THREE.MeshBasicMaterial({color: 0xffffff});
```

#### Les Objets
Pour finir, nous allons récupérer les deux éléments précédent afin de créer notre Objet (**Mesh**)

Il s'occupera de 'fusionner' notre figure geométrique avec sa texture afin qu'on ai un Objet exploitable pour notre Scene.

```
const Cube = new THREE.Mesh(geometry, material);

scene.add(mesh);
```

### Et ensuite ?
Une fois ceci fait, nous allons positionner la Caméra sur un axe Z afin qu'on puisse voir notre Cube et on va rendre la Scene

```
camera.position.z = 2;
renderer.render(scene, camera);
```

Nous voyons bien un carré blanc ! Mais est-il vraiment en 3D ? C'est ce que nous allons voir par la suite.
