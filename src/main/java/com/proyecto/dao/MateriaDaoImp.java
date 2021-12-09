package com.proyecto.dao;

import com.proyecto.model.Materia;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class MateriaDaoImp implements MateriaDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Materia> getMaterias() {
        String query = "FROM Materia";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Integer id_materia) {
        Materia materia = entityManager.find(Materia.class, id_materia);
        entityManager.remove(materia);
    }

    @Override
    public void registrarMateria(Materia materia) {
        entityManager.merge(materia);
    }
    @Override
    public Materia editarMateria(Integer id_materia) {
        Materia materia = entityManager.find(Materia.class, id_materia);
        return materia;
    }

    @Override
    public void modificarMateria(Materia materia) {
        entityManager.merge(materia); // insert or update
        entityManager.flush();
    }
}
