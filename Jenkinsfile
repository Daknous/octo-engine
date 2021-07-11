pipeline {
  agent any
  environment {
      USER_NAME = 'naqa2@zattoo.com'
      USER_PASSWORD = 'FDHC]b%W1Z2S'
  }
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Daknous/octo-engine.git'
      }
    }
        
    stage('Install dependencies') {
      steps {      
        sh 'npm init -y'      
        sh 'npm i suitest-js-api'
        sh 'npm audit'
        sh 'npm view suitest-js-api'
      }
    }
     
    stage('Test') {
        when {
                // Only run if "Zattoo CH" is selected
                expression { params.Partner == 'Zattoo CH' }
            }
      steps {
         sh 'npm run zap -u naqa2@zattoo.com -p FDHC]b%W1Z2S o d40e8d24-806c-4638-a079-0af058ddfb28 -d c303434d-39bf-4c19-a380-968c4c2d8fed -c a812a2d2-ee80-4617-b557-0fd485355918 node ./zap.js'
      }
    }
    stage('Test 1&1') {
        when {
                // Only run if "1&1" is selected
                expression { params.Partner == '1&1' }
            }
      steps {
         sh 'npm run zap -u naqa2@zattoo.com -p FDHC]b%W1Z2S o d40e8d24-806c-4638-a079-0af058ddfb28 -d c303434d-39bf-4c19-a380-968c4c2d8fed -c 04ab9b9b-4184-461d-b089-9b1b75016a53 node ./zap.js'
      }
    }
  }
}