pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/EBAC-QE/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                bat '''NO_COLOR=1
npm run cy:run '''
            }
        }
    }
}