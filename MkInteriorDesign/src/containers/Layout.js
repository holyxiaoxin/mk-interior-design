import React, { Component, Dimensions, StyleSheet, View, Text, TouchableHighlight, ListView, Image } from 'react-native';
import NavBar from '../components/NavBar';
import { THEME_COLOR } from '../config/constants';

export default class Layout extends Component {
  render () {
    const title = this.props.title;
    const drawer = this.props.drawer;

    return (
      <View style={styles.layout}>
          <NavBar drawer={drawer} title={title}/>
          <View style={styles.container}>
            { this.props.children }
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    layout: {
      flex: 1,
      backgroundColor: THEME_COLOR.DARK_WHITE
    },
    container: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10
    }
})
