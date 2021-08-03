import React from "react";
import {Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import SigninForm from "../forms/Singinform";
import theme from "../../themes";

function Signin({navigation}){
    return (
        
        <View style={styles.container}>

            <Image source={require('../../utils/imgs/notes.png')} style={styles.img}/> 
            <Text style={styles.title}>Welcome to NOTXS</Text>
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
    img:{
        width: 90,
        height: 90,
        alignSelf: "center",
        marginBottom: 15,       
      },
    title:{
        margin: 10,
        fontSize: 35,
        fontWeight: "500",
        color: theme.colors.primary,
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