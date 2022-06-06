import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDXzW5_jAFiQgCseQ3N9CR1RCRC6RqJkLE',
  authDomain: 'netflix-react-9e2be.firebaseapp.com',
  projectId: 'netflix-react-9e2be',
  storageBucket: 'netflix-react-9e2be.appspot.com',
  messagingSenderId: '490146318574',
  appId: '1:490146318574:web:aa7aff86f82d1a982b4bff',
}

const firebase = Firebase.initializeApp(config)

export { firebase }
