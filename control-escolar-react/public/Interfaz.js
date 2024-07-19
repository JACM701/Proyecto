// Función para mostrar la sección activa
function showSection(sectionId) {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    var section = document.getElementById(sectionId);
    section.classList.add('active');

    // Actualizar el enlace activo
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
}

// Función para agregar un nuevo inscrito
function addInscrito(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombreInscrito').value;

    // Por ahora, solo se agrega localmente a la lista
    var lista = document.getElementById('lista-inscritos');
    var nuevoInscrito = document.createElement('li');
    nuevoInscrito.textContent = nombre;
    var editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.onclick = function() { openEditarInscritoModal(lista.children.length - 1); };
    var eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    eliminarButton.onclick = function() { confirmarEliminarInscrito(lista.children.length - 1); };
    nuevoInscrito.appendChild(editarButton);
    nuevoInscrito.appendChild(eliminarButton);
    lista.appendChild(nuevoInscrito);
    document.getElementById('nombreInscrito').value = '';
}

// Función para editar un inscrito
function editInscrito(event) {
    event.preventDefault();
    var id = document.getElementById('editInscritoId').value;
    var nombre = document.getElementById('editNombreInscrito').value;

    // Actualizamos localmente el nombre del inscrito
    var lista = document.getElementById('lista-inscritos');
    var items = lista.getElementsByTagName('li');
    items[id].textContent = nombre;

    closeModal('modalEditarInscrito');
}

// Función para abrir el modal de edición de inscrito
function openEditarInscritoModal(id) {
    var lista = document.getElementById('lista-inscritos');
    var items = lista.getElementsByTagName('li');
    var nombre = items[id].textContent;

    document.getElementById('editInscritoId').value = id;
    document.getElementById('editNombreInscrito').value = nombre;

    openModal('modalEditarInscrito');
}

// Función para confirmar eliminación de inscrito
function confirmarEliminarInscrito(id) {
    document.getElementById('deleteInscritoId').value = id;
    openModal('modalConfirmarEliminarInscrito');
}

// Función para eliminar un inscrito
function deleteInscrito() {
    var id = document.getElementById('deleteInscritoId').value;

    // Eliminamos localmente el inscrito de la lista
    var lista = document.getElementById('lista-inscritos');
    var items = lista.getElementsByTagName('li');
    items[id].remove();

    closeModal('modalConfirmarEliminarInscrito');
}

// Función para abrir un modal por su id
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Función para cerrar un modal por su id
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}
