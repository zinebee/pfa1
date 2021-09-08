FROM openjdk:13
EXPOSE 8080
ADD target/pfa1.jar  pfa1.jar  
ENTRYPOINT ["java","-jar","/pfa1.jar"]
