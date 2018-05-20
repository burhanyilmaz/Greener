import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import styles from "./stylesheet";
import { row1, row2, user } from "./datas";
import Card from "../../components/Card";
import Avatar from "../../components/Avatar";

class Browse extends Component {
  constructor() {
    super();
    this.state = { selectedTabIndex: 1 };
  }
  _renderCard(data) {
    const { cardContainer } = styles;

    return data.map((product, index) => {
      const { image, title, count } = product;
      return (
        <Card
          key={title}
          productCount={count}
          imageUri={image}
          title={title}
          isRightItem={index % 2}
          onPress={() => this.props.navigation.navigate("Explore")}
        />
      );
    });
  }

  _renderProductRows() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>{this._renderCard(row1)}</View>
        <View style={{ flexDirection: "row" }}>{this._renderCard(row2)}</View>
      </View>
    );
  }

  _changeTab(index) {
    this.setState({ selectedTabIndex: index });
  }

  _renderTab(title, index) {
    const { tabContainer } = styles;
    const { selectedTabIndex } = this.state;
    return (
      <TouchableOpacity
        onPress={() => this.setState({ selectedTabIndex: index })}
        style={[
          index === selectedTabIndex
            ? tabContainer.selectedTextContainer
            : tabContainer.textContainer
        ]}
      >
        <Text
          style={[
            index === selectedTabIndex
              ? tabContainer.selectedText
              : tabContainer.text
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      mainContainer,
      title,
      subContainer,
      tabContainer,
      avatarContainer,
      shadow
    } = styles;
    return (
      <View style={mainContainer}>
        <View style={subContainer}>
          <Text style={title}>Browse</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Settings")}
          >
            <Avatar image={user.image} />
          </TouchableOpacity>
        </View>
        <View style={tabContainer._}>
          {this._renderTab("Products", 1)}
          {this._renderTab("Inspirations", 2)}
          {this._renderTab("Shop", 3)}
        </View>
        {this._renderProductRows()}
        <View style={shadow} />
      </View>
    );
  }
}

export default Browse;
