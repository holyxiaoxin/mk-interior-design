import React, { Component,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import hamburgerIcon from '../assets/images/hamburger-nav.png';

export default class NavBar extends Component {
  render() {
    const { title, drawer: { openDrawer, closeDrawer } } = this.props;

    const leftButtonConfig = (
      <TouchableHighlight onPress={openDrawer}>
        <Image
          style={styles.hamburgerIcon}
          source={hamburgerIcon}
        />
      </TouchableHighlight>
    );

    const rightButtonConfig = (
      <TouchableHighlight onPress={() => alert('stubbed next')}>
        <Text>Next</Text>
      </TouchableHighlight>
    );

    const titleConfig = (
        <Text style={styles.title}>{title}</Text>
    );

    return (
      <View style={styles.navBar}>
        <View>{leftButtonConfig}</View>
        <View>{titleConfig}</View>
        <View>{rightButtonConfig}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  title: {
    fontSize: 16,
  },
  hamburgerIcon: {
    width: 20,
    height: 20
  }
});
