import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./stylesheet";

export default (props) => {
    const { avatarContainer } = styles;
    const { image } = props;

    return (
        <View style={avatarContainer._}>
        <Image
          style={avatarContainer.image}
          source={{ uri: image }}
        />
      </View>
    );
}