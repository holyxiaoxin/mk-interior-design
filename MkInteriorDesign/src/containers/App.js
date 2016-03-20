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
    this.state = { initialRender: false };
  }

  componentDidMount() {
    if(!this.state.initialRender) {
      this.setState(Object.assign(this.state, { initialRender: true }));
    }
  }

  renderScene(route, navigator) {
    if (!this.router) {
      this.router = new Router(navigator);
    }

    if (route.component) {
      const mainPage = React.createElement(route.component, Object.assign({}, route.props, {router: this.router, navigator: navigator}));
      return (mainPage)
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
      // renderNavigationView has to present DrawerList component with this.router props.
      // However, during initial render, this.router has yet been created.
      // After initial render, this component will re-render with this.router
      <DrawerLayout
        drawerWidth={300}
        ref={(drawer) => { return this.drawer = drawer }}
        keyboardDismissMode="on-drag"
        renderNavigationView={
          () =>
          <DrawerList
            router={this.router}
            closeDrawer={() => (this.drawer || {}).closeDrawer()}
          />
        }
      >
        <Navigator
          ref="navigator"
          initialRoute={initialRoute}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderScene.bind(this)}
        />
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
