package com.proyecto.dao;


import com.proyecto.model.Inscripcion;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class InscripcionDaoImp implements InscripcionDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Inscripcion> getInscripciones() {
        String query = "FROM Inscripcion";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminarInscripcion(Integer id_inscripcion) {
        Inscripcion inscripcion = entityManager.find(Inscripcion.class, id_inscripcion);
        entityManager.remove(inscripcion);
    }

    @Override
    public void registrarInscripcion(Inscripcion inscripcion) {
        entityManager.persist(inscripcion);
    }

    @Override
    public Inscripcion editarInscripcion(Integer id_inscripcion) {
        Inscripcion inscripcion = entityManager.find(Inscripcion.class, id_inscripcion);
        return inscripcion;
    }

    @Override
    public void modificarInscripcion(Inscripcion inscripcion) {
        entityManager.merge(inscripcion); // insert or update
        entityManager.flush();
    }
}

