function destacarDica(el) {
  el.style.backgroundColor = "#d0f0ff";
}

function reiniciarJogo() {
  document.querySelectorAll('.casa select').forEach(select => {
    select.selectedIndex = 0;
  });
}

function mostrarDicaAleatoria() {
  const dicas = document.querySelectorAll('.dicas p');
  const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  alert("💡 Dica aleatória:\n\n" + aleatoria.textContent);
}
const selects = document.querySelectorAll('select');

function atualizarMenus() {
  const valoresSelecionados = new Set();

  // Coleta todos os valores escolhidos nos menus
  selects.forEach(select => {
    if (select.value) {
      valoresSelecionados.add(select.value);
    }
  });

  // Atualiza os menus conforme os valores escolhidos
  selects.forEach(select => {
    Array.from(select.options).forEach(option => {
      // Habilita tudo antes de reprocessar
      option.disabled = false;

      // Desabilita se já foi escolhido em outro menu
      if (
        valoresSelecionados.has(option.value) &&
        select.value !== option.value
      ) {
        option.disabled = true;
      }
    });
  });
}

// Aplica o comportamento em todos os menus
selects.forEach(select => {
  select.addEventListener('change', atualizarMenus);
});

// Inicializa o estado correto ao carregar a página
atualizarMenus();
