'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Navigator
} from 'react-native';
import { Router, initialRoute } from '../config/router';
import DrawerLayout from 'react-native-drawer-layout';
import DrawerList from '../components/DrawerList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderScene(route, navigator) {
    this.router = this.router || new Router(navigator)
    if (route.component) {
      const mainPage = React.createElement(route.component, Object.assign({}, route.props, {router: this.router, navigator: navigator}));
      return (
        <DrawerLayout
          drawerWidth={300}
          ref={(drawer) => { return this.drawer = drawer  }}
          keyboardDismissMode="on-drag"
          renderNavigationView={() => <DrawerList router={this.router}/>}
        >
        { mainPage }
        </DrawerLayout>
      )
    }
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromBottomAndroid;
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={initialRoute}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
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
