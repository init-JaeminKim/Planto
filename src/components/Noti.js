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

const Noti = () => {
    return (
        <View style={styles.NotiContainer}>
            <View style={styles.NotiContent}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    NotiContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    NotiContent: {
        backgroundColor: '#D8D8D8',
        height: height / 7,
        width: width / 1.1,
        borderRadius: 20,
    }
})

export default Noti;