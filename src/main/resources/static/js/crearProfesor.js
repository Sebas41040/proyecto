
async function registrarProfesor() {
  let datos = {};
  datos.ci_profesor = document.getElementById('txtciprofesor').value;
  datos.nombre = document.getElementById('txtnombre').value;
  datos.apellido = document.getElementById('txtapellido').value;
  datos.fechanac = document.getElementById('txtfechanac').value;
  datos.telefono = document.getElementById('txttelefono').value;
  datos.fechingreso = document.getElementById('txtfechingreso').value;

  if(validar() == false){
    return;
    }

  const request = await fetch('api/profesores/registrar', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("¡El profesor fue creado con éxito!");
  window.location.href = 'pgprofesor.html'

function validar() {
  if ($('#txtciprofesor').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese el Ci del Profesor');
      return false;
  }
  if ($('#txtnombre').val().length == 0) {
        alert('Campo Obligatorio, por favor ingrese el nombre del Profesor');
        return false;
  }
  if ($('#txtapellido').val().length == 0) {
    alert('Campo Obligatorio, por favor ingrese el apellido del Profesor');
    return false;
  }
  if ($('#txtfechanac').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese la fecha de nacimiento del Profesor');
      return false;
  }
  if ($('#txttelefono').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese el número de telefono del Profesor');
      return false;
  }
  if ($('#txtfechingreso').val().length == 0) {
        alert('Campo Obligatorio, por favor ingrese la fecha de ingreso del Profesor');
        return false;
    }
    return true
}
}