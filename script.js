const pecas = document.querySelectorAll('.peca');
const casas = document.querySelectorAll('.casa');
const mensagem = document.getElementById('mensagem');
const listaConquistas = document.getElementById('listaConquistas');
let conquistas = [];
let tempoRestante = 300;
let cronometroInterval;

// Drag and Drop
pecas.forEach(peca => {
  peca.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.innerText);
    e.target.classList.add('movendo');
  });
});

casas.forEach(casa => {
  casa.addEventListener('dragover', e => e.preventDefault());
  casa.addEventListener('drop', e => {
    e.preventDefault();
    const nome = e.dataTransfer.getData('text/plain');
    const nova = document.createElement("div");
    nova.className = "peca";
    nova.innerText = nome;
    e.target.appendChild(nova);
    desbloquearConquista("Primeira Peça Correta");
  });
});

// Cronômetro
function iniciarCronometro() {
  const display = document.getElementById("cronometro");
  cronometroInterval = setInterval(() => {
    tempoRestante--;
    const m = Math.floor(tempoRestante / 60);
    const s = tempoRestante % 60;
    display.innerText = `⏱️ Tempo: ${m}:${s.toString().padStart(2, '0')}`;

    if (tempoRestante <= 0) {
      clearInterval(cronometroInterval);
      alert("⏰ O tempo acabou! Tente novamente.");
    }
  }, 1000);
}

window.onload = iniciarCronometro;

// Conquistas
function desbloquearConquista(nome) {
  if (!conquistas.includes(nome)) {
    conquistas.push(nome);
    const li = document.createElement("li");
    li.innerText = `🏅 ${nome}`;
    listaConquistas.appendChild(li);
    alert(`🏆 Conquista desbloqueada: ${nome}`);
  }
}

// Simulação de verificação (exemplo)
function verificar() {
  let pontos = 0;
  let semErros = true;
  let casasCompletas = 0;

  casas.forEach(casa => {
    const itens = casa.querySelectorAll(".peca");
    let corretos = 0;
    itens.forEach(item => {
      const nome = item.innerText;
      // Exemplo: se fizer lógica real, compare com solução
      if (nome) {
        pontos += 10;
        corretos++;
      } else {
        pontos -= 2;
        semErros = false;
      }
    });
    if (corretos === 5) casasCompletas++;
  });

  if (semErros) desbloquearConquista("Sem Erros");
  if (casasCompletas >= 1) desbloquearConquista("Casa Completa");
  if (tempoRestante > 0) desbloquearConquista("Resolver em <5min");
  if (pontos >= 100) desbloquearConquista("Pontuação Perfeita");

  mensagem.innerText = `✨ Pontuação: ${pontos}`;
}
