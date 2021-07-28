import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, TextInput } from "react-native-paper";

function SignupForm(){
    //inputs
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    //Errors
    const [fullnameError, setFullnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassError, setConfirmPassError] = useState(false);

    function handleVerify(input){
        if(input == "fullname"){
            if(!fullname) setFullnameError(true);
            else setFullnameError(false);

        }else if(input == "email"){
            if(!email) setEmailError(true);
            else setEmailError(false);

        }else if(input == "password"){
            if(!password) setPasswordError(true);
            else setPasswordError(false);

        }else if(input == "confirmPass"){
            if(!confirmPass) setConfirmPassError(true);
            else setConfirmPassError(false);
        } 
        
    }
    return(
        <View>
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
            {emailError && <Caption>Email is required</Caption>}

            <TextInput
             mode="outlined"
             label="Password"
             value={password}
             onChangeText={setPassword}
             secureTextEntry
             onBlur={()=> handleVerify("password")}
            />
            {passwordError && <Caption>Password is required</Caption>}


            <TextInput 
             mode="outlined" 
             label="Confirm Password"
             value={confirmPass}
             onChangeText={setConfirmPass}
             onBlur={()=> handleVerify("confirmPass")}
            />
            {confirmPassError && <Caption>Please confirm your password</Caption>}

            <Button mode="contained" style={styles.btn}>Create Account</Button>
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