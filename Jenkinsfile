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

        stage('Restart Kubernetes Deployments') {
            steps {
                sh 'kubectl rollout restart deployment backend-deployment'
                sh 'kubectl rollout restart deployment frontend-deployment'
            }
        }

        stage('Success') {
            steps {
                echo 'FULL CI/CD PIPELINE WORKING 🚀'
            }
        }
    }
}
