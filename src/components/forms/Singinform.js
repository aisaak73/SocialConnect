import React, {useContext,useState} from "react";
import {StyleSheet, View } from "react-native";
import {Button, Caption, Text, TextInput} from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext"
import {validate} from "email-validator";;

function SigninForm(){
    const { state, signin } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState(false);

    function handleVerify(input){
        if(input == "email"){
            if(!email) setEmailError(true);
            else if(!validate(email)) setEmailError(true);
            else setEmailError(false);

        }else if(input == "password"){
            if(!password) setPasswordError(true);
            else if(password.length < 6) setPasswordError(true);
            else setPasswordError(false);

        }else if (input === "signin") {
            if (email && password && !emailError && !passwordError) {
              signin(email, password);
            }else setError("All fields are required");
          }
    }

    return(
        <View>
            {error && <Text>{error}</Text>}
            {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
            <TextInput 
              mode="outlined"
              label="Email"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
              onBlur={()=> handleVerify("email")}
            />
            {emailError && (
                <Caption>A valid Email is required</Caption>
            )}
            <TextInput 
                mode="outlined" 
                label="Password" 
                autoCapitalize="none"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                onBlur={()=> handleVerify("password")}

            />
            {passwordError &&(
                <Caption>A valid password is required. Min 6 characters.</Caption>
            )}
            <Button mode="contained"
            onPress={()=> handleVerify("signin")}
            style={styles.btn}>Sign In</Button>

        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        marginTop: 20,
        marginBottom: 20
    }
});

export default SigninForm;