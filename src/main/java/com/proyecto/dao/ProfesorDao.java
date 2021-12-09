package com.proyecto.dao;

import com.proyecto.model.Profesor;

import java.util.List;


public interface ProfesorDao {
    List<Profesor> getProfesores();

    void eliminar(Integer id_profesor);

    void registrarProfesor(Profesor profesor);

    Profesor editarProfesor(Integer id_profesor);

    void modificarProfesor(Profesor profesor);
}


