<!DOCTYPE html>
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

// OLHOS E ANIMAÇÃO
const eyeMat = new THREE.MeshBasicMaterial({color: 0xffffff});
const eyeLeft = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), eyeMat);
eyeLeft.position.set(-0.2, 0.1, 0.5);
alahama.add(eyeLeft);

const eyeRight = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), eyeMat);
eyeRight.position.set(0.2, 0.1, 0.5);
alahama.add(eyeRight);

alahama.position.set(0, 0.8, 1);
scene.add(alahama);

function animate() {
  requestAnimationFrame(animate); import { useState, useEffect } from "react"

export default function Alahama() {
  const [pos, setPos] = useState({ x: 100, y: 100 })
  const [dir, setDir] = useState(1) // 1 direita, -1 esquerda pra fazer o moonwalk

  useEffect(() => {
    const keys = {}
    const handleDown = (e) => keys[e.key.toLowerCase()] = true
    const handleUp = (e) => keys[e.key.toLowerCase()] = false
    
    window.addEventListener("keydown", handleDown)
    window.addEventListener("keyup", handleUp)    setPos(p => {
        let nx = p.x, ny = p.y        if (keys["s"] || keys["arrowdown"]) ny += 5)   } <!DOCTYPE html>
<html>
<head>
<style>
  body { background: #111; overflow: hidden; margin:0 }
  #alahama {
    position: absolute; left:100px; top:100px;
    width: 70px; height: 70px;
    background: #c084fc; /* lilás */
    border-radius: 50%;
    display:flex; gap:6px;
    align-items:center; justify-content:center;
    transition: transform 0.3s; /* moonwalk suave */
  }
  .olho { width:14px; height:14px; background:white; border-radius:50% }
</style>
</head>
<body>
  <div id="alahama">
    <div class="olho"></div><div class="olho"></div>
  </div>

<script>
  let x=100, y=100, dir=1
  const al = document.getElementById('alahama')
  const keys = {}
  
  window.onkeydown = e => keys[e.key.toLowerCase()] = true
  window.onkeyup = e => keys[e.key.toLowerCase()] = false

  function loop(){
    if(keys['a'] || keys['arrowleft']){ x-=4; dir=-1 }
    if(keys['d'] || keys['arrowright']){ x+=4; dir=1 }
    if(keys['w'] || keys['arrowup']) y-=4
    if(keys['s'] || keys['arrowdown']) y+=4
    
    al.style.left = x+'px'
    al.style.top = y+'px'
    al.style.transform = `scaleX(${dir})`
    requestAnimationFrame(loop)
  }
  loop()
</script>
</body>
</html>
  }, [])

  return (
    <div style={{
      position: "absolute",
      left: pos.x, top: pos.y,
      width: 60, height: 60,
      background: "#d8a0ff", // lilás
      borderRadius: "50%",
      transform: `scaleX(${dir})`,
      transition: "transform 0.2s", // isso deixa o moonwalk suave
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 30
    }}>
      {/* olhos brancos */}
      <div style={{width:12, height:12, background:"white", borderRadius:"50%", margin: 2}} />
      <div style={{width:12, height:12, background:"white", borderRadius:"50%", margin: 2}} />
    </div>
  )
}
  renderer.render(scene, camera);
}
animate();
</script> <div id="zombie-mj" style="
  position:absolute; left:400px; top:200px;
  width:45px; height:90px;
  transition: left 0.1s linear, top 0.1s linear;
">
  <!-- corpo humano -->
  <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center">
    <!-- cabeça - tom de pele MJ Invincible -->
    <div style="width:32px; height:32px; background:#e8c4a8; border-radius:50%; position:relative">
      <div style="position:absolute; left:6px; top:10px; width:5px; height:5px; background:black; border-radius:50%"></div>
      <div style="position:absolute; right:6px; top:10px; width:5px; height:5px; background:black; border-radius:50%"></div>
    </div>
    <!-- camisa jeans azul -->
    <div style="width:40px; height:38px; background:#3b82f6; border:1px solid #1e3a8a; margin-top:-4px"></div>
    <!-- calça azul -->
    <div style="width:36px; height:25px; background:#1e40af; display:flex; gap:2px">
      <div style="flex:1; background:#1e40af"></div><div style="flex:1; background:#1e40af"></div>
    </div>
    <!-- chuteira nike -->
    <div style="display:flex; gap:4px; margin-top:2px">
      <div style="width:18px; height:10px; background:white; border-radius:0 0 6px 6px; border-bottom:3px solid black">✓</div>
      <div style="width:18px; height:10px; background:white; border-radius:0 0 6px 6px; border-bottom:3px solid black">✓</div>
    </div>
  </div>
</div> // --- ZOMBIE MJ HOSTIL ---
let zx = 400, zy = 200
const zombie = document.getElementById('zombie-mj')
let vidaAlahama = 100

function zombieLoop(){
  // persegue o Alahama (x,y são do Alahama)
  if(x > zx) zx += 1.2
  if(x < zx) zx -= 1.2
  if(y > zy) zy += 1.2
  if(y < zy) zy -= 1.2

  zombie.style.left = zx + 'px'
  zombie.style.top = zy + 'px'

  // moonwalk suave quando vira
  zombie.style.transform = `scaleX(${x > zx ? 1 : -1})`

  // dano se encostar
  let dist = Math.hypot(x - zx, y - zy)
  if(dist < 50){
    vidaAlahama -= 0.5
    zombie.style.filter = "brightness(1.5)" // fica bravo
  } else {
    zombie.style.filter = "brightness(1)"
  }

  // se morrer
  if(vidaAlahama <= 0){
    alert("O Zombie MJ te pegou!")
    vidaAlahama = 100; x=100; y=100
  }

  requestAnimationFrame(zombieLoop)
}
zombieLoop()
</body>// --- CRIAÇÃO DOS ITENS 3D NA CENA THREE.JS ---

// 1. Item: Sabão 3D (Bloco de Sabão)
const sabaoGeometry = new THREE.BoxGeometry(15, 8, 25);
const sabaoMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.8 }); // Azul claro ensaboado
const sabaoMesh = new THREE.Mesh(sabaoGeometry, sabaoMaterial);
sabaoMesh.position.set(200, 10, 150); // Posição (X, Y, Z) na cena 3D
scene.add(sabaoMesh);

// 2. Item: Pano/Tira Sabão 3D (Cilindro ou Bloco Amarelo)
const panoGeometry = new THREE.BoxGeometry(18, 5, 18);
const panoMaterial = new THREE.MeshBasicMaterial({ color: 0xffeb3b }); // Amarelo
const panoMesh = new THREE.Mesh(panoGeometry, panoMaterial);
panoMesh.position.set(300, 10, 150); // Posição (X, Y, Z) na cena 3D
scene.add(panoMesh);


// --- ESTADOS DO ALAHAMA ---
let alahamaEnsaboado = false;


// --- LÓGICA DE INTERAÇÃO E COLISÃO (Coloque dentro da sua função animate/loop) ---

function checarInteracaoItens() {
  // Posição 3D do Alahama (ajuste conforme o seu objeto 3D do Alahama)
  // Exemplo assumindo alahamaMesh:
  if (typeof alahamaMesh !== 'undefined') {
    
    // Animação simples de rotação para os itens 3D destacarem na cena
    sabaoMesh.rotation.y += 0.02;
    panoMesh.rotation.y += 0.02;

    // Distância até o Sabão
    let distSabao = alahamaMesh.position.distanceTo(sabaoMesh.position);
    if (distSabao < 30 && !alahamaEnsaboado) {
      alahamaEnsaboado = true;
      // Aplica efeito visual de espuma/sabão no material do Alahama
      alahamaMesh.material.color.setHex(0xe0ffff); // Altera tom para esbranquiçado/bolhas
      console.log("Alahama ensaboado e limpo!");
    }

    // Distância até o Pano (Tira Sabão)
    let distPano = alahamaMesh.position.distanceTo(panoMesh.position);
    if (distPano < 30 && alahamaEnsaboado) {
      alahamaEnsaboado = false;
      // Restaura a cor azul original do Kirby Alahama
      alahamaMesh.material.color.setHex(0xd8a0ff); // Ou a cor original (ex: azul/lilás)
      console.log("Sabão removido do Alahama!");
    }
  }
}

// Chame checarInteracaoItens() dentro da sua função principal animate():
/*
function animate() {
  requestAnimationFrame(animate);
  
  checarInteracaoItens(); // Executa a checagem a cada frame
  
  renderer.render(scene, camera);
 // --- CRIAÇÃO DO NOOB DO ROBLOX (PACÍFICO) ---

// Grupo principal do Noob para mover tudo junto
const noobGroup = new THREE.Group();

// Materiais (Cores do Noob Personalizado)
const peleMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });   // Amarelo clássico
const camisaMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Camisa Vermelha
const calcaMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 });  // Calça Verde

// 1. Cabeça (Amarela)
const cabecaGeo = new THREE.BoxGeometry(10, 10, 10);
const cabecaMesh = new THREE.Mesh(cabecaGeo, peleMaterial);
cabecaMesh.position.set(0, 22.5, 0);
noobGroup.add(cabecaMesh);

// 2. Tronco / Camisa (Vermelha)
const troncoGeo = new THREE.BoxGeometry(10, 10, 5);
const troncoMesh = new THREE.Mesh(troncoGeo, camisaMaterial);
troncoMesh.position.set(0, 12.5, 0);
noobGroup.add(troncoMesh);

// 3. Braço Esquerdo (Amarelo)
const bracoEsqGeo = new THREE.BoxGeometry(5, 10, 5);
const bracoEsqMesh = new THREE.Mesh(bracoEsqGeo, peleMaterial);
bracoEsqMesh.position.set(-7.5, 12.5, 0);
noobGroup.add(bracoEsqMesh);

// 4. Braço Direito (Amarelo)
const bracoDirGeo = new THREE.BoxGeometry(5, 10, 5);
const bracoDirMesh = new THREE.Mesh(bracoDirGeo, peleMaterial);
bracoDirMesh.position.set(7.5, 12.5, 0);
noobGroup.add(bracoDirMesh);

// 5. Perna Esquerda (Verde)
const pernaEsqGeo = new THREE.BoxGeometry(5, 10, 5);
const pernaEsqMesh = new THREE.Mesh(pernaEsqGeo, calcaMaterial);
pernaEsqMesh.position.set(-2.5, 2.5, 0);
noobGroup.add(pernaEsqMesh);

// 6. Perna // --- CRIAÇÃO DO NOOB DO ROBLOX (PACÍFICO) ---

// Grupo principal do Noob para mover tudo junto
const noobGroup = new THREE.Group();

// Materiais (Cores do Noob Personalizado)
const peleMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });   // Amarelo clássico
const camisaMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Camisa Vermelha
const calcaMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 });  // Calça Verde

// 1. Cabeça (Amarela)
const cabecaGeo = new THREE.BoxGeometry(10, 10, 10);
const cabecaMesh = new THREE.Mesh(cabecaGeo, peleMaterial);
cabecaMesh.position.set(0, 22.5, 0);
noobGroup.add(cabecaMesh);

// 2. Tronco / Camisa (Vermelha)
const troncoGeo = new THREE.BoxGeometry(10, 10, 5);
const troncoMesh = new THREE.Mesh(troncoGeo, camisaMaterial);
troncoMesh.position.set(0, 12.5, 0);
noobGroup.add(troncoMesh);

// 3. Braço Esquerdo (Amarelo)
const bracoEsqGeo = new THREE.BoxGeometry(5, 10, 5);
const bracoEsqMesh = new THREE.Mesh(bracoEsqGeo, peleMaterial);
bracoEsqMesh.position.set(-7.5, 12.5, 0);
noobGroup.add(bracoEsqMesh);

// 4. Braço Direito (Amarelo)
const bracoDirGeo = new THREE.BoxGeometry(5, 10, 5);
const bracoDirMesh = new THREE.Mesh(bracoDirGeo, peleMaterial);
bracoDirMesh.position.set(7.5, 12.5, 0);
noobGroup.add(bracoDirMesh);

// 5. Perna Esquerda (Verde)
const pernaEsqGeo = new THREE.BoxGeometry(5, 10, 5);
const pernaEsqMesh = new THREE.Mesh(pernaEsqGeo, calcaMaterial);
pernaEsqMesh.position.set(-2.5, 2.5, 0);
noobGroup.add(pernaEsqMesh);

// 6. Perna Direita (Verde)
const pernaDirGeo = new THREE.BoxGeometry(5, 10, 5);
const pernaDirMesh = new THREE.Mesh(pernaDirGeo, calcaMaterial);
pernaDirMesh.position.set(2.5, 2.5, 0);
noobGroup.add(pernaDirMesh);

// Posição do Noob no mundo 3D (Ajuste onde quiser colocar na cena)
noobGroup.position.set(100, 0, 100);

// Adiciona o Noob Pacífico na cena
scene.add(noobGroup); // --- SISTEMA SANDBOX (MINECRAFT) ---

// 1. Raycaster para detectar cliques nos objetos 3D
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Geometria e Material para os blocos construtíveis
const blocoGeo = new THREE.BoxGeometry(10, 10, 10); // Tamanho padrão do bloco
const blocoMat = new THREE.MeshBasicMaterial({ color: 0x8b5a2b }); // Cor de terra/madeira

// Lista de objetos que podem ser interagidos (adicione seus blocos aqui)
const blocosInterativos = [];

// Função auxiliar para criar e registrar um bloco Sandbox
function criarBlocoSandbox(x, y, z) {
  const novoBloco = new THREE.Mesh(blocoGeo, blocoMat);
  novoBloco.position.set(x, y, z);
  scene.add(novoBloco);
  blocosInterativos.push(novoBloco);
  return novoBloco;
}

// 2. Evento de Clique para Quebrar e Colocar Blocos
window.addEventListener('pointerdown', (event) => {
  // Posição do mouse normalizada (-1 a +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersecoes = raycaster.intersectObjects(blocosInterativos);

  if (intersecoes.length > 0) {
    const hit = intersecoes[0];

    // CLICK ESQUERDO (Botão 0): Quebrar Bloco
    if (event.button === 0) {
      scene.remove(hit.object);
      const index = blocosInterativos.indexOf(hit.object);
      if (index > -1) blocosInterativos.splice(index, 1);
    } 
    // CLICK DIREITO (Botão 2): Colocar Bloco Adjacente
    else if (event.button === 2) {
      // Posição do novo bloco baseada na face (normal) atingida
      const novaPos = hit.object.position.clone().add(hit.face.normal.clone().multiplyScalar(10));
      criarBlocoSandbox(novaPos.x, novaPos.y, novaPos.z);
    }
  }
});

// Desativa o menu de contexto padrão do botão direito para não atrapalhar o jogo
window.addEventListener('contextmenu', (e) => e.preventDefault());

// --- EXEMPLO: Criar alguns blocos iniciais para testar ---
criarBlocoSandbox(0, 5, -50);
criarBlocoSandbox(10, 5, -50);
criarBlocoSandbox(20, 5, -50); // --- CRIAÇÃO DO CREEPER AZUL 3D ---

// Grupo principal do Creeper para mover tudo junto
const creeperGroup = new THREE.Group();

// Material Azul do Creeper
const creeperMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Azul Puro

// 1. Cabeça do Creeper (Cubo)
const creeperCabecaGeo = new THREE.BoxGeometry(10, 10, 10);
const creeperCabecaMesh = new THREE.Mesh(creeperCabecaGeo, creeperMaterial);
creeperCabecaMesh.position.set(0, 20, 0); // Posição Y elevada
creeperGroup.add(creeperCabecaMesh);

// 2. Corpo do Creeper (Cubo alongado)
const creeperCorpoGeo = new THREE.BoxGeometry(8, 12, 4);
const creeperCorpoMesh = new THREE.Mesh(creeperCorpoGeo, creeperMaterial);
creeperCorpoMesh.position.set(0, 10, 0); // Posição Y intermediária
creeperGroup.add(creeperCorpoMesh);

// 3. Pernas do Creeper (Quatro cubos menores)
const creeperPernaGeo = new THREE.BoxGeometry(4, 6, 4);

// Perna Traseira Esquerda
const pernaTE = new THREE.Mesh(creeperPernaGeo, creeperMaterial);
pernaTE.position.set(-2, 3, -2);
creeperGroup.add(pernaTE);

// Perna Traseira Direita
const pernaTD = new THREE.Mesh(creeperPernaGeo, creeperMaterial);
pernaTD.position.set(2, 3, -2);
creeperGroup.add(pernaTD);

// Perna Dianteira Esquerda
const pernaDE = new THREE.Mesh(creeperPernaGeo, creeperMaterial);
pernaDE.position.set(-2, 3, 2);
creeperGroup.add(pernaDE);

// Perna Dianteira Direita
const pernaDD = new THREE.Mesh(creeperPernaGeo, creeperMaterial);
pernaDD.position.set(2, 3, 2);
creeperGroup.add(pernaDD);

// Posição do Creeper no mundo 3D (Ajuste onde quiser colocar na cena)
creeperGroup.position.set(-100, 0, 100); 

// Adiciona o Creeper Azul na cena
scene.add(creeperGroup);
</html>
