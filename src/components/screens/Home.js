import React, { useContext, useEffect } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Button, FAB, Text, Title } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../themes";

const {height, width} = Dimensions.get("screen");

function Home({ navigation }) {
  const {signout} = useContext(AuthContext);
return(
    <>
     <View style={styles.container}>
         <Image source={require('../../utils/imgs/appLogo.png')} style={styles.img}/>  
            <Title style={styles.title}>Social Connect</Title>
        </View>
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={()=>navigation.navigate("CreateNote")}
            />

            <Button onPress={signout}>
                Log out
            </Button>
    
    </>

  )

}

{console.log(height);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignSelf: "center",
    },
    title: {
      fontSize: 30,
      paddingLeft: 20,
    },
    img:{
        width: 90,
        height: 90,
        alignSelf: "center",
        marginBottom: 15,
        
    },
    fab: {
      backgroundColor: theme.colors.primary,
      position: "absolute",
      right: 0,
      bottom: 10,
      margin: 20,
    },
});
  
export default Home;
  