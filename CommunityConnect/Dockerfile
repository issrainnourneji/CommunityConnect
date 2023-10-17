FROM openjdk:8
EXPOSE 8090
ADD target/CommunityConnect-0.0.1-SNAPSHOT.jar CommunityConnect-docker.jar
ENTRYPOINT ["java", "-jar" , "CommunityConnect-docker.jar"]