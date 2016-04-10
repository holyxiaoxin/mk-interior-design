import React, { Component,
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import { mapDispatchToProps, connect } from '../util/connector';
import { THEME_COLOR, FONT, NAVBAR_HEIGHT , NAVBAR_TOPBAR_HEIGHT } from '../config/constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');

class NavBar extends Component {
  constructor() {
    super();
    this.state= {};
  }

  translateDown() {
    this.setState({translateY: (this.state.translateY || 0) + 15});
  }

  translateUp() {
    this.setState({translateY: (this.state.translateY || 0) - 15});
  }

  componentDidMount() {
    if (this.props.state.get('showNavbarHint')) {
      const intervals = [];
      const multiplier = 1200;
      const count = 4;
      for (var i=0; i< count; i++) {
        intervals.push(i*multiplier);
      }
      intervals.forEach((duration, index) => {
        setTimeout(() => {
          index % 2 === 0 ? this.translateUp() : this.translateDown();
        }, duration);
      });
      this.props.actions.shownNavbarHint();
    }
  }

  render() {
    const { title, drawer: { openDrawer, closeDrawer } } = this.props;

    const leftButtonConfig = (
      <View style={styles.sharedMargin}>
        <TouchableWithoutFeedback onPress={openDrawer}>
          <Animatable.View
            transition="translateY"
            easing="ease-in-out"
            style={{transform: [{translateY: this.state.translateY || 0}]}}
            >
            <Icon name="bars" size={24} style={{marginLeft: 5}} color={THEME_COLOR.LIGHT_GREY} />
          </Animatable.View>
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

const mapStateToProps = (state) => {
  return { state: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

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
