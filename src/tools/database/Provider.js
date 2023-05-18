import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import firebaseConfig from './config'




const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[ 0 ]
const firestore    = getFirestore(firebase_app)
const storage      = getStorage(firebase_app)


export async function getDoument (collection, id) {
  let docRef = doc(db, collection, id)

  let result = null
  let error  = null

  try {
    result = await getDoc(docRef)
  } catch (e) {
    error = e
  }

  return { result, error }
}

