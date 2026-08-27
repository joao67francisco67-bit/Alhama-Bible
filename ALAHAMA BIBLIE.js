// 4. CREEPER AZUL AMIGO
const geometriaCreeper = new THREE.BoxGeometry(0.8, 2, 0.8);
const materialCreeper = new THREE.MeshLambertMaterial({ color: 0x00aaff }); // Azul claro
const creeperAzul = new THREE.Mesh(geometriaCreeper, materialCreeper);
creeperAzul.position.set(3, 2, -2);
cena.add(creeperAzul);

// Posicionamento da câmera
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0); function gameLoop() {
  requestAnimationFrame(gameLoop);

  // Aqui você coloca a lógica do jogo (movimentação, IA dos NPCs, etc.)
  alahama.rotation.y += 0.01; // Exemplo: Fazendo o Kirby Azul girar

  // Renderiza a cena a cada quadro (frame)
  renderizador.render(cena, camera);
}

// Inicia o jogo
gameLoop(); / Criando uma textura básica/cor de grama do Minecraft
const geometriaBloco = new THREE.BoxGeometry(1, 1, 1);
const materialGrama = new THREE.MeshLambertMaterial({ color: 0x557a2b }); // Verde Minecraft

// Loop para criar um chão feito de blocos 3D
for (let x = -10; x <= 10; x++) {
  for (let z = -10; z <= 10; z++) {
    const bloco = new THREE.Mesh(geometriaBloco, materialGrama);
    bloco.position.set(x, 0, z);
    cena.add(bloco); / Grupo para juntar os membros do Noob
const noobRoblox = new THREE.Group();

// Cabeça Amarela
const cabeca = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 0.8, 0.8),
  new THREE.MeshLambertMaterial({ color: 0xffd700 })
);
cabeca.position.y = 1.4;

// Torso Azul
const torso = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1.2, 0.5),
  new THREE.MeshLambertMaterial({ color: 0x0000ff })
);
torso.position.y = 0.4;

// Pernas Verdes
const pernaEsq = new THREE.Mesh(
  new THREE.BoxGeometry(0.45, 1, 0.5),
  new THREE.MeshLambertMaterial({ color: 0x00ff00 })
);
pernaEsq.position.set(-0.25, -0.7, 0);

const pernaDir = pernaEsq.clone();
pernaDir.position.x = 0.25;

noobRoblox.add(cabeca, torso, pernaEsq, pernaDir);
noobRoblox.position.set(-4, 1.7, -2);
cena.add(noobRoblox);
Efeito de Névoa do Ponto Nemo (Oceano Isolado)

JavaScript
// Define a cor de fundo e uma névoa densa de oceano distante
cena.background = new THREE.Color(0x001021);
cena.fog = new THREE.FogExp2(0x001021, 0.08);
Como carregar a Young Teela 3D (Arquivo GLTF do Blende
const carregador = new THREE.GLTFLoader();

// Carrega o arquivo 3D exportado do Blender
carregador.load('young_teela.gltf', (gltf) => {
  const npcTeela = gltf.scene;
  npcTeela.position.set(2, 0.5, -4);
  npcTeela.scale.set(1.5, 1.5, 1.5); // Ajusta o tamanho
  cena.add(npcTeela);
}); // Define a cor de fundo e uma névoa densa de oceano distante
cena.background = new THREE.Color(0x001021);
cena.fog = new THREE.FogExp2(0x001021, 0.08); // GRUPO PRINCIPAL DO KIRBY AZUL (ALAHAMA)
const alahama = new THREE.Group();

// 1. Corpos Redondo (Esfera)
const corpoGeo = new THREE.SphereGeometry(1, 32, 32);
const corpoMat = new THREE.MeshLambertMaterial({ color: 0x1E90FF }); // Azul Kirby
const corpo = new THREE.Mesh(corpoGeo, corpoMat);
alahama.add(corpo);

// 2. Olhos
const olhoGeo = new THREE.CapsuleGeometry(0.08, 0.2, 16, 16);
const olhoMat = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Preto

const olhoEsq = new THREE.Mesh(olhoGeo, olhoMat);
olhoEsq.position.set(-0.25, 0.2, 0.9);
olhoEsq.rotation.z = 0.1;

const olhoDir = olhoEsq.clone();
olhoDir.position.x = 0.25;

alahama.add(olhoEsq, olhoDir);

// 3. Pés Vermelhos/Rosas
const peGeo = new THREE.SphereGeometry(0.35, 16, 16);
peGeo.scale(1, 0.5, 1.5); // Achata a esfera para parecer um sapato
const peMat = new THREE.MeshLambertMaterial({ color: 0xFF1493 }); // Rosa choque / Vermelho

const peEsq = new THREE.Mesh(peGeo, peMat);
peEsq.position.set(-0.5, -0.8, 0.2);

const peDir = peEsq.clone();
peDir.position.x = 0.5;

alahama.add(peEsq, peDir);

// Posiciona o Alahama no mapa
alahama.position.set(0, 1.5, 0);
cena.add(alahama);

// 4. CÓDIGO DE PULO DO ALAHAMA (Adicione no seu gameLoop)
let tempoPulo = 0;

function animarAlahama() {
  tempoPulo += 0.05;
  // Faz ele dar pequenos pulinhos no chão estilo Kirby
  alahama.position.y = 1.5 + Math.abs(Math.sin(tempoPulo)) * 0.4;
} <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/examples/js/loaders/GLTFLoader.js"></script> // Criar uma instância do carregador
const carregador = new THREE.GLTFLoader();

// Carregar o modelo da Young Teela (substitua pelo caminho do seu arquivo)
carregador.load(
    'modelos/young_teela.glb', // Caminho para o arquivo do modelo 3D
    (gltf) => {
        // Esta função é executada quando o modelo é carregado com sucesso
        const youngTeela = gltf.scene; // O modelo carregado está aqui

        // Posicionar o NPC no seu cenário (em cima do chão de blocos)
        youngTeela.position.set(2, 0.5, 0); // Ajuste a posição conforme necessário

        // Ajustar a escala (se o modelo for muito grande ou pequeno)
        youngTeela.scale.set(1.5, 1.5, 1.5); // Ajuste a escala conforme necessário

        // Adicionar o modelo à cena do jogo
        cena.add(youngTeela);

        // Exemplo: Fazer o NPC olhar para o Kirby
        // youngTeela.lookAt(alahama.position);
    },
    (progresso) => {
        // (Opcional) Função para monitorar o progresso do carregamento
        console.log(`Carregando modelo: ${(progresso.loaded / progresso.total * 100).toFixed(2)}%`);
    },
    
    } // GRUPO PRINCIPAL DO NPC (MONI MONI)
const moniMoni = new THREE.Group();

// 1. Corpo/Jaqueta (Um cubo achatado verticalmente)
const corpoGeo = new THREE.BoxGeometry(1, 1.4, 0.6);
const corpoMat = new THREE.MeshLambertMaterial({ color: 0xcc0000 }); // Vermelho da jaqueta "Thriller"
const jaqueta = new THREE.Mesh(corpoGeo, corpoMat);
jaqueta.position.y = 0.7; // Levanta o corpo para ficar acima do chão
moniMoni.add(jaqueta);

// 2. Cabeça (Uma esfera simples)
const cabecaGeo = new THREE.SphereGeometry(0.4, 32, 32);
const cabecaMat = new THREE.MeshLambertMaterial({ color: 0xffdbac }); // Cor de pele (ajustável)
const cabeca = new THREE.Mesh(cabecaGeo, cabecaMat);
cabeca.position.y = 1.7; // Coloca a cabeça acima do corpo
moniMoni.add(cabeca);

// 3. Pernas (Duas caixas finas)
const pernaGeo = new THREE.BoxGeometry(0.3, 1, 0.3);
const pernaMat = new THREE.MeshLambertMaterial({ color: 0x000000 }); // Calças pretas

const pernaEsq = new THREE.Mesh(pernaGeo, pernaMat);
pernaEsq.position.set(-0.25, 0.1, 0); // Posiciona a perna esquerda

const pernaDir = pernaEsq.clone(); // Cria a perna direita a partir da esquerda
pernaDir.position.x = 0.25; // Move a perna direita para o lado oposto

moniMoni.add(pernaEsq, pernaDir);

// 4. Chapéu (Opcional - Adiciona um cone para o estilo)
const chapeuGeo = new THREE.ConeGeometry(0.4, 0.4, 32);
const chapeuMat = new THREE.MeshLambertMaterial({ color: 0x000000 }); // Chapéu preto
const chapeu = new THREE.Mesh(chapeuGeo, chapeuMat);
chapeu.position.y = 2.1; // Coloca o chapéu em cima da cabeça
moniMoni.add(chapeu);

// Posiciona o NPC Moni Moni no cenário
moniMoni.position.set(-2, 1, 2); // Ajuste a posição (x, y, z) como desejar
cena.add(moniMoni);

// 5. Exemplo de Comportamento (Girar) - Coloque isso dentro do seu loop de animação
function animarMoniMoni() {
    moniMoni.rotation.y += 0.01; // Faz o NPC girar lentamente
} // 1. CARREGADOR DE TEXTURAS
const carregadorTextura = new THREE.TextureLoader();

// Para manter o estilo pixelado sem borrar as imagens:
function ajustarPixelArt(textura) {
  textura.magFilter = THREE.NearestFilter;
  textura.minFilter = THREE.NearestFilter;
  return textura;
}

// 2. CARREGAR AS IMAGENS DAS FACES DO BLOCO
// Dica: Substitua pelos links das suas imagens ou arquivos locais
const texLado = ajustarPixelArt(carregadorTextura.load('grass_block_side.png'));
const texTopo = ajustarPixelArt(carregadorTextura.load('grass_block_top.png'));
const texBaixo = ajustarPixelArt(carregadorTextura.load('dirt.png'));

// 3. MATERIAIS DAS 6 FACES DO CUBO
// A ordem é: [Direita, Esquerda, Cima, Baixo, Frente, Trás]
const materiaisBloco = [
  new THREE.MeshLambertMaterial({ map: texLado }),  // Direita
  new THREE.MeshLambertMaterial({ map: texLado }),  // Esquerda
  new THREE.MeshLambertMaterial({ map: texTopo }),  // Cima (Grama verde)
  new THREE.MeshLambertMaterial({ map: texBaixo }), // Baixo (Terra)
  new THREE.MeshLambertMaterial({ map: texLado }),  // Frente
  new THREE.MeshLambertMaterial({ map: texLado })   // Trás
];

// 4. CRIAR O CHÃO FEITO DE BLOCOS DE GRAMA
const geometriaBloco = new THREE.BoxGeometry(1, 1, 1);

for (let x = -10; x <= 10; x++) {
  for (let z = -10; z <= 10; z++) {
    // Passamos a lista com os 6 materiais para a Mesh
    const blocoGrama = new THREE.Mesh(geometriaBloco, materiaisBloco);
    blocoGrama.position.set(x, 0, z);
    cena.add(blocoGrama);
  }
}  // Para salvar os dados
const dadosDoJogo = { pontuacao: 100, fase: 2 };
localStorage.setItem('saveGame', JSON.stringify(dadosDoJogo));

// Para carregar os dados
const saveSalvo = localStorage.getItem('saveGame');
const dadosCarregados = JSON.parse(saveSalvo);

E para permitir que o jogador baixe— <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <style>
    #toolbar { margin-bottom: 10px; }
    .slot {
      padding: 8px 12px;
      margin-right: 5px;
      cursor: pointer;
      border: 2px solid #ccc;
    }
    .slot.selected { border-color: red; font-weight: bold; }
    #grid {
      display: grid;
      grid-template-columns: repeat(10, 40px);
      gap: 2px;
      background-color: #333;
      width: fit-content;
    }
    .cell {
      width: 40px;
      height: 40px;
      background-color: #87CEEB; /* Ar/Céu por padrão */
      cursor: pointer;
    }
    .cell.terra { background-color: #8B4513; }
    .cell.grama { background-color: #228B22; }
    .cell.pedra { background-color: #808080; }
  </style>
</head>
<body>

  <!-- Barra de Inventário Sandbox -->
  <div id="toolbar">
    <button class="slot selected" onclick="selectBlock('grama', this)">Grama</button>
    <button class="slot" onclick="selectBlock('terra', this)">Terra</button>
    <button class="slot" onclick="selectBlock('pedra', this)">Pedra</button>
    <button class="slot" onclick="selectBlock('air', this)">Remover (Ar)</button>
  </div>

  <!-- Grade do Jogo -->
  <div id="grid"></div>

  <script src="game.js"></script>
</body>
</html>  // Configuração do Grid
const GRID_SIZE = 10;
let currentBlock = 'grama'; // Bloco selecionado por padrão

const gridElement = document.getElementById('grid');

// 1. Função para selecionar o bloco na barra Sandbox
function selectBlock(type, element) {
  currentBlock = type;
  document.querySelectorAll('.slot').forEach(btn => btn.classList.remove('selected'));
  element.classList.add('selected');
}

// 2. Criação do cenário inicial
function initGrid() {
  gridElement.innerHTML = '';
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // Clique com o botão esquerdo do mouse para colocar/remover blocos
    cell.addEventListener('click', () => placeBlock(cell));

    // Prevenir menu de contexto e permitir remover com botão direito
    cell.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      removeBlock(cell);
    });

    gridElement.appendChild(cell);
  }
}

// 3. Colocar o bloco selecionado
function placeBlock(cell) {
  // Limpa classes anteriores de blocos
  cell.className = 'cell';
  
  if (currentBlock !== 'air') {
    cell.classList.add(currentBlock);
  }
}

// 4. Destruir bloco (voltar para ar)
function removeBlock(cell) {
  cell.className = 'cell';
}

// Inicializa o mundo
initGrid(); import * as THREE from 'three';

// 1. Configuração da cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Criar o Personagem (Substitua depois pelo seu modelo .gltf / .fbx)
const playerGroup = new THREE.Group();

// Corpo
const bodyMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 1.2, 0.4),
    new THREE.MeshBasicMaterial({ color: 0x3366ff })
);
bodyMesh.position.y = 1.2;
playerGroup.add(bodyMesh);

// Perna Esquerda e Direita (Grupos para pivotar no quadril)
const legLeftGroup = new THREE.Group();
legLeftGroup.position.set(-0.25, 0.6, 0);
const legLeftMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 0.6, 0.3),
    new THREE.MeshBasicMaterial({ color: 0x111111 })
);
legLeftMesh.position.y = -0.3; // Desloca a malha para pivotar do topo
legLeftGroup.add(legLeftMesh);
playerGroup.add(legLeftGroup);

const legRightGroup = legLeftGroup.clone();
legRightGroup.position.set(0.25, 0.6, 0);
playerGroup.add(legRightGroup);

// Braço Esquerdo e Direito (Grupos para pivotar no ombro)
const armLeftGroup = new THREE.Group();
armLeftGroup.position.set(-0.55, 1.7, 0);
const armLeftMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.6, 0.25),
    new THREE.MeshBasicMaterial({ color: 0xffcc99 })
);
armLeftMesh.position.y = -0.3;
armLeftGroup.add(armLeftMesh);
playerGroup.add(armLeftGroup);

const armRightGroup = armLeftGroup.clone();
armRightGroup.position.set(0.55, 1.7, 0);
playerGroup.add(armRightGroup);

scene.add(playerGroup);
camera.position.set(0, 2, 5);

// 3. Controle de Teclas
const keys = {};
window.addEventListener('keydown', (e) => keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup', (e) => keys[e.key.toLowerCase()] = false);

// 4. Loop de Animação e Movimentação
const speed = 0.05;
let walkTime = 0;

function animate() {
    requestAnimationFrame(animate);

    let isMoving = false;
    let moveX = 0;
    let moveZ = 0;

    if (keys['w'] || keys['arrowup']) { moveZ -= 1; isMoving = true; }
    if (keys['s'] || keys['arrowdown']) { moveZ += 1; isMoving = true; }
    if (keys['a'] || keys['arrowleft']) { moveX -= 1; isMoving = true; }
    if (keys['d'] || keys['arrowright']) { moveX += 1; isMoving = true; }

    if (isMoving) {
        // Mover o grupo do jogador
        playerGroup.position.x += moveX * speed;
        playerGroup.position.z += moveZ * speed;

        // Rotacionar o personagem para a direção do movimento
        const angle = Math.atan2(moveX, moveZ);
        playerGroup.rotation.y = angle;

        // Animação procedurar "Estilo Steve (Cave Game)"
        walkTime += 0.15; // Velocidade do ciclo
        const swingAngle = Math.sin(walkTime) * 0.8; // Amplitude exagerada (~45º)

        // Perna e braço opostos balançam juntos
        legLeftGroup.rotation.x = swingAngle;
        legRightGroup.rotation.x = -swingAngle;
        armLeftGroup.rotation.x = -swingAngle;
        armRightGroup.rotation.x = swingAngle;
    } else {
        // Resetar postura ao parar
        legLeftGroup.rotation.x = 0;
        legRightGroup.rotation.x = 0;
        armLeftGroup.rotation.x = 0;
        armRightGroup.rotation.x = 0;
    }

    renderer.render(scene, camera);
}

animate(); import * as THREE from 'three';

// Função pra criar 1 bloco
function criarBloco(x, y, z, cor = 0x00ff00) {
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mat = new THREE.MeshLambertMaterial({ color: cor });
  const bloco = new THREE.Mesh(geo, mat);
  bloco.position.set(x, y, z);
  scene.add(bloco);
}

// Gera um chão 10x10
for(let x = 0; x < 10; x++){
  for(let z = 0; z < 10; z++){
    criarBloco(x, 0, z, 0x8B4513); // terra
  }
} git add .
git commit -m "Atualizando o código do jogo"
git push [19:06, 25/08/2026] João Francisco: <!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>Moni Moni - Realista 3D</title>
<style>html,body{margin:0;height:100%;background:#101010;overflow:hidden} canvas{display:block}</style>
<script type="importmap">
{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}
</script>
</head>
<body>
<script type="module">
import * as THREE from 'three';

// MONI MONI - PERSONAGEM REALISTA
const scene=new THREE.Scene(); scene.background=new THREE.Color(0x101010); scene.fog=new THREE.Fog(0x101010, 4, 10);
const camera=new THREE.PerspectiveCamera(35,innerWidth/innerHeight,0.1,100); camera.position.set(0,1.1,3.2);
const renderer=new THREE.We…
[19:13, 25/08/2026] João Francisco: // CENÁRIO NO ESTILO DA SUA IMAGEM

// 1. Material base - tudo toon com contorno
function bloco(x, y, z, cor, temGrama = false) {
  const geo = new THREE.BoxGeometry(1,1,1);
  // Deforma um pouco pra ficar torto igual seu desenho
  geo.translate((Math.random()-0.5)*0.1, (Math.random()-0.5)*0.1, 0);

  const mat = new THREE.MeshToonMaterial({ color: cor });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x,y,z);

  // Contorno preto
  const outline = new THREE.Mesh(
    geo, 
    new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide })
  );
  outline.scale.set(1.08, 1.08, 1.08);
  mesh.add(outline);

  // Grama verde em cima
  if(temGrama) {
    const grama = new THREE.Mesh(
      new THREE.BoxGeometry(1.02, 0.2, 1.02),
      new TH…
[19:15, 25/08/2026] João Francisco: git add .
git commit -m "Atualizando o código do jogo"
git push
[19:21, 25/08/2026] João Francisco: <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Alahama - Cenário 3D</title>
<style>body{margin:0;overflow:hidden} canvas{display:block}</style>
<script type="importmap">
{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}
</script>
</head>
<body>
<script type="module">
import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00e5ff); // seu céu ciano
const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 100);
camera.position.set(0,3,8);
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
scene.add(new THREE.AmbientLight(0xffffff, 0.9)… <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Alahama - Cenário 3D</title>
<style>body{margin:0;overflow:hidden} canvas{display:block}</style>
<script type="importmap">
{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}
</script>
</head>
<body>
<script type="module">
import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00e5ff); // seu céu ciano
const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 100);
camera.position.set(0,3,8);
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
scene.add(new THREE.AmbientLight(0xffffff, 0.9));
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,10,5);
scene.add(light);

// FUNÇÃO PRA CRIAR BLOCO COM CONTORNO PRETO
function criarBloco(x,y,z, cor, comGrama=false){
  const geo = new THREE.BoxGeometry(1,1,1);
  // deixa torto igual seu desenho
  const pos = geo.attributes.position;
  for(let i=0;i<pos.count;i++){
    pos.setX(i, pos.getX(i)+(Math.random()-0.5)*0.08);
    pos.setY(i, pos.getY(i)+(Math.random()-0.5)*0.08);
  }
  const mat = new THREE.MeshToonMaterial({color: cor});
  const bloco = new THREE.Mesh(geo, mat);
  bloco.position.set(x,y,z);
  // contorno preto grosso
  const contorno = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({color:0x000000, side:THREE.BackSide}));
  contorno.scale.set(1.15,1.15,1.15);
  bloco.add(contorno);
  if(comGrama){
    const grama = new THREE.Mesh(new THREE.BoxGeometry(1,0.25,1), new THREE.MeshToonMaterial({color:0x00ff00}));
    grama.position.y = 0.6;
    const contG = new THREE.Mesh(grama.geometry, new THREE.MeshBasicMaterial({color:0x000000, side:THREE.BackSide}));
    contG.scale.set(1.1,1.5,1.1);
    grama.add(contG);
    bloco.add(grama);
  }
  scene.add(bloco);
  return bloco;
}

// CENÁRIO DA SUA IMAGEM
// chão marrom + verde
for(let x=-8;x<=8;x++){
 for(let z=-3;z<=2;z++){
  if(Math.random()>0.1) criarBloco(x, -2, z, 0x8B4513, true);
 }
}
// plataforma cinza
for(let x=-6;x<=6;x++) criarBloco(x, -0.3, 0, 0x6e6e6e);
// blocos marrons bagunçados de cima
criarBloco(-5,0.8,0.5,0x8B4513); criarBloco(-3,0.5,0,0x8B4513);
criarBloco(-1,0.7,0,0x8B4513); criarBloco(0,0.4,0.5,0x8B4513);
criarBloco(2,0.9,0,0x8B4513); criarBloco(3.5,0.3,0,0x8B4513);
criarBloco(5,1.2,0.3,0x8B4513);

// MONSTRO DE 1 OLHO AO FUNDO
const monstro = new THREE.Mesh(new THREE.SphereGeometry(3,16,16), new THREE.MeshToonMaterial({color:0xffffff}));
monstro.position.set(0,5,-8); scene.add(monstro);
const contM = new THREE.Mesh(monstro.geometry, new THREE.MeshBasicMaterial({color:0x000000, side:THREE.BackSide}));
contM.scale.set(1.1,1.1,1.1); monstro.add(contM);
const olhoVermelho = new THREE.Mesh(new THREE.SphereGeometry(0.8,16,16), new THREE.MeshBasicMaterial({color:0xcc0000}));
olhoVermelho.position.set(0,5,-5.5); scene.add(olhoVermelho);
const pupila = new THREE.Mesh(new THREE.SphereGeometry(0.3,16,16), new THREE.MeshBasicMaterial({color:0x000000}));
pupila.position.set(0,5,-5); scene.add(pupila);

// ALAHAMA - PROTAGONISTA VESGO
const alahama = new THREE.Group();
const corpoGeo = new THREE.SphereGeometry(0.6,16,16); corpoGeo.scale(1.1,1,0.8);
const corpo = new THREE.Mesh(corpoGeo, new THREE.MeshToonMaterial({color:0x8a5cff})); alahama.add(corpo);
const contA = new THREE.Mesh(corpoGeo, new THREE.MeshBasicMaterial({color:0x000000, side:THREE.BackSide}));
contA.scale.set(1.2,1.2,1.2); alahama.add(contA);
const eyeGeo = new THREE.CapsuleGeometry(0.05,0.18,4,8);
const eyeMat = new THREE.MeshBasicMaterial({
