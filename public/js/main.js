
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
function cerrarSesion() {
    // Aquí puedes agregar el código necesario para cerrar la sesión del usuario,
    // como limpiar cookies, eliminar tokens de autenticación, etc.
    alert('Sesión cerrada correctamente');
    // Luego, redirecciona al usuario a la página de inicio de sesión u otra página según sea necesario.
    window.location.href = '/public/css/Menu.css'; // Cambia la URL según la ubicación correcta
}
