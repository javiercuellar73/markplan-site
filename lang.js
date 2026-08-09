(function () {
  // Mapa de cada página con su equivalente en el otro idioma.
  var MAP = {
    'index.html': 'home.html',
    'home.html': 'index.html',
    'precios.html': 'pricing.html',
    'pricing.html': 'precios.html',
    'privacidad.html': 'privacy.html',
    'privacy.html': 'privacidad.html',
    'terminos.html': 'terms.html',
    'terms.html': 'terminos.html'
  };

  var path = window.location.pathname.split('/').pop() || 'index.html';
  var current = path.indexOf('home') === 0 || path.indexOf('pricing') === 0 ||
                path.indexOf('privacy') === 0 || path.indexOf('terms') === 0
                ? 'en' : 'es';

  var stored = null;
  try { stored = localStorage.getItem('mp_lang'); } catch (e) {}

  if (!stored) {
    // Primera visita: detectamos el idioma del navegador y lo recordamos.
    var browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    stored = browserLang.indexOf('es') === 0 ? 'es' : 'en';
    try { localStorage.setItem('mp_lang', stored); } catch (e) {}
  }

  // Si el idioma guardado no coincide con esta página, redirigimos una sola vez.
  if (stored !== current && MAP[path]) {
    window.location.replace(MAP[path]);
  }
})();
