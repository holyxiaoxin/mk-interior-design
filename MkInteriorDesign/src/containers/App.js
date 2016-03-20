'use strict';

import Drawer from '../components/Drawer';
import DrawerList from '../components/DrawerList';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  closeDrawer() {
    this.refs.drawer.refs.drawer.close();
  }

  openDrawer() {
    this.refs.drawer.refs.drawer.open();
  }

  render() {
    const mainPage = (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This is shared between ios and android
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );

    return (
      <Drawer
        ref="drawer"
        main={mainPage}
        openDrawer={this.openDrawer}
        closeDrawer={this.closeDrawer}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
