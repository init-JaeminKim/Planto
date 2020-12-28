/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'
import Modals from './src/components/Modals.js'
import DataList from './src/components/DataList.js'
import Greeting from './src/components/Greeting.js'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Main = () => {

  useEffect(() => {
    loadData();
    SplashScreen.hide();
  }, [])


  const [trees, setTrees] = useState({});
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');

  const onClickTag = (tag) => {
    setTag(tag);
  }

  const onDismiss = () => {
    setTag('');
    setName('');
  }

  const onChangeText = (name) => setName(name);

  const onFinishEditing = () => {

    const ID = uuidv4();

    const newTreeObj = {
      [ID]: {
        id: ID,
        name: name,
        tag: tag,
      }
    }

    setName('');
    setTag('');

    const newState = {
      ...trees,
      ...newTreeObj
    }

    setTrees(newState);

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

  const deleteData = (id) => {

    const newState = Object.values(trees).filter((tree) => tree.id !== id);
    setTrees({ ...newState });
    AsyncStorage.setItem("trees", JSON.stringify(newState));

  }

  const onSubmitEditing = (id, text) => {

    const newState = Object.values(trees).map((tree) => {
      if (tree.id == id) {
        tree.name = text;
      }
    })
    setTrees({ ...trees });
    AsyncStorage.setItem("trees", JSON.stringify({ ...trees }));
  }

  return (
    <View style={styles.container}>
      <Greeting></Greeting>
      <DataList deleteData={deleteData}
        onFinishEditing={onFinishEditing}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={name}
        trees={trees}
      ></DataList>
      <Modals
        onFinishEditing={onFinishEditing}
        onChangeText={onChangeText}
        onDismiss={onDismiss}
        value={name}
        onClickTag={onClickTag}>

      </Modals>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22483e",
  },

});

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Main" tabBarOptions={{
      activeTintColor: 'black'
    }}>
      <Tab.Screen name="Home" component={Main} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="leaf" color={color} inactive size={24} />
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="cog" color={color} inactive size={24} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}