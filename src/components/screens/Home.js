import React, { useContext, useEffect } from "react";
import { Dimensions, Image, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { Button, FAB, Text, Title } from "react-native-paper";
import Constants from "expo-constants";
import { Context as AuthContext } from "../../providers/AuthContext";
import {Context as NoteContext} from "../../providers/NoteContext"
import theme from "../../themes";
import NoteList from "../shared/NotesList";

const {height, width} = Dimensions.get("screen");

function Home({ navigation }) {
  const {state, signout} = useContext(AuthContext);
  const { state: noteState, getNotes } = useContext(NoteContext);

  useEffect(() => {
    getNotes(state.user.id);
  }, []);
return(
    <SafeAreaView style={styles.safe}>
     <View style={styles.container}>
         <Image source={require('../../utils/imgs/notes.png')} style={styles.img}/>  
         <Button onPress={signout}>Log out</Button>
            <Title style={styles.title}>All my notes</Title>
            <NoteList notes={noteState.notes} navigation={navigation}/>
        </View>
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={()=>navigation.navigate("CreateNote")}
            />
            <></>
    </SafeAreaView>

  )

}

{console.log(height);}
const styles = StyleSheet.create({
    safe:{
    flex: 1,
    marginTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight,
    },
    container: {
      flex: 1,
      padding: 10,
      alignSelf: "center",
    },
    title: {
      fontSize: 30,
      paddingLeft: 20,
      marginTop: 15,
      marginBottom: 20,
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
      top: height*0.18,
      margin: 20,
    },
});
  
export default Home;
  