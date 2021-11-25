// Call the dataTables jQuery plugin
$(document).ready(function() {
  console.log("pagina cargada!");
  console.log("buscamos los datos a editar!");

    var idInscripcion = getUrlParameter('idInscripcion');

    console.log("Mi id es: " + idInscripcion);

    editarInscripcion(idInscripcion);
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

async function editarInscripcion(id_inscripcion) {

  const request = await fetch('api/inscripciones/editar/'+id_inscripcion, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const inscripcionEdit = await request.json();

  // '{"id_inscripcion":14,"cialumno":123,"ciprofesor":456,"materia":"Java","duracion":12,"costo":5000}'

  $("#txtidinscripcion").val(inscripcionEdit.id_inscripcion);
  $("#txtcialumno").val(inscripcionEdit.cialumno);
  $("#txtciprofesor").val(inscripcionEdit.ciprofesor);
  $("#txtmateria").val(inscripcionEdit.materia);
  $("#txtduracion").val(inscripcionEdit.duracion);
  $("#txtcosto").val(inscripcionEdit.costo);
}

async function modificarInscripcion() {
let datos = {};
  datos.id_inscripcion = $("#txtidinscripcion").val();
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
  alert("La Inscripción fue modificada con exito!");
  window.location.href = 'pginscripciones.html';

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