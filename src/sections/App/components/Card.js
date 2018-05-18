import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./stylesheet";

export default (props) => {
    const { cardContainer } = styles;
    const { title, imageUri, productCount, isRightItem } = props;

    return (
      <View key={title} style={[cardContainer._, {marginRight: isRightItem ? 0 : 8 }]}>
        <TouchableOpacity style={cardContainer.imageContainer._} onPress={() => {props.onPress()}}>
          <Image
            style={cardContainer.imageContainer.image}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <Text style={cardContainer.productNameText}>{title}</Text>
        <Text style={cardContainer.productCountText}>{productCount} products</Text>
      </View>
    );
}