//  AGREGAR TODO LA PARTE DEL INDEX
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');
    const registerLink = document.getElementById('registerLink');
    const registerModal = document.getElementById('registerModal');
    const closeModal = document.getElementById('closeModal');
    const registerForm = document.getElementById('registerForm');
    const adminAccess = document.getElementById('adminAccess');
    const adminModal = document.getElementById('adminModal');
    const closeAdminModal = document.getElementById('closeAdminModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminMessage = document.getElementById('adminMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores del formulario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Validar los valores (puedes ajustar esta validación según tus necesidades)
        if (role === 'maestro' && username === 'maestro' && password === '123456') {
            message.innerHTML = '<p class="success">Inicio de sesión exitoso!</p>';
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = '/views/Mestro.html';
        } else if (role === 'estudiante' && username === 'estudiante' && password === '123') {
            message.innerHTML = '<p class="success">Inicio de sesión exitoso!</p>';
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = '/views/estudiante.html';
        } else {
            message.innerHTML = '<p class="error">Credenciales incorrectas. Inténtalo de nuevo.</p>';
        }
    });

    adminAccess.addEventListener('click', function(e) {
        e.preventDefault();
        adminModal.style.display = 'block';
    });

    closeAdminModal.addEventListener('click', function() {
        adminModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === adminModal) {
            adminModal.style.display = 'none';
        }
    });

    adminLoginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        const adminUsername = document.getElementById('adminUsername').value;
        const adminPassword = document.getElementById('adminPassword').value;

        // Validar los valores del formulario de administrador
        if (adminUsername === 'admin' && adminPassword === 'admin123') {
            adminMessage.innerHTML = '<p class="success">Acceso de administrador exitoso!</p>';
            sessionStorage.setItem('isAdminLoggedIn', 'true');
            window.location.href = '/views/Administrador.html'; // Redirigir al panel de administración
        } else {
            adminMessage.innerHTML = '<p class="error">Credenciales de administrador incorrectas. Inténtalo de nuevo.</p>';
        }
    });

    document.getElementById('forgotPassword').addEventListener('click', function(e) {
        e.preventDefault();
        alert('¡Lo siento! Esta función aún no está disponible.');
    });

    closeModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const studentIdReg = document.getElementById('studentIdReg').value;
        const passwordReg = document.getElementById('passwordReg').value;

        // Simulación de mensaje de registro exitoso
        const registerMessage = document.getElementById('registerMessage');
        registerMessage.innerHTML = `<p class="success">¡Registro exitoso para ${nombre} ${apellido}!</p>`;

        // Limpiar el formulario después del registro
        registerForm.reset();

        // Cerrar el modal después del registro exitoso (opcional)
        setTimeout(function() {
            registerModal.style.display = 'none';
            registerMessage.innerHTML = '';
        }, 1500); // Cerrar después de 1.5 segundos
    });
});