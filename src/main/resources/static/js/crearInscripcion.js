async function registrarInscripcion() {
    let datos = {};
    datos.cialumno = document.getElementById('txtcialumno').value;
    datos.ciprofesor = document.getElementById('txtciprofesor').value;
    datos.materia = document.getElementById('txtmateria').value;
    datos.duracion = document.getElementById('txtduracion').value;
    datos.costo = document.getElementById('txtcosto').value;
    datos.tipdescuento = document.getElementById('txttipdescuento').value;
    datos.pordescuento = document.getElementById('txtpordescuento').value;
    datos.aplidescuento = document.getElementById('txtaplidescuento').value;


    if (validar() == false) {
        return;
    }

    const request = await fetch('api/inscripciones/registrar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("La Inscripción fue creada con exito!");
    window.location.href = 'pginscripciones.html'

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
        if ($('#txttipdescuento').val().length == 0) {
            alert('Campo Obligatorio, por favor ingrese el Tipo de Descuento');
            return false;
        }
        if ($('#txtpordescuento').val().length == 0) {
            alert('Campo Obligatorio, por favor ingrese el Porcentaje del Descuento');
            return false;
        }
        if ($('#txtaplidescuento').val().length == 0) {
            alert('Campo Obligatorio, por favor ingrese si aplica el descuento');
            return false;
        }
        return true
    }
}