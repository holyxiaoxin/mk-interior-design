import React, { Component , Navigator} from 'react-native';
import { Router, initialRoute } from '../config/router';
import DrawerLayout from 'react-native-drawer-layout';
import DrawerList from '../components/DrawerList';

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = { initialRender: false };
  }

  componentDidMount() {
    if(!this.state.initialRender) {
      this.setState(Object.assign(this.state, { initialRender: true }));
    }
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromBottomAndroid;
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

  render() {
    // renderNavigationView has to present DrawerList component with this.router props.
    // However, during initial render, this.router has yet been created.
    // After initial render, this component will re-render with this.router
    return (
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
          initialRoute={initialRoute}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderScene.bind(this)}
        />
      </DrawerLayout>
    )
  }
}
