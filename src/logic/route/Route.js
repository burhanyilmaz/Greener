import React from 'react';
import { StackNavigator } from 'react-navigation';
import { YellowBox, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Welcome, Login , Explore} from '../../sections/App/index';
import Browse from '../../sections/App/container/Browse/Browse';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerTintColor: '#c6cdd7',
        headerTitleStyle: { color: '#f4f4f4' },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        }
      },
    },
    Browse: {
      screen: Browse,
      navigationOptions: {
        headerTintColor: '#c6cdd7',
        headerTitleStyle: { color: '#f4f4f4' },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        }
      },
    },
    Explore: {
      screen: Explore,
      navigationOptions: {
        headerTintColor: '#c6cdd7',
        headerTitleStyle: { color: '#f4f4f4' },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        }
      },
    },
  },
  {
    initialRouteName: 'Welcome',
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