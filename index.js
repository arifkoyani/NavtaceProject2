// Touch devices have no hover, so a tap gives the same highlighted state.
  if (window.matchMedia('(hover: none)').matches) {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => c !== card && c.blur());
        card.focus();
      });
    });
  }