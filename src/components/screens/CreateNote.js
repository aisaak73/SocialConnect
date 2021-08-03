import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Caption, IconButton, Text, TextInput } from "react-native-paper";
import { Context as NoteContext } from "../../providers/NoteContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../themes";

function CreateNote({ navigation }) {
  const { createNote } = useContext(NoteContext);
  const { state } = useContext(AuthContext);
  const [noteName, setNoteName] = useState("");
  const [text, setText] = useState("");
  const [timestamp, setTimestamp] = useState(Date.now());
  const [noteNameError, setNoteNameError] = useState(false);

  function handleSave() {
    createNote(noteName, text, timestamp, state.user.id);
    console.log(noteName);
    navigation.goBack();
   /* if (noteName) {
      createNote(noteName, timestamp, state.usersRef.id);
    } else {
      if (!noteName) setNoteNameError(true);
    }*/
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Note name"
        value={noteName}
        onChangeText={setNoteName}
      />
      {noteNameError && <Caption>Note name is required!</Caption>}

      <TextInput
            placeholder="Start typing..."
            multiline={true}
            numberOfLines={20}
            value={text}
            onChangeText={setText}
            style={styles.txt}
      />

        <View style={styles.iconBar}>
            <IconButton
            icon="close-circle-outline"
            color={theme.colors.red}
            size={50}
            onPress={() => navigation.goBack()}
            />
            <IconButton
            icon="check-circle-outline"
            color={theme.colors.primary}
            size={50}
            onPress={() => handleSave()}
            />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  iconBar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  txt:{
    marginTop: 15,
    marginBottom: 10,
  },
});

export default CreateNote;