import React, { Navigator, Platform, BackAndroid } from 'react-native';
import ProfilePage from '../containers/ProfilePage';
import BrowsePage from '../containers/BrowsePage';
// import DrawerExamplePage from '../containers/DrawerExamplePage';

class Router {
  constructor(navigator) {
    this.navigator = navigator;
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        if (this.navigator.getCurrentRoutes().length > 1) {
          this.pop();
          return true;
        }
        return false;
      });
    }
  }

  push(props, route) {
    let routesList = this.navigator.getCurrentRoutes();
    let nextIndex = routesList[routesList.length - 1].index + 1;
    route.props = props;
    route.index = nextIndex;
    this.navigator.push(route);
  }

  pop() {
    this.navigator.pop();
  }

  toProfilePage(props) {
    this.push(props, {
      component: ProfilePage,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
    });
  }

  toBrowsePage(props) {
    this.push(props, {
      component: BrowsePage,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
    });
  }

  // toDrawerExamplePage(props) {
  //   this.push(props, {
  //     component: DrawerExamplePage,
  //     sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
  //   })
  // }

  // replaceWithHome(props) {
  //   let homeRoute = {
  //     index: 0,
  //     props: props,
  //     component: ProjectsCompaniesPage,
  //     sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
  //   }
  //   this.navigator.immediatelyResetRouteStack([homeRoute])
  // }

  // replaceWithLandingPage() {
  //   this.navigator.popToTop();
  // }

}

// Change this for easier debugging
const initialRoute = {
  index: 0,
  component: ProfilePage
}

module.exports = { Router, initialRoute }
