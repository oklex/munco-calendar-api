const configService = ():any => {
    if (process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase().trim() === 'DEVELOPMENT') {
        let config: any = {
            apiKey: process.env.TEST_FIREBASE_API_KEY,
            authDomain: process.env.TEST_FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.TEST_FIREBASE_DATABASE_URL,
            projectId: process.env.TEST_FIREBASE_PROJECT_ID,
            storageBucket: process.env.TEST_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.TEST_FIREBASE_SENDER_ID,
            appId: process.env.TEST_FIREBASE_APP_ID,
        };
        console.log("Firebase configured for DEVELOPMENT ")
        return config
    } else if (process.env.GITHUB_ACTIONS) { 
        let config: any = {
            apiKey: process.env.TEST_FIREBASE_API_KEY,
            authDomain: process.env.TEST_FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.TEST_FIREBASE_DATABASE_URL,
            projectId: process.env.TEST_FIREBASE_PROJECT_ID,
            storageBucket: process.env.TEST_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.TEST_FIREBASE_SENDER_ID,
            appId: process.env.TEST_FIREBASE_APP_ID,
        };
        console.log("Firebase configured for DEVELOPMENT ")
        return config
    } else if (process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase().trim() === 'PRODUCTION') {
        console.log("Firebase configured for PRODUCTION")
        return {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.FIREBASE_DATABASE_URL,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
        };
    } else {
        throw Error("NODE_ENV is not valid")
    }
}

export default configService