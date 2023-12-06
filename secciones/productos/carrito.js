fetch('/secciones/navbar/navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar-container').innerHTML = data;
});
// Obtén la referencia al cuerpo de la tabla
const tablaCarritoBody = document.getElementById("tablaCarritoBody");

// Itera sobre los productos seleccionados y agrega filas a la tabla
for (const producto of productosSeleccionados) {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.precio.toFixed(2)}</td>`;
    tablaCarritoBody.appendChild(fila);
}