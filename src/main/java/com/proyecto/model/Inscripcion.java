package com.proyecto.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "inscripcion")
@ToString @EqualsAndHashCode
public class Inscripcion {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id_inscripcion")
    private Integer id_inscripcion;

    @Getter @Setter @Column(name = "cialumno")
    private Integer cialumno;

    @Getter @Setter @Column(name = "ciprofesor")
    private Integer ciprofesor;

    @Getter @Setter @Column(name = "materia")
    private String materia;

    @Getter @Setter @Column(name = "duracion")
    private Integer duracion;

    @Getter @Setter @Column(name = "costo")
    private Integer costo;

}
