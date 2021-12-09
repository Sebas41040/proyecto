package com.proyecto.dao;

import com.proyecto.model.Alumno;
import com.proyecto.model.Profesor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class ProfesorDaoImp implements ProfesorDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Profesor> getProfesores() {
        String query = "FROM Profesor";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Integer id_profesor) {
        Profesor profesor = entityManager.find(Profesor.class, id_profesor);
        entityManager.remove(profesor);
    }

    @Override
    public void registrarProfesor(Profesor profesor) {
        entityManager.persist(profesor);
    }

    @Override
    public Profesor editarProfesor(Integer id_profesor) {
        Profesor profesor = entityManager.find(Profesor.class, id_profesor);
        return profesor;
    }

    @Override
    public void modificarProfesor(Profesor profesor) {
        entityManager.merge(profesor); // insert or update
        entityManager.flush();
    }

    }
