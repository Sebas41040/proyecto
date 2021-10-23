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
