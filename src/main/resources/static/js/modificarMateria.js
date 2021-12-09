// Call the dataTables jQuery plugin
$(document).ready(function() {
    console.log("pagina cargada!");
    console.log("buscamos los datos a editar!");

    var idMateria = getUrlParameter('id_materia');

    console.log("Mi id es: " + idMateria);

    editarMateria(idMateria);
});

/**
 Metodo que devuelve el valor de un parametro definido en la URL
 **/
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

async function editarMateria(id_materia) {

    const request = await fetch('api/materias/editar/'+id_materia, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const materiaEdit = await request.json();

    $("#txtidmateria").val(materiaEdit.id_materia);
    $("#txtnombremateria").val(materiaEdit.nombre);
    $("#txtestado").val(materiaEdit.estado);
    $("#txtdescripcion").val(materiaEdit.descripcion);
}

async function modificarMateria() {
    let datos = {};
    datos.id_materia = $("#txtidmateria").val();
    datos.nombre = document.getElementById('txtnombremateria').value;
    datos.estado = document.getElementById('txtestado').value;
    datos.descripcion = document.getElementById('txtdescripcion').value;

    if(validar() == false){
        return;
    }

    const request = await fetch('api/materias/modificar', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("La materia fue modificada con exito!");
    window.location.href = 'pgmaterias.html';

    function validar() {
        if ($('#txtnombremateria').val().length == 0) {
            alert('Campo Obligatorio, por favor ingrese el Nombre de la Materia');
            return false;
        }
        if ($('#txtestado').val().length == 0) {
            alert('Campo Obligatorio, por favor ingrese el Estado de la Materia (Inactivo o Activo)');
            return false;
        }else if ($('#txtestado').val() != "Activo" & $('#txtestado').val() != "Inactivo") {
            alert('Por favor ingrese Inactivo o Activo');
            return false;
        }
        if ($('#txtdescripcion').val().length == 0) {
            alert('Campo Obligatorio, por favor ingrese una descripcion para la  Materia');
            return false;
        }
        return true
    }
}