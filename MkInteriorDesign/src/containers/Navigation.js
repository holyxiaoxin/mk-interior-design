import React, { Component, Platform, Navigator} from 'react-native';
import { Router, initialRoute } from '../config/router';
import DrawerLayout from 'react-native-drawer-layout';
import DrawerList from '../components/DrawerList';

export default class Navigation extends Component {
  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }

    return (
      Platform.OS === 'android' ?
        Navigator.SceneConfigs.FadeAndroid
        :
        // You can swipe left and right to jump back and forth from stack (for ios only)
        Navigator.SceneConfigs.HorizontalSwipeJump
    );
  }

  renderScene(route, navigator) {
    this.router = this.router ? this.router : new Router(navigator);

    if (route.component) {
      const mainPage = React.createElement(
        route.component,
        Object.assign(
          {},
          route.props,
          { router: this.router, navigator: navigator },
          { drawer:
            { openDrawer: this.openDrawer.bind(this), closeDrawer: this.closeDrawer.bind(this) }
          }
        )
      );
      return mainPage;
    }
  }

  render() {
    // renderNavigationView has to present DrawerList component with this.router props.
    // This will be available during this.configureScene from Navigator.
    // It can be retrieve later at runtime.
    return (
      <DrawerLayout
        drawerWidth={300}
        ref={(drawer) => this.drawer = drawer }
        keyboardDismissMode="on-drag"
        renderNavigationView={
          () =>
          <DrawerList
            getRouter={() => this.router}
            closeDrawer={this.closeDrawer.bind(this)}
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

  openDrawer() {
    this.drawer.openDrawer();
  }

  closeDrawer() {
    this.drawer.closeDrawer();
  }
}
