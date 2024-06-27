//Acceso a Maestros
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores del formulario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validar los valores (puedes ajustar esta validación según tus necesidades)
        if (username === 'usuario' && password === '123456') {
            // Inicio de sesión exitoso
            message.innerHTML = '<p class="success">Inicio de sesión exitoso!</p>';
            // Aquí podrías redirigir al usuario a otra página, por ejemplo:
            // window.location.href = '/dashboard.html';
            //Cambiar por lo de karla
            window.location.href = "/control-escolar-react/public/index.html"
        } else {
            // Inicio de sesión fallido
            message.innerHTML = '<p class="error">Credenciales incorrectas. Inténtalo de nuevo.</p>';
        }
    });
});
//Acceso a Alumnos
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores del formulario
        const studentId = document.getElementById('studentId').value;
        const password = document.getElementById('password').value;

        // Aquí se podría implementar lógica para validar con una base de datos
        // Por ahora, simularemos una validación básica

        // Simulación de validación con datos estáticos
        if (studentId === '123456' && password === '123') {
            // Inicio de sesión exitoso
            message.innerHTML = '<p class="success">Inicio de sesión exitoso!</p>';
            // Aquí podrías redirigir al estudiante a otra página, por ejemplo:
            // window.location.href = '/dashboard.html';
            window.location.href = "/views/estudiante.html";
        } else {
            // Inicio de sesión fallido
            message.innerHTML = '<p class="error">ID de estudiante o contraseña incorrectos. Inténtalo de nuevo.</p>';
        }
    });
});
