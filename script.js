// Exemplo simples para evitar duplicação nos menus
document.querySelectorAll('select').forEach(select => {
  select.addEventListener('change', () => {
    const selectedValues = new Set();
    document.querySelectorAll(`select.${select.className}`).forEach(s => {
      if (s.value !== s.options[0].text) selectedValues.add(s.value);
    });
    document.querySelectorAll(`select.${select.className}`).forEach(s => {
      Array.from(s.options).forEach(opt => {
        if (opt.index !== 0) {
          opt.disabled = selectedValues.has(opt.text);
        }
      });
    });
  });
});
