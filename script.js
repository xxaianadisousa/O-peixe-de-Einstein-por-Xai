const opcoes = {
  cor: ["vermelho", "verde", "branco", "azul", "amarelo"],
  nacionalidade: ["noruegues", "ingles", "dinamarques", "alemao", "sueco"],
  bebida: ["agua", "cafe", "leite", "cerveja", "cha"],
  cigarro: ["pallmall", "dunhill", "bluemaster", "prince", "blends"],
  animal: ["gato", "cachorro", "pássaro", "cavalo", "peixe"]
};

const solucao = [
  { cor: "amarelo", nacionalidade: "noruegues", bebida: "agua", cigarro: "dunhill", animal: "gato" },
  { cor: "azul", nacionalidade: "dinamarques", bebida: "cha", cigarro: "blends", animal: "cavalo" },
  { cor: "vermelho", nacionalidade: "ingles", bebida: "leite", cigarro: "pallmall", animal: "pássaro" },
  { cor: "verde", nacionalidade: "alemao", bebida: "cafe", cigarro: "prince", animal: "peixe" },
  { cor: "branco", nacionalidade: "sueco", bebida: "cerveja", cigarro: "bluemaster", animal: "cachorro" }
];

const container = document.getElementById("casas");

// Cria visualmente as casas
for (let i = 1; i <= 5; i++) {
  const div = document.createElement("div");
  div.className = "casa";
  div.innerHTML = `<h3>Casa ${i}</h3>` +
    Object.keys(opcoes).map(tipo =>
      `<select name="${tipo}" data-casa="${i}">
        <option value="">-- ${tipo} --</option>
        ${opcoes[tipo].map(opt => `<option value="${opt}">${opt[0].toUpperCase() + opt.slice(1)}</option>`).join("")}
      </select>`
    ).join("");
  container.appendChild(div);
}

// Verifica a solução com tolerância a maiúsculas
function verificarSolucao() {
  let acertos = 0;

  for (let i = 0; i < 5; i++) {
    const casaCorreta = solucao[i];
    const casaSelecionada = {};

    Object.keys(opcoes).forEach(tipo => {
      const select = document.querySelector(`select[name="${tipo}"][data-casa="${i + 1}"]`);
      casaSelecionada[tipo] = select.value;

      select.style.backgroundColor = "white";

      const valorUsuario = select.value?.toLowerCase().trim();
      const valorCorreto = casaCorreta[tipo]?.toLowerCase().trim();

      if (valorUsuario === valorCorreto) {
        select.style.backgroundColor = "#cceeff";
      } else {
        select.style.backgroundColor = "#ffccd5";
      }
    });

    const casaAcertos = Object.keys(opcoes).filter(tipo => {
      const valorUsuario = casaSelecionada[tipo]?.toLowerCase().trim();
      const valorCorreto = casaCorreta[tipo]?.toLowerCase().trim();
      return valorUsuario === valorCorreto;
    }).length;

    if (casaAcertos === 5) acertos += 1;
  }

  const pontos = acertos * 20;
  let qi = 85;
  let nivel = "Abaixo da média";

  if (pontos >= 100) { qi = 135; nivel = "Superdotado"; }
  else if (pontos >= 81) { qi = 125; nivel = "Muito acima da média"; }
  else if (pontos >= 61) { qi = 115; nivel = "Acima da média"; }
  else if (pontos >= 41) { qi = 105; nivel = "Média"; }
  else if (pontos >= 21) { qi = 95; nivel = "Média baixa"; }

  document.getElementById("resultado").innerText =
    `✅ Casas corretas: ${acertos}/5\n🎯 Pontuação: ${pontos}\n🧠 QI estimado: ${qi} (${nivel})`;
}

// Realça dica clicada
function destacarDica(el) {
  el.style.backgroundColor = "#d0f0ff";
}

// Reinicia todos os menus
function reiniciarJogo() {
  document.querySelectorAll('.casa select').forEach(select => {
    select.selectedIndex = 0;
  });
  atualizarMenus();
  document.getElementById("resultado").innerText = "";
}

// Mostra dica aleatória
function mostrarDicaAleatoria() {
  const dicas = document.querySelectorAll('.dicas p');
  const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  alert("💡 Dica aleatória:\n\n" + aleatoria.textContent);
}

// Evita repetições nos menus
function atualizarMenus() {
  const selects = document.querySelectorAll('select');
  const valoresSelecionados = new Set();

  selects.forEach(select => {
    if (select.value) {
      valoresSelecionados.add(select.value);
    }
  });

  selects.forEach(select => {
    Array.from(select.options).forEach(option => {
      option.disabled = false;

      if (
        valoresSelecionados.has(option.value) &&
        select.value !== option.value
      ) {
        option.disabled = true;
      }
    });
  });
}

document.querySelectorAll('select').forEach(select => {
  select.addEventListener('change', atualizarMenus);
});

// Inicializa o jogo
atualizarMenus();
