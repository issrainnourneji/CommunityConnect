package com.esprit.microservices.crud_ressouces_chedi.service;

import com.esprit.microservices.crud_ressouces_chedi.models.Ressource;
import com.esprit.microservices.crud_ressouces_chedi.repository.RessourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RessourceService implements IRessourceService{

    @Autowired
    RessourceRepository ressourceRepo;

    @Override
    public Ressource addRessource(Ressource re) {
        return ressourceRepo.save(re);
    }

    @Override
    public Ressource updateRessource(Ressource re, Integer idRessource) {
        if (ressourceRepo.findById(idRessource).isPresent()) {
            Ressource existingRessource = ressourceRepo.findById(idRessource).get();
            existingRessource.setName(re.getName());
            existingRessource.setType(re.getType());
            existingRessource.setLocation(re.getLocation());
            existingRessource.setOwner(re.getOwner());
            return ressourceRepo.save(existingRessource);
        } else {
            return null;
        }
    }

    @Override
    public List<Ressource> retrieveAllRessource() {
        return (List<Ressource>) ressourceRepo.findAll();
    }

    @Override
    public Ressource retrieveRessource(Integer idRessource) {
        return ressourceRepo.findById(idRessource).get();
    }

    @Override
    public void removeRessource(Integer idRessource) {
        ressourceRepo.deleteById(idRessource);
    }
}
