import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Card, Caption} from "react-native-paper";
import { format } from "date-fns";

const { height, width } = Dimensions.get("screen");

function Note({ id, title, timestamp }) {
  return (
    <Card style={styles.container}>
      <Card.Title title={title} />
      <Caption style={styles.timestamp}>
        {format(timestamp, "eee H:mm")}
      </Caption>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 2,
    height: height * 0.15,
    margin: 2,
  },
  timestamp: {
    alignSelf: "flex-end",
    marginRight: 30,
  },
});

export default Note;