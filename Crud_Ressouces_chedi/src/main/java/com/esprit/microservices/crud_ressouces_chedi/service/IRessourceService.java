package com.esprit.microservices.crud_ressouces_chedi.service;

import com.esprit.microservices.crud_ressouces_chedi.models.Ressource;

import java.util.List;

public interface IRessourceService {
    Ressource addRessource (Ressource re);

    Ressource updateRessource (Ressource re, Integer idRessource);

    List<Ressource> retrieveAllRessource();

    Ressource retrieveRessource (Integer idRessource);

    void removeRessource(Integer idRessource);
}
