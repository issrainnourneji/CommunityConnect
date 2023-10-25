package com.esprit.microservices.communityconnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CommunityConnectApplication {

    public static void main(String[] args) {
        SpringApplication.run(CommunityConnectApplication.class, args);
    }

}
