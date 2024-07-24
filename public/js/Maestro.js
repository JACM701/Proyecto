function showSection(sectionId) {
    console.log(`Mostrando sección: ${sectionId}`); // Depuración
    var sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Oculta todas las secciones
    });
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden'); // Muestra la sección deseada
    } else {
        console.error(`No se encontró la sección con ID: ${sectionId}`);
    }

    // Actualizar el enlace activo
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    var activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    } else {
        console.error(`No se encontró el enlace con href: #${sectionId}`);
    }
}

function filterInscritos() {
    var input = document.getElementById('searchInscritos');
    var filter = input.value.toLowerCase();
    var lista = document.getElementById('lista-inscritos');
    var items = lista.getElementsByTagName('li');
    console.log(`Filtrando inscritos con: ${filter}`); // Depuración
    for (var i = 0; i < items.length; i++) {
        var texto = items[i].textContent.toLowerCase();
        items[i].style.display = texto.includes(filter) ? "" : "none";
    }
}

function updateCalificaciones() {
    console.log("Actualizando calificaciones"); // Depuración
    // Lógica para actualizar la lista de calificaciones según el grupo y materia seleccionados
}

function updateAsistencias() {
    console.log("Actualizando asistencias"); // Depuración
    // Lógica para actualizar la lista de asistencias según el grupo seleccionado
}

function sendQueja(event) {
    event.preventDefault();
    var queja = document.getElementById('queja').value;
    console.log(`Enviando queja: ${queja}`); // Depuración
    // Lógica para enviar la queja al administrador
    document.getElementById('queja').value = '';

    // Agregar la respuesta del administrador (simulación)
    var respuestas = document.getElementById('respuestas-atencion').querySelector('ul');
    var respuestaItem = document.createElement('li');
    respuestaItem.textContent = `Respuesta a: "${queja}" - Respuesta del administrador aquí.`;
    respuestas.appendChild(respuestaItem);
}

function agregarRespuestaDocumentacion(respuesta) {
    console.log(`Agregando respuesta en Documentación: ${respuesta}`); // Depuración
    var respuestas = document.getElementById('respuestas-documentacion').querySelector('ul');
    var respuestaItem = document.createElement('li');
    respuestaItem.textContent = respuesta;
    respuestas.appendChild(respuestaItem);
}

// Ejemplo de respuestas en Documentación
agregarRespuestaDocumentacion("Respuesta del administrador sobre el Manual del Usuario.");

document.getElementById('logoutButton').addEventListener('click', function(event) {
    event.preventDefault();
    // Redirigir a la página de inicio de sesión
    window.location.href = '/views/index.html';
});