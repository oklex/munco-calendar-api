import firebase from 'firebase'

let FirebaseInitialize = () => {
    let config: any = {
        apiKey: process.env.FirebaseConfig_apiKey,
        authDomain: process.env.FirebaseConfig_authDomain,
        databaseURL: process.env.FirebaseConfig_databaseURL,
        projectId: process.env.FirebaseConfig_projectId,
        storageBucket: process.env.FirebaseConfig_storageBucket,
        messagingSenderId: process.env.FirebaseConfig_messagingSenderId,
        appId: process.env.FirebaseConfig_appId
    }
    firebase.initializeApp(config);
    return config
}

export default FirebaseInitialize