async function registrarCarrera(){
    let datos = {};
    datos.nombre_carrera = document.getElementById('txtnombre').value;
    datos.especialidad = document.getElementById('txtespecialidad').value;
    datos.descrpcion = document.getElementById('txtdescrpcion').value;
    datos.promocion = document.getElementById('txtpromocion').value;
    datos.enfasis = document.getElementById('txtenfasis').value;

    if(validar() == false){
        return;
    }

   const request = await fetch('api/carreras/registrar', {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)

   });

    alert("¡La carrera fue creada con éxito!");
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