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
  Platform,
  TouchableOpacity,
} from 'react-native';


import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'
import Modals from './src/components/Modals.js'

const App = () => {

  useEffect(() => {
    loadData();
    SplashScreen.hide();
  }, [])


  const [trees, setTrees] = useState({});
  const [name, setName] = useState('');

  const onChangeText = name => setName(name);

  const onFinishEditing = () => {

    const ID = uuidv4();

    const newTreeObj = {
      [ID]: {
        id: ID,
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
    <View style={{flex:1}}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>

      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {Object.values(trees).map((tree) => (
          <Text key={tree.id}>{tree.name}</Text>
        ))}
      </ScrollView>
      <Modals
        onFinishEditing={onFinishEditing}
        onChangeText={onChangeText}
        value={name}>
      </Modals>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  }
});

export default App;
