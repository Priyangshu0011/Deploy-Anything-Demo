pipeline {
    agent any

    environment {
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/priyangshu0011/Deploy-Anything-Demo.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh 'cd backend && docker build -t deployx-backend:$IMAGE_TAG .'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'cd frontend && docker build -t deployx-frontend:$IMAGE_TAG .'
            }
        }

        stage('Update Kubernetes Deployments') {
            steps {
                sh 'kubectl set image deployment/backend-deployment backend=deployx-backend:$IMAGE_TAG'
                sh 'kubectl set image deployment/frontend-deployment frontend=deployx-frontend:$IMAGE_TAG'
            }
        }

        stage('Success') {
            steps {
                echo "FULL CI/CD WORKING 🚀"
            }
        }
    }
}
