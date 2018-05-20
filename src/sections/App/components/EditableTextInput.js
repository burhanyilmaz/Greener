import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./stylesheet";

export default props => {
  const {
    label,
    inputName,
    inputValue,
    isEditable,
    setValue,
    isEdit,
  } = props;
  const { editableTextContainer } = styles;
  const stateName = `${inputName}Editable`;

  return (
    <View style={editableTextContainer._}>
      <Text style={editableTextContainer.label}>{label}</Text>
      <View style={editableTextContainer.inputContainer._}>
        <TextInput
          editable={isEditable}
          underlineColorAndroid="transparent"
          value={inputValue}
          style={[
            editableTextContainer.inputContainer.input,
            { backgroundColor: isEditable ? "#f4f4f4" : "transparent" }
          ]}
          onChangeText={text => setValue(inputName, text)}
        />
        {isEdit && (
          <TouchableOpacity onPress={() => setValue(stateName, !isEditable)}>
            <Text style={{ color: isEditable ? 'red' : '#60d4ae'}}>{isEditable ? "Save" : "Edit"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
