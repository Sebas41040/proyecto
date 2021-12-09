
async function registrarMateria() {
    let datos = {};
    datos.nombre = document.getElementById('txtnombremateria').value;
    datos.estado = document.getElementById('txtestado').value;
    datos.descripcion = document.getElementById('txtdescripcion').value;

    if(validar() == false){
        return;
    }

    const request = await fetch('api/materias/registrar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert("La Materia fue creada con exito!");
    window.location.href = 'pgmaterias.html'

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