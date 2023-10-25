package com.example.UserModule.controllers;

import com.example.UserModule.persistance.entities.User;
import com.example.UserModule.services.interfaces.IUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUser userSerivce;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User reservationEquipement) {
        User createdReservationEquipement = userSerivce.createUser(reservationEquipement);
        return new ResponseEntity<>(createdReservationEquipement, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> reservationEquipement = userSerivce.getUserById(id);
        if (reservationEquipement != null) {
            return new ResponseEntity<>(reservationEquipement.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User reservationEquipement) {
        Optional<User> existingReservationEquipement = userSerivce.getUserById(id);
        if (existingReservationEquipement != null) {
            reservationEquipement.setId(id);
            User updatedReservationEquipement = userSerivce.updateUser(reservationEquipement);
            return new ResponseEntity<>(updatedReservationEquipement, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id) {
        Optional<User> reservationEquipement = userSerivce.getUserById(id);
        if (reservationEquipement != null) {
            userSerivce.deleteUser(reservationEquipement.get());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}

