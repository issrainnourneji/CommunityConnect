package com.esprit.microservices.communityconnect;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

public class Evenement implements Serializable {
    private static final long serialVersionUID = 6
            @Id
            @GeneratedValue
    private int idE;
    private String nom, description,lieu, organisateur;
    private Date date ;
    private capacité maximale;


    public Evenement() {
    }

    public Evenement(String nom, String description, String lieu, String organisateur, Date date, capacité maximale) {
        this.nom = nom;
        this.description = description;
        this.lieu = lieu;
        this.organisateur = organisateur;
        this.date = date;
        this.maximale = maximale;
    }

    public int getIdE() {
        return idE;
    }

    public String getNom() {
        return nom;
    }

    public String getDescription() {
        return description;
    }

    public String getLieu() {
        return lieu;
    }

    public String getOrganisateur() {
        return organisateur;
    }

    public Date getDate() {
        return date;
    }

    public capacité getMaximale() {
        return maximale;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public void setOrganisateur(String organisateur) {
        this.organisateur = organisateur;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setMaximale(capacité maximale) {
        this.maximale = maximale;
    }
}
