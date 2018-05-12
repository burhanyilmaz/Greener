import React from "react";
import {
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";

import styles from "./stylesheet";

const { width } = Dimensions.get("screen");

export default props => {
  const {
    title,
    hidePassword,
    onPressIcon,
    iconImageUri,
    label,
    secureTextEntry
  } = props;

  const {
    input,
    inputText,
    subContainer,
    showIcon,
    showIconContainer,
    inputContainer
  } = styles;

  return (
    <View style={input}>
      <Text style={inputText}>{label}</Text>
      <TextInput
        style={inputContainer}
        underlineColorAndroid="rgba(0,0,0,0.1)"
        secureTextEntry={secureTextEntry}
        selectionColor="#60d4ae"
      />
      {iconImageUri && (
        <TouchableOpacity
          onPress={() => onPressIcon()}
          style={showIconContainer}
        >
          <Image style={showIcon} source={{ uri: iconImageUri }} />
        </TouchableOpacity>
      )}
    </View>
  );
};
