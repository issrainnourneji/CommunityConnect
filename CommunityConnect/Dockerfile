FROM openjdk:11
EXPOSE 8084
ADD target/CommunityConnect-0.0.1-SNAPSHOT.jar CommunityConnect-docker.jar
ENTRYPOINT ["java", "-jar" , "CommunityConnect-docker.jar"]