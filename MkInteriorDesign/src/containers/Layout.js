import React, { Component, Dimensions, StyleSheet, View, Text, TouchableHighlight, ListView, Image } from 'react-native';
import NavBar from '../components/NavBar';
import { THEME_COLOR, NAVBAR_TOPBAR_HEIGHT, IS_ANDROID } from '../config/constants';

export default class Layout extends Component {
  render () {
    const {
      title,
      drawer,
      renderNavBar = true,
      backgroundColor = THEME_COLOR.DARK_WHITE
    } = this.props;

    if (renderNavBar && typeof drawer === 'undefined') {
      throw 'You need to pass in drawer props for Layout Component if you want to render NavBar.';
    }

    return (
      <View style={[styles.layout, { backgroundColor }]}>
          {
            renderNavBar ? <NavBar drawer={drawer} title={title}/>
            : <View style={{marginTop: IS_ANDROID ? 0 : NAVBAR_TOPBAR_HEIGHT}}></View>
          }
          <View style={styles.container}>
            { this.props.children }
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    layout: {
      flex: 1
    },
    container: {
      flex: 1,
    }
})
