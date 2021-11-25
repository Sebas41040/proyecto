
async function registrarAlumno() {
  let datos = {};
  datos.ci_alumno = document.getElementById('txtcialumno').value;
  datos.nombre = document.getElementById('txtnombre').value;
  datos.apellido = document.getElementById('txtapellido').value;
  datos.direccion = document.getElementById('txtdireccion').value;
  datos.fecha_nacimiento = document.getElementById('txtfecha_nacimiento').value;

  if(validar() == false){
    return;
    }

  const request = await fetch('api/alumnos/registrar', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("¡El alumno fue creado con éxito!");
  window.location.href = 'pgalumno.html'

function validar() {
  if ($('#txtcialumno').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese el Ci del Alumno');
      return false;
  }
  if ($('#txtnombre').val().length == 0) {
        alert('Campo Obligatorio, por favor ingrese el nombre del Alumno');
        return false;
  }
  if ($('#txtapellido').val().length == 0) {
    alert('Campo Obligatorio, por favor ingrese el apellido del Alumno');
    return false;
  }
  if ($('#txtdireccion').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese la direccion del Alumno');
      return false;
  }
  if ($('#txtfecha_nacimiento').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese la fecha de nacimiento del Alumno');
      return false;
  }
    return true
}
}