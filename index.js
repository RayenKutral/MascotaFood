fetch('./secciones/navbar/navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar-container').innerHTML = data;
});


const imagen = document.getElementById("imagenflt");
const imagenes = ["assets/imagen1.jpeg", "assets/imagen2.jpg", "assets/imagen3.jpeg"]; // Lista de imágenes
let currentIndex = 0;

function cambiarImagen() {
    imagen.style.opacity = 0; // Cambiar la opacidad para ocultar la imagen actual
    currentIndex = (currentIndex + 1) % imagenes.length; // Ciclo de imágenes
    setTimeout(() => {
        imagen.src = imagenes[currentIndex]; // Cambiar la imagen
        imagen.style.opacity = 1; // Mostrar la nueva imagen
    }, 1000); // Espera 1 segundo para mostrar la nueva imagen con opacidad 1
}

// Llamar a la función para cambiar la imagen cada 5 segundos
setInterval(cambiarImagen, 5000);
