fetch("/secciones/navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;
  });

var id = new URLSearchParams(window.location.search).get("id");
console.log("ID del producto:", id);
if (!id) {
  console.error("ID de producto no encontrado en la URL");
}
const { createApp } = Vue;
createApp({
  data() {
    return {
      id: 0,
      nombre: "",
      imagen: "",
      stock: 0,
      precio: 0,
      url: "https://florvega22.pythonanywhere.com/productos/" + id,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.id = data.id;
          this.nombre = data.nombre;
          this.imagen = data.imagen;
          this.stock = data.stock;
          this.precio = data.precio;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    modificar() {
      let producto = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen,
      };
      var options = {
        body: JSON.stringify(producto),
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro modificado");
          window.location.href = "./productos.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Modificar");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
