import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import serviceKey from '../../../.serviceKey.json'




const firebaseConfig = {
  apiKey           : serviceKey.apiKey,
  authDomain       : serviceKey.authDomain,
  projectId        : serviceKey.projectId,
  storageBucket    : serviceKey.storageBucket,
  messagingSenderId: serviceKey.messagingSenderId,
  appId            : serviceKey.appId,
}

const firebaseApp = initializeApp(firebaseConfig)

export const FirebaseStorage = getStorage(firebaseApp)
