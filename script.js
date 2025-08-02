function verificarSolucao() {
  let acertos = 0;

  for (let i = 0; i < 5; i++) {
    let casaCorreta = solucao[i];
    let casaSelecionada = {};

    Object.keys(opcoes).forEach(tipo => {
      const select = document.querySelector(`select[name="${tipo}"][data-casa="${i + 1}"]`);
      casaSelecionada[tipo] = select.value;

      select.style.backgroundColor = "white";

      const valorUsuario = select.value.toLowerCase().trim();
      const valorCorreto = casaCorreta[tipo].toLowerCase().trim();

      if (valorUsuario === valorCorreto) {
        select.style.backgroundColor = "#cceeff";
      } else {
        select.style.backgroundColor = "#ffccd5";
      }
    });

    let casaAcertos = Object.keys(opcoes).filter(tipo => {
      const valorUsuario = casaSelecionada[tipo]?.toLowerCase().trim();
      const valorCorreto = casaCorreta[tipo]?.toLowerCase().trim();
      return valorUsuario === valorCorreto;
    }).length;

    if (casaAcertos === 5) acertos += 1;
  }

  let pontos = acertos * 20;
  let qi = 85;
  let nivel = "Abaixo da média";

  if (pontos >= 100) { qi = 135; nivel = "Superdotado"; }
  else if (pontos >= 81) { qi = 125; nivel = "Muito acima da média"; }
  else if (pontos >= 61) { qi = 115; nivel = "Acima da média"; }
  else if (pontos >= 41) { qi = 105; nivel = "Média"; }
  else if (pontos >= 21) { qi = 95; nivel = "Média baixa"; }

  document.getElementById("resultado").innerText =
    `✅ Casas corretas: ${acertos}/5\n🎯 Pontuação: ${pontos}\n🧠 QI estimado: ${qi} (${nivel})`;
} {
  const respostasUsuario = []; // Aqui você coleta os dados preenchidos

  document.querySelectorAll('.casa').forEach(casa => {
    const dados = {};
    casa.querySelectorAll('select').forEach(select => {
      const tipo = select.className; // Supondo que cada <select> tem uma class indicando o tipo (ex: "cor", "nacionalidade")
      dados[tipo] = select.value;
    });
    respostasUsuario.push(dados);
  });

  for (let i = 0; i < 5; i++) {
    const casaUsuario = respostasUsuario[i];
    const casaCorreta = solucao[i]; // Certifique-se que sua variável `solucao` está definida acima no script

    for (let tipo in casaCorreta) {
      const valorUsuario = casaUsuario[tipo]?.toLowerCase().trim();
      const valorCorreto = casaCorreta[tipo]?.toLowerCase().trim();

if (valorUsuario.toLowerCase().trim() !== valorCorreto.toLowerCase().trim()) {
  marcarErro(i, tipo);
  return false;
      }
    }
  }

  alert("✅ Parabéns! Você solucionou corretamente o enigma de Einstein!");
  return true;
}


