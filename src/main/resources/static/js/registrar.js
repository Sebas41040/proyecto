$(document).ready(function() {
   // on ready
});


async function registrarUsuario() {
  let datos = {};
  datos.nombre = document.getElementById('txtNombre').value;
  datos.apellido = document.getElementById('txtApellido').value;
  datos.email = document.getElementById('txtEmail').value;
  datos.password = document.getElementById('txtPassword').value;

  let repetirPassword = document.getElementById('txtRepetirPassword').value;

  if (repetirPassword != datos.password) {
    alert('La contraseña que escribiste es diferente.');
    return;
  }

  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La cuenta fue creada con exito!");
  window.location.href = 'login.html'

function validar() {
  if ($('#txtNombre').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese el Nombre');
      return false;
  }
  if ($('#txtApellido').val().length == 0) {
        alert('Campo Obligatorio, por favor ingrese el Apellido');
        return false;
  }
  if ($('#txtEmail').val().length == 0) {
    alert('Campo Obligatorio, por favor ingrese el Email');
    return false;
  }
  if ($('#txtPassword').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese la Contraseña');
      return false;
  }
  if ($('#txtRepetirPassword').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese de nuevo la Contraseña');
      return false;
  }
    return true
}
}
