package com.example.UserModule.services.interfaces;

import com.example.UserModule.persistance.entities.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IUser {

    public User createUser(User user);

    public Optional<User> getUserById(Long id) ;

    public List<User> getAllUsers() ;


    public User updateUser(User user) ;

    public void deleteUser(User user) ;
}
