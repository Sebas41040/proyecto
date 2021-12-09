package com.proyecto.model;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="carrera")
@ToString
@EqualsAndHashCode
public class Carrera {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id_carrera")
    private Integer id_carrera;

    @Getter  @Setter @Column(name = "nombre_carrera")
    private String nombre_carrera;

    @Getter @Setter @Column(name = "especialidad")
    private String especialidad;

    @Getter @Setter @Column(name = "descrpcion")
    private String descrpcion;

    @Getter @Setter @Column(name = "promocion")
    private String promocion;

    @Getter @Setter @Column(name = "enfasis")
    private String enfasis;

}
