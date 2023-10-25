package com.esprit.microservices.crud_ressouces_chedi.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Table(name="Ressource")
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor

public class Ressource implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idRessource")
    private int idRessource;
    private String name;
    private String type;
    private String location;
    private String owner;


}
