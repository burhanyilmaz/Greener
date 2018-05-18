import React from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from "./stylesheet";

export default (props) => {
    const { searchInputContainer } = styles;

    return (
        <View style={searchInputContainer._}>
        <TextInput
          selectionColor="#ccc"
          placeholder="search"
          underlineColorAndroid="transparent"
          style={searchInputContainer.textInput}
        />
        <Image
          style={searchInputContainer.iconImage}
          source={{
            uri: "https://png.icons8.com/ios-glyphs/96/cccccc/search.png"
          }}
        />
      </View>
    );
}