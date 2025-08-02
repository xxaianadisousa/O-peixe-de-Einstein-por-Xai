const selects = document.querySelectorAll('select');

function atualizarMenus() {
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

selects.forEach(select => {
  select.addEventListener('change', atualizarMenus);
});

// Inicializa ao carregar
atualizarMenus();
