$(document).ready(function() {
   // on ready
});


async function iniciarSesion() {
  let datos = {};
  datos.email = document.getElementById('txtEmail').value;
  datos.password = document.getElementById('txtPassword').value;

  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const respuesta = await request.text();
  if(validar() == true){
      if (respuesta != "FAIL") {
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        window.location.href = 'pginscripciones.html'
      } else {
        alert("Error. Datos de inicio de sesión incorrectos");
      }
  }

function validar() {
  if ($('#txtEmail').val().length == 0) {
    alert('Campo Obligatorio, por favor ingrese el Email');
    return false;
  }
  if ($('#txtPassword').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese la Contraseña');
      return false;
    }
    return true
}
}
