import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: 'AIzaSyDV02c5dxivxSnyVn32mT_dk5CEPsAMpXs',
    authDomain: 'memoapp-c149e.firebaseapp.com',
    projectId: 'memoapp-c149e',
    storageBucket: 'memoapp-c149e.firebasestorage.app',
    messagingSenderId: '744016049258',
    appId: '1:744016049258:web:b10120828271232d9b4613'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
