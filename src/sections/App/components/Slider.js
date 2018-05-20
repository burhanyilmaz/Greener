import React from "react";
import { View, Text, Image, Slider } from "react-native";
import styles from "./stylesheet";

export default props => {
  const { label, sliderValue, setSliderValue, sliderName } = props;
  const { slider } = styles;

  return (
    <View style={slider._}>
      <View style={slider.label._}>
        <Text style={slider.label.text} >{label}</Text>
      </View>
      <Slider
        style={[
          slider.slider,
          { left: sliderValue < 160 ? -5 : -14 }
        ]}
        minimumTrackTintColor="#009688"
        value={sliderValue}
        thumbTintColor="#60d4ae"
        maximumValue={10000}
        maximumTrackTintColor="rgba(0,0,0,0.3)"
        minimumTrackTintColor="#60d4ae"
        minimumValue={0}
        onValueChange={value => setSliderValue(sliderName, value)}
      />
      <View style={slider.price._}>
        <Text style={slider.price.text}>${Math.round(sliderValue)}</Text>
      </View>
    </View>
  );
};
