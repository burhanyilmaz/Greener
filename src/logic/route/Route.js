import React from "react";
import { StackNavigator } from "react-navigation";
import { YellowBox, View, Button, Text } from "react-native";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Welcome, Login, Explore, Product } from "../../sections/App/index";
import Browse from "../../sections/App/container/Browse/Browse";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const navigationOptions = {
  headerTintColor: "#c6cdd7",
  headerTitleStyle: { color: "#f4f4f4" },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0
  }
};

const rightButton = {
  container: {
    paddingRight: 16,
    paddingBottom: 2
  },
  text: {
    color: "#c5ccd6",
    fontSize: 21,
    fontWeight: "bold"
  }
};

const RootStack = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions
    },
    Browse: {
      screen: Browse,
      navigationOptions
    },
    Explore: {
      screen: Explore,
      navigationOptions
    },
    Product: {
      screen: Product,
      navigationOptions: {
        headerTintColor: navigationOptions.headerTintColor,
        headerTitleStyle: navigationOptions.headerTitleStyle,
        headerRight: (
          <View style={rightButton.container}>
            <Text style={rightButton.text}>...</Text>
          </View>
        ),
        headerStyle: navigationOptions.headerStyle
      }
    }
  },
  {
    initialRouteName: "Welcome"
  }
);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
export default Root;
