// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarAlumnos();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario() {
    document.getElementById('txtUsuario').outerHTML = localStorage.email;
}

async function cargarAlumnos() {
  const request = await fetch('api/alumnos', {
    method: 'GET',
    headers: getHeaders()
  });
  const alumnos = await request.json();


  let listadoHtml = '';
  for (let alumno of alumnos) {
    let botonEliminar = '<a href="#" onclick="eliminarAlumno(' + alumno.id_alumno + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    // let botonEditar = '<a href="editInscripcion.html" onclick="modificarInscripcion(' + inscripcion.id_inscripcion + ')" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a>';
    let botonEditar = '<a href="editAlumno.html?id_alumno='+ alumno.id_alumno+'" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a>';

    let alumnoHtml = '<tr><td>'+alumno.id_alumno+'</td><td>'+alumno.ci_alumno+'</td><td>' + alumno.nombre + '</td><td>' + alumno.apellido + '</td><td>'
                    + alumno.direccion+'</td><td>'+alumno.fecha_nacimiento+'</td><td>'
                    + botonEliminar + botonEditar +'</td></tr>';
    listadoHtml += alumnoHtml;
  }

document.querySelector('#alumnos tbody').outerHTML = listadoHtml;

}
function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

async function eliminarAlumno(id_alumno) {

  if (!confirm('¿Desea eliminar el Alumno?')) {
    return;
  }

 const request = await fetch('api/alumnos/' + id_alumno, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload()
}
