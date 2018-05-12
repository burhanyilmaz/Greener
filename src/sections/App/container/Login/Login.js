import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./stylesheet";
import Button from "../../components/Button";
import Input from "../../components/Input";

const { width } = Dimensions.get("screen");

class Login extends Component {
  constructor() {
    super();
    this.state = { hidePassword: true };
    this.onChangePasswordSeen = this.onChangePasswordSeen.bind(this);
  }
  onChangePasswordSeen() {
    this.setState({
      hidePassword: !this.state.hidePassword
    });
  }
  render() {
    const {
      mainContainer,
      title,
      input,
      inputText,
      subContainer,
      showIcon,
      showIconContainer,
      inputContainer,
      forgotPassText
    } = styles;
    const { hidePassword } = this.state;

    return (
      <View style={mainContainer}>
        <Text style={title}>Login</Text>
        <View style={subContainer}>
          <Input hidePassword label="Email" />
          <Input
            hidePassword
            onPressIcon={this.onChangePasswordSeen}
            iconImageUri={"https://png.icons8.com/small/50/cccccc/visible.png"}
            label="Password"
            secureTextEntry={hidePassword}
          />
          <Button title="Login" backgroundColor="#60d4ae" margin={41} />
          <Text style={forgotPassText}>Forgot your password?</Text>
        </View>
      </View>
    );
  }
}

export default Login;
