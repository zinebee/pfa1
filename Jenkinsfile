pipeline{
    agent any
    stages{
        stage('Charger le contenue du depot du github'){
            steps{
                 git credentialsId: 'git_credentials',url: 'https://github.com/zinebee/pfa1.git'
            }
        }
        stage('message simple'){
            steps{
                sh "echo 'bonjour dans votre site'"
            }
        }
    }
}