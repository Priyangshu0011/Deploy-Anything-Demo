# 🚀 DeployX

### MERN + Kubernetes + CI/CD + AWS S3 Cloud Deployment Platform

DeployX is a full-stack cloud-native application that demonstrates modern DevOps practices by integrating the MERN stack with Docker, Kubernetes, GitHub Actions CI/CD, AWS EC2, AWS S3, Docker Hub, and AWS IAM.

The project showcases containerization, orchestration, automated deployments, cloud storage integration, infrastructure management, and secure credential handling in a production-style environment.

---

## 📌 Project Overview

DeployX allows users to upload images through a React frontend. The images are processed by an Express.js backend and stored securely in AWS S3. The entire application is containerized using Docker, orchestrated with Kubernetes, and automatically deployed through GitHub Actions.

### Architecture

```text
User
  │
  ▼
React Frontend
  │
  ▼
Express Backend API
  │
  ▼
AWS S3 Bucket
  │
  ▼
Image URL Response
  │
  ▼
Frontend Display
```

---

## 🎯 Objectives

* Build a complete MERN-based application
* Containerize frontend and backend services using Docker
* Deploy workloads on AWS EC2
* Implement Kubernetes orchestration
* Configure automated CI/CD pipelines using GitHub Actions
* Integrate AWS S3 cloud storage
* Secure AWS credentials using Kubernetes Secrets
* Demonstrate production-style DevOps workflows

---

## 🛠 Technology Stack

| Category           | Technology          |
| ------------------ | ------------------- |
| Frontend           | React.js, Axios     |
| Backend            | Node.js, Express.js |
| File Upload        | Multer, Multer-S3   |
| Cloud Storage      | AWS S3              |
| Containerization   | Docker              |
| Orchestration      | Kubernetes          |
| CI/CD              | GitHub Actions      |
| Cloud Platform     | AWS EC2             |
| Container Registry | Docker Hub          |
| Authentication     | AWS IAM             |
| Secret Management  | Kubernetes Secrets  |
| Version Control    | Git & GitHub        |
| Static Public IP   | AWS Elastic IP      |

---

## ✨ Key Features

* 📤 Image upload to AWS S3
* 🐳 Dockerized frontend and backend
* ☸ Kubernetes deployment and scaling
* 🔄 Automated GitHub Actions CI/CD
* 🔒 Secure secret management
* 🌐 Elastic IP for fixed public access
* 📦 Docker Hub integration
* 🚀 Automated application deployment
* 🔁 Rolling updates through Kubernetes
* 📈 Production-ready deployment workflow

---

## 📂 Project Structure

```text
deployx-mern/
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── ...
│
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── README.md
```

---

## 📋 Important Files

| File                     | Purpose                          |
| ------------------------ | -------------------------------- |
| frontend/src/App.js      | React frontend interface         |
| backend/server.js        | Express backend server           |
| frontend/Dockerfile      | Frontend container configuration |
| backend/Dockerfile       | Backend container configuration  |
| backend-deployment.yaml  | Backend Kubernetes deployment    |
| frontend-deployment.yaml | Frontend Kubernetes deployment   |
| backend-service.yaml     | Backend Kubernetes service       |
| frontend-service.yaml    | Frontend Kubernetes service      |
| deploy.yml               | GitHub Actions CI/CD pipeline    |

---

## 🐳 Docker Setup

### Build Frontend Image

```bash
docker build -t deployx-frontend ./frontend
```

### Build Backend Image

```bash
docker build -t deployx-backend ./backend
```

### Push Images to Docker Hub

```bash
docker push username/deployx-frontend
docker push username/deployx-backend
```

---

## ☸ Kubernetes Deployment

Apply Kubernetes resources:

```bash
kubectl apply -f k8s/
```

Verify deployments:

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

Features:

* Deployments for pod management
* NodePort services for external access
* Automatic pod recreation
* Rolling updates
* ImagePullPolicy set to Always
* Kubernetes Secrets integration

---

## 🔄 CI/CD Workflow

DeployX follows a fully automated deployment pipeline.

```text
Developer Pushes Code
          │
          ▼
 GitHub Actions Triggered
          │
          ▼
 Docker Image Build
          │
          ▼
 Push Images to Docker Hub
          │
          ▼
 SSH into AWS EC2
          │
          ▼
 Kubernetes Deployment Update
          │
          ▼
 New Pods Pull Latest Images
          │
          ▼
 Application Live
```

---

## 🔐 Security & Secret Management

### Problem

AWS credentials were initially exposed in deployment configurations.

### Solution

* Implemented Kubernetes Secrets
* Stored AWS Access Key securely
* Stored AWS Secret Access Key securely
* Injected credentials through environment variables
* Utilized AWS IAM User permissions

Example:

```bash
kubectl create secret generic aws-secret \
--from-literal=AWS_ACCESS_KEY_ID=xxxxx \
--from-literal=AWS_SECRET_ACCESS_KEY=xxxxx
```

---

## 🌐 AWS Infrastructure

### EC2 Configuration

| Parameter     | Value                   |
| ------------- | ----------------------- |
| AMI           | Ubuntu Server 24.04 LTS |
| Instance Type | t3.large                |
| Storage       | 40 GB EBS Volume        |
| Public Access | Elastic IP              |

### Elastic IP Benefits

* Fixed public IP address
* Stable API endpoints
* Consistent GitHub Actions deployment target
* Reliable Kubernetes NodePort access
* Prevents IP changes after EC2 restart

---

## 🚨 Challenges Faced

| Problem                      | Solution                           |
| ---------------------------- | ---------------------------------- |
| Frontend showing old UI      | Docker image refresh strategy      |
| ErrImageNeverPull            | Correct image tags and pull policy |
| Kubernetes permissions       | Fixed kubeconfig permissions       |
| AWS credential exposure      | Migrated to Kubernetes Secrets     |
| Network communication issues | Updated NodePort and API endpoints |
| Browser caching              | Hard refresh and cache clearing    |
| Image display issues         | Fixed mixed content errors         |

---

## 📸 Project Screenshots

* AWS EC2 Instance Setup
* Docker Installation
* Kubernetes Pods & Services
* GitHub Repository Structure
* GitHub Actions Workflow
* Docker Hub Repositories
* EC2 Security Group Configuration
* Elastic IP Configuration
* Frontend Running
* Backend Running
* AWS S3 Bucket Objects
* AWS S3 Bucket Configuration
* IAM User Setup
* Kubernetes Secrets Configuration
* Final Working Application

---

## 🚀 Future Enhancements

* HTTPS using NGINX Ingress
* SSL/TLS certificates
* MongoDB integration
* Prometheus monitoring
* Grafana dashboards
* User authentication and authorization
* Helm Charts deployment
* Migration to AWS EKS
* Multi-environment deployments

---

## 📊 DevOps Concepts Demonstrated

* Docker Containerization
* Kubernetes Orchestration
* Infrastructure as Code
* Continuous Integration
* Continuous Deployment
* Cloud Storage Integration
* Secret Management
* AWS Infrastructure
* Deployment Automation
* Container Registry Management

---

## 👨‍💻 Author

**Priyangshu Sett**

B.Tech Computer Science & Engineering
Lovely Professional University

GitHub: **[https://github.com/Priyangshu0011](https://github.com/Priyangshu0011)**

Project Repository:

**[https://github.com/Priyangshu0011/Deploy-Anything-Demo](https://github.com/Priyangshu0011/Deploy-Anything-Demo)**

---

## 📜 License

This project is developed for educational and learning purposes to demonstrate modern DevOps practices, cloud deployment strategies, and Kubernetes-based application management.

---

### ⭐ If you found this project useful, consider giving it a star on GitHub! ⭐
