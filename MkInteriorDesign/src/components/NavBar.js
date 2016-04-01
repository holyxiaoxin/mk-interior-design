import React, { Component,
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import hamburgerIcon from '../assets/images/hamburger-nav.png';
import { THEME_COLOR, FONT } from '../config/constants'
const { width, height } = Dimensions.get('window');

export default class NavBar extends Component {
  render() {
    const { title, drawer: { openDrawer, closeDrawer } } = this.props;

    const leftButtonConfig = (
      <View style={styles.sharedMargin}>
        <TouchableWithoutFeedback onPress={openDrawer}>
          <Image
            style={styles.hamburgerIcon}
            source={hamburgerIcon}
          />
        </TouchableWithoutFeedback>
      </View>

    );

    const rightButtonConfig = (
      <View style={styles.sharedMargin}>
        <TouchableWithoutFeedback onPress={() => alert('stubbed next')}>
          <Text style={styles.rightText}>Next (1)</Text>
        </TouchableWithoutFeedback>
      </View>

    );

    const titleConfig = (
        <Text style={[styles.title, styles.sharedMargin]}>{title}</Text>
    );

    return (
      <View stlye={styles.container}>
        <View style={styles.navBar}>
          <View style={{flex: 1}}>{leftButtonConfig}</View>
          <View style={{flex: 3}}>{titleConfig}</View>
          <View style={{flex: 1}}>{rightButtonConfig}</View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    width: width,
    // justifyContent: 'space-between',
    backgroundColor: THEME_COLOR.DARK_GREY
  },
  hamburgerIcon: {
    width: 20,
    height: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: THEME_COLOR.LIGHT_GREY,
    fontFamily: FONT

  },
  rightText: {
    color: THEME_COLOR.MIDDLE_GREEN
  },
  sharedMargin: {
    margin: 16
  }

});
