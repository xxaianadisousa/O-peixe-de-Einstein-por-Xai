const selects = document.querySelectorAll('select');

function atualizarMenus() {
  const valoresSelecionados = new Set();

  // Recolhe todas as escolhas ativas
  selects.forEach(select => {
    if (select.value) {
      valoresSelecionados.add(select.value);
    }
  });

  // Atualiza cada menu com base nas escolhas globais
  selects.forEach(select => {
    Array.from(select.options).forEach(option => {
      option.disabled = false;
      if (
        valoresSelecionados.has(option.value) &&
        select.value !== option.value &&
        option.value !== ''
      ) {
        option.disabled = true;
      }
    });
  });
}

// Escuta mudanças e aplica a lógica
selects.forEach(select => {
  select.addEventListener('change', atualizarMenus);
});

// Inicializa ao carregar
atualizarMenus();
