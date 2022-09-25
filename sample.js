// Question Reference: discourse.threejs.org/...

let camera, scene, renderer, controls, mesh;

const createWorld = () => {
  mesh = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2, 2, 2),
    new THREE.MeshStandardMaterial({ color: 0xff9999 })
  );
  
  scene.add(mesh);
  
  camera.lookAt(mesh.position);
  
  setInterval(() => {
    mesh.rotateY(0.001);
  }, 1 / 60);
};

const init = () => {
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000.0);
  camera.position.set(-5, 5, 7);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x333333);

  scene.add(new THREE.HemisphereLight(0xffffcc, 0x19bbdc, 1));

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  createWorld();
}

const animate = () => {
  requestAnimationFrame(animate);
  
  controls.update();

  renderer.render(scene, camera); 
}

init();
animate();
