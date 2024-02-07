import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAP6I7fxyqq17gheO9M2xOPfk-Q7BGiapQ',
  authDomain: 'eric-todo-app.firebaseapp.com',
  projectId: 'eric-todo-app',
  storageBucket: 'eric-todo-app.appspot.com',
  messagingSenderId: '374548229367',
  appId: '1:374548229367:web:fa73bf3a562ed7d9f7f7f2',
  measurementId: 'G-C1RP7FNMBV'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db
