import React from "react";
import { View, Text, Switch } from "react-native";
import styles from "./stylesheet";

export default props => {
  const { label, switchValue, setSwitchValue, switchName } = props;
  const { switchContainer } = styles;
  return (
      <View style={switchContainer._}>
        <Text style={switchContainer.labelText} >{label}</Text>
        <Switch
            value={switchValue}
            onValueChange={value => setSwitchValue(switchName, value)}
            thumbTintColor="#60d4ae"
            tintColor="#f4f4f4"
        />
      </View>
  );
};
