window.addEventListener('DOMContentLoaded', async () => {
  const qrCode = localStorage.getItem('qrCode');
  if (!qrCode) {
    console.warn('No hay qrCode en localStorage');
    return;
  }

  try {
    const response = await fetch(`https://api-swa.onrender.com/card/${encodeURIComponent(qrCode)}`);
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }
    const data = await response.json();

    // Guardar el JSON como string en localStorage con la clave "QR"
    localStorage.setItem('QR', JSON.stringify(data));

    console.log('Datos guardados en localStorage "QR":', data);
  } catch (error) {
    console.error('Error al obtener datos del QR:', error);
  }
});
