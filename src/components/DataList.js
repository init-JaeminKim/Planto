import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const DataList = (props) => {

  return (
    <ScrollView contentContainerStyle={styles.SVContainer}>
      {Object.values(props.trees).map((tree) => (
        <TouchableOpacity key={tree.id} onPressOut={(event) => { event.stopPropagation, props.deleteData(tree.id) }}>
          <Text>{tree.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  SVContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default DataList;