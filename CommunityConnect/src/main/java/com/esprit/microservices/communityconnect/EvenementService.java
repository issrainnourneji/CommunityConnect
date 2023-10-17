package com.esprit.microservices.communityconnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvenementService {
    @Autowired
    private EvenementRepo eventRepo;
    public List<Evenement> retrieveAllEvenements() {
        return (List<Evenement>) eventRepo.findAll();

    }
    public Evenement addEvenement(Evenement event) {
        return eventRepo.save(event);
    }
    public Evenement updateEvenement(Evenement newEvenement, int id) {
        if (eventRepo.findById(id).isPresent()) {
            Evenement existingEvenement = eventRepo.findById(id).get();
            existingEvenement.setNom(newEvenement.getNom());
            existingEvenement.setDescription(newEvenement.getDescription());
            existingEvenement.setLieu(newEvenement.getLieu());
            existingEvenement.setOrganisateur(newEvenement.getOrganisateur());
            existingEvenement.setDate(newEvenement.getDate());
            existingEvenement.setMaxcapacite(newEvenement.getMaxcapacite());
            return eventRepo.save(existingEvenement);
        } else
            return null;
    }
    public String deleteEvenement(int id) {
        if (eventRepo.findById(id).isPresent()) {
            eventRepo.deleteById(id);
            return "Evenement supprimé";
        } else
            return "Evenement non supprimé";
    }
}
