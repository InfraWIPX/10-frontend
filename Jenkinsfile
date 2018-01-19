pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker build . -t 10-frontend'
        sh 'docker tag 10-frontend registry.wip.camp/10-frontend:$BUILD_NUMBER'
        sh 'docker tag 10-frontend registry.wip.camp/10-frontend'
      }
    }
    stage('push') {
      steps {
        sh 'docker push registry.wip.camp/10-frontend:$BUILD_NUMBER'
        sh 'docker push registry.wip.camp/10-frontend'
      }
    }
    stage('deploy') {
      steps {
        sh 'kubectl rolling-update 10-frontend --image registry.wip.camp/10-frontend:$BUILD_NUMBER'
      }
    }
    stage('clean') {
      steps {
        sh 'docker image rm registry.wip.camp/10-frontend:$BUILD_NUMBER'
        sh 'docker image rm registry.wip.camp/10-frontend'
      }
    }
  }
}