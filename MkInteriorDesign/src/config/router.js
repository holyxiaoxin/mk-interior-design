import React, { Navigator, Platform, BackAndroid } from 'react-native';
import LoginPage from '../containers/LoginPage';
import ProfilePage from '../containers/ProfilePage';
import BrowsePage from '../containers/BrowsePage';
import CounterPage from '../containers/CounterPage';
import ListingPage from '../containers/ListingPage';
import PickRenovatorPage from '../containers/PickRenovatorPage';

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

  toLoginPage(props) {
    this.push(props, { component: LoginPage });
  }

  toProfilePage(props) {
    this.push(props, { component: ProfilePage });
  }

  // To use this in Component:
  // onPress={() => this.props.router.toBrowsePage()}
  // do not bind `this` in component to this function
  toBrowsePage(props) {
    this.push(props, { component: BrowsePage });
  }

  toCounterPage(props) {
    this.push(props, { component: CounterPage });
  }

  toListingPage(props) {
    this.push(props, { component: ListingPage });
  }

  // replaceWithHome(props) {
  //   let homeRoute = {
  //     index: 0,
  //     props: props,
  //     component: ProjectsCompaniesPage,
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
  // component: LoginPage
  component: BrowsePage
  //component: PickRenovatorPage
}

module.exports = { Router, initialRoute };
