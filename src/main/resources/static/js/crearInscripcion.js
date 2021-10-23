
async function registrarInscripcion() {
  let datos = {};
  datos.cialumno = document.getElementById('txtcialumno').value;
  datos.ciprofesor = document.getElementById('txtciprofesor').value;
  datos.materia = document.getElementById('txtmateria').value;
  datos.duracion = document.getElementById('txtduracion').value;
  datos.costo = document.getElementById('txtcosto').value;

  if(validar() == false){
    return;
    }

  const request = await fetch('api/inscripciones/registrar', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La Inscripción fue creada con exito!");
  window.location.href = 'pginscripciones.html'

function validar() {
  if ($('#txtcialumno').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese el Ci del Alumno');
      return false;
  }
  if ($('#txtciprofesor').val().length == 0) {
        alert('Campo Obligatorio, por favor ingrese el Ci del Profesor');
        return false;
  }
  if ($('#txtmateria').val().length == 0) {
    alert('Campo Obligatorio, por favor ingrese la Materia');
    return false;
  }
  if ($('#txtduracion').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese la Duración');
      return false;
  }
  if ($('#txtcosto').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese el Costo');
      return false;
  }
    return true
}
}