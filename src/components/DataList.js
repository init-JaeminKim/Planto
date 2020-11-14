import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from "react-native";

const { height, width } = Dimensions.get("window");

const DataList = (props) => {

  return (
    <View style={styles.SVContainer}>
      <FlatList inverted={false} data={Object.values(props.trees).reverse()}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onLongPress={(event) => { event.stopPropagation, props.deleteData(item.id)}}>
                      <View style={styles.cardView}>
            <View style={styles.item}>
            <Text>{item.name}</Text>
            </View>
            </View>
          </TouchableOpacity>

        )
        } numColumns='2'>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  SVContainer: {
    flex: 2,
  },
  cardView: {
    width: width / 2,
    padding: 30,
    alignItems: "center",

  },
  item: {
    backgroundColor: "gray",
    width: width / 2.5,
    height: width / 2.5,
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