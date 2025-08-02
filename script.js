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
