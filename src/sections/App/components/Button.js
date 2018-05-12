import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, Dimensions } from "react-native";
import styles from './stylesheet';

const { width } = Dimensions.get('screen');

export default props => {
    const { title } = props;
    const { subTitle, signupButton, loginButton, shadow, terms } = styles;
    const color = props.textColor ? props.textColor : '#fff';
    const backgroundColor = props.backgroundColor ? props.backgroundColor : '#fff';
    const isBordered = props.isBordered;
    const margin = props.margin ? props.margin : 8;
    const _width = props.margin ? (width - props.margin) : (width - 80);
    const borderStyle = {
        borderWidth: 1,
        borderColor: '#e8ebef',
    };

    return (
        <TouchableOpacity onPress={props.onPress}>
        <View style={[{...loginButton._}, { backgroundColor, width: _width }, isBordered && borderStyle]}>
            <Text  { ...props} style={[{...loginButton.text}, { color }]}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
};
