package com.proyecto.controller;

import com.proyecto.dao.MateriaDao;
import com.proyecto.model.Materia;
import com.proyecto.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MateriaController {
    private boolean validarToken(String token) {
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }
    @Autowired
    private MateriaDao materiaDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/materias", method = RequestMethod.GET)
    public List<Materia> getMaterias ()  {
        return materiaDao.getMaterias();
    }


    @RequestMapping(value = "api/materias/registrar", method = RequestMethod.POST)
    public void registrar(@RequestBody Materia materia) {
        materiaDao.registrarMateria(materia);
    }

    @RequestMapping(value = "api/materias/{id_materia}", method = RequestMethod.DELETE)
    public void eliminar(@RequestHeader(value="Authorization") String token,
                         @PathVariable Integer id_materia) {
        if (!validarToken(token)) { return; }
        materiaDao.eliminar(id_materia);
    }

    @RequestMapping(value = "api/materias/editar/{id_materia}", method = RequestMethod.GET)
    public Materia editarMateria(@PathVariable Integer id_materia) {
        return materiaDao.editarMateria(id_materia);
    }

    @RequestMapping(value = "api/materias/modificar", method = RequestMethod.PUT)
    public void modificarMateria(@RequestBody Materia materia) {
        materiaDao.modificarMateria(materia);
    }

}



