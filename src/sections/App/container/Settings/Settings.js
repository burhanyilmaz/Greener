import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import Avatar from "../../components/Avatar";
import Slider from "../../components/Slider";
import Switch from "../../components/Switch";
import EditableTextInput from "../../components/EditableTextInput";
import styles from "./stylesheet";

const user = {
  image:
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMDM1NzkxN15BMl5BanBnXkFtZTgwOTg0MzMwNDI@._V1_UY256_CR10,0,172,256_AL_.jpg"
};

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      name: "Paul",
      location: "Milan",
      email: "paul.jameson@work.com",
      nameEditable: false,
      locationEditable: false,
      budget: 1000,
      montlyCap: 5000
    };
  }
  onChangeState = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      mainContainer,
      title,
      subContainer,
      avatarContainer,
      shadow,
      border
    } = styles;

    return (
      <ScrollView style={mainContainer}>
        <View style={subContainer}>
          <Text style={title}>Settings</Text>
          <Avatar image={user.image} />
        </View>
        <View style={{ flex: 1 }}>
          <EditableTextInput
            label="Username"
            isEdit
            setValue={this.onChangeState}
            inputName="name"
            inputValue={this.state.name}
            isEditable={this.state.nameEditable}
          />
          <EditableTextInput
            label="Location"
            isEdit
            setValue={this.onChangeState}
            inputName="location"
            inputValue={this.state.location}
            isEditable={this.state.locationEditable}
          />
          <EditableTextInput
            label="E-mail"
            isEdit
            setValue={this.onChangeState}
            inputName="email"
            inputValue={this.state.email}
            isEditable={this.state.emailEditable}
          />
          <View style={border} />
          <Slider
            label="Budget"
            sliderName="budget"
            setSliderValue={this.onChangeState}
            sliderValue={this.state.budget}
          />
          <Slider
            label="Montly Cap"
            sliderName="montlyCap"
            setSliderValue={this.onChangeState}
            sliderValue={this.state.montlyCap}
          />
          <View style={border} />
          <Switch
            label="Notification"
            switchName="notification"
            switchValue={this.state.notification}
            setSwitchValue={this.onChangeState}
          />
          <Switch
            label="Newsletter"
            switchName="newsletter"
            switchValue={this.state.newsletter}
            setSwitchValue={this.onChangeState}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Settings;
