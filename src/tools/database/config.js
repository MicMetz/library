import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// import serviceKey from '../../../.serviceKey.json'




const firebaseConfig = {
  apiKey           : process.env.apiKey,
  authDomain       : process.env.authDomain,
  projectId        : process.env.projectId,
  storageBucket    : process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId            : process.env.appId,
}

const firebaseApp = initializeApp(firebaseConfig)

export const FirebaseStorage = getStorage(firebaseApp)
