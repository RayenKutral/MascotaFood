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
      productosSeleccionados: [],
      total: 0,
      contador: 0,
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
}
  },
  created() {
    this.fetchData("http://127.0.0.1:5001/productos");
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





// function toggleMenu() {
//   var carrito = document.getElementById('carrito');
//   if (carrito.style.marginLeft === '100%') {
//     carrito.style.marginLeft = '50%';
//   } else {
//     carrito.style.marginLeft = '100%';
//   }
// }

// function compra(){
//   alert("Su orden ha sido enviada");
// }
// // -----------------------------------------------------------------------

//  let contador = 0;
//  let productosSeleccionados = [];
//  let total = 0;

//  function alerta(producto){
//     contador++;
//    actualizarContador();
//    agregarProductoAlCarrito(producto);
//    actualizarTotal();
//     alert("Item añadido al carrito");
// }

//  function actualizarContador() {
//      const contadorElemento = document.getElementById("contadorCarrito");
//     contadorElemento.textContent = contador.toString();
//   }

//  function agregarProductoAlCarrito(producto) {
//   const id = producto.id;

//   // Verificar si el producto ya está en el carrito
//   const productoExistente = productosSeleccionados.find(p => p.id === id);

//   if (productoExistente) {
//     // Incrementar la cantidad si el producto ya está en el carrito
//     productoExistente.cantidad++;
//     actualizarCantidadEnTabla(id, productoExistente.cantidad++);
//   } else {
//     // Agregar el producto al carrito si no está
//     producto.cantidad = 1; // Agregar la propiedad "cantidad"
//     productosSeleccionados.push(producto);
//     agregarFilaATabla(producto);
//   }

//   // Actualizar contador y total
//   actualizarContador();
//   actualizarTotal();
// }

// function agregarFilaATabla(producto) {
//   const tabla = document.querySelector("table tbody");
//   const fila = tabla.insertRow();

//   // Configurar las celdas de la fila
//   fila.innerHTML = `
//     <td>${producto.id}</td>
//     <td>${producto.nombre}</td>
//     <td>${producto.precio}</td>
//     <td>${producto.cantidad}</td>
//     <td>
//       <button type="button" class="btn-danger" onclick="eliminarProducto(this)">Eliminar</button>
//     </td>
//   `;
//   fila.dataset.id = producto.id; // Agregar el id como atributo de datos
// }



// function actualizarCantidadEnTabla(id, nuevaCantidad) {
//   const celdaCantidad = document.querySelector(`[data-id="${id}"] td:nth-child(4)`);
//   celdaCantidad.textContent = nuevaCantidad;
// }



// function eliminarProducto(button) {
   
//   const fila = button.closest("tr");
//   const id = fila.dataset.id;  
//   const producto = productosSeleccionados.find(p => p.id === id);

//   if(producto){
//     producto.cantidad >= 1;
//     producto.cantidad--;
//     contador --; 

//     if (producto.cantidad === 0){
//   contador --;  
//   productosSeleccionados = productosSeleccionados.filter(producto => producto.id !== id);
//   fila.remove(); 
// }

// else {
//   actualizarCantidadEnTabla(id, producto.cantidad--);  
// }
//     actualizarTotal();
//        actualizarContador();
//  }
// }

// function eliminarProducto(button) {
//   const fila = button.closest("tr");
//   const id = fila.dataset.id;

//   // Buscar el producto en la lista de productos seleccionados
//   const producto = productosSeleccionados.find(p => p.id === id);

//   if (producto) {
//     // Reducir la cantidad en 1
//     producto.cantidad--;

//     // Si la cantidad llega a 0, eliminar el producto de la lista
//     if (producto.cantidad === 0) {
//       contador--;
//       productosSeleccionados = productosSeleccionados.filter(p => p.id !== id);
//       fila.remove();
//     } else {
//       // Actualizar la cantidad en la interfaz
//       actualizarCantidadEnTabla(id, producto.cantidad);
//     }

//     // Actualizar el contador y el total
//     actualizarContador();
//     actualizarTotal();
//   }
// }



// function actualizarTotal() {

//   let total = 0;

//   productosSeleccionados.forEach(producto => {
//     total += producto.precio * producto.cantidad;
//   });

//   // Actualizar el elemento en la interfaz (ajusta según tu estructura HTML)
//   const totalElement = document.getElementById("total");
//   if (totalElement) {
//     totalElement.textContent = `${total.toFixed(2)}`;
//   }
// }

//-----------------------------



