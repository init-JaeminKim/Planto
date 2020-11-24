import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const DataList = (props) => {

  const [isEditing, setEditing] = useState(false);

  return (
    <View style={styles.SVContainer}>
      <FlatList inverted={false} data={Object.values(props.trees).reverse()}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onLongPress={(event) => { event.stopPropagation, props.deleteData(item.id) }}>
            <View style={styles.cardView}>
              <View style={styles.item}>
                <TouchableOpacity onPressOut={() => [props.updateTree(item.id, item.name), setEditing(!isEditing)]}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
                <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: item.tag }} />
              </View>
            </View>
          </TouchableOpacity>

        )
        } numColumns='2'>
      </FlatList>
    </View >
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
    alignItems: 'center',
    justifyContent: 'center',
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