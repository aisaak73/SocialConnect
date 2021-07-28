import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import SigninForm from "../forms/Singinform";
import theme from "../../themes";

function Signin({navigation}){
    return (
        
        <View style={styles.container}>
            
            <Text style={styles.title}>Sign In</Text>
            <SigninForm/>
            <Text style={styles.forgotPass}>Forgot your password?</Text>
            <Text>Don't have an account?
                <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
                <Text style={styles.signup}> Sign Up Now!</Text>
                </TouchableOpacity>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        margin: 10,
    },
    title:{
        margin: 10,
        fontSize: 20,
        textAlign: "center",
    },
    forgotPass:{
        textAlign: "auto",
    },
    signup:{
        color: theme.colors.primary,
    },
});

export default Signin;