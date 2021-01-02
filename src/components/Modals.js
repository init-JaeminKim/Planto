import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Modal,
    TextInput,
    Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const Modals = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const tags = ["#f7cfb9", "#f9daab", "#b9dbf7"];


    checkTextLength = (value) => value.length < 3 ? true : false;
    return (
        <View>
            <View style={styles.GTContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.GTFont}>Hello,</Text>
                    <TouchableOpacity
                        style={styles.openButton}
                        onPress={() => {
                            setModalVisible(true);
                        }}>
                        <Icon name="plus-circle" color='black' inactive size={28} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.GTFont}>Just amazing day!</Text>
                </View>
            </View >
            <View style={styles.MDVContainer}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ alignSelf: 'flex-start' }}>
                                <TouchableOpacity onPressOut={() => [setModalVisible(!modalVisible), props.onDismiss()]}>
                                    <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: 'red' }}></View>
                                </TouchableOpacity>
                            </View>
                            <TextInput placeholderTextColor="gray" maxLength={10} value={props.value} placeholder="Name you Planto!" onChangeText={props.onChangeText}></TextInput>

                            <View style={{ flexDirection: "row" }}>
                                {tags.map((c, k) => (
                                    <TouchableOpacity style={{ padding: 10 }} key={k} onPressOut={() => props.onClickTag(c)}>
                                        <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: c }}></View>
                                    </TouchableOpacity>
                                ))}
                            </View>


                            <TouchableHighlight
                                disabled={checkTextLength(props.value)}
                                style={{ ...styles.closeButton, backgroundColor: checkTextLength(props.value) ? "gray" : "#3b6551" }}
                                onPress={() => [
                                    setModalVisible(!modalVisible),
                                    props.onFinishEditing(),
                                ]}
                            >
                                <Text style={[checkTextLength(props.value) ? styles.disable : styles.textStyle]}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    MDVContainer: {
        justifyContent: "center",
        alignItems: 'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: width / 1.2,
        height: height / 2,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        marginRight: 20,
        elevation: 2
    },
    closeButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    disable: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    GTContainer: {
        marginTop: 75,
        marginLeft: 25,
        marginBottom: 15,
    },
    GTFont: {
        fontSize: 24,
        color: '#FFFFFF'
    }
});

export default Modals;