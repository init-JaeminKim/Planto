import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const DataList = (props) => {

  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState('');

  return (
    <View style={styles.SVContainer}>
      <FlatList inverted={false} data={Object.values(props.trees).reverse()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity key={item.id} onLongPress={(event) => { event.stopPropagation, props.deleteData(item.id) }} {...item}>
              <View style={styles.cardView}>
                <View style={[styles.item, {backgroundColor: item.tag}]}>
                  <TouchableOpacity onPressOut={() => setEditing(!isEditing)}>
                    <Text style={{ fontSize: 24 }}>✎</Text>
                  </TouchableOpacity>
                  {isEditing
                    ?
                    (
                      <View>
                        <TouchableOpacity onPressOut={() => {props.onSubmitEditing(item.id, text) ,setEditing(false)}}>
                          <Text style={{ fontSize: 20 }}>✓</Text>
                        </TouchableOpacity>
                        <TextInput autoCorrect={false} autoCorrect={false} onChangeText={(text) => setText(text)}>{item.name}</TextInput>
                      </View>
                    )
                    : (<Text style={{color: '#82899e'}}>{item.name}</Text>)}
                  <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: item.tag }} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )
        } numColumns='2'>
      </FlatList>
    </View >
  )
}

const styles = StyleSheet.create({
  SVContainer: {
    flex: 1,
  },
  cardView: {
    width: width / 2,
    marginTop: 25,
    alignItems: "center",
  },
  item: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width / 2.5,
    height: width / 2.0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    borderRadius: 40,
  }
})

export default DataList;