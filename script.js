function verificarResposta() {
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

