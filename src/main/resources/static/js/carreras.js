//Call teh dataTables JQuery plugin
$(document).ready(function (){
    cargarCarreras();
    $('#usuarios').DataTable();
    actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario(){
    document.getElementById('txtUsuario').outerHTML = localStorage.email;
}

async function cargarCarreras(){
    const request = await fetch('api/carreras', {
        method: 'GET',
        headers : getHeaders()
    });
    const carreras = await request.json();

    let listadoHtml = '';
    for (let carrera of carreras){
        let botonEliminar = '<a href="#" onclick="eliminarCarrera(' + carrera.id_carrera + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let botonEditar = '<a href="editCarrera.html?id_carrera='+ carrera.id_carrera+'" class="btn btn-warning btn-circle btn-sm"><i class="fas fa-edit"></i></a>';
        let carreraHtml = '<tr><td>'+carrera.id_carrera+'</td><td>'+carrera.nombre_carrera+'</td><td>' + carrera.especialidad + '</td><td>' + carrera.descrpcion + '</td><td>'
            + carrera.promocion+'</td><td>'+carrera.enfasis+'</td><td>'
            + botonEliminar + botonEditar +'</td></tr>';
        listadoHtml += carreraHtml;
    }

    document.querySelector('#carreras tbody').outerHTML= listadoHtml;

}
function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}

async function eliminarCarrera(id_carrera){
    if (!confirm('¿Desea eliminar la Carrera?')){
        return;
    }

    const request =await fetch('api/carreras/' + id_carrera,{
        method: 'DELETE',
        headers: getHeaders()
        });

    location.reload()


}