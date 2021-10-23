package com.proyecto.controller;

import com.proyecto.dao.InscripcionDao;
import com.proyecto.model.Inscripcion;
import com.proyecto.model.Usuario;
import com.proyecto.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InscripcionController {

    @Autowired
    private InscripcionDao inscripcionDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/inscripciones", method = RequestMethod.GET)
    public List<Inscripcion> getInscripciones(@RequestHeader(value = "Authorization") String token) {
        if (!validarToken(token)) {
            return null;
        }

        return inscripcionDao.getInscripciones();
    }

    private boolean validarToken(String token) {
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }

    @RequestMapping(value = "api/inscripciones/registrar", method = RequestMethod.POST)
    public void registrarInscripcion(@RequestBody Inscripcion inscripcion) {
        inscripcionDao.registrarInscripcion(inscripcion);
    }

    @RequestMapping(value = "api/inscripciones/{id_inscripcion}", method = RequestMethod.DELETE)
    public void eliminarInscripcion(@RequestHeader(value = "Authorization") String token,
                                    @PathVariable Integer id_inscripcion) {
        if (!validarToken(token)) {
            return;
        }
        inscripcionDao.eliminarInscripcion(id_inscripcion);
    }

    @RequestMapping(value = "api/inscripciones/editar/{id_inscripcion}", method = RequestMethod.GET)
    public Inscripcion editarInscripcion(@PathVariable Integer id_inscripcion) {
        return inscripcionDao.editarInscripcion(id_inscripcion);
    }

    @RequestMapping(value = "api/inscripciones/modificar", method = RequestMethod.PUT)
    public void modificarInscripcion(@RequestBody Inscripcion inscripcion) {
        inscripcionDao.modificarInscripcion(inscripcion);
    }
}