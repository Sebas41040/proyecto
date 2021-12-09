package com.proyecto.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;


@Entity
@Table(name = "profesor")
@ToString
@EqualsAndHashCode
public class Profesor {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id_profesor")
    private Integer id_profesor;

    @Getter @Setter @Column(name = "ci_profesor")
    private Integer ci_profesor;

    @Getter @Setter @Column(name = "nombre")
    private String nombre;

    @Getter @Setter @Column(name = "apellido")
    private String apellido;

    @Getter @Setter @Column(name = "fechanac")
    private String fechanac;

    @Getter @Setter @Column(name = "telefono")
    private String telefono;

    @Getter @Setter @Column(name = "fechingreso")
    private String fechingreso;


}


