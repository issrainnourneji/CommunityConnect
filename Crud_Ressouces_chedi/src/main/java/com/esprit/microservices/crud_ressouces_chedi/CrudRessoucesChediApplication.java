package com.esprit.microservices.crud_ressouces_chedi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CrudRessoucesChediApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudRessoucesChediApplication.class, args);
    }

}
