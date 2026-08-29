// 1. CARREGADOR DE TEXTURAS E CONFIGURAÇÃO
const carregadorTextura = new THREE.TextureLoader();

function ajustarPixelArt(textura) {
  textura.magFilter = THREE.NearestFilter;
  textura.minFilter = THREE.NearestFilter;
  return textura;
}

// 2. CONFIGURAÇÃO DA CENA E NÉVOA
cena.background = new THREE.Color(0x001021);
cena.fog = new THREE.FogExp2(0x001021, 0.08);

// 3. CHÃO DE BLOCOS DE GRAMA (LIMITE DE -10 A 10)
const texLado = ajustarPixelArt(carregadorTextura.load('grass_block_side.png'));
const texTopo = ajustarPixelArt(carregadorTextura.load('grass_block_top.png'));
const texBaixo = ajustarPixelArt(carregadorTextura.load('dirt.png'));

const materiaisBloco = [
  new THREE.MeshLambertMaterial({ map: texLado }),
  new THREE.MeshLambertMaterial({ map: texLado }),
  new THREE.MeshLambertMaterial({ map: texTopo }),
  new THREE.MeshLambertMaterial({ map: texBaixo }),
  new THREE.MeshLambertMaterial({ map: texLado }),
  new THREE.MeshLambertMaterial({ map: texLado })
];

const geometriaBloco = new THREE.BoxGeometry(1, 1, 1);

for (let x = -10; x <= 10; x++) {
  for (let z = -10; z <= 10; z++) {
    const blocoGrama = new THREE.Mesh(geometriaBloco, materiaisBloco);
    blocoGrama.position.set(x, 0, z);
    cena.add(blocoGrama);
  }
}

// 4. PERSONAGEM NOOB ROBLOX (CABEÇA DE CAIXA)
const noobRoblox = new THREE.Group();

const cabeca = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 0.8, 0.8),
  new THREE.MeshLambertMaterial({ color: 0xffd700 })
);
cabeca.position.y = 1.4;

const torso = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1.2, 0.5),
  new THREE.MeshLambertMaterial({ color: 0x0000ff })
);
torso.position.y = 0.4;

const pernaEsq = new THREE.Mesh(
  new THREE.BoxGeometry(0.45, 1, 0.5),
  new THREE.MeshLambertMaterial({ color: 0x00ff00 })
);
pernaEsq.position.set(-0.25, -0.7, 0);

const pernaDir = pernaEsq.clone();
pernaDir.position.x = 0.25;

noobRoblox.add(cabeca, torso, pernaEsq, pernaDir);
noobRoblox.position.set(0, 1.7, 0);
cena.add(noobRoblox);

// 5. KIRBY AZUL (ALAHAMA)
const alahama = new THREE.Group();
const corpoGeo = new THREE.SphereGeometry(1, 32, 32);
const corpoMat = new THREE.MeshLambertMaterial({ color: 0x1E90FF });
const corpo = new THREE.Mesh(corpoGeo, corpoMat);
alahama.add(corpo);

const olhoGeo = new THREE.CapsuleGeometry(0.08, 0.2, 16, 16);
const olhoMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
const olhoEsq = new THREE.Mesh(olhoGeo, olhoMat);
olhoEsq.position.set(-0.25, 0.2, 0.9);
olhoEsq.rotation.z = 0.1;
const olhoDir = olhoEsq.clone();
olhoDir.position.x = 0.25;
alahama.add(olhoEsq, olhoDir);

const peGeo = new THREE.SphereGeometry(0.35, 16, 16);
peGeo.scale(1, 0.5, 1.5);
const peMat = new THREE.MeshLambertMaterial({ color: 0xFF1493 });
const peEsq = new THREE.Mesh(peGeo, peMat);
peEsq.position.set(-0.5, -0.8, 0.2);
const peDir = peEsq.clone();
peDir.position.x = 0.5;
alahama.add(peEsq, peDir);

alahama.position.set(0, 1.5, -3);
cena.add(alahama);

// 6. CREEPER AZUL AMIGO
const geometriaCreeper = new THREE.BoxGeometry(0.8, 2, 0.8);
const materialCreeper = new THREE.MeshLambertMaterial({ color: 0x00aaff });
const creeperAzul = new THREE.Mesh(geometriaCreeper, materialCreeper);
creeperAzul.position.set(3, 2, -2);
cena.add(creeperAzul);

// 7. NPC MONI MONI
const moniMoni = new THREE.Group();
const jaqueta = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1.4, 0.6),
  new THREE.MeshLambertMaterial({ color: 0xcc0000 })
);
jaqueta.position.y = 0.7;
moniMoni.add(jaqueta);

const cabecaMoni = new THREE.Mesh(
  new THREE.SphereGeometry(0.4, 32, 32),
  new THREE.MeshLambertMaterial({ color: 0xffdbac })
);
cabecaMoni.position.y = 1.7;
moniMoni.add(cabecaMoni);

const pernaMoniEsq = new THREE.Mesh(
  new THREE.BoxGeometry(0.3, 1, 0.3),
  new THREE.MeshLambertMaterial({ color: 0x000000 })
);
pernaMoniEsq.position.set(-0.25, 0.1, 0);
const pernaMoniDir = pernaMoniEsq.clone();
pernaMoniDir.position.x = 0.25;
moniMoni.add(pernaMoniEsq, pernaMoniDir);

const chapeu = new THREE.Mesh(
  new THREE.ConeGeometry(0.4, 0.4, 32),
  new THREE.MeshLambertMaterial({ color: 0x000000 })
);
chapeu.position.y = 2.1;
moniMoni.add(chapeu);

moniMoni.position.set(-2, 1, 2);
cena.add(moniMoni);

// 8. CÂMERA
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// 9. CONTROLES POR TECLADO (PC) COM LIMITES
window.addEventListener('keydown', (event) => {
    const velocidade = 0.5;
    switch (event.key) {
        case 'ArrowUp':
            if (noobRoblox.position.z - velocidade >= -10) {
                noobRoblox.position.z -= velocidade;
            }
            break;
        case 'ArrowDown':
            if (noobRoblox.position.z + velocidade <= 10) {
                noobRoblox.position.z += velocidade;
            }
            break;
        case 'ArrowLeft':
            if (noobRoblox.position.x - velocidade >= -10) {
                noobRoblox.position.x -= velocidade;
            }
            break;
        case 'ArrowRight':
            if (noobRoblox.position.x + velocidade <= 10) {
                noobRoblox.position.x += velocidade;
            }
            break;
    }
});

// 10. CONTROLES POR INCLINAÇÃO (CELULAR)
let tiltX = 0;
let tiltZ = 0;

window.addEventListener('deviceorientation', (event) => {
    if (event.gamma !== null && event.beta !== null) {
        tiltX = event.gamma / 30;
        tiltZ = (event.beta - 45) / 30;
    }
});

// 11. LOOP PRINCIPAL DO JOGO (GAMELOOP)
let tempoPulo = 0;

function gameLoop() {
  requestAnimationFrame(gameLoop);

  // Animação do Kirby (Alahama)
  alahama.rotation.y += 0.01;
  tempoPulo += 0.05;
  alahama.position.y = 1.5 + Math.abs(Math.sin(tempoPulo)) * 0.4;

  // Animação do Moni Moni
  moniMoni.rotation.y += 0.01;

  // Movimento por inclinação do Celular (com limites)
  const sensibilidade = 0.15;
  if (Math.abs(tiltX) > 0.1) {
      let novaPosX = noobRoblox.position.x + tiltX * sensibilidade;
      noobRoblox.position.x = Math.max(-10, Math.min(10, novaPosX));
  }
  if (Math.abs(tiltZ) > 0.1) {
      let novaPosZ = noobRoblox.position.z + tiltZ * sensibilidade;
      noobRoblox.position.z = Math.max(-10, Math.min(10, novaPosZ));
  }

  // Renderiza a cena
  renderizador.render(cena, camera);
}

// Inicia o jogo
gameLoop();
