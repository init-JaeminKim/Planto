import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Greeting = () => {

    return (
        <View style={styles.GTContainer}>
            <Text style={styles.GTFont}>Hello,</Text>
            <Text style={styles.GTFont}>Just amazing day!</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    GTContainer: {
        marginTop: 75,
        marginLeft: 25,
    },
    GTFont: {
        fontSize: 24,
        color: '#FFFFFF'
    }


})

export default Greeting;