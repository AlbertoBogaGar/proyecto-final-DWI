document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('staffForm');
    const gracias = document.getElementById('gracias');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita el envío real del formulario
      if (form.checkValidity()) {
        form.reset(); // Resetea el formulario
        gracias.classList.remove('d-none'); // Muestra el mensaje de agradecimiento
        setTimeout(() => {
          gracias.classList.add('d-none'); // Oculta el mensaje después de 5 segundos
        }, 5000);
      } else {
        form.classList.add('was-validated'); // Activa los estilos de validación de Bootstrap
      }
    });
  });