document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            tabLinks.forEach(link => link.classList.remove('text-blue-600', 'border-blue-600', 'border-b-2'));
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // Add active class to clicked link
            this.classList.add('text-blue-600', 'border-blue-600', 'border-b-2');
            
            // Show corresponding tab content
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.classList.remove('hidden');
            }
        });
    });
});

document.getElementById('logoutForm').addEventListener('click', function(event) {
event.preventDefault();
// Redirigir a la página de inicio de sesión
window.location.href = '/views/index.html';
});
function confirmLogout() {
    return confirm('¿Estás seguro de que deseas cerrar sesión?');
}