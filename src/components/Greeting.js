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
            <Text>Hello</Text>
            <Text>
                <Icon name="rocket" size={30} color="#900" />
            </Text>
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