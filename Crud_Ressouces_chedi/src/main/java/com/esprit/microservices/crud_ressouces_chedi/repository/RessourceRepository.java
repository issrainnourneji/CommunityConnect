package com.esprit.microservices.crud_ressouces_chedi.repository;

import com.esprit.microservices.crud_ressouces_chedi.models.Ressource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RessourceRepository extends JpaRepository<Ressource,Integer> {
}
