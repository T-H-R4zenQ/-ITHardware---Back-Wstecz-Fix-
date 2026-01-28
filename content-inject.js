// ITHardware Fix - Content Script
// Wstrzykuje zewnętrzny skrypt do kontekstu strony

(function() {
  'use strict';

  // Wstrzyknij zewnętrzny skrypt do strony
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('inject.js');
  script.onload = function() {
    this.remove();
  };
  
  // Wstrzyknij na SAMYM POCZĄTKU
  (document.head || document.documentElement).appendChild(script);

})();
