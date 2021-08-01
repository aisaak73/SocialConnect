import firebase from "firebase";
import '@firebase/auth';
import '@firebase/firestore';
import getEnvVars from "../../environment";

const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
} = getEnvVars();

//Pasar los valores de las keys a firebase
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
};

//Iniciar la conexion a firebase si no se ha realizado previamente
firebase.initializeApp(firebaseConfig);
export {firebase};