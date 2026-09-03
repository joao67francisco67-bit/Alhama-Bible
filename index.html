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
</html>
