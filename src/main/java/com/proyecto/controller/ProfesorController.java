package com.proyecto.controller;

import com.proyecto.dao.ProfesorDao;
import com.proyecto.model.Profesor;
import com.proyecto.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProfesorController {
    private boolean validarToken(String token) {
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }
    @Autowired
    private ProfesorDao profesorDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/profesores", method = RequestMethod.GET)
    public List<Profesor> getProfesores ()  {
        return profesorDao.getProfesores();
    }


    @RequestMapping(value = "api/profesores/registrar", method = RequestMethod.POST)
    public void registrar(@RequestBody Profesor profesor) {
        profesorDao.registrarProfesor(profesor);
    }

    @RequestMapping(value = "api/profesores/{id_profesor}", method = RequestMethod.DELETE)
    public void eliminar(@RequestHeader(value="Authorization") String token,
                         @PathVariable Integer id_profesor) {
        if (!validarToken(token)) { return; }
        profesorDao.eliminar(id_profesor);
    }

    @RequestMapping(value = "api/profesores/editar/{id_profesor}", method = RequestMethod.GET)
    public Profesor editarProfesor(@PathVariable Integer id_profesor) {
        return profesorDao.editarProfesor(id_profesor);
    }

    @RequestMapping(value = "api/profesores/modificar", method = RequestMethod.PUT)
    public void modificarProfesor(@RequestBody Profesor profesor) {
        profesorDao.modificarProfesor(profesor);
    }

}


