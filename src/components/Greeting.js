import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Greeting = () => {

    return (
        <View style={styles.GTContainer}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    GTContainer: {
        marginTop: 100, 
        alignItems: 'center'
    }
})

export default Greeting;