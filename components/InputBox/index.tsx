import React from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto } from "@expo/vector-icons";

import styles from './styles';

const InputBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput
                    style={styles.textInput}
                    multiline
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icons} />
                <Fontisto name="camera" size={24} color="grey" style={styles.icons} />
            </View>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name='microphone' size={28} color="white"  />
            </View>
        </View>
    );
};

export default InputBox;
