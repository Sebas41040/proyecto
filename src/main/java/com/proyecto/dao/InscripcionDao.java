package com.proyecto.dao;

import com.proyecto.model.Inscripcion;

import java.util.List;

public interface InscripcionDao {
    List<Inscripcion> getInscripciones();

    void eliminarInscripcion(Integer id_inscripcion);

    void registrarInscripcion(Inscripcion inscripcion);

    Inscripcion editarInscripcion(Integer id_inscripcion);

    void modificarInscripcion(Inscripcion inscripcion);
}

