import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const Home = () => {
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
}

const About = () => {
  <View style={styles.container}>
    <Text>About</Text>
  </View>
}

const RouteConfig = {
  Home: { screen: Home },
  About: { screen: About }
}

const Routes = StackNavigator(RouteConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
