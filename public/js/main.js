
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
})

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header');
        if(e.target == span){
            contador=0;
        }
    }
});
// Archivo: /public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'ce1d4c8cf79d4221a50f44a251ac067e'; // API key de NewsAPI.org
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const listaNoticias = document.getElementById('lista-noticias');
            data.articles.forEach(article => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Leer más</a>
                `;
                listaNoticias.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching news data:', error);
        });
});
//ALUMNO
// main.js

// Funciones para abrir y cerrar modales
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Función para enviar un mensaje
function enviarMensaje(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    fetch('http://tu_servidor/tu_backend.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Manejo de la respuesta del backend
        form.reset(); // Limpiar el formulario después de enviar
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Función para agregar una calificación
function agregarCalificacion(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    fetch('http://tu_servidor/tu_backend.php?tabla=calificaciones', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Manejo de la respuesta del backend
        form.reset(); // Limpiar el formulario después de enviar
        closeModal('agregarCalificacionModal'); // Cerrar el modal después de agregar
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Función para agregar una asistencia
function agregarAsistencia(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    fetch('http://tu_servidor/tu_backend.php?tabla=asistencias', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Manejo de la respuesta del backend
        form.reset(); // Limpiar el formulario después de enviar
        closeModal('agregarAsistenciaModal'); // Cerrar el modal después de agregar
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Función para agregar un horario
function agregarHorario(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    fetch('http://tu_servidor/tu_backend.php?tabla=horarios', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Manejo de la respuesta del backend
        form.reset(); // Limpiar el formulario después de enviar
        closeModal('agregarHorarioModal'); // Cerrar el modal después de agregar
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Event listener para cargar datos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Puedes realizar acciones adicionales aquí si es necesario
});
