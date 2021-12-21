// Call the dataTables jQuery plugin
$(document).ready(function () {
    console.log("pagina cargada!");
    console.log("buscamos los datos a editar!");

    var idProfesor = getUrlParameter('id_profesor');

    console.log("Mi id es: " + idProfesor);

    editarProfesor(idProfesor);
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

async function editarProfesor(id_profesor) {

    const request = await fetch('api/profesores/editar/' + id_profesor, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const profesorEdit = await request.json();

    $("#txtidprofesor").val(profesorEdit.id_profesor);
    $("#txtciprofesor").val(profesorEdit.ci_profesor);
    $("#txtnombre").val(profesorEdit.nombre);
    $("#txtapellido").val(profesorEdit.apellido);
    $("#txtfechanac").val(profesorEdit.fechanac);
    $("#txttelefono").val(profesorEdit.telefono);
    $("#txtfechingreso").val(profesorEdit.fechingreso);
}

async function modificarProfesor() {
    let datos = {};
    datos.id_profesor = $("#txtidprofesor").val();
    datos.ci_profesor = document.getElementById('txtciprofesor').value;
    datos.nombre = document.getElementById('txtnombre').value;
    datos.apellido = document.getElementById('txtapellido').value;
    datos.fechanac = document.getElementById('txtfechanac').value;
    datos.telefono = document.getElementById('txttelefono').value;
    datos.fechingreso = document.getElementById('txtfechingreso').value;

    if (validar() == false) {
        return;
    }

    const request = await fetch('api/profesores/modificar', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("El/la Profesor/a fue modificado/a con éxito!");
    window.location.href = 'pgprofesor.html';

    function validar() {
        const DATE_REGEX = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
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
        if (!$('#txtfechanac').val().match(DATE_REGEX)) {
            alert('Fecha de Nacimiento Inválida, Ingrese Fecha DD/MM/AAAA o Fecha fuera de rango');
            return false
        }
        if (!$('#txtfechingreso').val().match(DATE_REGEX)) {
            alert('Fecha de Ingreso Inválida, Ingrese Fecha DD/MM/AAAA o Fecha fuera de rango');
            return false
        }
        return true
    }
}