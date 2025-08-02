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

function atualizarOpcoes() {
  const valoresSelecionados = Array.from(selects)
    .map(s => s.value)
    .filter(v => v);

  selects.forEach(select => {
    Array.from(select.options).forEach(option => {
      option.disabled = valoresSelecionados.includes(option.value) && select.value !== option.value;
    });
  });
}

selects.forEach(select => {
  select.addEventListener('change', atualizarOpcoes);
});
