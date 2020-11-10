/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {

 /* useEffect(() => {
    readData()
  }, [])

  */

  const [trees, setTrees] = useState({});
  const [name, setName] = useState('');

  const onChangeText = name => setName(name);

  const onFinishEditing = () => {

    const ID = uuidv4();

    const newTreeObj = {
      [ID]: {
        id: id,
        name: name,
      }
    }

    setName('');

    const newState = {
      ...trees,
      ...newTreeObj
    }

    setTrees({
      ...trees,
      ...newTreeObj
    })

    AsyncStorage.setItem("trees", JSON.stringify(newState));
  }

  const loadData = async () => {
    try {
      const loadTrees = await AsyncStorage.getItem("trees");
      setTrees(JSON.parse(loadTrees) || {});
    } catch (error) {
      console.log(error);
    }
  }

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      alert('Storage Empty!')
    } catch (error) {
      console.log('Fail..')
    }
  }



  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default App;
