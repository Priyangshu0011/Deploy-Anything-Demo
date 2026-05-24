pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/priyangshu0011/Deploy-Anything-Demo.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh 'cd backend && docker build -t deployx-backend .'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'cd frontend && docker build -t deployx-frontend .'
            }
        }

        stage('Success') {
            steps {
                echo 'CI/CD Automation Working Successfully 🚀'
            }
        }
    }
}
