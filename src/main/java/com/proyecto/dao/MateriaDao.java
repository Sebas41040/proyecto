package com.proyecto.dao;

import com.proyecto.model.Materia;

import java.util.List;


public interface MateriaDao {
    List<Materia> getMaterias();

    void eliminar(Integer id_materia);

    void registrarMateria(Materia materia);

    Materia editarMateria(Integer id_materia);

    void modificarMateria(Materia materia);
}
