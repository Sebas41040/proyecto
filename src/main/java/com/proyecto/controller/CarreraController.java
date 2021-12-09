package com.proyecto.controller;


import com.proyecto.dao.CarreraDao;
import com.proyecto.model.Carrera;
import com.proyecto.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarreraController {
    private boolean validarToken(String token){
        String usuarioID= jwtUtil.getKey(token);
        return usuarioID != null;
    }

    @Autowired
    private CarreraDao carreraDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/carreras", method = RequestMethod.GET)
    public List<Carrera> getCarrera (){
        return carreraDao.getCarreras();
    }

    @RequestMapping(value = "api/carreras/registrar", method = RequestMethod.POST)
    public void registrar(@RequestBody Carrera carrera){
        carreraDao.registrarCarrera(carrera);
    }

    @RequestMapping(value = "api/carreras/{id_carrera}", method = RequestMethod.DELETE)
    public void eliminar(@RequestHeader(value = "Authorization") String token,
                         @PathVariable Integer id_carrera){
        if (!validarToken(token)){
            return;
        }
        carreraDao.eliminar(id_carrera);
    }

    @RequestMapping(value = "api/carreras/editar/{id_carrera}", method = RequestMethod.GET)
    public Carrera editarCarrera(@PathVariable Integer id_carrera){
        return carreraDao.editarCarrera(id_carrera);
    }

    @RequestMapping(value = "api/carreras/modificar", method = RequestMethod.PUT)
    public void modificarCarrera(@RequestBody Carrera carrera){
        carreraDao.modificarCarrera(carrera);
    }

}
