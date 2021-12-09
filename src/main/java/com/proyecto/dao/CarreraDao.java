package com.proyecto.dao;

import com.proyecto.model.Carrera;

import java.util.List;

public interface CarreraDao {
    List<Carrera> getCarreras();

    void eliminar(Integer id_carrera);

    void registrarCarrera(Carrera carrera);

    Carrera editarCarrera(Integer id_carrera);

    void modificarCarrera(Carrera carrera);
}
