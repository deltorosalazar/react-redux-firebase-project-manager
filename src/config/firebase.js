import firebase from 'firebase/app'
import 'firebse/firestore'
import 'firebse/auth'

var config = {
  apiKey: "AIzaSyCK7cdElx_D7-omFJtFQC8W2F3iut_Ndk0",
  authDomain: "react-project-manager-3892a.firebaseapp.com",
  databaseURL: "https://react-project-manager-3892a.firebaseio.com",
  projectId: "react-project-manager-3892a",
  storageBucket: "react-project-manager-3892a.appspot.com",
  messagingSenderId: "1081065101905"
};

firebase.initializeApp(config)
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export default firebase