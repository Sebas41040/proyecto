// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarProfesores();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario() {
    document.getElementById('txtUsuario').outerHTML = localStorage.email;
}

async function cargarProfesores() {
  const request = await fetch('api/profesores', {
    method: 'GET',
    headers: getHeaders()
  });
  const profesores = await request.json();


  let listadoHtml = '';
  for (let profesor of profesores) {
    let botonEliminar = '<a href="#" onclick="eliminarProfesor(' + profesor.id_profesor + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    // let botonEditar = '<a href="editInscripcion.html" onclick="modificarInscripcion(' + inscripcion.id_inscripcion + ')" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a>';
    let botonEditar = '<a href="editProfesor.html?id_profesor='+ profesor.id_profesor+'" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a>';

    let profesorHtml = '<tr><td>'+profesor.id_profesor+'</td><td>'+profesor.ci_profesor+'</td><td>'+profesor.nombre+'</td><td>' + profesor.apellido + '</td><td>' + profesor.fechanac + '</td><td>'
                    + profesor.telefono+'</td><td>'+profesor.fechingreso+'</td><td>'
                    + botonEliminar + botonEditar +'</td></tr>';
    listadoHtml += profesorHtml;
  }

document.querySelector('#profesores tbody').outerHTML = listadoHtml;

}
function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

async function eliminarProfesor(id_profesor) {

  if (!confirm('¿Desea eliminar el Profesor?')) {
    return;
  }

 const request = await fetch('api/profesores/' + id_profesor, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload()
}
