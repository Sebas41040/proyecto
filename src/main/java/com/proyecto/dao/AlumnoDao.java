package com.proyecto.dao;

import com.proyecto.model.Alumno;

import java.util.List;


    public interface AlumnoDao {
        List<Alumno> getAlumnos();

        void eliminar(Integer id_alumno);

        void registrarAlumno(Alumno alumno);

        Alumno editarAlumno(Integer id_alumno);

        void modificarAlumno(Alumno alumno);
    }


