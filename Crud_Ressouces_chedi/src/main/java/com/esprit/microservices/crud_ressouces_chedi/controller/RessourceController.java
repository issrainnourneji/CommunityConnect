package com.esprit.microservices.crud_ressouces_chedi.controller;

import com.esprit.microservices.crud_ressouces_chedi.models.Ressource;
import com.esprit.microservices.crud_ressouces_chedi.service.IRessourceService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@Slf4j
@RequestMapping("ressource")
@RestController
public class RessourceController {

     @Autowired
    IRessourceService RessourceService;

    @PostMapping("/add")
    @ResponseBody
    public Ressource addRessource(@RequestBody Ressource re) {
        return RessourceService.addRessource(re) ;
    }

    @PutMapping("/update/{idRessource}")
    public Ressource updateRessource(@RequestBody Ressource re,@PathVariable(value = "idRessource") int idRessource){
        return RessourceService.updateRessource(re,idRessource);
    }


    @GetMapping("/retrieveAllRessource")
    @ResponseBody
    public List<Ressource> retrieveAllRessource() {
        return  RessourceService.retrieveAllRessource();
    }

    @GetMapping("/get/{idRessource}")
    public Ressource getById(@PathVariable("idRessource") Integer id){
        return RessourceService.retrieveRessource(id);
    }

    @DeleteMapping("/remove/{idRessource}")
    public void removeRessource(@PathVariable("idRessource") Integer id){
        RessourceService.removeRessource(id);
    }
}
