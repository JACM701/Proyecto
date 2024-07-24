document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');
    const registerModal = document.getElementById('registerModal');
    const closeModal = document.getElementById('closeModal');
    const registerForm = document.getElementById('registerForm');
    const adminAccess = document.getElementById('adminAccess');
    const adminModal = document.getElementById('adminModal');
    const closeAdminModal = document.getElementById('closeAdminModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminMessage = document.getElementById('adminMessage');
    const forgotPassword = document.getElementById('forgotPassword');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeForgotPasswordModal = document.getElementById('closeForgotPasswordModal');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const forgotPasswordMessage = document.getElementById('forgotPasswordMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

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
        adminModal.style.display = 'flex';
    });

    closeAdminModal.addEventListener('click', function() {
        adminModal.style.display = 'none';
    });

    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPasswordModal.style.display = 'flex';
    });

    closeForgotPasswordModal.addEventListener('click', function() {
        forgotPasswordModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === adminModal) {
            adminModal.style.display = 'none';
        }
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    adminLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const adminUsername = document.getElementById('adminUsername').value;
        const adminPassword = document.getElementById('adminPassword').value;

        if (adminUsername === 'admin' && adminPassword === 'admin123') {
            adminMessage.innerHTML = '<p class="success">Acceso de administrador exitoso!</p>';
            sessionStorage.setItem('isAdminLoggedIn', 'true');
            window.location.href = '/views/Administrador.html';
        } else {
            adminMessage.innerHTML = '<p class="error">Credenciales de administrador incorrectas. Inténtalo de nuevo.</p>';
        }
    });

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const forgotEmail = document.getElementById('forgotEmail').value;

        // Simulación de mensaje de envío exitoso
        forgotPasswordMessage.innerHTML = `<p class="success">¡Instrucciones de recuperación enviadas a ${forgotEmail}!</p>`;

        forgotPasswordForm.reset();

        setTimeout(function() {
            forgotPasswordModal.style.display = 'none';
            forgotPasswordMessage.innerHTML = '';
        }, 1500);
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
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const studentIdReg = document.getElementById('studentIdReg').value;
        const passwordReg = document.getElementById('passwordReg').value;

        const registerMessage = document.getElementById('registerMessage');
        registerMessage.innerHTML = `<p class="success">¡Registro exitoso para ${nombre} ${apellido}!</p>`;

        registerForm.reset();

        setTimeout(function() {
            registerModal.style.display = 'none';
            registerMessage.innerHTML = '';
        }, 1500);
    });
});
