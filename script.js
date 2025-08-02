// Futuras funcionalidades de arrastar e encaixar peças
document.querySelectorAll('.pecas img').forEach(img => {
  img.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', event.target.alt);
  });
});
