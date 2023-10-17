package com.esprit.microservices.communityconnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
public class RestEvent {
    @Autowired
    private  EvenementService eventService;

    @PostMapping("/add")
    public Evenement createEvenement(@RequestBody Evenement event) {
        return eventService.addEvenement(event);
    }
    @PutMapping("/update/{id}")
    public Evenement updateEvenement(@RequestBody Evenement event, @PathVariable(value = "id") int id){
        return  eventService.updateEvenement( event, id);
    }
    @GetMapping("/GetAll")
    public List<Evenement> FindAllEvenements (){
        return eventService.retrieveAllEvenements();
    }
    @DeleteMapping("/delete/{id}")
    public String deleteEvenement(@PathVariable(value = "id") int id){
        return eventService.deleteEvenement(id);
    }
}
