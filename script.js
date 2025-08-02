let tempo = 300;
const cronometro = document.getElementById("cronometro");
setInterval(() => {
  if (tempo > 0) {
    tempo--;
    cronometro.innerText = `⏱️ ${tempo}s restantes`;
  }
}, 1000);

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const element = document.getElementById(data);
  ev.target.appendChild(element);
}

function verificarSolucao() {
  const casa5 = document.getElementById("casa5").innerHTML;
  if (casa5.includes("peixe.png") && casa5.includes("alemao.png")) {
    alert("🎉 Parabéns! O alemão tem o peixe!");
  } else {
    alert("🚫 Ops! Ainda não está certo...");
  }
}

function traduzir() {
  document.getElementById("titulo").innerText = "Einstein’s Fish Puzzle";
  document.querySelector(".introducao p").innerText =
    "Only 2% of people can solve this logic challenge. Your mission: find out who owns the fish 🐠.";
}
