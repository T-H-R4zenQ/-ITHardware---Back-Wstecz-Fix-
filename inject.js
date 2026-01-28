// ITHardware Fix - Injected Script
// Ten kod działa bezpośrednio w kontekście strony

(function() {
  'use strict';

  // Zapisz oryginalne funkcje NATYCHMIAST
  const _pushState = history.pushState;
  const _replaceState = history.replaceState;

  // Nadpisz pushState - blokuj dodawanie wpisów do historii na tej samej stronie
  history.pushState = function(state, title, url) {
    if (url) {
      try {
        const newUrl = new URL(url, location.origin);
        const currentPath = location.pathname;
        const newPath = newUrl.pathname;
        
        // Jeśli pathname się nie zmienia, użyj replaceState zamiast pushState
        if (newPath === currentPath) {
          return _replaceState.call(this, state, title, url);
        }
      } catch (e) {
        // W przypadku błędu, przepuść normalnie
      }
    }

    return _pushState.call(this, state, title, url);
  };

})();
