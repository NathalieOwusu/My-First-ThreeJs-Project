// Basic Scene
import * as THREE from "three";

//Canvas (Fetches something from the page)
const canvas = document.querySelector("canvas.webgl");

// scene
const scene = new THREE.Scene();

//Object (In order to have an object you need a mesh)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "pink" });
const mesh = new THREE.Mesh(geometry, material);
// Add This object to the scene
scene.add(mesh);

//Sizes(of the cameras perspective)
const sizes = {
  width: 800,
  height: 600,
};
//Camera (is an object) style with the paramethers of field of view  and width/height.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// The cameras position property is a JS object with three main properties x,y,z
// x, y, z are coordinates to position things in (3D)space.
//  x moves side to side(Left or Right). y moves up and down(Top to Bottom). z moves forward and backwards(Depth: In and Out).
camera.position.z = 3;
//Add Camera to scene
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas, // Sending to canvas property
});
renderer.setSize(sizes.width, sizes.height);
// First renderer
renderer.render(scene, camera);
