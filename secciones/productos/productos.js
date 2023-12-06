fetch('/secciones/navbar/navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar-container').innerHTML = data;
});

//Slider
const slider= document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1] 

const btnLeft= document.querySelector("#btn-left");
const btnRight= document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(function (){
         slider.style.transition = "none";
         slider.insertAdjacentElement('beforeend', sliderSectionFirst);
         slider.style.marginLeft = "-100%";
    }, 500)
}
function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1] 
    slider.style.marginLeft= "0%";
    slider.style.transition= "all 0.5s";
    setTimeout(function (){
         slider.style.transition = "none";
         slider.insertAdjacentElement('afterbegin', sliderSectionLast);
         slider.style.marginLeft = "-100%";
    }, 500)
}

btnRight.addEventListener('click', () =>{
    Next();
});
btnLeft.addEventListener('click', () =>{
    Prev();
});

setInterval(function(){
    Next();
}, 5000);


// -----------------------------------------------------------------------

let contador = 0;
let productosSeleccionados = [];

function alerta(){
    contador++;
    actualizarContador();
    alert("Item añadido al carrito")
    const nuevoProducto = {
        id: contador,
        nombre: "Producto " + contador,
        precio: 10.00
    };

    productosSeleccionados.push(nuevoProducto);
}

function actualizarContador() {
    const contadorElemento = document.getElementById("contadorCarrito");
    contadorElemento.textContent = contador.toString();
}