pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Daknous/octo-engine.git'
      }
    }
        
    stage('Install dependencies') {
      steps {      
        bat 'npm init -y'      
        bat 'npm i suitest-js-api'
        bat 'npm audit fix --force'
        bat 'npm view suitest-js-api'
      }
    }
     
    stage('Test') {
      steps {
         bat 'npm run zap -u naqa2@zattoo.com -p FDHC]b%W1Z2S o d40e8d24-806c-4638-a079-0af058ddfb28 -d c303434d-39bf-4c19-a380-968c4c2d8fed -c a812a2d2-ee80-4617-b557-0fd485355918 node ./zap.js'
      }
    }      
  }
}

