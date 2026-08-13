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

E para permitir que o jogador baixe—