function destacarDica(el) {
  el.style.backgroundColor = "#d0f0ff";
}

function reiniciarJogo() {
  document.querySelectorAll('.casa input').forEach(input => {
    input.value = "";
    input.style.borderColor = "#aaa";
  });
}

function mostrarDicaAleatoria() {
  const dicas = document.querySelectorAll('.dicas p');
  const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  alert("💡 Dica aleatória:\n\n" + aleatoria.textContent);
}
