pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // You can add test commands here, but for simplicity, we'll just run the app
                echo 'No tests defined'
            }
        }
        stage('Docker Build') {
            steps {
                // Build the Docker image
                sh 'docker build -t express-app .'
            }
        }
        stage('Docker Run') {
            steps {
                // Run the Docker container
                sh 'docker run -d -p 3007:3007 express-app'
            }
        }
    }
}
