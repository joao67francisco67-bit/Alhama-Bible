<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Alahama - Cenário 3D</title>
  <style>
    body { margin: 0; overflow: hidden; }
    canvas { display: block; }
  </style>
  <script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.160.0/build/three.module.js"
    }
  }
  </script>
</head>
<body>
<script type="module">
  import * as THREE from 'three';

  // --- 1. CONFIGURAÇÃO DA CENA ---
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x00e5ff); // Céu ciano

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 3, 10);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Iluminação
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 5);
  scene.add(light);

  // --- 2. FUNÇÃO PARA CRIAR BLOCOS ---
  const blocosInterativos = [];

  function criarBloco(x, y, z, cor, comGrama = false) {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    
    // Deixa os blocos um pouco irregulares
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + (Math.random() - 0.5) * 0.08);
      pos.setY(i, pos.getY(i) + (Math.random() - 0.5) * 0.08);
    }

    const mat = new THREE.MeshToonMaterial({ color: cor });
    const bloco = new THREE.Mesh(geo, mat);
    bloco.position.set(x, y, z);

    // Contorno preto
    const contorno = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide }));
    contorno.scale.set(1.15, 1.15, 1.15);
    bloco.add(contorno);

    if (comGrama) {
      const grama = new THREE.Mesh(new THREE.BoxGeometry(1, 0.25, 1), new THREE.MeshToonMaterial({ color: 0x00ff00 }));
      grama.position.y = 0.6;
      const contG = new THREE.Mesh(grama.geometry, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide }));
      contG.scale.set(1.1, 1.5, 1.1);
      grama.add(contG);
      bloco.add(grama);
    }

    scene.add(bloco);
    blocosInterativos.push(bloco);
    return bloco;
  }

  // --- 3. CONSTRUÇÃO DO CENÁRIO ---
  // Chão marrom + grama
  for (let x = -8; x <= 8; x++) {
    for (let z = -3; z <= 2; z++) {
      if (Math.random() > 0.1) criarBloco(x, -2, z, 0x8B4513, true);
    }
  }

  // Plataforma cinza
  for (let x = -6; x <= 6; x++) criarBloco(x, -0.3, 0, 0x6e6e6e);

  // Blocos marrons superiores
  criarBloco(-5, 0.8, 0.5, 0x8B4513);
  criarBloco(-3, 0.5, 0, 0x8B4513);
  criarBloco(-1, 0.7, 0, 0x8B4513);
  criarBloco(0, 0.4, 0.5, 0x8B4513);
  criarBloco(2, 0.9, 0, 0x8B4513);
  criarBloco(3.5, 0.3, 0, 0x8B4513);
  criarBloco(5, 1.2, 0.3, 0x8B4513);

  // Monstro de 1 olho ao fundo
  const monstro = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 16), new THREE.MeshToonMaterial({ color: 0xffffff }));
  monstro.position.set(0, 5, -8);
  scene.add(monstro);

  const contM = new THREE.Mesh(monstro.geometry, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide }));
  contM.scale.set(1.1, 1.1, 1.1);
  monstro.add(contM);

  const olhoVermelho = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), new THREE.MeshBasicMaterial({ color: 0xcc0000 }));
  olhoVermelho.position.set(0, 5, -5.5);
  scene.add(olhoVermelho);

  const pupila = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  pupila.position.set(0, 5, -5);
  scene.add(pupila);

  // --- 4. PERSONAGEM ALAHAMA ---
  const alahama = new THREE.Group();
  const corpoGeo = new THREE.SphereGeometry(0.6, 16, 16);
  corpoGeo.scale(1.1, 1, 0.8);
  const alahamaMat = new THREE.MeshToonMaterial({ color: 0x8a5cff });
  const corpo = new THREE.Mesh(corpoGeo, alahamaMat);
  alahama.add(corpo);

  const contA = new THREE.Mesh(corpoGeo, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide }));
  contA.scale.set(1.2, 1.2, 1.2);
  alahama.add(contA);

  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const eyeLeft = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), eyeMat);
  eyeLeft.position.set(-0.2, 0.1, 0.5);
  alahama.add(eyeLeft);

  const eyeRight = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), eyeMat);
  eyeRight.position.set(0.2, 0.1, 0.5);
  alahama.add(eyeRight);

  alahama.position.set(0, 0.8, 1);
  scene.add(alahama);

  // --- 5. ITENS 3D (SABÃO E PANO) ---
  const sabaoGeo = new THREE.BoxGeometry(0.5, 0.3, 0.8);
  const sabaoMat = new THREE.MeshBasicMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.8 });
  const sabaoMesh = new THREE.Mesh(sabaoGeo, sabaoMat);
  sabaoMesh.position.set(-2, 0.8, 1);
  scene.add(sabaoMesh);

  const panoGeo = new THREE.BoxGeometry(0.6, 0.2, 0.6);
  const panoMat = new THREE.MeshBasicMaterial({ color: 0xffeb3b });
  const panoMesh = new THREE.Mesh(panoGeo, panoMat);
  panoMesh.position.set(2, 0.8, 1);
  scene.add(panoMesh);

  let alahamaEnsaboado = false;

  function checarInteracaoItens() {
    sabaoMesh.rotation.y += 0.02;
    panoMesh.rotation.y += 0.02;

    const distSabao = alahama.position.distanceTo(sabaoMesh.position);
    if (distSabao < 1 && !alahamaEnsaboado) {
      alahamaEnsaboado = true;
      corpo.material.color.setHex(0xe0ffff);
    }

    const distPano = alahama.position.distanceTo(panoMesh.position);
    if (distPano < 1 && alahamaEnsaboado) {
      alahamaEnsaboado = false;
      corpo.material.color.setHex(0x8a5cff);
    }
  }

  // --- 6. NOOB DO ROBLOX 3D (PACÍFICO) ---
  const noobGroup = new THREE.Group();
  const peleMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
  const camisaMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const calcaMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 });

  const cabecaMesh = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), peleMaterial);
  cabecaMesh.position.set(0, 1.35, 0);
  noobGroup.add(cabecaMesh);

  const troncoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.3), camisaMaterial);
  troncoMesh.position.set(0, 0.75, 0);
  noobGroup.add(troncoMesh);

  const bracoEsqMesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.6, 0.3), peleMaterial);
  bracoEsqMesh.position.set(-0.45, 0.75, 0);
  noobGroup.add(bracoEsqMesh);

  const bracoDirMesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.6, 0.3), peleMaterial);
  bracoDirMesh.position.set(0.45, 0.75, 0);
  noobGroup.add(bracoDirMesh);

  const pernaEsqMesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.6, 0.3), calcaMaterial);
  pernaEsqMesh.position.set(-0.15, 0.15, 0);
  noobGroup.add(pernaEsqMesh);

  const pernaDirMesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.6, 0.3), calcaMaterial);
  pernaDirMesh.position.set(0.15, 0.15, 0);
  noobGroup.add(pernaDirMesh);

  noobGroup.position.set(4, 0.3, 0);
  scene.add(noobGroup);

  // --- 7. CREEPER AZUL 3D ---
  const creeperGroup = new THREE.Group();
  const creeperMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

  const creeperCabeca = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), creeperMaterial);
  creeperCabeca.position.set(0, 1.2, 0);
  creeperGroup.add(creeperCabeca);

  const creeperCorpo = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.7, 0.25), creeperMaterial);
  creeperCorpo.position.set(0, 0.65, 0);
  creeperGroup.add(creeperCorpo);

  const pernaGeo = new THREE.BoxGeometry(0.25, 0.35, 0.25);
  const p1 = new THREE.Mesh(pernaGeo, creeperMaterial); p1.position.set(-0.15, 0.15, -0.15); creeperGroup.add(p1);
  const p2 = new THREE.Mesh(pernaGeo, creeperMaterial); p2.position.set(0.15, 0.15, -0.15); creeperGroup.add(p2);
  const p3 = new THREE.Mesh(pernaGeo, creeperMaterial); p3.position.set(-0.15, 0.15, 0.15); creeperGroup.add(p3);
  const p4 = new THREE.Mesh(pernaGeo, creeperMaterial); p4.position.set(0.15, 0.15, 0.15); creeperGroup.add(p4);

  creeperGroup.position.set(-4, 0.3, 0);
  scene.add(creeperGroup);

  // --- 8. MECÂNICA SANDBOX (MINECRAFT) ---
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  window.addEventListener('pointerdown', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersecoes = raycaster.intersectObjects(blocosInterativos);

    if (intersecoes.length > 0) {
      const hit = intersecoes[0];

      // Clique esquerdo: quebrar bloco
      if (event.button === 0) {
        scene.remove(hit.object);
        const idx = blocosInterativos.indexOf(hit.object);
        if (idx > -1) blocosInterativos.splice(idx, 1);
      }
      // Clique direito: colocar bloco
      else if (event.button === 2) {
        const novaPos = hit.object.position.clone().add(hit.face.normal);
        criarBloco(novaPos.x, novaPos.y, novaPos.z, 0x8B4513);
      }
    }
  });

  window.addEventListener('contextmenu', (e) => e.preventDefault());

  // --- 9. LOOP DE ANIMAÇÃO ---
  function animate() {
    requestAnimationFrame(animate);
    
    checarInteracaoItens();
    
    noobGroup.rotation.y += 0.005;
    creeperGroup.rotation.y += 0.005;

    renderer.render(scene, camera);
  }
  animate();

  // Ajuste de janela
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
</script>
</body>
</html> <div style="position:fixed; bottom:20px; left:20px; display:grid; grid-template-columns:40px 40px 40px; gap:5px">
  <div></div><button ontouchstart="keys['w']=true" ontouchend="keys['w']=false" style="height:40px">⬆️</button><div></div>
  <button ontouchstart="keys['a']=true" ontouchend="keys['a']=false" style="height:40px">⬅️</button>
  <button ontouchstart="keys['s']=true" ontouchend="keys['s']=false" style="height:40px">⬇️</button>
  <button ontouchstart="keys['d']=true" ontouchend="keys['d']=false" style="height:40px">➡️</button>
</div> <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Zombie MJ - Three.js</title>
<style>body{margin:0;overflow:hidden;background:#111}canvas{display:block}#hud{position:fixed;top:10px;left:10px;color:white;font-family:sans-serif;background:#0008;padding:6px 10px;border-radius:8px}</style>
<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@0.160.0/build/three.module.js"
  }
}
</script>
</head>
<body>
<div id="hud">WASD to move Alahama | Zombie MJ is hostile</div>
<script type="module">
import * as THREE from 'three';

// --- SCENE ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
camera.position.set(0,5,10);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(5,10,5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const floor = new THREE.Mesh(new THREE.PlaneGeometry(50,50), new THREE.MeshStandardMaterial({color:0x222222}));
floor.rotation.x = -Math.PI/2;
scene.add(floor);

// --- MATERIALS - ULTRA REALISTIC SKIN TONE MJ INVINCIBLE 2001 ---
const skinMaterial = new THREE.MeshStandardMaterial({ 
  color: 0xe8c4a8, // MJ Invincible era skin tone - light beige, NOT GREEN
  roughness: 0.4,
  metalness: 0.1
});
const blueShirtMaterial = new THREE.MeshStandardMaterial({ color: 0x3b82f6 }); // blue shirt
const jeansMaterial = new THREE.MeshStandardMaterial({ color: 0x1e3a8a }); // jeans pants
const nikeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

// --- ALAHAMA (Blue kirby cross-eyed) ---
const alahamaGroup = new THREE.Group();
const alahamaBody = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), new THREE.MeshStandardMaterial({color:0x60a5fa}));
alahamaGroup.add(alahamaBody);
scene.add(alahamaGroup);
alahamaGroup.position.set(-5,0.7,0);

// --- ZOMBIE MJ - HUMAN FULL BODY ---
const zombieGroup = new THREE.Group();

// Head - realistic
const head = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 32), skinMaterial);
head.position.y = 1.6;
zombieGroup.add(head);

// Torso - blue shirt
const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 0.4), blueShirtMaterial);
torso.position.y = 1.0;
zombieGroup.add(torso);

// Arms
const armGeo = new THREE.BoxGeometry(0.18, 0.7, 0.18);
const leftArm = new THREE.Mesh(armGeo, skinMaterial);
leftArm.position.set(-0.45, 1.0, 0);
zombieGroup.add(leftArm);
const rightArm = new THREE.Mesh(armGeo, skinMaterial);
rightArm.position.set(0.45, 1.0, 0);
zombieGroup.add(rightArm);

// Legs - jeans pants
const legGeo = new THREE.BoxGeometry(0.25, 0.8, 0.25);
const leftLeg = new THREE.Mesh(legGeo, jeansMaterial);
leftLeg.position.set(-0.18, 0.2, 0);
zombieGroup.add(leftLeg);
const rightLeg = new THREE.Mesh(legGeo, jeansMaterial);
rightLeg.position.set(0.18, 0.2, 0);
zombieGroup.add(rightLeg);

// Shoes - Nike sneakers white
const shoeGeo = new THREE.BoxGeometry(0.28, 0.15, 0.45);
const leftShoe = new THREE.Mesh(shoeGeo, nikeMaterial);
leftShoe.position.set(-0.18, -0.25, 0.1);
zombieGroup.add(leftShoe);
const rightShoe = new THREE.Mesh(shoeGeo, nikeMaterial);
rightShoe.position.set(0.18, -0.25, 0.1);
zombieGroup.add(rightShoe);

scene.add(zombieGroup);
zombieGroup.position.set(5,0.4,0);

// --- CONTROLS ---
const keys = {};
window.onkeydown = e => keys[e.key.toLowerCase()] = true;
window.onkeyup = e => keys[e.key.toLowerCase()] = false;

// --- HOSTILE AI + MOONWALK ---
let frame = 0;
function animate(){
  requestAnimationFrame(animate);
  frame += 0.05;

  // Move Alahama
  if(keys['a'] || keys['arrowleft']) alahamaGroup.position.x -= 0.08;
  if(keys['d'] || keys['arrowright']) alahamaGroup.position.x += 0.08;
  if(keys['w'] || keys['arrowup']) alahamaGroup.position.z -= 0.08;
  if(keys['s'] || keys['arrowdown']) alahamaGroup.position.z += 0.08;

  // Zombie hostile attack
  const dx = alahamaGroup.position.x - zombieGroup.position.x;
  const dz = alahamaGroup.position.z - zombieGroup.position.z;
  const dist = Math.hypot(dx, dz);

  if(dist > 0.9){
    // Chase
    zombieGroup.position.x += (dx/dist) * 0.03;
    zombieGroup.position.z += (dz/dist) * 0.03;
    
    // Moonwalk effect - slide backwards while facing player
    const moonwalkOffset = Math.sin(frame*3) * 0.08;
    zombieGroup.position.x += moonwalkOffset;
    
    // Look at player
    zombieGroup.lookAt(alahamaGroup.position.x, zombieGroup.position.y, alahamaGroup.position.z);
    
    // Walking animation
    leftLeg.rotation.x = Math.sin(frame*5) * 0.5;
    rightLeg.rotation.x = -Math.sin(frame*5) * 0.5;
    leftArm.rotation.x = -Math.sin(frame*5) * 0.5;
    rightArm.rotation.x = Math.sin(frame*5) * 0.5;
  } else {
    // Attack when close
    zombieGroup.position.y = 0.4 + Math.sin(frame*10)*0.1;
    document.getElementById('hud').innerText = 'ZOMBIE MJ ATTACKING!';
  }

  camera.lookAt(alahamaGroup.position);
  renderer.render(scene, camera);
}
animate();

window.onresize = () => {
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}
</script>
</body>
</html> // --- PICKAXE ---
const pickaxeGroup = new THREE.Group();

// Handle wood
const handle = new THREE.Mesh(
  new THREE.CylinderGeometry(0.03, 0.03, 1.0, 8),
  new THREE.MeshStandardMaterial({ color: 0x8B4513 })
);
handle.position.y = 0.5;
pickaxeGroup.add(handle);

// Head metal
const headPick = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.12),
  new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8, roughness: 0.2 })
);
headPick.position.y = 1.0;
pickaxeGroup.add(headPick);

// Pick point
const point = new THREE.Mesh(
  new THREE.ConeGeometry(0.06, 0.3, 8),
  new THREE.MeshStandardMaterial({ color: 0x666666 })
);
point.rotation.z = Math.PI / 2;
point.position.set(0.35, 1.0, 0);
pickaxeGroup.add(point);

pickaxeGroup.position.set(0.5, 0.2, 0);
pickaxeGroup.rotation.z = Math.PI / 4;
alahamaGroup.add(pickaxeGroup);

// Attack variables
let isAttacking = false;
let attackCooldown = 0;   // PICKAXE ATTACK - Press SPACE or E
  if((keys[' '] || keys['e']) && !isAttacking && attackCooldown <= 0){
    isAttacking = true;
    attackCooldown = 30; // cooldown
    
    // Attack animation
    let attackFrame = 0;
    const attackAnim = setInterval(() => {
      attackFrame += 0.3;
      pickaxeGroup.rotation.z = Math.PI/4 + Math.sin(attackFrame) * 1.5;
      pickaxeGroup.rotation.x = Math.sin(attackFrame) * 0.5;
      
      // Check hit on zombie
      if(dist < 1.5 && attackFrame > 1){
        // Hit effect
        zombieGroup.position.y += 0.3;
        skinMaterial.color.set(0xff0000); // flash red when hit
        setTimeout(() => skinMaterial.color.set(0xe8c4a8), 150);
        
        // Knockback
        zombieGroup.position.x -= (dx/dist) * 0.5;
        zombieGroup.position.z -= (dz/dist) * 0.5;
        
        document.getElementById('hud').innerText = 'HIT! Zombie MJ - HP: ' + Math.floor(Math.random()*100);
      }
      
      if(attackFrame > 3.14){
        clearInterval(attackAnim);
        pickaxeGroup.rotation.z = Math.PI/4;
        pickaxeGroup.rotation.x = 0;
        isAttacking = false; <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Alahama Game</title>
<style>body{margin:0;overflow:hidden;background:#111}canvas{display:block}#hud{position:fixed;top:10px;left:10px;color:#fff;font-family:sans-serif;background:#0008;padding:6px 10px;border-radius:8px}</style>
<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
</head>
<body>
<div id="hud">WASD Move | SPACE Pickaxe | Charlie Follows You</div>
<script type="module">
import * as THREE from 'three';

// SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
camera.position.set(0,6,12);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
scene.add(new THREE.DirectionalLight(0xffffff, 1.2).position.set(5,10,5));
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const floor = new THREE.Mesh(new THREE.PlaneGeometry(50,50), new THREE.MeshStandardMaterial({color:0x222222}));
floor.rotation.x = -Math.PI/2;
scene.add(floor);

// MATERIALS
const skinMaterialMJ = new THREE.MeshStandardMaterial({color:0xe8c4a8, roughness:0.4});
const blueShirtMat = new THREE.MeshStandardMaterial({color:0x3b82f6});
const jeansMat = new THREE.MeshStandardMaterial({color:0x1e3a8a});
const whiteMat = new THREE.MeshStandardMaterial({color:0xffffff});
const redShirtMat = new THREE.MeshStandardMaterial({color:0xff0000});
const greenPantsMat = new THREE.MeshStandardMaterial({color:0x00aa00});
const skinMat = new THREE.MeshStandardMaterial({color:0xe8c4a8});

// ALAHAMA - blue cross-eyed kirby
const alahamaGroup = new THREE.Group();
alahamaGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.7,32,32), new THREE.MeshStandardMaterial({color:0x60a5fa})));
scene.add(alahamaGroup);
alahamaGroup.position.set(-5,0.7,0);

// PICKAXE
const pickaxeGroup = new THREE.Group();
const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,1.0,8), new THREE.MeshStandardMaterial({color:0x8B4513}));
handle.position.y = 0.5; pickaxeGroup.add(handle);
const pickHead = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.12,0.12), new THREE.MeshStandardMaterial({color:0x888888, metalness:0.8}));
pickHead.position.y = 1.0; pickaxeGroup.add(pickHead);
pickaxeGroup.position.set(0.5,0.2,0); pickaxeGroup.rotation.z = Math.PI/4;
alahamaGroup.add(pickaxeGroup);

// ZOMBIE MJ - HUMAN, ULTRA REALISTIC, NOT GREEN, INVINCIBLE ERA 2001
const zombieGroup = new THREE.Group();
function createBox(w,h,d,mat,x,y,z){ const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat); m.position.set(x,y,z); return m; }
zombieGroup.add(createBox(0.4,0.4,0.4, skinMaterialMJ, 0,1.6,0)); // head
zombieGroup.add(createBox(0.7,0.8,0.4, blueShirtMat, 0,1.0,0)); // blue shirt
zombieGroup.add(createBox(0.18,0.7,0.18, skinMaterialMJ, -0.45,1.0,0)); // arms
zombieGroup.add(createBox(0.18,0.7,0.18, skinMaterialMJ, 0.45,1.0,0));
zombieGroup.add(createBox(0.25,0.8,0.25, jeansMat, -0.18,0.2,0)); // jeans pants
zombieGroup.add(createBox(0.25,0.8,0.25, jeansMat, 0.18,0.2,0));
zombieGroup.add(createBox(0.28,0.15,0.45, whiteMat, -0.18,-0.25,0.1)); // nike shoes
zombieGroup.add(createBox(0.28,0.15,0.45, whiteMat, 0.18,-0.25,0.1));
zombieGroup.position.set(5,0.4,0);
scene.add(zombieGroup);

// CHARLIE - MINECRAFT STEVE, RED SHIRT, GREEN PANTS
const charlieGroup = new THREE.Group();
charlieGroup.add(createBox(0.4,0.4,0.4, skinMat, 0,1.7,0)); // head
charlieGroup.add(createBox(0.5,0.6,0.25, redShirtMat, 0,1.2,0)); // red shirt
charlieGroup.add(createBox(0.15,0.6,0.15, skinMat, -0.325,1.2,0)); // arm left
charlieGroup.add(createBox(0.15,0.6,0.15, skinMat, 0.325,1.2,0)); // arm right
charlieGroup.add(createBox(0.2,0.6,0.2, greenPantsMat, -0.125,0.6,0)); // green pants left
charlieGroup.add(createBox(0.2,0.6,0.2, greenPantsMat, 0.125,0.6,0)); // green pants right
charlieGroup.position.set(-3,0.4,3);
scene.add(charlieGroup);

// NAME TAG CHARLIE
const canvas = document.createElement('canvas'); canvas.width=256; canvas.height=64;
const ctx = canvas.getContext('2d'); ctx.fillStyle='black'; ctx.fillRect(0,0,256,64); ctx.fillStyle='white'; ctx.font='Bold 30px Arial'; ctx.fillText('Charlie',70,40);
const sprite = new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(canvas)}));
sprite.position.set(0,2.3,0); sprite.scale.set(1.5,0.4,1); charlieGroup.add(sprite);

// CONTROLS
const keys={}; onkeydown=e=>keys[e.key.toLowerCase()]=true; onkeyup=e=>keys[e.key.toLowerCase()]=false;
let frame=0, isAttacking=false, cooldown=0;

function animate(){
  requestAnimationFrame(animate); frame+=0.05;
  // MOVE ALAHAMA
  if(keys['a']) alahamaGroup.position.x-=0.08;
  if(keys['d']) alahamaGroup.position.x+=0.08;
  if(keys['w']) alahamaGroup.position.z-=0.08;
  if(keys['s']) alahamaGroup.position.z+=0.08;

  // ZOMBIE MJ HOSTILE AI + MOONWALK
  const dx=alahamaGroup.position.x - zombieGroup.position.x;
  const dz=alahamaGroup.position.z - zombieGroup.position.z;
  const dist=Math.hypot(dx,dz)||1;
  if(dist>0.9){
    zombieGroup.position.x+=(dx/dist)*0.03 + Math.sin(frame*3)*0.02; // moonwalk slide
    zombieGroup.position.z+=(dz/dist)*0.03;
    zombieGroup.lookAt(alahamaGroup.position.x, zombieGroup.position.y, alahamaGroup.position.z);
  }

  // CHARLIE FOLLOW
  const cdx=alahamaGroup.position.x - charlieGroup.position.x;
  const cdz=alahamaGroup.position.z - charlieGroup.position.z;
  const cDist=Math.hypot(cdx,cdz);
  if(cDist>2.5){ charlieGroup.position.x+=(cdx/cDist)*0.015; charlieGroup.position.z+=(cdz/cDist)*0.015; charlieGroup.lookAt(alahamaGroup.position.x,0, alahamaGroup.position.z); }

  // PICKAXE ATTACK
  if((keys[' ']||keys['e']) && !isAttacking && cooldown<=0){
    isAttacking=true; cooldown=30;
    let aFrame=0;
    const anim=setInterval(()=>{
      aFrame+=0.3; pickaxeGroup.rotation.z=Math.PI/4 + Math.sin(aFrame)*1.5;
      if(dist<1.5 && aFrame>1){ zombieGroup.position.x-=(dx/dist)*0.5; zombieGroup.position.z-=(dz/dist)*0.5; }
      if(aFrame>3.14){ clearInterval(anim); pickaxeGroup.rotation.z=Math.PI/4; isAttacking=false; }
    },16);
  }
  if(cooldown>0) cooldown--;

  camera.lookAt(alahamaGroup.position);
  renderer.render(scene,camera);
}
animate();
</script>
</body>
</html>
      }
    }, 16);
  }
  
  if(attackCooldown > 0) attackCooldown--;
