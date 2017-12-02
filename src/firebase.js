import firebase from 'firebase'
const config = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
}
firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const db = firebase.database()

export default firebase
