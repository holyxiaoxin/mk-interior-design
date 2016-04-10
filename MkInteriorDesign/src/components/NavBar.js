import React, { Component,
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import { THEME_COLOR, FONT, NAVBAR_HEIGHT , NAVBAR_TOPBAR_HEIGHT } from '../config/constants'
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

export default class NavBar extends Component {
  render() {
    const { title, drawer: { openDrawer, closeDrawer } } = this.props;

    const leftButtonConfig = (
      <View style={styles.sharedMargin}>
        <TouchableWithoutFeedback onPress={openDrawer}>
          <Icon name="bars" size={24} style={{marginLeft: 5}} color={THEME_COLOR.LIGHT_GREY} />
        </TouchableWithoutFeedback>
      </View>

    );

    const rightButtonConfig = (
      <View style={styles.sharedMargin}>
        <TouchableWithoutFeedback onPress={() => console.log('stubbed next')}>
          <Text style={styles.rightText}>Next (1)</Text>
        </TouchableWithoutFeedback>
      </View>

    );

    const titleConfig = (
        <Text style={[styles.title, styles.sharedMargin]}>{title}</Text>
    );

    return (
      <View style={styles.container}>
        <View style={Platform.OS === 'ios' ? styles.topBar : {}}></View>
        <View style={styles.navBar}>
          <View style={{flex: 0}}>{leftButtonConfig}</View>
          <View style={{flex: 1}}>{titleConfig}</View>
          <View style={{flex: 0}}>{rightButtonConfig}</View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  topBar: {
    backgroundColor: THEME_COLOR.DARKER_GREY,
    height: NAVBAR_TOPBAR_HEIGHT,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: NAVBAR_HEIGHT,
    width: width,
    backgroundColor: THEME_COLOR.DARK_GREY,
  },
  hamburgerIcon: {
    width: 20,
    height: 20
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: THEME_COLOR.LIGHT_GREY,
    fontFamily: FONT,
    fontWeight: "600"
},
  rightText: {
    fontSize: 14,
    color: THEME_COLOR.MIDDLE_GREEN,
    fontFamily: FONT,
    fontWeight: "600"
  },
  sharedMargin: {
    // To change the left and right navbar margin,
    // do it here:
    marginLeft: 10,
    marginRight: 10,
  }
});
