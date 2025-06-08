if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    fetch('manifest.json')  // Ajusta la ruta si es necesario
      .then(response => response.json())
      .then(manifest => {
        const version = manifest.version || '1.0';  // Si no hay versión, usa un valor predeterminado
        return navigator.serviceWorker.register(`/service-worker.js?v=${version}`);
      })
      .then(registration => {
        console.log('SW Registrado con Éxito: ', registration.scope);
      })
      .catch(err => {
        console.log('SW fallo registro: ', err);
      });
  });
}

  
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(registration => {
    registration.addEventListener('updatefound', () => {
      const installingWorker = registration.installing;
      installingWorker.addEventListener('statechange', () => {
        if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // Hay una nueva versión disponible
          const updateAvailableEvent = new CustomEvent('updateAvailable');
          document.dispatchEvent(updateAvailableEvent);
        }
      });
    });
  });
}