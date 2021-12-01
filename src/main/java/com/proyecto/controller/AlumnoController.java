package com.proyecto.controller;

<<<<<<< HEAD

=======
import com.proyecto.dao.AlumnoDao;
import com.proyecto.model.Alumno;
import com.proyecto.utils.JWTUtil;
>>>>>>> 8308ea6dccf8bd8037c400e096cabaff4bb60aca
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    public class AlumnoController {

        @Autowired
        private AlumnoDao alumnoDao;

        @Autowired
        private JWTUtil jwtUtil;

        @RequestMapping(value = "api/alumnos", method = RequestMethod.GET)
        public List<Alumno> getAlumnos ()  {
            return alumnoDao.getAlumnos();
        }

        private boolean validarToken(String token) {
            String usuarioId = jwtUtil.getKey(token);
            return usuarioId != null;
        }

        @RequestMapping(value = "api/alumnos/registrar", method = RequestMethod.POST)
        public void registrar(@RequestBody Alumno alumno) {
            alumnoDao.registrarAlumno(alumno);
        }

        @RequestMapping(value = "api/alumnos/{id_alumno}", method = RequestMethod.DELETE)
        public void eliminar(@RequestHeader(value="Authorization") String token,
                             @PathVariable Integer id_alumno) {
            if (!validarToken(token)) { return; }
            alumnoDao.eliminar(id_alumno);
        }

        @RequestMapping(value = "api/alumnos/editar/{id_alumno}", method = RequestMethod.GET)
        public Alumno editarAlumno(@PathVariable Integer id_alumno) {
            return alumnoDao.editarAlumno(id_alumno);
        }

        @RequestMapping(value = "api/alumnos/modificar", method = RequestMethod.PUT)
        public void modificarAlumno(@RequestBody Alumno alumno) {
            alumnoDao.modificarAlumno(alumno);
        }

    }


