// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarInscripciones();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario() {
    document.getElementById('txtUsuario').outerHTML = localStorage.email;
}


async function cargarInscripciones() {
  const request = await fetch('api/inscripciones', {
    method: 'GET',
    headers: getHeaders()
  });
  const inscripciones = await request.json();


  let listadoHtml = '';
  for (let inscripcion of inscripciones) {
    let botonEliminar = '<a href="#" onclick="eliminarInscripcion(' + inscripcion.id_inscripcion + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    // let botonEditar = '<a href="editInscripcion.html" onclick="modificarInscripcion(' + inscripcion.id_inscripcion + ')" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a>';
    let botonEditar = '<a href="editInscripcion.html?idInscripcion='+ inscripcion.id_inscripcion+'" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a>';

    let inscripcionHtml = '<tr><td>'+inscripcion.id_inscripcion+'</td><td>' + inscripcion.cialumno + '</td><td>' + inscripcion.ciprofesor + '</td><td>'
                    + inscripcion.materia+'</td><td>'+inscripcion.duracion+'</td><td>'+inscripcion.costo
                    + '</td><td>' + botonEliminar + botonEditar +'</td></tr>';
    listadoHtml += inscripcionHtml;
  }

document.querySelector('#inscripciones tbody').outerHTML = listadoHtml;

}

function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

async function eliminarInscripcion(id_inscripcion) {

  if (!confirm('¿Desea eliminar esta inscripción?')) {
    return;
  }

 const request = await fetch('api/inscripciones/' + id_inscripcion, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload()
}
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

async function modificarInscripcion(id_inscripcion) {
let datos = {};
  datos.id_inscripcion = id_inscripcion;
  datos.cialumno = document.getElementById('txtcialumno').value;
  datos.ciprofesor = document.getElementById('txtciprofesor').value;
  datos.materia = document.getElementById('txtmateria').value;
  datos.duracion = document.getElementById('txtduracion').value;
  datos.costo = document.getElementById('txtcosto').value;

  if(validar() == false){
    return;
    }

  const request = await fetch('api/inscripciones/modificar', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La Inscripción fue moficicada con exito!");
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


async function editarInscripcion(id_inscripcion) {

  const request = await fetch('api/inscripciones/editar/'+id_inscripcion, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const inscripcionEdit = await request.json();

  console.log(inscripcionEdit);
}