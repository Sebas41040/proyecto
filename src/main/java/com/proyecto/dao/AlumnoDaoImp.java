package com.proyecto.dao;

import com.proyecto.model.Alumno;
import com.proyecto.model.Inscripcion;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

    @Repository
    @Transactional
    public class AlumnoDaoImp implements AlumnoDao {

        @PersistenceContext
        EntityManager entityManager;

        @Override
        @Transactional
        public List<Alumno> getAlumnos() {
            String query = "FROM Alumno";
            return entityManager.createQuery(query).getResultList();
        }

        @Override
        public void eliminar(Integer id_alumno) {
            Alumno alumno = entityManager.find(Alumno.class, id_alumno);
            entityManager.remove(alumno);
        }

        @Override
        public void registrarAlumno(Alumno alumno) {
            entityManager.persist(alumno);
        }

        @Override
        public Alumno editarAlumno(Integer id_alumno) {
            Alumno alumno = entityManager.find(Alumno.class, id_alumno);
            return alumno;
        }

        @Override
        public void modificarAlumno(Alumno alumno) {
            entityManager.merge(alumno); // insert or update
            entityManager.flush();
        }


        }
