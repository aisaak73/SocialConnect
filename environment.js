import Constants from "expo-constants";

const ENV = {
    dev: {
        apiKey: "AIzaSyBraIIIBfacqszAnH_T1Olv-XyngIQ0K5I",
        authDomain: "social-connect-8d774.firebaseapp.com",
        projectId: "social-connect-8d774",
        storageBucket: "social-connect-8d774.appspot.com",
        messagingSenderId: "1016725360846",
        appId: "1:1016725360846:web:1f145889074dbc0156c09f"
    },

    production: {
        apiKey: "AIzaSyBraIIIBfacqszAnH_T1Olv-XyngIQ0K5I",
        authDomain: "social-connect-8d774.firebaseapp.com",
        projectId: "social-connect-8d774",
        storageBucket: "social-connect-8d774.appspot.com",
        messagingSenderId: "1016725360846",
        appId: "1:1016725360846:web:1f145889074dbc0156c09f"
    },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) =>{
    if(__DEV__) return ENV.dev;
    else if(env == "staging") return ENV.dev;
    else if(env == "production") return ENV.production;
};

export default getEnvVars;