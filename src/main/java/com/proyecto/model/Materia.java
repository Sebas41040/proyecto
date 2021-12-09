package com.proyecto.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "materia")
@ToString @EqualsAndHashCode
public class Materia {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id_materia")
    private Integer id_materia;

    @Getter @Setter @Column(name = "nombre")
    private String nombre;

    @Getter @Setter @Column(name = "estado")
    private String estado;

    @Getter @Setter @Column(name = "descripcion")
    private String descripcion;
}
