import createDataContext from "./createDataContext";
import {firebase} from "../firebase";

//Acciones del reducer
const authReducer = (state, action) =>{
    switch (action.type){
        case "signup":
            return state;
        default:
            return state;    
    }
};

//Funciones
const signup = (dispatch) =>(fullname, email, password) =>{
    
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) =>{
        console.log("user created");
    });
    /*.catch((err)=>{
        console.log(err);
    });*/
};

//Exportar las funcionalidades del Context
export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signup,
    },
    {
        user: {},
    }
);