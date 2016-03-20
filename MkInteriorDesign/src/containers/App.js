'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import DrawerList from '../components/DrawerList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const navigationView = (
     <View style={[styles.container, {backgroundColor: '#fff'}]}>
       <Text>Hello there!</Text>
       <TouchableHighlight onPress={() => this.drawer.closeDrawer()}>
         <Text>Close drawer</Text>
       </TouchableHighlight>
     </View>
   );

    // const mainPage = (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       This is shared between ios and android
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Shake or press menu button for dev menu
    //     </Text>
    //   </View>
    // );

    // renderNavigationView={() => navigationView}

    return (
      <DrawerLayout
        onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
        onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
        drawerWidth={300}
        ref={(drawer) => { return this.drawer = drawer  }}
        keyboardDismissMode="on-drag"
        renderNavigationView={() => <DrawerList/>}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Content!</Text>
          <Text>{this.state.drawerStateChangedOutput}</Text>
          <Text>{this.state.drawerSlideOutput}</Text>
          <TouchableHighlight onPress={() => this.drawer.openDrawer()}>
            <Text>Open drawer</Text>
          </TouchableHighlight>
          <TextInput style={styles.inputField} />
        </View>
      </DrawerLayout>
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
