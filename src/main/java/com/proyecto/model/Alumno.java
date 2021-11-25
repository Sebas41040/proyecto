package com.proyecto.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;


    @Entity
    @Table(name = "alumno")
    @ToString
    @EqualsAndHashCode
    public class Alumno {

        @Id
        @GeneratedValue(strategy= GenerationType.IDENTITY)
        @Getter @Setter @Column(name = "id_alumno")
        private Integer id_alumno;

        @Getter @Setter @Column(name = "ci_alumno")
        private Integer ci_alumno;

        @Getter @Setter @Column(name = "nombre")
        private String nombre;

        @Getter @Setter @Column(name = "apellido")
        private String apellido;

        @Getter @Setter @Column(name = "direccion")
        private String direccion;

        @Getter @Setter @Column(name = "fecha_nacimiento")
        private String fecha_nacimiento;


    }


