package com.proyecto.dao;


import com.proyecto.model.Carrera;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class CarreraDaolmp implements CarreraDao{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Carrera> getCarreras(){
        String query= "FROM Carrera";
        return entityManager.createQuery(query).getResultList();

    }

    @Override
    public void eliminar(Integer id_carrera){
        Carrera carrera= entityManager.find(Carrera.class, id_carrera);
        entityManager.remove(carrera);
    }

    @Override
    public void registrarCarrera(Carrera carrera){
        entityManager.persist(carrera);
    }

    @Override
    public Carrera editarCarrera(Integer id_carrera) {
        Carrera carrera= entityManager.find(Carrera.class, id_carrera);
        return carrera;
    }

    @Override
    public void modificarCarrera(Carrera carrera){
        entityManager.merge(carrera);
        entityManager.flush();
    }
}
