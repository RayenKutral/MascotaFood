fetch('/secciones/navbar/navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar-container').innerHTML = data;
});


const { createApp } = Vue;

createApp({
  data() {
    return {
      productos: [],  
      // url: 'http://127.0.0.1:5001/productos',
      url: 'http://florvega22.pythonanywhere.com/productos',
      productosSeleccionados: [],
      total: 0,
      contador: 0,
      id:0,
      nombre:"",
      imagen:"",
      stock:"",
      precio:"",

    };
  },

  methods: {
    async fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.productos = data;
        this.cargando = false;
      } catch (err) {
        console.error(err);
        this.error = true;
      }
    },

    toggleMenu() {
      var carrito = document.getElementById('carrito');
      if (carrito.style.marginLeft === '100%') {
        carrito.style.marginLeft = '50%';
      } else {
        carrito.style.marginLeft = '100%';
      }
    }, 

    compra(){      
      if (this.productosSeleccionados > 1) {          
     alert("Su orden ha sido enviada");
     } else {
      alert("Carrito vacío")
     }     
  },

    actualizarContador() {
      const contadorElemento = document.getElementById("contadorCarrito");
      contadorElemento.textContent = this.contador.toString();
  },


 agregarAlCarrito(producto) {
 
  this.contador++;
  this.actualizarContador();
  
  const productoExistente = this.productosSeleccionados.find(p => p.id === producto.id);
  if (productoExistente) {
      productoExistente.cantidad++;
      this.actualizarCantidadEnTabla(producto.id, productoExistente.cantidad);
  } else {
      producto.cantidad = 1;      
      alert("Producto añadido al carrito");      
      this.productosSeleccionados.push(producto);
      this.agregarFilaATabla(producto);   

  }  
  alert("Producto añadido al carrito");
  this.actualizarTotal();
},
  
  actualizarCantidadEnTabla(id, nuevaCantidad) {
    const celdaCantidad = document.querySelector(`[data-id="${id}"] td:nth-child(4)`);
    if (celdaCantidad) {
        celdaCantidad.textContent = nuevaCantidad;
    }
},
  
eliminarProducto(producto) {
  const indice = this.productosSeleccionados.findIndex(p => p.id === producto.id);
  if (indice !== -1) {
      const productoEliminar = this.productosSeleccionados[indice];

      if (productoEliminar.cantidad > 1) {
          productoEliminar.cantidad--;
      } else {
          this.productosSeleccionados.splice(indice, 1);
      }

      this.actualizarTotal();
      this.contador--;
      this.actualizarContador();
  }
},
actualizarTotal() {
  this.total = this.productosSeleccionados.reduce((acc, producto) => {
      return acc + producto.precio * producto.cantidad;
  }, 0);
},

eliminar(producto) {
  const url = this.url+'/' + producto;
  var options = {
  method: 'DELETE',
  }
  fetch(url, options)
  .then(res => res.text()) // or res.json()
  .then(res => {
  location.reload();
  })
  },

  grabar(){
  let producto = {
  nombre:this.nombre,
  precio: this.precio,
  stock: this.stock,
  imagen:this.imagen
  }
  var options = {
  body:JSON.stringify(producto),
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  redirect: 'follow'
  }
  fetch(this.url, options)
  .then(function () {
  alert("Registro grabado")
  window.location.href = "./productos.html";
  })
  .catch(err => {
  console.error(err);
  alert("Error al Grabarr")
  
  })
  }


  },
  created() {
    this.fetchData(this.url);
},
}).mount("#app");


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





