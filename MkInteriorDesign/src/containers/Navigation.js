import React, { Component , Navigator} from 'react-native';
import { Router, initialRoute } from '../config/router';
import DrawerLayout from 'react-native-drawer-layout';
import DrawerList from '../components/DrawerList';
import { mapDispatchToProps, connect } from '../util/Connector';

class Navigation extends Component {
  componentDidMount() {
    if(!this.props.state.get('initialRender')) {
      this.props.actions.setInitialRender();
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

const mapStateToProps = (state) => {
  return { state: state.util };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
