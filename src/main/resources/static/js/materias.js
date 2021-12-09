// Call the dataTables jQuery plugin
// noinspection JSUnresolvedVariable

$(document).ready(function() {
    cargarMaterias();
    $('#usuarios').DataTable();
    actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario() {
    document.getElementById('txtUsuario').outerHTML = localStorage.email;
}

async function cargarMaterias() {
    const request = await fetch('api/materias', {
        method: 'GET',
        headers: getHeaders()
    });
    const materias = await request.json();


    let listadoHtml = '';
    for (let materia of materias) {
        let botonEliminar = '<a href="#" onclick="eliminarMateria(' + materia.id_materia + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let botonEditar = '<a href="editMateria.html?id_materia='+ materia.id_materia+'" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a>';

        let materiaHtml = '<tr><td>'+materia.id_materia+'</td><td>'+materia.nombre+'</td><td>' + materia.estado + '</td><td>' + materia.descripcion + '</td><td>'
            + botonEliminar + botonEditar +'</td></tr>';
        listadoHtml += materiaHtml;
    }

    document.querySelector('#materias tbody').outerHTML = listadoHtml;

}
function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}

async function eliminarMateria(id_materia) {

    if (!confirm('¿Desea eliminar la Materia?')) {
        return;
    }

    const request = await fetch('api/materias/' + id_materia, {
        method: 'DELETE',
        headers: getHeaders()
    });

    location.reload()
}
