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

export let dbSet = async (route:string, obj: any) => {
    try {
        await firebase.database().ref(route).set(obj)
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export let dbUpdate = async (route:string, obj: any) => {
    try {
        await firebase.database().ref(route).update(obj)
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export let dbPush = async (route:string, obj: any) => {
    try {
        await firebase.database().ref(route).push(obj)
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export let dbDelete = async (route: string) => {
    try {
        await firebase.database().ref(route).remove()
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}


export default FirebaseInitialize