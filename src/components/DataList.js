import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

const DataList = (props) => {

  return (
    <ScrollView contentContainerStyle={styles.SVContainer}>
      {Object.values(props.trees).map((tree) => (
        <TouchableOpacity key={tree.id} onLongPress={(event) => { event.stopPropagation, props.deleteData(tree.id) }}>
          <View style={styles.cardView}>
            <View style={styles.item}>
              <Text>{tree.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  SVContainer: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: "flex-start"
  },
  cardView: {
    width: width / 2,
    padding: 30,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#E6AEAA",
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 3.0,
    borderRadius: 7,
  }
})

export default DataList;