function showAdminSection(sectionId) {
    var sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    var section = document.getElementById(sectionId);
    section.classList.remove('hidden');
}

function addTeacher(event) {
    event.preventDefault();
    var name = document.getElementById('teacherName').value;
    var list = document.getElementById('teacherList');
    var item = document.createElement('li');
    item.textContent = name;
    var editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('bg-yellow-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
    editButton.onclick = function() { openEditModal(name, 'teacher'); };
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('bg-red-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
    deleteButton.onclick = function() { confirmDelete(name, 'teacher'); };
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    list.appendChild(item);
    document.getElementById('form-add-teacher').reset();
}

function addStudent(event) {
    event.preventDefault();
    var name = document.getElementById('studentName').value;
    var list = document.getElementById('studentList');
    var item = document.createElement('li');
    item.textContent = name;
    var editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('bg-yellow-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
    editButton.onclick = function() { openEditModal(name, 'student'); };
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('bg-red-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
    deleteButton.onclick = function() { confirmDelete(name, 'student'); };
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    list.appendChild(item);
    document.getElementById('form-add-student').reset();
}

function uploadSchedule(event) {
    event.preventDefault();
    var file = document.getElementById('scheduleFile').files[0];
    var list = document.getElementById('scheduleList');
    var item = document.createElement('li');
    item.textContent = file.name;
    var editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('bg-yellow-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
    editButton.onclick = function() { openEditModal(file.name, 'schedule'); };
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('bg-red-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
    deleteButton.onclick = function() { confirmDelete(file.name, 'schedule'); };
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    list.appendChild(item);
    document.getElementById('form-manage-schedules').reset();
}

function uploadDocument(event) {
    event.preventDefault();
    var file = document.getElementById('documentFile').files[0];
    var list = document.getElementById('docList');
    var item = document.createElement('li');
    item.textContent = file.name;
    var editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('bg-yellow-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
    editButton.onclick = function() { openEditModal(file.name, 'document'); };
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('bg-red-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
    deleteButton.onclick = function() { confirmDelete(file.name, 'document'); };
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    list.appendChild(item);
    document.getElementById('form-manage-docs').reset();
}

function openEditModal(name, type) {
    document.getElementById('editRecordId').value = name;
    document.getElementById('editName').value = name;
    document.getElementById('formEditRecord').setAttribute('data-type', type);
    openModal('modalEdit');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveEdit() {
    var type = document.getElementById('formEditRecord').getAttribute('data-type');
    var name = document.getElementById('editName').value;
    var list = document.getElementById(type + 'List');
    var items = list.querySelectorAll('li');
    items.forEach(item => {
        if (item.textContent.includes(document.getElementById('editRecordId').value)) {
            item.innerHTML = name;
            var editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('bg-yellow-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
            editButton.onclick = function() { openEditModal(name, type); };
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('bg-red-500', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
            deleteButton.onclick = function() { confirmDelete(name, type); };
            item.appendChild(editButton);
            item.appendChild(deleteButton);
        }
    });
    closeModal('modalEdit');
}

function deleteRecord() {
    var type = document.getElementById('formEditRecord').getAttribute('data-type');
    var name = document.getElementById('editRecordId').value;
    var list = document.getElementById(type + 'List');
    var items = list.querySelectorAll('li');
    items.forEach(item => {
        if (item.textContent.includes(name)) {
            list.removeChild(item);
        }
    });
    closeModal('modalEdit');
}

function confirmDelete(name, type) {
    if (confirm('¿Está seguro de que desea eliminar "' + name + '"?')) {
        var list = document.getElementById(type + 'List');
        var items = list.querySelectorAll('li');
        items.forEach(item => {
            if (item.textContent.includes(name)) {
                list.removeChild(item);
            }
        });
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function logout() {
    // Aquí puedes redirigir a la página de inicio de sesión o limpiar la sesión
    window.location.href = '/views/index.html'; // Cambia esta URL según sea necesario
}