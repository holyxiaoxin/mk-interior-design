import React, { Component } from 'react-native';
import DrawerList from './DrawerList';
import Drawer from 'react-native-drawer';

export default class CustomDrawer extends Component {
  render() {
    return (
      <Drawer
        ref="drawer"
        type="overlay"
        content={<DrawerList
          router={this.props.router}
          openDrawer={this.props.openDrawer}
          closeDrawer={this.props.closeDrawer}
          />}
          tapToClose={true}
          openDrawerOffset={.25}
          panOpenMask={.1}
          panCloseMask={1}
          negotiatePan={true}
          styles={{
            drawer: {borderRightWidth: 1, borderRightColor: '#eee', shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
          }}
          tweenHandler={(ratio) =>
            ({main: { opacity: (1.2-ratio/(1.2)) }})
          }
          >
          {this.props.main}
        </Drawer>
    )
  }
}
