import React, { useContext } from "react";
import { Dimensions, FlatList, StyleSheet, ScrollView, TouchableOpacity, View, Button } from "react-native";
import { Text } from "react-native-paper";
import Note from "./Note";
import { Context as NoteContext } from "../../providers/NoteContext";

const {height, width} = Dimensions.get("screen");

function NoteList({ notes, navigation }) {
  const { setCurrentNote } = useContext(NoteContext);

  const handleSelectNote = (note) => {
    setCurrentNote(note);
    navigation.navigate("ReadNote");
  };

  const emptyFlatList = (
    <View style={styles.emptyNotes}>
      <Text>Start creating your notes now!</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={notes}
        ListEmptyComponent={emptyFlatList}
        numColumns={1}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => handleSelectNote(item, "ReadNote")}>
              <View style={styles.contain}></View>
              <Note
                id={item.id}
                title={item.title}
                timestamp={item.timestamp}
              />
            </TouchableOpacity>
          </>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contain:{
    backgroundColor: "#408292",
    width: width,
    height: 7,
  },
  emptyNotes: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default NoteList;
