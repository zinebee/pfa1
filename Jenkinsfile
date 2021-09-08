pipeline{
    agent any
    environment{
        User_Password= "zinebee12345"
    }
    stages{
    stage('Charger le contenue du depot distant du github'){
        steps{
            git credentialsId: 'git_credentials',url: 'https://github.com/zinebee/pfa1.git'
        }
    }
    stage('Faire le  build'){
        steps{
            sh 'mvn clean compile'
        }
    }
    stage('package de mon application sous format jar'){
        steps{
                sh 'mvn clean package'
        }
    }
    stage('Test Unitaire'){
        steps{
            sh 'mvn test'
        }
    }
    
    
}
}