<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Meu Scratch Roxinho</title>
<style>
  body { display: flex; font-family: sans-serif; background: #f0f0f0; margin:0 }
  #palco { width: 600px; height: 400px; background: white; border: 4px solid black; position: relative; overflow:hidden }
  #personagem { width: 80px; position: absolute; left: 50px; top: 150px; transition: all 0.3s; }
  #blocos-area { display: flex; gap: 20px; padding: 20px }
  .toolbox { width: 140px; background: #ff6f00; padding: 10px; border: 3px solid black; }
  .bloco { background: white; border: 2px solid black; border-radius: 12px; padding: 8px; margin: 8px 0; cursor: grab; font-weight: bold; user-select: none; }
  .bloco[data-tipo="mova"] { border-left: 8px solid #8b5cf6; }
  .bloco[data-tipo="gira"] { border-left: 8px solid #3b82f6; }
  .bloco[data-tipo="repete"] { border-left: 8px solid #f59e0b; }
  #programa { width: 200px; min-height: 300px; background: white; border: 3px dashed black; padding:10px }
</style>
</head>
<body>

<div id="blocos-area">
  <div class="toolbox">
    <h3>BLOCOS</h3>
    <div class="bloco" draggable="true" data-tipo="mova" data-valor="50">MOVA 50</div>
    <div class="bloco" draggable="true" data-tipo="mova" data-valor="10">MOVA 10</div>
    <div class="bloco" draggable="true" data-tipo="gira" data-valor="90">GIRA 90°</div>
    <div class="bloco" draggable="true" data-tipo="espera" data-valor="500">ESPERA</div>
    <button onclick="rodar()" style="width:100%; padding:10px; background:#10b981; font-size:18px; margin-top:20px">▶️ RODAR</button>
    <button onclick="location.reload()" style="width:100%">Limpar</button>
  </div>

  <div>
    <h3>SEU PROGRAMA (arraste pra cá)</h3>
    <div id="programa"></div>
  </div>

  <div id="palco">
    <img id="personagem" src="personagem.png" alt="roxo">
  </div>
</div>

<script>
  const personagemEl = document.getElementById('personagem');
  const programaEl = document.getElementById('programa');
  let estado = { x: 50, y: 150, ang: 0 };

  // Drag and drop
  document.querySelectorAll('.bloco').forEach(b => {
    b.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', b.outerHTML);
    });
  });
  programaEl.addEventListener('dragover', e => e.preventDefault());
  programaEl.addEventListener('drop', e => {
    e.preventDefault();
    const html = e.dataTransfer.getData('text/plain');
    const temp = document.createElement('div');
    temp.innerHTML = html;
    programaEl.appendChild(temp.firstChild);
  });

  function atualizarPersonagem() {
    personagemEl.style.left = estado.x + 'px';
    personagemEl.style.top = estado.y + 'px';
    personagemEl.style.transform = rotate(${estado.ang}deg);
  }

  async function rodar() {
    const blocos = programaEl.querySelectorAll('.bloco');
    for (let b of blocos) {
      const tipo = b.dataset.tipo;
      const valor = parseInt(b.dataset.valor);
      b.style.background = 'yellow';
      
      if (tipo === 'mova') {
        estado.x += valor;
      } else if (tipo === 'gira') {
        estado.ang += valor;
      } else if (tipo === 'espera') {
        await new Promise(r => setTimeout(r, valor));
      }
      atualizarPersonagem();
      await new Promise(r => setTimeout(r, 400));
      b.style.background = 'white';
    }
  }
</script>
</body>
</html>
