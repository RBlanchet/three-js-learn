# Découverte

### Pour commencer
#### Les scènes
Three.js comme n'importe quel système d'application 3D utilise le système de Scène qui aura pour but d'initialiser un espace 
pour rendre différent éléments.

Pour pourvoir l'initialiser dans l'application, il suffit d'instancier la classe Scene.

```
const scene = new THREE.Scene();
```

#### Les caméras
![Rendue de projection](./assets/projection.png)
La Caméra permettra de placer le point de vue de l'utilisateur dans la scène. Nous allons donc instancier la `PerspectiveCamera`, 
elle prendra comme paramètres :
* _{Number}_ **fov**: Champ de vision vertical de la Caméra
* _{Number}_ **aspect** : Le [Rapport de forme](https://fr.wikipedia.org/wiki/Rapport_de_forme) de l'image (16/9, 3/2, ect ...)
* _{Number}_ **near** : Définit la distance minimal de rendue de la caméra
* _{Number}_ **far** :  Définit la distance maximal de rendue de la caméra

Cette caméra sera ensuite ajouté dans la Scène

```
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

scene.add(camera);
```

#### Les moteur de Rendus
Three.js se base sur le moteur de rendu [WebGL](https://fr.wikipedia.org/wiki/WebGL) qui s'occupera de rendre la Scene en 
interface compréhensible pour le navigateur.

Pour le moment nous allons juste nous occuper de rendre la Scene sans aucun paramètres et de l'ajouter à notre DOM sous forme
de Canvas.

```
const rendrer = new THREE.WebGLRenderer();

document.body.appendChild(renderer.domElement);
```

### Et après ça ?
Lorsque nous nous rendons sur notre `index.html`, nous trouverons donc une Scène noire. A partir de là nous allons commencer
à placer différents éléments et textures afin de rendre notre Scène un peu moins triste.




