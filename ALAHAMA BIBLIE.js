// Configuração da cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Iluminação
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 20, 15);
scene.add(directionalLight);

// Grupo do cenário (ilha) que gira
const worldGroup = new THREE.Group();
scene.add(worldGroup);

// Criando a ilha (base circular)
const islandGeometry = new THREE.CylinderGeometry(10, 10, 1, 32);
const islandMaterial = new THREE.MeshStandardMaterial({ color: 0x2e8b57 });
const island = new THREE.Mesh(islandGeometry, islandMaterial);
island.position.y = -0.5;
worldGroup.add(island);

// Criando o personagem (Homem Caixinha) - Adicionado diretamente à cena
const playerGeometry = new THREE.BoxGeometry(1, 1, 1);
const playerMaterial = new THREE.MeshStandardMaterial({ color: 0xff4500 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.set(0, 0.5, 0);
scene.add(player);

// Posição da Câmera
camera.position.set(0, 12, 16);
camera.lookAt(0, 0, 0);

// Estado dos controles (Teclado)
const keys = { w: false, a: false, s: false, d: false };

// Eventos de Teclado (Suporta WASD maiúsculo e minúsculo)
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (key in keys) keys[key] = true;
});

window.addEventListener('keyup', (e) => {
  const key = e.key.toLowerCase();
  if (key in keys) keys[key] = false;
});

// Loop principal de Animação
function animate() {
  requestAnimationFrame(animate);

  // 1. Rotação contínua da ilha
  worldGroup.rotation.y += 0.005;

  // 2. Vetor de movimento local baseado no teclado
  const speed = 0.15;
  const moveVector = new THREE.Vector3(0, 0, 0);

  if (keys.w) moveVector.z -= speed;
  if (keys.s) moveVector.z += speed;
  if (keys.a) moveVector.x -= speed;
  if (keys.d) moveVector.x += speed;

  // 3. Aplica o movimento diretamente no personagem
  player.position.add(moveVector);

  // 4. Limita o personagem para não sair dos limites da ilha (raio = 9.5)
  const maxRadius = 9.5;
  const currentRadius = Math.sqrt(player.position.x ** 2 + player.position.z ** 2);
  if (currentRadius > maxRadius) {
    player.position.x = (player.position.x / currentRadius) * maxRadius;
    player.position.z = (player.position.z / currentRadius) * maxRadius;
  }

  renderer.render(scene, camera);
}

// Ajuste automático de tela
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
