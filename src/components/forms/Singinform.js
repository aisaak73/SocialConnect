import React, {useState} from "react";
import {StyleSheet, View } from "react-native";
import {Button, Caption, Text, TextInput} from "react-native-paper";

function SigninForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function handleVerify(input){
        if(input == "email"){
            if(!email) setEmailError(true);
            else setEmailError(false);
        }else if(input == "password"){
            if(!password) setPasswordError(true);
            else setPasswordError(false);
        }
    }

    return(
        <View>
            <TextInput 
              mode="outlined"
              label="Email"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
              onBlur={()=> handleVerify("email")}
            />
            {emailError && (
                <Caption>Email is required</Caption>
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
                <Caption>Password is required</Caption>
            )}
            <Button mode="contained"
            onPress={()=> handleVerify("email")}
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