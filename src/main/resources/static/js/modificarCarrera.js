// Call the dataTables jQuery plugin
$(document).ready(function() {
    console.log("pagina cargada!");
    console.log("buscamos los datos a editar!");

    var idCarrera = getUrlParameter('id_carrera');

    console.log("Mi id es: " + idCarrera);

    editarCarrera(idCarrera);
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

async function editarCarrera(id_carrera) {

    const request = await fetch('api/carreras/editar/'+id_carrera, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const carreraEdit= await request.json();

    $("#txtidcarrera").val(carreraEdit.id_carrera);
    $("#txtnombre").val(carreraEdit.nombre_carrera);
    $("#txtespecialidad").val(carreraEdit.especialidad);
    $("#txtdescrpcion").val(carreraEdit.descrpcion);
    $("#txtpromocion").val(carreraEdit.promocion);
    $("#txtenfasis").val(carreraEdit.enfasis);

}

async  function modificarCarrera(){
    let datos = {};
    datos.id_carrera = $('#txtidcarrera').val();
    datos.nombre_carrera = document.getElementById('txtnombre').value;
    datos.especialidad = document.getElementById('txtespecialidad').value;
    datos.descrpcion = document.getElementById('txtdescrpcion').value;
    datos.promocion = document.getElementById('txtpromocion').value;
    datos.enfasis = document.getElementById('txtenfasis').value;

    if(validar() == false){
        return;
    }

        const request = await fetch('api/carreras/modificar', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

    alert("¡La carrera fue modificada con éxito!");
    window.location.href = ' pgcarrera.html'

    function validar(){
        if ($('#txtnombre').val().length == 0){
            alert('Campo Onligatorio, por favor ingrese el nombre de la Carrera')
            return false;
        }
        if ($('#txtespecialidad').val().length == 0){
            alert('Campo Onligatorio, por favor ingrese la Especialidad')
            return false;
        }
        if ($('#txtdescrpcion').val().length == 0){
            alert('Campo Onligatorio, por favor ingrese la Descrpcion')
            return false;
        }
        if ($('#txtpromocion').val().length == 0){
            alert('Campo Onligatorio, por favor ingrese la Promocion')
            return false;
        }
        if ($('#txtenfasis').val().length == 0){
            alert('Campo Onligatorio, por favor ingrese el Endasis')
            return false;
        }
        return true
    }

}