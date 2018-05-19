import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from "react-native";
import styles from "./styleshet";
import Input from "../../components/Input";
import { bigImage, sliderImages, otherImages } from "./datas";
import InputSearch from "../../components/InputSearch";

const { height, width } = Dimensions.get("screen");

class Explore extends Component {
  _renderSlider() {
    const { contentContainer } = styles;

    return (
      <ScrollView
        horizontal={true}
        style={contentContainer.sliderImages._}
        showsHorizontalScrollIndicator={false}
      >
        {sliderImages.map(image => {
          return (
            <TouchableOpacity
              key={image.uri}
              onPress={() => this.props.navigation.navigate("Product")}
            >
              <Image
                key={image.uri}
                style={contentContainer.sliderImages.image}
                source={{ uri: image.uri }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
  _renderOtherImages() {
    const { contentContainer } = styles;

    return (
      <View style={contentContainer.otherImages._}>
        {otherImages.map((image, index) => {
          return (
            <TouchableOpacity
              key={image.uri}
              onPress={() => this.props.navigation.navigate("Product")}
            >
              <Image
                style={[
                  contentContainer.otherImages.image,
                  { marginRight: index % 2 !== 0 ? 0 : 8 }
                ]}
                source={{
                  uri: image.uri
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  render() {
    const {
      mainContainer,
      subContainer,
      title,
      inputContainer,
      contentContainer
    } = styles;

    return (
      <View style={mainContainer}>
        <StatusBar
          hidden={false}
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        <View style={subContainer}>
          <Text style={title}>Explore</Text>
          <InputSearch />
        </View>
        <ScrollView
          style={contentContainer._}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Product")}
          >
            <Image
              style={contentContainer.bigImage}
              source={{ uri: bigImage }}
            />
          </TouchableOpacity>
          {this._renderSlider()}
          {this._renderOtherImages()}
        </ScrollView>
        <View style={contentContainer.filterButton._}>
          <Text style={contentContainer.filterButton.text}>Filters</Text>
        </View>
      </View>
    );
  }
}

export default Explore;
