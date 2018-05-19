import React, { Component } from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import styles from "./stylesheet";

const images = [
  "https://images.pexels.com/photos/545048/pexels-photo-545048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=375&w=630",
  "https://images.pexels.com/photos/373578/pexels-photo-373578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=375&w=630",
  "https://images.pexels.com/photos/531844/pexels-photo-531844.jpeg?auto=compress&cs=tinysrgb&h=375&w=630"
];

class Product extends Component {
  render() {
    const { mainContainer, subContainer, image, border, galery } = styles;
    return (
      <ScrollView style={mainContainer} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: images[0] }} style={image} />
        <View style={subContainer._}>
          <Text style={subContainer.title}>
            16 Best Plants That Thrive In Your Bedroom
          </Text>
          <View style={subContainer.tag._}>
            <Text style={subContainer.tag.text}>Interior</Text>
            <Text style={subContainer.tag.text}>27 m2</Text>
            <Text style={subContainer.tag.text}>Ideas</Text>
          </View>
          <Text style={subContainer.description}>
            Bedroom's deserve to be decorated with lush greenery just like every
            other room in the house but it can be tricky to find a plant that
            thrives here. Low light, high humudity and warm temperatures mean
            only certain housplants will flourish.
          </Text>
          <View style={border} />
          <View style={galery._}>
            <Text style={galery.text}>Galery</Text>
            <ScrollView
              horizontal={true}
              style={galery.scroll}
              showsHorizontalScrollIndicator={false}
            >
              <Image style={galery.image} source={{ uri: images[1] }} />
              <Image style={galery.image} source={{ uri: images[1] }} />
              <View style={galery.moreImages._}>
                <Text style={galery.moreImages.text}>+13</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Product;
