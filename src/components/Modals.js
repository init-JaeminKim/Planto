import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Modal,
    TextInput,
} from "react-native";

const Modals = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    checkTextLength = (value) => value.length < 3 ? true : false;
    return (
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
                        <Text style={styles.modalText}>{props.value}</Text>
                        <TextInput maxLength={10} value={props.value} placeholder="Here" onChangeText={props.onChangeText}></TextInput>

                        <TouchableHighlight
                            disabled={checkTextLength(props.value)}
                            style={{...styles.openButton, backgroundColor: checkTextLength(props.value) ? "gray" : "#3b6551"}}
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

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({

    MDVContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
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
        backgroundColor: "#F194FF",
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
    }
});

export default Modals;