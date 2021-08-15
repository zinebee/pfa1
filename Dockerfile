FROM openjdk:16
EXPOSE 8080
ADD target/pfa.jar  pfa.jar  
ENTRYPOINT ["java","-jar","/pfa.jar"]
