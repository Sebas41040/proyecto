// Call the dataTables jQuery plugin
$(document).ready(function() {
  console.log("pagina cargada!");
  console.log("buscamos los datos a editar!");

    var idAlumno = getUrlParameter('id_alumno');

    console.log("Mi id es: " + idAlumno);

    editarAlumno(idAlumno);
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

async function editarAlumno(id_alumno) {

  const request = await fetch('api/alumnos/editar/'+id_alumno, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const alumnoEdit = await request.json();

  // '{"id_inscripcion":14,"cialumno":123,"ciprofesor":456,"materia":"Java","duracion":12,"costo":5000}'

  $("#txtidalumno").val(alumnoEdit.id_alumno);
  $("#txtcialumno").val(alumnoEdit.ci_alumno);
  $("#txtnombre").val(alumnoEdit.nombre);
  $("#txtapellido").val(alumnoEdit.apellido);
  $("#txtdireccion").val(alumnoEdit.direccion);
  $("#txtfecha_nacimiento").val(alumnoEdit.fecha_nacimiento);
}

async function modificarAlumno() {
let datos = {};
  datos.id_alumno = $("#txtidalumno").val();
  datos.ci_alumno = document.getElementById('txtcialumno').value;
  datos.nombre = document.getElementById('txtnombre').value;
  datos.apellido = document.getElementById('txtapellido').value;
  datos.direccion = document.getElementById('txtdireccion').value;
  datos.fecha_nacimiento = document.getElementById('txtfecha_nacimiento').value;

  if(validar() == false){
    return;
    }

  const request = await fetch('api/alumnos/modificar', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("El alumno fue modificado con exito!");
  window.location.href = 'pgalumno.html';

function validar() {
  if ($('#txtcialumno').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese el Ci del Alumno');
      return false;
  }
  if ($('#txtnombre').val().length == 0) {
        alert('Campo Obligatorio, por favor ingrese el nombre del Alumno');
        return false;
  }
  if ($('#txtapellido').val().length == 0) {
    alert('Campo Obligatorio, por favor ingrese el apellido del Alumno');
    return false;
  }
  if ($('#txtdireccion').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese la direccion del Alumno');
      return false;
  }
  if ($('#txtfecha_nacimiento').val().length == 0) {
      alert('Campo Obligatorio, por favor ingrese la fecha de nacimiento del alumno');
      return false;
  }
    return true
}
}