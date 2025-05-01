// Volver arriba al recargar la página
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
window.onscroll = function() {
    changeHeaderBackground();
};

function changeNavbarBackground() {
    const header = document.querySelector('.redbox');
    
    // Verifica si se ha hecho scroll
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Llamamos a la función cuando el usuario haga scroll
window.addEventListener('scroll', changeNavbarBackground);

// También podemos llamar a la función una vez al cargar la página, por si ya empieza scrolleado
window.addEventListener('DOMContentLoaded', changeNavbarBackground);

// Abrir modal
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
      const modalId = item.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'flex';
    });
  });
  
  // Cerrar modal
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
      // Quitar imagen expandida si estaba activa
      const expanded = document.querySelector('.thumb.expanded');
      if (expanded) expanded.classList.remove('expanded');
    });
  });
  
  // Expandir imagen en modal
  document.querySelectorAll('.thumb').forEach(img => {
    img.addEventListener('click', (e) => {
      const isExpanded = img.classList.contains('expanded');
      document.querySelectorAll('.thumb.expanded').forEach(el => el.classList.remove('expanded'));
      if (!isExpanded) {
        img.classList.add('expanded');
      }
    });
  });