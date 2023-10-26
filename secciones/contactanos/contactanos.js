fetch('/secciones/navbar/navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar-caja').innerHTML = data;
});



const form = document.getElementById("myForm");

function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

function validateForm() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var consulta = document.getElementById("consulta").value;

  if (nombre === "" ||  email === "" ||  consulta === "") {
      alert("Todos los campos son obligatorios.");
      return false;
  }

  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
    return false;
  }

  if (consulta.length > 150) {
      alert("La consulta no puede tener más de 150 caracteres.");
      return false;
  }

  return true;
};

function showCustomAlert(message) {
  const customAlert = document.getElementById("customAlert");
  customAlert.classList.remove("hidden");
  document.getElementById("alertText").textContent = message;

  const closeAlertButton = document.getElementById("closeAlert");
  closeAlertButton.style.display = "block"; // Mostrar el botón "Cerrar"

  closeAlertButton.addEventListener("click", function () {
    customAlert.classList.add("hidden");
    closeAlertButton.style.display = "none"; // Ocultar el botón "Cerrar"
    location.reload();
  });
}



form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    showCustomAlert("Correo electrónico enviado correctamente.");
  }
});