import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity} from "react-native";
import styles from "./stylesheet";
import Button from "../../components/Button";

class Welcome extends Component {
  render() {
    const {
      mainContainer,
      title,
      subTitle,
      signupButton,
      loginButton,
      shadow,
      terms,
      image
    } = styles;

    return (
      <View style={mainContainer}>
        <StatusBar
          hidden={false}
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        <Text style={title}>
          Your home. <Text style={{ color: "#60d4ae" }}>Greener.</Text>
        </Text>
        <Text style={subTitle}>Enjoy the experience.</Text>
        <Image
          style={image}
          source={{ uri: "https://i.hizliresim.com/JQRQRo.png" }}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Login")}
          backgroundColor="#60d4ae"
        />
        <Button
          title="Signup"
          textColor="black"
          isBordered
        />
        <Text style={terms}>Terms of service</Text>
        <View style={shadow} />
      </View>
    );
  }
}

export default Welcome;
