import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import {Context as AuthContext} from "../../providers/AuthContext";
import {validate} from "email-validator";

function SignupForm({navigation}){
    //inputs
    const {state, signup} = useContext(AuthContext);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    //Errors
    const [fullnameError, setFullnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassError, setConfirmPassError] = useState(false);
    const [error, setError] = useState(false);

    //Verificar si el usuario se registra
    useEffect(()=>{
        if(state.registered) navigation.navigate("Signin")
    }, [state.registered]);

    function handleVerify(input){
        if(input == "fullname"){
            if(!fullname) setFullnameError(true);
            else setFullnameError(false);

        }else if(input == "email"){
            if(!email) setEmailError(true);
            else if(!validate(email)) setEmailError(true);
            else setEmailError(false);

        }else if(input == "password"){
            if(!password) setPasswordError(true);
            else if(password.length < 6) setPasswordError(true);
            else setPasswordError(false);

        }else if(input == "confirmPass"){
            if(!confirmPass) setConfirmPassError(true);
            else if(password !== confirmPass) setConfirmPassError(true);
            else setConfirmPassError(false);

        }else if(input == "signup"){
            if(fullname && 
                email && 
                password && 
                confirmPass &&
                !fullnameError &&
                !emailError &&
                !passwordError &&
                !confirmPassError
                ){
                    try{
                        signup(fullname, email, password);
                    }catch(error){
                        console.log(error);
                    }
                 
                }else setError("All fields are required");
            }    
        }
        
    
    return(
        <View>
            {error && <Text>{error}</Text>}
            {state.errorMessage != null && <Text>{state.errorMessage}</Text>}

            <TextInput 
             mode="outlined"
             label="Fullname"
             value={fullname}
             onChangeText={setFullname}
             onBlur={()=> handleVerify("fullname")}
            />
            {fullnameError && <Caption>Fullname is required</Caption>}

            <TextInput 
             mode="outlined" 
             label="Email"
             value={email}
             onChangeText={setEmail}
             autoCapitalize="none"
             onBlur={()=> handleVerify("email")}
            />
            {emailError && <Caption>A valid Email is required</Caption>}

            <TextInput
             mode="outlined"
             label="Password"
             value={password}
             onChangeText={setPassword}
             secureTextEntry
             onBlur={()=> handleVerify("password")}
            />
            {passwordError && <Caption>Password is required. Min 6 chararcters.</Caption>}


            <TextInput 
             mode="outlined" 
             label="Confirm Password"
             value={confirmPass}
             onChangeText={setConfirmPass}
             autoCapitalize="none"
             secureTextEntry
             onBlur={()=> handleVerify("confirmPass")}
            />
            {confirmPassError && <Caption>Please confirm your password.</Caption>}

            <Button mode="contained" 
            style={styles.btn}
            onPress={()=>handleVerify("signup")}>Create Account</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        marginTop: 20,
        marginBottom: 20,
    },
});

export default SignupForm;