document.addEventListener('DOMContentLoaded', function() {
    const logoutForm = document.getElementById('logoutForm');

    logoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Aquí podrías realizar cualquier acción adicional antes de cerrar sesión
        // Por ejemplo, enviar una solicitud al servidor para invalidar la sesión actual

        // Simulación de cierre de sesión
        // Luego de completar las acciones necesarias, puedes redirigir al usuario a otra página
        window.location.href = '/views/index.html'; // Redirigir al inicio de sesión o página principal
    });
});
