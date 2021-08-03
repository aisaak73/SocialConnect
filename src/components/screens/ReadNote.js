import React, {useContext} from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import {IconButton, Text} from "react-native-paper";
import { Context as NoteContext } from "../../providers/NoteContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../themes";
import { format } from "date-fns";

const {height, width} = Dimensions.get("screen");

function ReadNote({navigation}){
    const {state, deleteNote} = useContext(NoteContext);
    const {auth} = useContext(AuthContext);


    /*function handleDelete(){
        deleteNote(state.currentNote, auth.user.id);
        navigation.goBack();
    }*/

    return(
        <View>
            <Text style={styles.title}>{state.currentNote.title}</Text>
            <Text style={styles.time}>{format(state.currentNote.timestamp, "eee, H:mm")}</Text>
            <ScrollView style={styles.container}>
                <Text style={styles.text}>{state.currentNote.body}</Text>
            </ScrollView>

            <View style={styles.iconBar}>
            <IconButton
            icon="delete-circle-outline"
            color={theme.colors.red}
            size={50}
            onPress={() => navigation.goBack()}
            />
            <IconButton
            icon="circle-edit-outline"
            color={theme.colors.primary}
            size={50}
            onPress={() => navigation.goBack()}
            />
      </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 35,
        fontWeight: "700",
        alignSelf: "center",
        margin: 10,
        color: theme.colors.backdrop,
    },
    time:{
        alignSelf: "center",
        fontSize: 20,
    },
    container:{
        flex: 1,
        position: "absolute",
        height: height*0.3,
        width: width*0.95,
        top: 90,
        borderWidth: 3,
        borderColor: theme.colors.primary,
        margin: 10,
        marginBottom: 15,
        padding: 10,
        backgroundColor: "#FFFFFF",
    },
    text:{
        fontSize: 18,
    },
    iconBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        top: 350,
      },
});

export default ReadNote;