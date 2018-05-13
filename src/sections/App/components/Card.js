import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./stylesheet";

export default (props) => {
    const { cardContainer } = styles;
    const { title, imageUri, productCount, isRightItem } = props;

    return (
      <View key={title} style={[cardContainer._, {marginRight: isRightItem ? 0 : 8 }]}>
        <View style={cardContainer.imageContainer._}>
          <Image
            style={cardContainer.imageContainer.image}
            source={{
              uri: imageUri
            }}
          />
        </View>
        <Text style={cardContainer.productNameText}>{title}</Text>
        <Text style={cardContainer.productCountText}>{productCount} products</Text>
      </View>
    );
}